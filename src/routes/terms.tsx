import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — Kayvora AI" },
      {
        name: "description",
        content:
          "Kayvora AI's Terms of Service — project scope, payments, revisions, IP, and liability.",
      },
      { property: "og:title", content: "Terms of Service — Kayvora AI" },
      {
        property: "og:description",
        content: "The terms that apply when you use Kayvora AI's website or services.",
      },
    ],
  }),
});

type Section = {
  heading: string;
  body?: string;
  list?: string[];
};

const sections: Section[] = [
  {
    heading: "1. Services",
    body: "Kayvora AI provides services including:",
    list: [
      "AI Voice Agents",
      "AI Chatbots",
      "AI Automation",
      "Business Websites",
      "SEO",
      "Sales Funnels",
      "CRM Integrations",
      "Consulting",
    ],
  },
  {
    heading: "2. Project Scope",
    body: "Each project will be completed according to the agreed proposal or contract. Additional work outside the agreed scope may require additional fees.",
  },
  {
    heading: "3. Payments",
    body: "Unless otherwise agreed:",
    list: [
      "50% deposit before work begins",
      "Remaining balance due before final delivery",
    ],
  },
  {
    heading: "",
    body: "Late payments may delay project completion.",
  },
  {
    heading: "4. Client Responsibilities",
    body: "Clients are responsible for providing:",
    list: [
      "Required content",
      "Logos and branding assets",
      "Timely feedback",
      "Access to necessary platforms and accounts",
    ],
  },
  {
    heading: "",
    body: "Project timelines may be affected if required information is delayed.",
  },
  {
    heading: "5. Revisions",
    body: "Each project includes the number of revisions specified in the proposal. Additional revisions may incur extra charges.",
  },
  {
    heading: "6. Intellectual Property",
    body: "Upon full payment, the client receives ownership of the agreed final deliverables unless otherwise stated. Kayvora AI retains ownership of its internal tools, templates, methodologies, and reusable components.",
  },
  {
    heading: "7. Limitation of Liability",
    body: "Kayvora AI is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the relevant service, to the extent permitted by law.",
  },
  {
    heading: "8. Third-Party Services",
    body: "Some solutions rely on third-party platforms, APIs, or software. Their availability, pricing, or policies may change independently of Kayvora AI.",
  },
  {
    heading: "9. Service Availability",
    body: "We aim to deliver reliable services but cannot guarantee uninterrupted availability of third-party services or integrations.",
  },
  {
    heading: "10. Termination",
    body: "Either party may terminate a project according to the agreed contract terms. Fees for work already completed remain payable.",
  },
  {
    heading: "11. Governing Law",
    body: "These Terms shall be governed by the laws applicable to the jurisdiction agreed upon in the client contract or, if no agreement exists, the laws applicable to Kayvora AI's principal place of business.",
  },
];

function TermsPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Particles density={30} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Legal
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl">
              Terms of <span className="text-gradient-brand">Service</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              Effective Date: [DD/MM/YYYY]
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <Reveal>
          <p className="text-white/70">
            Welcome to Kayvora AI. By using our website or purchasing our
            services, you agree to these Terms of Service.
          </p>
        </Reveal>

        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={i} delay={i % 4}>
              <div>
                {s.heading && (
                  <h2 className="font-display text-xl font-semibold text-white">
                    {s.heading}
                  </h2>
                )}
                {s.body && (
                  <p className={`text-white/70 ${s.heading ? "mt-3" : ""}`}>
                    {s.body}
                  </p>
                )}
                {s.list && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-white/70">
                    {s.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div>
              <h2 className="font-display text-xl font-semibold text-white">
                12. Contact
              </h2>
              <p className="mt-3 text-white/70">Kayvora AI</p>
              <a
                href="mailto:kayvora.ai@gmail.com"
                className="mt-1 inline-block text-brand-cyan hover:text-white"
              >
                📧 kayvora.ai@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
