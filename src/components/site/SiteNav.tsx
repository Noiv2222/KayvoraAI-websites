import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  { to: "/services/voice-agents", label: "AI Voice Agents" },
  { to: "/services/chat-agents", label: "AI Chat Agents" },
  { to: "/services/websites", label: "AI Websites" },
  { to: "/services/automation", label: "AI Automation" },
  { to: "/services/seo", label: "AI SEO" },
  { to: "/services", label: "All services →" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0F172A]/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.to === "/services" ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                  activeProps={{ className: "text-white" }}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                    <div className="rounded-2xl border border-white/10 bg-[#0F172A]/95 p-2 shadow-2xl backdrop-blur-xl">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                activeProps={{ className: "text-white" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_-4px_rgba(37,99,235,0.6)] transition-transform duration-200 hover:scale-[1.03]"
          >
            Book Free Call
          </Link>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-white/80 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-brand"
        aria-hidden
      />

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0F172A]/95 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5"
                activeProps={{ className: "text-white bg-white/5" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-1 border-l border-white/10 pl-3">
              {serviceLinks.slice(0, 5).map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-xs text-white/60 hover:bg-white/5 hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Book Free Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}