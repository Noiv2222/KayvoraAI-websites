import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Sparkles, Rocket, Shield, Users } from "lucide-react";
import { Reveal, RevealStagger, revealItem } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { motion } from "framer-motion";


export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Kayvora AI" },
      { name: "description", content: "Kayvora AI helps businesses adopt AI automation without becoming AI experts themselves." },
      { property: "og:title", content: "About — Kayvora AI" },
      { property: "og:description", content: "Our mission: make world-class AI systems accessible to every ambitious business." },
      { property: "og:image", content: "/pexels-photo-6803523.png" },
      { name: "twitter:image", content: "/pexels-photo-6803523.png" },
    ],
  }),
});

const whyChoose = [
  { icon: Rocket, title: "Fast Delivery", desc: "Ship measurable AI systems in weeks, not quarters." },
  { icon: Sparkles, title: "AI Specialists", desc: "Deep expertise in voice, chat, automation, and LLM ops." },
  { icon: Users, title: "Custom Solutions", desc: "Every build is tailored to your workflows and stack." },
  { icon: Shield, title: "Enterprise Quality", desc: "Secure, integrated, and built to scale." },
];

const processSteps = [
  "Discovery Call", "Business Audit", "Strategy", "Build", "Launch", "Support",
];

function AboutPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Particles density={40} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">About Kayvora AI</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl">
              Making AI adoption <span className="text-gradient-brand">effortless</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              Kayvora AI helps ambitious businesses adopt AI automation without
              needing to become AI experts themselves. We design and ship the
              systems — you keep running your business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story + Image */}
      <section className="relative py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <div className="relative">
              <div className="gradient-border relative overflow-hidden rounded-3xl">
                <img
                  src="/pexels-photo-6803523.png"
                  alt="Team collaborating on AI systems"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-transparent to-brand-purple/20 mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-gradient-brand opacity-40 blur-3xl md:block" />
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Our mission</span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                World-class AI systems, built for real businesses
              </h2>
              <p className="mt-5 leading-relaxed text-white/70">
                Most businesses know AI can transform how they operate — they
                just don't know where to start. We bridge that gap. Our team
                designs, builds, and deploys voice agents, chatbots, and
                automations that plug directly into the tools you already use.
              </p>
              <p className="mt-4 leading-relaxed text-white/70">
                No fluff, no year-long transformations. Just working AI
                systems that generate leads, reduce costs, and free your team
                to focus on the work that matters.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {["24/7", "AI-first", "Custom", "Scalable"].map((k) => (
                  <div key={k} className="glass rounded-xl px-4 py-3 text-center">
                    <div className="text-lg font-bold text-gradient-brand">{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Why Kayvora AI</span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
                Built different, <span className="text-gradient-brand">on purpose</span>
              </h2>
            </Reveal>
          </div>

          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => {
              const Icon = w.icon;
              return (
                <motion.div key={w.title} variants={revealItem}>
                  <div className="glass h-full rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-primary">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{w.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{w.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              How we <span className="text-gradient-brand">work with you</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((s, i) => (
              <motion.div key={s} variants={revealItem} className="relative">
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-xs font-semibold text-brand-cyan">Step {i + 1}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{s}</div>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
          <Reveal delay={2}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {["Fast Delivery","AI Specialists","Custom Solutions","Ongoing Support","Enterprise Quality"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80">
                  <CheckCircle2 size={12} className="text-brand-green" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24 pt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="gradient-border rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Let's build your <span className="text-gradient-brand">first AI system</span>
              </h2>
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
