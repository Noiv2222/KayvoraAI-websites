// src/routes/portfolio/$slug.tsx
//
// This is the TEMPLATE that renders every case study page.
// You only need ONE of these files for all 12 projects — it looks up
// the right project from portfolio.ts based on the URL slug.
//
// Example: visiting /portfolio/dental-clinic loads this file and finds
// the project where slug === "dental-clinic" in portfolio.ts

import { createFileRoute, Link } from "@tanstack/react-router";
import { portfolioProjects } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const project = portfolioProjects.find((p) => p.slug === slug);

  // If someone visits a slug that doesn't exist, show a friendly fallback
  if (!project) {
    return (
      <div className="max-w-2xl mx-auto py-24 px-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-6">
          We couldn't find that case study.
        </p>
        <Link
          to="/portfolio"
          className="inline-block px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      {/* Breadcrumb back link */}
      <Link
        to="/portfolio"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← Back to Portfolio
      </Link>

      {/* Cover image */}
      <div className="rounded-2xl overflow-hidden mb-8 bg-muted aspect-video">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 flex items-center gap-3">
        <span>{project.emoji}</span>
        {project.title}
      </h1>

      {/* Five-section layout */}
      <div className="space-y-10">
        <Section title="Industry">
          <p className="text-muted-foreground leading-relaxed">
            {project.industry}
          </p>
        </Section>

        <Section title="Challenge">
          <p className="text-muted-foreground leading-relaxed">
            {project.challenge}
          </p>
        </Section>

        <Section title="Solution">
          <p className="text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </Section>

        <Section title="Technology">
          <div className="flex flex-wrap gap-2">
            {project.technology.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Expected Benefits">
          <ul className="space-y-2">
            {project.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Screenshot gallery — mockups showing what the solution looks like in action */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
            How It Looks In Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.screenshots.map((src, i) => (
              <div
                key={src}
                className="rounded-xl overflow-hidden bg-muted aspect-[16/9] border border-border"
              >
                <img
                  src={src}
                  alt={`${project.title} interface mockup ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional demo video — only shows if you've added a demoVideo path */}
      {project.demoVideo && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Demo</h2>
          <video controls className="w-full rounded-2xl">
            <source src={project.demoVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {/* CTA footer */}
      <div className="mt-16 pt-10 border-t text-center">
        <p className="text-muted-foreground mb-4">
          Want something like this built for your business?
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Book a Free Consultation
        </Link>
      </div>
    </div>
  );
}

// Small reusable section wrapper so every block looks consistent
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}
