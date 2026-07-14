import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kayvora AI" },
      {
        name: "description",
        content:
          "Kayvora AI's Privacy Policy — what information we collect, how we use it, and your rights.",
      },
      { property: "og:title", content: "Privacy Policy — Kayvora AI" },
      {
        property: "og:description",
        content: "How Kayvora AI collects, uses, and protects your information.",
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
    heading: "1. Information We Collect",
    body: "We may collect:",
    list: [
      "Name",
      "Email address",
      "Phone number",
      "Company name",
      "Website URL",
      "Project information",
      "Billing information (if applicable)",
      "Communication history",
    ],
  },
  {
    heading: "",
    body: "We may also automatically collect:",
    list: [
      "IP address",
      "Browser type",
      "Device information",
      "Pages visited",
      "Cookies and analytics data",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: "We use your information to:",
    list: [
      "Respond to inquiries",
      "Deliver our services",
      "Improve our website",
      "Send project updates",
      "Process payments",
      "Provide customer support",
      "Enhance user experience",
    ],
  },
  {
    heading: "3. Cookies",
    body: "Our website may use cookies to improve your browsing experience and analyze website traffic. You can disable cookies through your browser settings.",
  },
  {
    heading: "4. Third-Party Services",
    body: "We may use trusted third-party providers, including:",
    list: [
      "Google Analytics",
      "Google Workspace",
      "Stripe (if applicable)",
      "PayPal (if applicable)",
      "Calendly",
      "Cloud hosting providers",
    ],
  },
  {
    heading: "",
    body: "These providers have their own privacy policies.",
  },
  {
    heading: "5. Data Security",
    body: "We use reasonable administrative, technical, and organizational measures to help protect your information from unauthorized access, alteration, or disclosure. However, no online system can guarantee absolute security.",
  },
  {
    heading: "6. Data Retention",
    body: "We retain personal information only as long as reasonably necessary for business purposes or to comply with legal obligations.",
  },
  {
    heading: "7. Your Rights",
    body: "Depending on where you live, you may have rights to:",
    list: [
      "Access your personal data",
      "Correct inaccurate information",
      "Request deletion of your data",
      "Object to certain processing",
      "Request a copy of your information",
    ],
  },
  {
    heading: "",
    body: "To exercise these rights, contact us using the email below.",
  },
  {
    heading: "8. Children's Privacy",
    body: "Our services are not directed to children under 13, and we do not knowingly collect personal information from children.",
  },
  {
    heading: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
  },
];

function PrivacyPage() {
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
              Privacy <span className="text-gradient-brand">Policy</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              Effective Date: [16/4/2026]
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <Reveal>
          <p className="text-white/70">
            Welcome to Kayvora AI. At Kayvora AI, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains what information we collect, how we use it, and
            your rights.
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
                10. Contact
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
