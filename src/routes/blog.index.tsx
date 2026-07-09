import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Particles } from "@/components/site/Particles";
import { Reveal, RevealStagger, revealItem } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog & Resources — Kayvora AI" },
      { name: "description", content: "Practical guides on AI voice agents, marketing automation, and local SEO for growing businesses." },
      { property: "og:title", content: "Blog & Resources — Kayvora AI" },
      { property: "og:description", content: "Practical AI + growth playbooks for modern businesses." },
    ],
  }),
});

function BlogIndex() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0">
          <Particles density={35} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.2),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Blog & Resources</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl">
              Playbooks for <span className="text-gradient-brand">AI-powered growth</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              No fluff. Practical guides on AI, automation, and SEO from the
              team shipping these systems for real businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <motion.div key={p.slug} variants={revealItem}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full"
                >
                  <article className="gradient-border flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.4)]">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-brand-cyan">
                        {p.category}
                      </span>
                      <span className="flex items-center gap-1 text-white/50">
                        <Clock size={12} /> {p.readTime}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-semibold text-white group-hover:text-gradient-brand">
                      {p.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-white/65">{p.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan">
                      Read post <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>
    </div>
  );
}