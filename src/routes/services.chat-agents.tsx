import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/chat-agents")({
  component: () => (
    <ServiceDetail
      icon={MessageSquare}
      eyebrow="AI Chat Agents"
      headline="A Chat Agent That Never Sleeps, Never Misses a Message."
      subheadline="Website, WhatsApp, Instagram, Messenger — one AI that captures, qualifies, and hands off to your team."
      pains={[
        "Slow chat responses lose leads within the first 60 seconds.",
        "DMs and Messenger threads pile up faster than the team can reply.",
        "Support tickets drown the team in the same 20 questions on repeat.",
      ]}
      features={[
        "Website chatbot",
        "WhatsApp AI",
        "Instagram AI",
        "Facebook Messenger",
        "Live handoff to human",
        "Customer support automation",
      ]}
      steps={[
        { title: "Scope", desc: "Define channels, tone, escalation rules." },
        { title: "Train", desc: "Feed your product, FAQs, and playbooks." },
        { title: "Deploy", desc: "Install on site and connect messaging channels." },
        { title: "Iterate", desc: "Refine using real conversation data." },
      ]}
      bestFor={["E-commerce", "Restaurants", "Gyms", "Marketing Agencies"]}
      faqs={[
        { q: "Which platforms are supported?", a: "Website widget, WhatsApp Business, Instagram DMs, Facebook Messenger, and most helpdesks." },
        { q: "Can it book appointments?", a: "Yes — full calendar integration with reminders and confirmations." },
        { q: "What about privacy?", a: "All conversations stay in your infrastructure. We follow GDPR-aligned data handling." },
        { q: "How is a human handoff triggered?", a: "By keyword, sentiment, high-value intent, or on user request — with full context passed to your team." },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "AI Chat Agents — Kayvora AI" },
      { name: "description", content: "AI chat for your website, WhatsApp, Instagram, and Messenger — capture, qualify, and route every message." },
      { property: "og:title", content: "AI Chat Agents — Kayvora AI" },
      { property: "og:description", content: "A chat agent that never sleeps, never misses a message." },
    ],
  }),
});