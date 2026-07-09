import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Bot, MessageSquare, Globe, Zap, TrendingUp, Target,
  CheckCircle2, Sparkles, ChevronDown, Phone, Calendar, Mail, Clock, Link2, BarChart3, Star,
} from "lucide-react";
import { Particles } from "@/components/site/Particles";
import { Reveal, RevealStagger, revealItem } from "@/components/site/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: Bot,
    title: "AI Voice Agents",
    tag: "Never miss another lead.",
    bullets: ["24/7 AI receptionist", "Appointment booking", "Lead qualification", "CRM updates"],
    flow: ["Call", "AI Answers", "Qualifies", "Books", "Updates CRM"],
  },
  {
    icon: MessageSquare,
    title: "AI Chat Agents",
    tag: "Web, WhatsApp, IG, Messenger.",
    bullets: ["Website chatbot", "WhatsApp & IG AI", "Customer support", "Human handoff"],
    flow: ["Message", "AI Responds", "Captures Info", "Books", "Follow-up"],
  },
  {
    icon: Globe,
    title: "AI Websites",
    tag: "Built to convert, not just look good.",
    bullets: ["Landing pages", "Business websites", "SEO-optimized", "Fast, mobile-first"],
    flow: ["Discovery", "Design", "Build", "Launch", "Optimize"],
  },
  {
    icon: Zap,
    title: "AI Automation",
    tag: "Put busywork on autopilot.",
    bullets: ["CRM automation", "Email sequences", "Lead routing", "Workflow bots"],
    flow: ["Trigger", "Automation", "Sync", "Notify"],
  },
  {
    icon: TrendingUp,
    title: "AI SEO",
    tag: "Get found. Get chosen. Get booked.",
    bullets: ["Local & technical SEO", "AI content strategy", "Google Business Profile", "Keyword tracking"],
    flow: ["Audit", "Optimize", "Publish", "Track"],
  },
  {
    icon: Target,
    title: "AI Funnels",
    tag: "Turn traffic into revenue.",
    bullets: ["Sales funnels", "Lead magnets", "Email sequences", "Conversion CRO"],
    flow: ["Landing", "Magnet", "Sequence", "Convert"],
  },
];

const whyChoose = [
  "Fast Delivery",
  "AI Specialists",
  "Custom Solutions",
  "Ongoing Support",
  "Enterprise Quality",
];

const processSteps = [
  { n: "01", title: "Discovery Call", desc: "Understand your goals, stack, and bottlenecks." },
  { n: "02", title: "Business Audit", desc: "Map current workflows and revenue leaks." },
  { n: "03", title: "Strategy", desc: "Design the AI systems that move the needle." },
  { n: "04", title: "Build", desc: "Engineer, integrate, and QA end-to-end." },
  { n: "05", title: "Launch", desc: "Go live with training and playbooks." },
  { n: "06", title: "Support", desc: "Optimize and scale as you grow." },
];

const industries = [
  "Healthcare", "Real Estate", "Law Firms", "Dental Clinics", "HVAC",
  "Roofing", "E-commerce", "Marketing Agencies", "Restaurants", "Gyms",
  "Financial Services",
];

const faqs = [
  { q: "How long does implementation take?", a: "Most engagements ship in 1–3 weeks. Websites: 5–10 days. AI agents: 2–3 weeks depending on integrations." },
  { q: "Do you support my existing CRM?", a: "Yes — we integrate with HubSpot, GoHighLevel, Pipedrive, Salesforce, Zoho, Airtable, and most modern CRMs via native APIs or webhooks." },
  { q: "Can AI really answer calls?", a: "Yes. Our AI voice agents answer, qualify, and book appointments 24/7 with natural-sounding conversations and full call summaries in your CRM." },
  { q: "Do you provide maintenance?", a: "Every build includes a support window. Ongoing maintenance and optimization plans are available on request." },
  { q: "How much does it cost?", a: "One-time pricing starts at $299 (Google Business Profile) and $499 (Starter Website). See the full pricing page for details." },
];

// Add real client testimonials here as they come in. Leave the array empty
// to keep showing the "first clients" placeholder message below.
// `image` is optional — put photos in /public/testimonials/ and reference
// them as "/testimonials/filename.jpg". Omit it to show initials instead.
type Testimonial = { name: string; role: string; quote: string; rating?: number; image?: string };
const testimonials: Testimonial[] = [
  // Add real client testimonials here once you have them. Example shape:
  // {
  //   name: "Client Name",
  //   role: "Owner, Their Business",
  //   quote: "What they actually said about working with you.",
  //   rating: 5,
  //   image: "/testimonials/client-photo.jpg",
  // },
];

function Index() {
  return (
    <div className="relative">
      <Hero />
      <TrustLine />
      <Capabilities />
      <ServicesGrid />
      <WhyChoose />
      <Process />
      <Industries />
      <Results />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0">
        <Particles density={70} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(15,23,42,0.9)_90%)]" />
      </div>

      {/* Subtle logo mark behind headline */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
        <div
          className="h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "conic-gradient(from 210deg, #2563EB, #7C3AED, #EC4899, #F59E0B, #22D3EE, #2563EB)",
            filter: "blur(2px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
            </span>
            AI systems live for growing businesses
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            AI Employees That Work <span className="text-gradient-brand">24/7.</span>
            <br />
            Your Business <span className="text-gradient-brand">Never Stops.</span>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            We build AI Voice Agents, Chatbots, Websites, Funnels, SEO, and Business
            Automations that help companies generate more leads, reduce costs, and
            scale faster.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(37,99,235,0.7)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_-4px_rgba(124,58,237,0.8)]"
            >
              Book Free Strategy Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-brand-cyan/40 hover:bg-white/[0.06]"
            >
              <Sparkles size={14} /> See What's Included
            </a>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-16 flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/40"
            >
              <ChevronDown size={22} />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustLine() {
  return (
    <section className="relative py-8">
      <Reveal>
        <p className="text-center text-sm font-medium tracking-wide text-white/50">
          Helping ambitious businesses adopt AI automation.
        </p>
      </Reveal>
    </section>
  );
}

const capabilities = [
  { icon: Clock, title: "Always On", desc: "Your AI works 24/7 — nights, weekends, and holidays included." },
  { icon: Zap, title: "Instant Responses", desc: "No more waiting. Leads get answered in seconds, not hours." },
  { icon: Link2, title: "Connects to Your Tools", desc: "Works with your CRM, calendar, and messaging apps out of the box." },
  { icon: BarChart3, title: "Real-Time Insights", desc: "See every lead, booking, and conversation as it happens." },
  { icon: MessageSquare, title: "Human Handoff", desc: "Escalates to your team the moment a conversation needs a human touch." },
  { icon: Globe, title: "One Brain, Every Channel", desc: "Voice, chat, WhatsApp, and social — all powered by the same AI." },
];

function Capabilities() {
  return (
    <section id="capabilities" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Capabilities</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
              What your <span className="text-gradient-brand">AI employees</span> can do
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-4 text-white/60">
              Every Kayvora AI system is built around these core strengths.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <motion.div key={c.title} variants={revealItem}>
              <div className="glass h-full rounded-2xl p-6 transition-all hover:border-brand-cyan/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand">
                  <c.icon size={20} className="text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-white/60">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const Icon = s.icon;
  return (
    <motion.div
      variants={revealItem}
      className="group relative"
    >
      <div className="gradient-border relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.4)]">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
        <div className="relative">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-[0_0_20px_-4px_rgba(37,99,235,0.6)]">
            <Icon size={22} className="text-white" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
          <p className="mt-1 text-sm text-white/60">{s.tag}</p>
          <ul className="mt-5 space-y-2">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-green" />
                {b}
              </li>
            ))}
          </ul>

          {/* workflow diagram */}
          <div className="mt-6 rounded-xl border border-white/5 bg-black/20 p-3">
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-medium">
              {s.flow.map((step, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-white/70">
                    {step}
                  </span>
                  {idx < s.flow.length - 1 && (
                    <span
                      className="h-px w-3 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-60 transition-all duration-500 group-hover:w-5 group-hover:opacity-100"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesGrid() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">What we build</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
              Six AI systems, one <span className="text-gradient-brand">growth engine</span>
            </h2>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </RevealStagger>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl px-6 py-6">
            {whyChoose.map((w) => (
              <div key={w} className="flex items-center gap-2 text-sm font-medium text-white/85">
                <CheckCircle2 size={18} className="text-brand-green" />
                {w}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Process</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
              From first call to <span className="text-gradient-brand">launch</span>
            </h2>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <motion.div key={s.n} variants={revealItem}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-gradient-brand">{s.n}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-blue/50 to-transparent" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-white/60">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Industries</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Built for teams across every industry
          </h2>
        </Reveal>
        <RevealStagger className="mt-8 flex flex-wrap justify-center gap-2">
          {industries.map((i) => (
            <motion.span
              key={i}
              variants={revealItem}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75 transition-all hover:border-brand-cyan/40 hover:text-white"
            >
              {i}
            </motion.span>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Sparkles className="mx-auto mb-4 text-brand-cyan" size={28} />
        </Reveal>
        <Reveal delay={1}>
          <p className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            Every automation is built to save time, improve customer experience,
            and help businesses <span className="text-gradient-brand">grow</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Testimonials</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              What clients are <span className="text-gradient-brand">saying</span>
            </h2>
          </Reveal>
        </div>

        {testimonials.length > 0 ? (
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={revealItem}>
                <div className="glass flex h-full flex-col rounded-2xl p-6">
                  <div className="flex gap-0.5 text-brand-cyan">
                    {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80">"{t.quote}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-white">
                        {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        ) : (
          <Reveal delay={1}>
            <div className="glass mx-auto mt-12 max-w-2xl rounded-3xl p-8 text-center sm:p-12">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand">
                <Sparkles size={20} className="text-white" />
              </div>
              <p className="mt-6 font-display text-xl font-medium text-white sm:text-2xl">
                "Building success stories with our first clients."
              </p>
              <p className="mt-4 text-sm text-white/50">
                Real testimonials will appear here as engagements complete.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">FAQ</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
              Questions, answered
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i}>
              <div className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-base font-medium text-white">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-white/60 transition-transform duration-300 ${open === i ? "rotate-180 text-brand-cyan" : ""}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-white/70">{f.a}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="gradient-border relative overflow-hidden rounded-3xl p-10 sm:p-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.25),transparent_70%)]" />
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-5xl">
                Ready to hire your first{" "}
                <span className="text-gradient-brand">AI employee?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Book a free discovery call and we'll map an AI system tailored to
                your business.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(37,99,235,0.7)] transition-transform hover:scale-[1.03]"
                >
                  <Calendar size={16} /> Book Discovery Call
                </Link>
                <a
                  href="mailto:kayvora.ai@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.06]"
                >
                  <Mail size={16} /> Email us
                </a>
                <a
                href="https://wa.me/919652216227?text=Hi%20Kayvora%20AI%2C%20I%27d%20like%20to%20know%20more%20about%20your%20AI%20automation%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.06]"
                >
                  <Phone size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}