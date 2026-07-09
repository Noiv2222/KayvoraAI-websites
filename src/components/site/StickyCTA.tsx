import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyCTA() {
  const [show, setShow] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on the contact page itself
  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.9)] transition-transform hover:scale-[1.04]"
          >
            <Calendar size={16} />
            <span className="hidden sm:inline">Book Free Strategy Call</span>
            <span className="sm:hidden">Book a Call</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}