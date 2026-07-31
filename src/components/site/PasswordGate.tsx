import { useState, type FormEvent } from 'react'

// ─────────────────────────────────────────────────────────────
// PASSWORD GATE
// Wrap any page's content with this to require a password before
// showing it. Unlocks for the rest of the browser session once
// the correct password is entered (via sessionStorage).
//
// This is a soft lock, not real security — the password lives in
// client-side code, so anyone determined enough could find it by
// reading the page's JS bundle. It's meant to keep casual visitors
// and search engines out, not to protect sensitive data.
//
// USAGE (in pricing.tsx or portfolio.tsx):
//
//   import { PasswordGate } from '@/components/site/PasswordGate'
//
//   function PricingPage() {
//     return (
//       <PasswordGate pageKey="pricing">
//         {/* your existing page content goes here, unchanged */}
//       </PasswordGate>
//     )
//   }
// ─────────────────────────────────────────────────────────────

const CLIENT_PASSWORD = 'kayvora2003aip' // change this to whatever you want

export function PasswordGate({
  children,
  pageKey,
}: {
  children: React.ReactNode
  pageKey: string
}) {
  const storageKey = `kayvora-unlocked-${pageKey}`
  const [unlocked, setUnlocked] = useState(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem(storageKey) === 'true'
  })
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (input === CLIENT_PASSWORD) {
      sessionStorage.setItem(storageKey, 'true')
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (unlocked) return <>{children}</>

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
      >
        <h1 className="font-['Sora'] font-semibold text-xl text-white mb-2">
          Client access only
        </h1>
        <p className="font-['Inter'] text-sm text-slate-400 mb-6">
          Enter the password shared with you to view this page.
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            setError(false)
          }}
          placeholder="Password"
          autoFocus
          className="w-full rounded-lg border border-white/10 bg-[#0B1220] px-4 py-2.5 font-['Inter'] text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
        />
        {error && (
          <p className="mt-2 text-sm text-red-400 font-['Inter']">
            Incorrect password. Try again.
          </p>
        )}
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-2.5 font-['Inter'] font-semibold text-white hover:brightness-110 transition"
        >
          Unlock
        </button>
        <p className="mt-4 font-['Inter'] text-xs text-slate-500">
          Not a client yet?{' '}
          <a href="/contact" className="text-cyan-300 hover:underline">
            Get in touch
          </a>
        </p>
      </form>
    </div>
  )
}
