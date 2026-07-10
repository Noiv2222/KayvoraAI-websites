// src/routes/portfolio/index.tsx
//
// This is the main /portfolio page — a grid of all 12 case studies.
// It automatically pulls every project from portfolio.ts, so adding a
// 13th project later just means adding it to that one file.

import { createFileRoute, Link } from "@tanstack/react-router";
import { portfolioProjects } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioIndexPage,
});

function PortfolioIndexPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      {/* Page header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A look at how Kayvora AI builds custom AI voice agents, chat agents,
          and automation systems across different industries.
        </p>
      </div>

      {/* Grid of project cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {portfolioProjects.map((project) => (
          <Link
            key={project.slug}
            to="/portfolio/$slug"
            params={{ slug: project.slug }}
            className="group border rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            {/* Cover image */}
            <div className="aspect-video bg-muted overflow-hidden">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Card content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{project.emoji}</span>
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.challenge}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.technology.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Blinking "click to view" hint */}
              <div className="flex items-center gap-2 mt-5 pt-4 border-t">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-semibold text-primary group-hover:underline">
                  Click to view case study
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Don't see your industry?
        </h2>
        <p className="text-muted-foreground mb-6">
          We build custom AI solutions for any business — let's talk about yours.
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
