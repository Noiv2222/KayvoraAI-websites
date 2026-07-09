import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  { to: "/services/voice-agents", label: "AI Voice Agents" },
  { to: "/services/chat-agents", label: "AI Chatbots" },
  { to: "/services/websites", label: "AI Websites" },
  { to: "/services/seo", label: "AI SEO" },
  { to: "/services/automation", label: "AI Automation" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#0B1224]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-60" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo size={40} />
          <p className="mt-4 max-w-sm text-sm text-white/60">
            AI Voice Agents, Chatbots, Websites, Funnels, SEO and Automations —
            built to help ambitious businesses generate more leads and scale
            faster.
         </p>
         <a
             href="mailto:kayvora.ai@gmail.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <Mail size={16} /> kayvora.ai@gmail.com
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Solutions</h4>
          <ul className="mt-4 space-y-2">
            {services.map((s, i) => (
              <li key={i}>
                <Link
                  to={s.to}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2">
            <li><Link to="/about" className="text-sm text-white/60 hover:text-white">About</Link></li>
            <li><Link to="/blog" className="text-sm text-white/60 hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="text-sm text-white/60 hover:text-white">Contact</Link></li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/kayvora-ai-aa186641b", label: "LinkedIn" },
              { Icon: Instagram, href: "https://www.instagram.com/kayvora.ai", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591236227209", label: "Facebook" },
              { Icon: Twitter, href: "https://www.x.com/kayvoraAI", label: "X (Twitter)" },
            ].map(({ Icon, href, label }, i) => (
           <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:border-brand-cyan/40 hover:text-white hover:glow-cyan"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Kayvora AI. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Building AI systems that work while you sleep.
          </p>
        </div>
      </div>
    </footer>
  );
}
