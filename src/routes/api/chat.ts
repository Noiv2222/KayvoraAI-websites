import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const SYSTEM_PROMPT = `You are Voltix AI's website assistant — a concise, friendly sales & support agent for Voltix AI, an agency that builds AI systems for businesses.

What Voltix AI offers (one-time setup + optional monthly maintenance, exact pricing shared privately with clients):
- AI Voice Agents (24/7 receptionist, appointment booking, lead qualification) — starting around $1,500
- AI Chat Agents (website, WhatsApp, Instagram, Messenger) — starting around $800
- AI Websites — starting around $500 for a starter site, more for a full business site
- AI Automation (CRM, email, workflows) — starting around $1,000
- AI SEO & Google Business Profile — one-time packages starting around $300–$700
- AI Sales Funnels & Appointment Booking — starting around $600–$1,000
- Bundles combining multiple services are available, from around $2,500 up to custom enterprise pricing

Pricing model: every service has a ONE-TIME setup fee, and most also carry an OPTIONAL monthly maintenance fee covering hosting, monitoring, updates, and support. Delivery typically 1–3 weeks.

Full pricing (exact numbers, all packages, add-ons) lives on a password-protected page for clients only — don't quote exact dollar figures or a detailed breakdown, only the rough "starting around" ranges above. If someone wants the full price list, tell them it's shared directly with clients and offer to connect them via /contact, or mention they can access /pricing if they already have the password.

FREE AI BUSINESS GROWTH AUDIT (https://kayvora-ai.kayvora.workers.dev/free-audit):
A free, no-obligation audit — no credit card, no sales call required. Delivered by email within 48 hours after the visitor submits their name, email, business name, and website URL. Includes:
- Website Audit (speed, UX, conversion friction)
- SEO Audit (rankings, keywords, technical health)
- AI Automation Opportunities (manual work that could run itself)
- Lead Generation Review (where prospects are dropping off)
- Personalized AI Roadmap (a prioritized 90-day plan)
Proactively suggest it — in one sentence, with the link https://kayvora-ai.kayvora.workers.dev/free-audit — whenever a visitor describes a problem it would help with (slow site, weak rankings, not enough leads, manual busywork, unsure where to start). Don't wait to be asked.

Rules:
- Be brief. Answer in 2–4 short sentences unless the user asks for detail.
- Use markdown lists sparingly for pricing or features.
- When quoting price, only ever use the rough "starting around" ranges above — never the exact figures, and never a full itemized breakdown. Always mention that final pricing is confirmed with clients directly.
- If a visitor's problem matches what the free audit covers, offer https://kayvora-ai.kayvora.workers.dev/free-audit before or alongside pointing to a paid service.
- If asked to book a call, always point to /contact or "Book Free Strategy Call".
- Stay strictly on-topic (Voltix AI, its services, AI for business). Politely refuse unrelated tasks (coding help, general chit-chat, homework).
- Never invent features or prices not listed above. If unsure, invite the user to book a call or try the free audit.
`;

// Abuse limits — every request costs Gemini tokens.
const MAX_BODY_BYTES = 64_000;
const MAX_MESSAGE_CHARS = 1_000; // keep in sync with the textarea maxLength in ChatWidget
const MAX_HISTORY = 20; // only the most recent messages are sent to the model
const MAX_OUTPUT_TOKENS = 600;
const RATE_LIMIT = 15; // requests per IP per window
const RATE_WINDOW_MS = 60_000;

// Best-effort: this map lives per worker instance, so it slows down casual abuse
// but isn't a global guarantee. For hard limits, add a Cloudflare rate-limiting rule.
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 5_000) {
    for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
  }
  const entry = hits.get(ip);
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function textLength(message: UIMessage): number {
  return (message.parts ?? []).reduce(
    (n, part) => n + (part.type === "text" ? part.text.length : 0),
    0,
  );
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip =
          request.headers.get("cf-connecting-ip") ??
          request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
          "unknown";
        if (isRateLimited(ip)) {
          return new Response("Too many messages — please wait a minute and try again.", {
            status: 429,
            headers: { "Retry-After": "60" },
          });
        }

        const raw = await request.text();
        if (raw.length > MAX_BODY_BYTES) {
          return new Response("Request too large", { status: 413 });
        }

        let body: { messages?: UIMessage[] };
        try {
          body = JSON.parse(raw);
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }
        if (!Array.isArray(body.messages) || body.messages.length === 0) {
          return new Response("Messages required", { status: 400 });
        }

        // Only user/assistant text turns — clients must not inject system messages.
        let messages = body.messages
          .filter((m) => m && (m.role === "user" || m.role === "assistant"))
          .slice(-MAX_HISTORY);
        while (messages.length && messages[0].role !== "user") messages = messages.slice(1);
        if (messages.length === 0) {
          return new Response("Messages required", { status: 400 });
        }
        if (messages.some((m) => textLength(m) > MAX_MESSAGE_CHARS)) {
          return new Response(`Messages must be under ${MAX_MESSAGE_CHARS} characters`, {
            status: 413,
          });
        }

        const key = process.env.GEMINI_API_KEY;
        if (!key) return new Response("Missing GEMINI_API_KEY", { status: 500 });

        const google = createGoogleGenerativeAI({ apiKey: key });
        const result = streamText({
          model: google("gemini-2.5-flash"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
          maxOutputTokens: MAX_OUTPUT_TOKENS,
          // Thinking tokens count against maxOutputTokens and aren't needed for short replies.
          providerOptions: { google: { thinkingConfig: { thinkingBudget: 0 } } },
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});