import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Calendar, Linkedin, Instagram, Facebook, Twitter, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "9ae1a180-fa98-42f5-8d90-2ab60787e585";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Kayvora AI" },
      { name: "description", content: "Book a free strategy call with Kayvora AI. Fast response, tailored AI solutions." },
      { property: "og:title", content: "Contact — Kayvora AI" },
      { property: "og:description", content: "Reach out — we typically reply the same day." },
    ],
  }),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New message from Kayvora AI website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Particles density={40} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.2),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Contact</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl">
              Let's talk about your <span className="text-gradient-brand">AI stack</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Book a free strategy call or send us a message — we reply fast
              and quote clearly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:px-8">
          <Reveal>
            <div className="gradient-border rounded-3xl p-6 sm:p-8">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 ring-1 ring-brand-green/40">
                    <CheckCircle2 size={32} className="text-brand-green" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">Message sent</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Thanks — we'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-semibold text-white">Send us a message</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Business" name="business" />
                  <Field label="Message" name="message" textarea required />

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      <AlertCircle size={16} />
                      Something went wrong — please try again, or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_-4px_rgba(37,99,235,0.7)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    {status !== "sending" && <Send size={14} />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="space-y-4">
              <ChannelCard icon={Calendar} title="Book a call" desc="30-min free strategy session." cta="Calendly" href="https://calendly.com/kayvora-ai/30min" primary />
              <ChannelCard icon={Phone} title="WhatsApp" desc="Chat with us anytime." cta="Open WhatsApp" href="https://wa.me/919652216227?text=Hi%20Kayvora%20AI%2C%20I%27d%20like%20to%20know%20more%20about%20your%20AI%20automation%20services." />
              <ChannelCard icon={Mail} title="Email" desc="kayvora.ai@gmail.com" cta="Send email" href="mailto:kayvora.ai@gmail.com" />

              <div className="glass rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Follow us</p>
                <div className="mt-3 flex items-center gap-2">
                  {[
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/kayvora-ai-aa186641b", label: "LinkedIn" },
                    { Icon: Instagram, href: "https://www.instagram.com/kayvora.ai", label: "Instagram" },
                    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591236227209", label: "Facebook" },
                    { Icon: Twitter, href: "https://www.x.com/kayvoraAI", label: "X (Twitter)" },
                  ].map(({ Icon, href, label }, i) => (
                    <a key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:border-brand-cyan/40 hover:text-white"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({
  label, name, type = "text", textarea, required,
}: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean }) {
  const base =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-cyan/60 focus:bg-white/[0.05]";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-white/70">{label}{required && <span className="text-brand-cyan"> *</span>}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

function ChannelCard({
  icon: Icon, title, desc, cta, href, primary,
}: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; desc: string; cta: string; href: string; primary?: boolean }) {
  const isExternal = href.startsWith("http");
  return (
    <a href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group grid min-h-28 grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-4 rounded-2xl p-5 transition-all ${
        primary
          ? "gradient-border hover:glow-primary"
          : "glass hover:border-brand-cyan/40"
      }`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand">
        <Icon size={22} className="text-white" />
      </div>
      <div className="min-w-0">
        <div className="text-base font-semibold leading-snug text-white">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-white/60 break-words">{desc}</div>
        <span className="mt-2 inline-flex items-center text-sm font-semibold text-brand-cyan transition-transform group-hover:translate-x-0.5">
          {cta} →
        </span>
      </div>
    </a>
  );
}
