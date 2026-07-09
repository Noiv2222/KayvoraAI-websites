import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bot, MessageSquare, Globe, Zap, TrendingUp, Target,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { Reveal, RevealStagger, revealItem } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Kayvora AI" },
      { name: "description", content: "AI Voice Agents, Chatbots, Websites, Automation, SEO, and Funnels — full-stack AI systems for growing businesses." },
      { property: "og:title", content: "Services — Kayvora AI" },
      { property: "og:description", content: "Six AI services designed to help you generate more leads and scale faster." },
    ],
  }),
});

const services = [
  {
    icon: Bot, id: "voice", slug: "voice-agents",
    title: "AI Voice Agents",
    tagline: "Never miss another call — or another lead.",
    features: ["24/7 AI receptionist", "Appointment booking", "Lead qualification", "CRM updates", "Call transcription & summaries", "Multi-language support"],
    flow: ["Call comes in", "AI answers", "Qualifies lead", "Books appointment", "Updates CRM"],
  },
  {
    icon: MessageSquare, id: "chat", slug: "chat-agents",
    title: "AI Chat Agents",
    tagline: "A chat agent that never sleeps, never misses a message.",
    features: ["Website chatbot", "WhatsApp AI", "Instagram AI", "Facebook Messenger", "Live handoff to human", "Support automation"],
    flow: ["Message received", "AI responds", "Captures info", "Escalates or books", "Follow-up sent"],
  },
  {
    icon: Globe, id: "websites", slug: "websites",
    title: "AI Websites",
    tagline: "Websites built to convert, not just look good.",
    features: ["Landing pages", "Full business websites", "High-converting design", "SEO-optimized structure", "Mobile-first build", "Fast load times"],
    flow: ["Discovery", "Design", "Build", "Launch", "Optimize"],
  },
  {
    icon: Zap, id: "automation", slug: "automation",
    title: "AI Automation",
    tagline: "Put your busywork on autopilot.",
    features: ["CRM automation", "Email automation", "Lead management", "Appointment scheduling", "Workflow automation", "Existing-tool integrations"],
    flow: ["Trigger event", "Automation runs", "Data synced", "Notification sent"],
  },
  {
    icon: TrendingUp, id: "seo", slug: "seo",
    title: "AI SEO",
    tagline: "Get found. Get chosen. Get booked.",
    features: ["Local SEO", "Technical SEO", "AI content strategy", "Google Business Profile", "Keyword tracking", "Ranking reports"],
    flow: ["Audit", "Optimize", "Publish", "Track rankings"],
  },
  {
    icon: Target, id: "funnels", slug: null,
    title: "AI Funnels",
    tagline: "Turn cold clicks into booked calls.",
    features: ["Sales funnels", "Lead magnets", "Email sequences", "Conversion optimization", "Analytics dashboards", "CRM connection"],
    flow: ["Landing page", "Lead magnet", "Email sequence", "Conversion"],
  },
];

function ServicesPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <Particles density={40} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.2),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Services</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl">
              Full-stack <span className="text-gradient-brand">AI systems</span> for modern businesses
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              Six services, one growth engine. Every build is custom, integrated
              with your stack, and shipped in weeks — not months.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={s.id}>
                <div
                  id={s.id}
                  className="gradient-border scroll-mt-24 overflow-hidden rounded-3xl p-6 sm:p-10"
                >
                  <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
                    <div className="[direction:ltr]">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-[0_0_20px_-4px_rgba(37,99,235,0.6)]">
                        <Icon size={22} className="text-white" />
                      </div>
                      <h2 className="mt-4 text-2xl font-bold text-white sm:text-4xl">{s.title}</h2>
                      <p className="mt-2 text-white/60">{s.tagline}</p>

                      <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-green" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_-4px_rgba(37,99,235,0.6)] hover:scale-[1.03] transition-transform"
                        >
                          Book a call <ArrowRight size={14} />
                        </Link>
                        {s.slug ? (
                          <Link
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:text-white"
                          >
                            Learn more <ArrowRight size={14} />
                          </Link>
                        ) : (
                          <span className="text-xs text-white/40">Dedicated page coming soon</span>
                        )}
                      </div>
                    </div>

                    <div className="[direction:ltr]">
                      <div className="glass rounded-2xl p-6">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">How it works</p>
                        <div className="flex flex-col gap-2">
                          {s.flow.map((step, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -8 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.08, duration: 0.4 }}
                              className="flex items-center gap-3"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-white">
                                {idx + 1}
                              </span>
                              <span className="text-sm text-white/80">{step}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <div className="gradient-border rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Not sure which service you need?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/70">
                Book a free strategy call and we'll audit your business to
                recommend the highest-leverage AI system for you.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(37,99,235,0.7)] hover:scale-[1.03] transition-transform"
              >
                Book Free Strategy Call <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

// silence unused
void RevealStagger; void revealItem;