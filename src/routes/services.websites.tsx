import { createFileRoute } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/websites")({
  component: () => (
    <ServiceDetail
      icon={Globe}
      eyebrow="AI Websites"
      headline="Websites Built to Convert, Not Just Look Good."
      subheadline="Fast, mobile-first, SEO-ready sites engineered for conversion — from landing pages to full business sites."
      pains={[
        "Outdated sites look untrustworthy to modern buyers.",
        "Low conversion — visitors bounce before they book or buy.",
        "Poor mobile experience where 60%+ of traffic actually lives.",
      ]}
      features={[
        "Landing pages",
        "Full business websites",
        "High-converting design",
        "SEO-optimized structure",
        "Mobile-first build",
        "Fast load times",
      ]}
      steps={[
        { title: "Discovery", desc: "Positioning, goals, and audience." },
        { title: "Design", desc: "High-fidelity, brand-forward mockups." },
        { title: "Build", desc: "Modern stack, animations, and SEO baked in." },
        { title: "Launch", desc: "Analytics, forms, and post-launch support." },
      ]}
      bestFor={["Any industry — this is your foundation"]}
      faqs={[
        { q: "What stack do you use?", a: "React/Next-class frameworks, edge-hosted, with images and code optimized for Core Web Vitals." },
        { q: "Do I own the site?", a: "Yes — 100%. Full code, assets, and CMS access transferred to you." },
        { q: "How long does it take?", a: "Starter: 5–7 days. Business: 7–10 days. Custom builds: 2–4 weeks." },
        { q: "Is a project dashboard included?", a: "Yes — Business plan and above include client-facing project visibility." },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "AI Websites — Kayvora AI" },
      { name: "description", content: "Fast, mobile-first, SEO-ready websites engineered for conversion." },
      { property: "og:title", content: "AI Websites — Kayvora AI" },
      { property: "og:description", content: "Websites built to convert, not just look good." },
    ],
  }),
});