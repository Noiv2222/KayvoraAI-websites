import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/seo")({
  component: () => (
    <ServiceDetail
      icon={TrendingUp}
      eyebrow="AI SEO"
      headline="Get Found. Get Chosen. Get Booked."
      subheadline="Local + technical SEO powered by AI content strategy — so your best-fit customers find you first."
      pains={[
        "Invisible on Google for the searches your customers actually make.",
        "Losing local map-pack visibility to competitors with better GBPs.",
        "Inconsistent content that never compounds into rankings.",
      ]}
      features={[
        "Local SEO",
        "Technical SEO",
        "AI content strategy",
        "Google Business Profile optimization",
        "Keyword tracking",
        "Monthly ranking reports",
      ]}
      steps={[
        { title: "Audit", desc: "Technical, content, and local visibility scan." },
        { title: "Optimize", desc: "On-page, metadata, schema, and GBP fixes." },
        { title: "Publish", desc: "AI-assisted content on a real editorial calendar." },
        { title: "Track", desc: "Monthly rankings + traffic reporting." },
      ]}
      bestFor={["Healthcare", "Dental Clinics", "HVAC", "Roofing", "Restaurants", "Local services"]}
      faqs={[
        { q: "How long until I see results?", a: "Technical + GBP wins show in 30–60 days. Content-driven rankings compound over 3–6 months." },
        { q: "Do you guarantee rankings?", a: "No reputable SEO does — but we do guarantee the deliverables, the process, and the reporting." },
        { q: "Is content included?", a: "AI-assisted content strategy + templates are included. Ongoing production is scoped separately." },
        { q: "Do you do link building?", a: "We focus on foundational SEO first — links follow content that actually earns them." },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "AI SEO — Kayvora AI" },
      { name: "description", content: "Local + technical SEO with AI content strategy — get found for the searches that matter." },
      { property: "og:title", content: "AI SEO — Kayvora AI" },
      { property: "og:description", content: "Get found. Get chosen. Get booked." },
    ],
  }),
});