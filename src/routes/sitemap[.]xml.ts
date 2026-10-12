import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/lib/posts";

// Password-gated pages (/pricing, /portfolio) are left out on purpose —
// crawlers would only ever see the password form.
const STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  "/services/voice-agents",
  "/services/chat-agents",
  "/services/websites",
  "/services/automation",
  "/services/seo",
  "/free-audit",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // Sitemap <loc> entries must be absolute URLs. Deriving the origin from
        // the request keeps this correct on workers.dev and any custom domain.
        const origin = new URL(request.url).origin;
        const paths = [...STATIC_PATHS, ...posts.map((p) => `/blog/${p.slug}`)];
        const urls = paths.map(
          (p) => `  <url><loc>${origin}${p}</loc><changefreq>weekly</changefreq></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
