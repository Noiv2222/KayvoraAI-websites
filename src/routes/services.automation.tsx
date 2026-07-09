import { createFileRoute } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/automation")({
  component: () => (
    <ServiceDetail
      icon={Zap}
      eyebrow="AI Automation"
      headline="Put Your Busywork on Autopilot."
      subheadline="CRM, email, scheduling, and lead routing — connected end-to-end so nothing falls through the cracks."
      pains={[
        "Manual data entry between tools burns hours per week.",
        "Leads sit un-followed-up while the team is heads-down.",
        "Disconnected tools mean no single source of truth for the pipeline.",
      ]}
      features={[
        "CRM automation",
        "Email automation",
        "Lead management",
        "Appointment scheduling",
        "Workflow automation",
        "Integrations with existing tools",
      ]}
      steps={[
        { title: "Audit", desc: "Map every current tool and manual step." },
        { title: "Design", desc: "Blueprint the automations that actually pay back." },
        { title: "Build", desc: "Connect systems with reliable, monitored workflows." },
        { title: "Iterate", desc: "Track outcomes; refine what moves the needle." },
      ]}
      bestFor={["Law Firms", "Financial Services", "Marketing Agencies", "Real Estate"]}
      faqs={[
        { q: "Which tools do you connect?", a: "HubSpot, GoHighLevel, Pipedrive, Salesforce, Zoho, Airtable, Gmail/Outlook, Calendly, Slack, and 1000+ via webhooks." },
        { q: "What if a workflow breaks?", a: "Every workflow is monitored with alerting. Included support covers fixes on our builds." },
        { q: "Is training included?", a: "Yes — team walkthrough, Loom playbooks, and written docs." },
        { q: "How is pricing structured?", a: "One-time build fee. No per-user or per-workflow subscription from us." },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "AI Automation — Kayvora AI" },
      { name: "description", content: "Automate CRM, email, scheduling, and lead routing across your existing tools." },
      { property: "og:title", content: "AI Automation — Kayvora AI" },
      { property: "og:description", content: "Put your busywork on autopilot." },
    ],
  }),
});