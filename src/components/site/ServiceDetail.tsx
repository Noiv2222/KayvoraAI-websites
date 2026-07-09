import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";
import { Particles } from "@/components/site/Particles";
import { Reveal, RevealStagger, revealItem } from "@/components/site/Reveal";

export type ServiceDetailProps = {
  icon: LucideIcon;
  eyebrow: string;
  headline: string;
  subheadline: string;
  pains: string[];
  features: string[];
  steps: { title: string; desc: string }[];
  bestFor: string[];
  faqs: { q: string; a: string }[];
};

export function ServiceDetail({
  icon: Icon, eyebrow, headline, subheadline, pains, features, steps, bestFor, faqs,
}: ServiceDetailProps) {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <Particles density={40} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.22),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-[0_0_30px_-4px_rgba(37,99,235,0.7)]">
              <Icon size={24} className="text-white" />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <span className="mt-4 block text-xs font-semibold uppercase tracking-widest text-brand-cyan">{eyebrow}</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
              {headline}
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">{subheadline}</p>
          </Reveal>
          <Reveal delay={4}>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(37,99,235,0.7)] hover:scale-[1.03] transition-transform"
            >
              Book Free Strategy Call <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white sm:text-4xl">
              The problem we <span className="text-gradient-brand">solve</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-4 md:grid-cols-3">
            {pains.map((p) => (
              <motion.div key={p} variants={revealItem}>
                <div className="glass h-full rounded-2xl p-6 text-white/80">{p}</div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* What's included */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white sm:text-4xl">
              What's <span className="text-gradient-brand">included</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <motion.div key={f} variants={revealItem}>
                <div className="gradient-border flex h-full items-start gap-3 rounded-2xl p-5">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-green" size={18} />
                  <span className="text-sm text-white/85">{f}</span>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white sm:text-4xl">
              How it <span className="text-gradient-brand">works</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={s.title} variants={revealItem}>
                <div className="glass h-full rounded-2xl p-6">
                  <span className="font-display text-3xl font-bold text-gradient-brand">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Best for */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Best for
            </h2>
          </Reveal>
          <RevealStagger className="mt-6 flex flex-wrap justify-center gap-2">
            {bestFor.map((b) => (
              <motion.span
                key={b}
                variants={revealItem}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80"
              >
                {b}
              </motion.span>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">FAQ</h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="group gradient-border rounded-2xl p-5 open:bg-white/[0.02]">
                  <summary className="cursor-pointer list-none text-base font-semibold text-white flex items-center justify-between">
                    {f.q}
                    <span className="ml-3 text-brand-cyan transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-white/70">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative pb-24 pt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="gradient-border rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to <span className="text-gradient-brand">get started?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/70">
                Book a free 20-minute discovery call. We'll audit your setup and
                map the fastest path to launch.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(37,99,235,0.7)] hover:scale-[1.03] transition-transform"
              >
                Book Discovery Call <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}