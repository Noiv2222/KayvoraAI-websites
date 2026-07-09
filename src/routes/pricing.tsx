import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Lock, CreditCard } from "lucide-react";
import { Reveal, RevealStagger, revealItem } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Kayvora AI" },
      { name: "description", content: "Simple, transparent pricing for AI Voice Agents, Chatbots, Websites, Automation, SEO, and Funnels — one-time setup with optional monthly care plans." },
      { property: "og:title", content: "Pricing — Kayvora AI" },
      { property: "og:description", content: "One-time setup from $299, with optional monthly maintenance plans." },
    ],
  }),
});

type Card = {
  name: string;
  price: string;
  monthly?: string;
  monthlyNote?: string;
  desc?: string;
  features: string[];
  delivery?: string;
  cta?: string;
  ctaTo?: string;
  popular?: boolean;
  custom?: boolean;
};

const websites: Card[] = [
  {
    name: "Starter Website", price: "$499",
    monthly: "$49/mo", monthlyNote: "Hosting, SSL renewal, uptime & security patches",
    desc: "Perfect for startups and local businesses.",
    features: ["5-page responsive website", "Modern UI/UX", "Contact form", "Basic SEO", "Google Maps integration", "Mobile optimization", "SSL setup", "2 revisions"],
    delivery: "5–7 days",
  },
  {
    name: "Business Website", price: "$999",
    monthly: "$79/mo", monthlyNote: "Hosting, SSL renewal, uptime, security patches & backups",
    features: ["Up to 10 pages", "Premium design", "Blog setup", "Basic animations", "Speed optimization", "On-page SEO", "Analytics setup", "Contact forms", "3 revisions"],
    delivery: "7–10 days",
  },
];

const aiServices: Card[] = [
  { name: "AI Chat Agent", price: "starting at $799", monthly: "$89/mo", monthlyNote: "Monitoring, FAQ updates & API costs", features: ["Website chatbot", "FAQ automation", "Lead capture", "Appointment booking", "CRM integration", "Knowledge base", "Deployment"] },
  { name: "AI Voice Agent", price: "starting at $1,499", monthly: "$179/mo", monthlyNote: "Call monitoring, script tuning & call costs", features: ["AI receptionist", "24/7 call answering", "Appointment booking", "Lead qualification", "CRM integration", "Call summaries", "Custom scripts"] },
  { name: "AI Automation", price: "starting at $999", monthly: "$129/mo", monthlyNote: "Workflow monitoring & fixes when connected apps change", features: ["Workflow automation", "CRM automation", "Email automation", "Lead routing", "Calendar integration", "Internal notifications"] },
  { name: "AI SEO", price: "$699", features: ["Technical SEO audit", "Keyword research", "On-page SEO", "Metadata optimization", "Internal linking", "Google Business Profile", "SEO action plan"] },
  { name: "AI Sales Funnel", price: "$999", monthly: "$79/mo", monthlyNote: "Conversion monitoring & email deliverability upkeep", features: ["Landing page", "Lead magnet integration", "Email sequence", "CRM connection", "Conversion optimization", "Analytics"] },
  { name: "AI Appointment Booking", price: "$599", monthly: "$49/mo", monthlyNote: "Calendar sync monitoring & fixes", features: ["Calendar setup", "Automated reminders", "Lead forms", "CRM integration", "Confirmation emails"] },
  { name: "Google Business Profile", price: "$299", features: ["Profile optimization", "Service setup", "Business description", "Categories", "Images", "SEO optimization"] },
];

const bundles: Card[] = [
  {
    name: "AI Business Starter Package", price: "$2,499",
    monthly: "$199/mo", monthlyNote: "Hosting, monitoring, updates & support",
    features: ["Business Website", "AI Chat Agent", "Basic Automation", "Local SEO", "Google Business Profile", "Analytics"],
  },
  {
    name: "AI Growth Package", price: "$4,999", popular: true,
    monthly: "$399/mo", monthlyNote: "Priority support, model tuning & monthly reporting",
    features: ["Premium Website", "AI Voice Agent", "AI Chat Agent", "CRM Automation", "AI SEO", "Sales Funnel", "Google Analytics Dashboard"],
  },
  {
    name: "Enterprise AI Transformation", price: "Custom Quote", custom: true,
    monthly: "From $799/mo", monthlyNote: "Dedicated support & proactive optimization",
    features: ["Multiple AI agents", "CRM integrations", "Internal automations", "Voice + chat systems", "API integrations", "Multi-location support", "Dedicated implementation"],
    cta: "Get a Custom Quote",
  },
];

const addons = [
  ["Additional Website Page", "$75"],
  ["Extra AI Workflow", "$150"],
  ["CRM Integration", "$250"],
  ["WhatsApp Integration", "$199"],
  ["SMS Integration", "$199"],
  ["Email Marketing Setup", "$299"],
  ["Blog Migration", "$250"],
  ["Landing Page", "$299"],
  ["Custom Dashboard", "$499"],
  ["Training Session", "$199"],
];

function PriceCard({ c }: { c: Card }) {
  return (
    <motion.div variants={revealItem} className="h-full">
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
          c.popular
            ? "gradient-border shadow-[0_20px_80px_-20px_rgba(124,58,237,0.55)]"
            : "gradient-border"
        }`}
      >
        {c.popular && (
          <div className="absolute -right-12 top-6 rotate-45 bg-gradient-brand px-14 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
            Most Popular
          </div>
        )}
        <h3 className="text-xl font-semibold text-white">{c.name}</h3>
        {c.desc && <p className="mt-1 text-sm text-white/60">{c.desc}</p>}
        <div className="mt-4">
          <span className="font-display text-4xl font-bold text-gradient-brand">{c.price}</span>
        </div>
        {c.monthly && (
          <div className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
            <span className="font-semibold text-brand-cyan">+ {c.monthly}</span>
            <span>maintenance</span>
          </div>
        )}
        {c.monthlyNote && (
          <p className="mt-1 text-xs text-white/45">{c.monthlyNote}</p>
        )}
        <ul className="mt-5 flex-1 space-y-2">
          {c.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-white/80">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-green" />
              {f}
            </li>
          ))}
        </ul>
        {c.delivery && (
          <p className="mt-4 text-xs text-white/50">Delivery: {c.delivery}</p>
        )}
        <Link
          to={c.ctaTo ?? "/contact"}
          className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
            c.popular || c.custom
              ? "bg-gradient-brand text-white shadow-[0_0_25px_-4px_rgba(37,99,235,0.7)] hover:scale-[1.03]"
              : "border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.06]"
          }`}
        >
          {c.cta ?? "Get Started"} <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

function PricingPage() {
  const [view, setView] = useState<"cards" | "table">("cards");
  return (
    <div className="relative">
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Particles density={40} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.2),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
              <CheckCircle2 size={12} /> One-time setup · Optional monthly care plans
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">
              Simple, <span className="text-gradient-brand">transparent</span> pricing
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Choose the AI solution that fits your business today, with room to
              grow tomorrow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="relative pb-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="glass flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl px-6 py-4 text-xs text-white/70">
              <span className="flex items-center gap-2"><Lock size={14} className="text-brand-green" /> Secure checkout</span>
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-brand-green" /> SSL encrypted</span>
              <span className="flex items-center gap-2"><CreditCard size={14} className="text-brand-cyan" /> Visa · Mastercard · Amex · PayPal · Stripe</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* View toggle */}
      <section className="relative pb-4 pt-6">
        <div className="mx-auto flex max-w-5xl justify-center px-4 sm:px-6">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            {(["cards", "table"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`rounded-full px-5 py-1.5 text-xs font-semibold transition-all ${
                  view === v
                    ? "bg-gradient-brand text-white shadow-[0_0_20px_-6px_rgba(37,99,235,0.7)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {v === "cards" ? "Card view" : "Compare packages"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {view === "table" ? <ComparisonTable /> : <CardsView />}

      {/* Add-ons */}
      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">Optional Add-ons</h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <tbody>
                  {addons.map(([name, price], i) => (
                    <tr
                      key={name}
                      className={`${i % 2 === 0 ? "bg-white/[0.02]" : ""} border-b border-white/5 last:border-b-0`}
                    >
                      <td className="px-5 py-3 text-white/85">{name}</td>
                      <td className="px-5 py-3 text-right font-semibold text-brand-cyan">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24 pt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="gradient-border rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Need something <span className="text-gradient-brand">custom?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/70">
                Every business is different. Book a free discovery call, and
                we'll design a solution tailored to your goals.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(37,99,235,0.7)] hover:scale-[1.03] transition-transform"
              >
                Get a Custom Quote <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function CardsView() {
  return (
    <>
      {/* Bundles first */}
      <section className="relative pb-16 pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              <Star size={18} className="mr-2 inline text-brand-cyan" />
              Bundle Packages
            </h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bundles.map((b) => <PriceCard key={b.name} c={b} />)}
          </RevealStagger>
        </div>
      </section>

      {/* Websites */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">Websites</h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2">
            {websites.map((w) => <PriceCard key={w.name} c={w} />)}
          </RevealStagger>
        </div>
      </section>

      {/* AI Services */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">AI Services</h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiServices.map((s) => <PriceCard key={s.name} c={s} />)}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}

function ComparisonTable() {
  const rows = [
    ...bundles.map((b) => ({ ...b, group: "Bundle" as const })),
    ...websites.map((w) => ({ ...w, group: "Website" as const })),
    ...aiServices.map((s) => ({ ...s, group: "AI Service" as const })),
  ];
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm">
                <thead className="bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/60">
                  <tr>
                    <th className="px-4 py-3">Package</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Setup</th>
                    <th className="px-4 py-3">Monthly</th>
                    <th className="px-4 py-3">Includes</th>
                    <th className="px-4 py-3">Delivery</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={r.name}
                      className={`${i % 2 === 0 ? "bg-white/[0.015]" : ""} border-t border-white/5 align-top ${r.popular ? "bg-gradient-to-r from-brand-blue/10 to-brand-purple/10" : ""}`}
                    >
                      <td className="px-4 py-3 font-semibold text-white">
                        {r.name}
                        {r.popular && (
                          <span className="ml-2 rounded-full bg-gradient-brand px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                            Popular
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-white/60">{r.group}</td>
                      <td className="px-4 py-3 font-semibold text-brand-cyan">{r.price}</td>
                      <td className="px-4 py-3 text-white/70">{r.monthly ?? "—"}</td>
                      <td className="px-4 py-3 text-white/75">
                        {r.features.slice(0, 4).join(" · ")}
                        {r.features.length > 4 && ` +${r.features.length - 4} more`}
                      </td>
                      <td className="px-4 py-3 text-white/60">{r.delivery ?? "—"}</td>
                      <td className="px-4 py-3">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10"
                        >
                          {r.cta ?? "Start"} <ArrowRight size={12} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
