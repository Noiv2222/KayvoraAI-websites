import { createFileRoute } from "@tanstack/react-router";
import { Bot } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/voice-agents")({
  component: () => (
    <ServiceDetail
      icon={Bot}
      eyebrow="AI Voice Agents"
      headline="Never Miss Another Call — Or Another Lead."
      subheadline="A 24/7 AI receptionist that answers, qualifies, and books — with every call logged in your CRM."
      pains={[
        "After-hours calls go to voicemail and leads move on to a competitor.",
        "Slow callback times kill conversion on the leads you do catch.",
        "Receptionist salaries and turnover eat into your margins.",
      ]}
      features={[
        "24/7 AI receptionist",
        "Appointment booking",
        "Lead qualification",
        "CRM updates in real time",
        "Call transcription & summaries",
        "Multi-language support",
      ]}
      steps={[
        { title: "Discovery", desc: "Map call flows, FAQs, and CRM logic." },
        { title: "Build", desc: "Train the agent on your business, voice, and scripts." },
        { title: "Launch", desc: "Route your number and go live with call handoff rules." },
        { title: "Optimize", desc: "Weekly review of transcripts to tune performance." },
      ]}
      bestFor={["Healthcare", "Dental Clinics", "HVAC", "Roofing", "Real Estate"]}
      faqs={[
        { q: "Does the AI sound natural?", a: "Yes — we use latest-gen voice models with tuned prosody and industry-specific scripts. Most callers can't tell it's AI." },
        { q: "Can it transfer to a human?", a: "Yes. You set the rules: keywords, high-value leads, or on request — the agent hands off cleanly with context." },
        { q: "Which CRMs are supported?", a: "HubSpot, GoHighLevel, Pipedrive, Salesforce, Zoho, Airtable, and any CRM with a webhook or API." },
        { q: "How long does setup take?", a: "Typical launch is 2–3 weeks depending on integrations." },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "AI Voice Agents — Kayvora AI" },
      { name: "description", content: "24/7 AI receptionist that answers calls, qualifies leads, and books appointments — with every conversation synced to your CRM." },
      { property: "og:title", content: "AI Voice Agents — Kayvora AI" },
      { property: "og:description", content: "Never miss another call — or another lead." },
    ],
  }),
});