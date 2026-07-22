import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─────────────────────────────────────────────────────────────
// ROUTE
// If your file-based router expects a different path string,
// just change the argument below (e.g. '/free-audit' or '/audit').
// Drop this file at: src/routes/free-audit.tsx
// ─────────────────────────────────────────────────────────────
export const Route = createFileRoute('/free-audit')({
  component: FreeAuditPage,
})

// ─────────────────────────────────────────────────────────────
// CONTENT — the 5 things the audit checks. Order matters here:
// it mirrors the actual sequence the scan runs in, and the same
// order the report is delivered in.
// ─────────────────────────────────────────────────────────────
const SCAN_ITEMS = [
  { id: 'website', label: 'Website Audit', detail: 'Speed, UX, conversion friction' },
  { id: 'seo', label: 'SEO Audit', detail: 'Rankings, keywords, technical health' },
  { id: 'automation', label: 'AI Automation Opportunities', detail: 'Manual work that should run itself' },
  { id: 'leadgen', label: 'Lead Generation Review', detail: 'Where prospects are slipping through' },
  { id: 'roadmap', label: 'Personalized AI Roadmap', detail: 'Your 90-day priority order' },
]

const WEB3FORMS_KEY = '9ae1a180-fa98-42f5-8d90-2ab60787e585'

function FreeAuditPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-100 overflow-x-hidden">
      <Hero />
      <HowItWorks />
      <AuditForm />
    </main>
  )
}

// ─────────────────────────────────────────────────────────────
// HERO — the signature element is the "Live Audit Scan" panel:
// a mock readout that visibly checks off each audit category in
// sequence, so the page shows what happens rather than just
// listing it. This is the one piece of motion we spend on.
// ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      {/* ambient glow, restrained */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(600px circle at 20% 10%, rgba(37,99,235,0.18), transparent 60%), radial-gradient(500px circle at 85% 30%, rgba(124,58,237,0.15), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-cyan-300 font-['Inter']">
            FREE · NO OBLIGATION · 48-HOUR TURNAROUND
          </span>

          <h1 className="mt-6 font-['Sora'] font-semibold text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Discover the{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] bg-clip-text text-transparent">
              hidden revenue leaks
            </span>{' '}
            costing your business every month
          </h1>

          <p className="mt-6 text-lg text-slate-300 font-['Inter'] max-w-xl">
            Kayvora AI runs a full diagnostic on your website, SEO, lead flow, and
            automation gaps — then hands you a plain-English roadmap for fixing
            what's leaking. Free, and yours in 48 hours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#audit-form"
              className="inline-flex justify-center items-center rounded-lg bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-3.5 font-['Inter'] font-semibold text-white shadow-lg shadow-blue-900/30 hover:brightness-110 transition"
            >
              Claim My FREE Audit
            </a>
            <p className="self-center text-sm text-slate-400 font-['Inter']">
              No credit card. No sales call required.
            </p>
          </div>
        </div>

        <ScanPanel />
      </div>
    </section>
  )
}

function ScanPanel() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0B1220]/80 backdrop-blur p-6 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between mb-5">
        <span className="font-['Inter'] text-sm text-slate-400">Live Audit Scan</span>
        <span className="flex items-center gap-1.5 text-xs text-cyan-300 font-['Inter']">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          scanning
        </span>
      </div>

      <div className="space-y-3">
        {SCAN_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0.35 }}
            animate={{ opacity: [0.35, 1, 1] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: SCAN_ITEMS.length * 0.5,
              delay: i * 0.5,
              times: [0, 0.15, 1],
            }}
            className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3"
          >
            <motion.span
              initial={{ backgroundColor: 'rgba(148,163,184,0.3)' }}
              animate={{
                backgroundColor: ['rgba(148,163,184,0.3)', 'rgba(34,211,238,1)', 'rgba(34,211,238,1)'],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: SCAN_ITEMS.length * 0.5,
                delay: i * 0.5,
                times: [0, 0.15, 1],
              }}
              className="h-2 w-2 shrink-0 rounded-full"
            />
            <div>
              <p className="font-['Inter'] text-sm font-medium text-slate-100">{item.label}</p>
              <p className="font-['Inter'] text-xs text-slate-400">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-white/5">
        <p className="font-['Inter'] text-xs text-slate-500">
          Report compiled into a single Personalized AI Roadmap
        </p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// HOW IT WORKS — this really is a 3-step sequence, so numbering
// here is honest, not decorative.
// ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Tell us about your business',
      body: 'Takes under a minute — your name, business, and website.',
    },
    {
      n: '02',
      title: 'We run the audit',
      body: 'Website, SEO, lead flow, and automation gaps, checked against what actually moves revenue.',
    },
    {
      n: '03',
      title: 'You get your roadmap',
      body: 'A clear, prioritized plan for what to fix first — delivered straight to your inbox.',
    },
  ]

  return (
    <section className="px-6 py-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-['Sora'] font-semibold text-2xl md:text-3xl text-center mb-12">
          How the free audit works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative pl-14">
              <span className="absolute left-0 top-0 font-['Sora'] text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#22D3EE]">
                {s.n}
              </span>
              <h3 className="font-['Inter'] font-semibold text-slate-100 mb-2">{s.title}</h3>
              <p className="font-['Inter'] text-sm text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// FORM — submits to Web3Forms (same access key already used
// on the Kayvora AI contact form).
// ─────────────────────────────────────────────────────────────
type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function AuditForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [values, setValues] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Free Audit Request — Kayvora AI',
          from_name: 'Kayvora AI — Free Audit Form',
          name: values.name,
          email: values.email,
          business_name: values.business,
          website: values.website,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="audit-form" className="px-6 py-20 border-t border-white/5">
      <div className="mx-auto max-w-xl">
        <div className="text-center mb-10">
          <h2 className="font-['Sora'] font-semibold text-2xl md:text-3xl">
            Claim your free AI Business Growth Audit
          </h2>
          <p className="mt-3 font-['Inter'] text-slate-400">
            Includes your Website Audit, SEO Audit, AI Automation Opportunities,
            Lead Generation Review, and a Personalized AI Roadmap.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <p className="font-['Sora'] font-semibold text-lg text-cyan-300">
                  You're on the list.
                </p>
                <p className="mt-2 font-['Inter'] text-sm text-slate-400">
                  We'll email your audit within 48 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <Field
                  label="Full name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Business email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Business name"
                  name="business"
                  value={values.business}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Website URL"
                  name="website"
                  value={values.website}
                  onChange={handleChange}
                  placeholder="yourbusiness.com"
                  required
                />

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-lg bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3.5 font-['Inter'] font-semibold text-white shadow-lg shadow-blue-900/30 hover:brightness-110 transition disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Submitting…' : 'Claim My FREE Audit'}
                </button>

                {status === 'error' && (
                  <p className="text-center font-['Inter'] text-sm text-red-400">
                    Something went wrong sending that — please try again, or email
                    kayvora.ai@gmail.com directly.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="font-['Inter'] text-sm text-slate-300">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0B1220] px-4 py-2.5 font-['Inter'] text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
      />
    </label>
  )
}
