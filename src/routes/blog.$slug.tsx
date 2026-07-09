import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { getPost, posts, type Post } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Kayvora AI" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Kayvora AI` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Kayvora AI" },
          }),
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-40 pb-24 text-center">
      <h1 className="text-3xl font-bold text-white">Post not found</h1>
      <p className="mt-3 text-white/60">The article you're looking for doesn't exist.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-brand-cyan">
        <ArrowLeft size={14} /> Back to blog
      </Link>
    </div>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="relative">
      <article className="relative pt-32 pb-16 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:text-white">
              <ArrowLeft size={14} /> Back to blog
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-6 flex items-center gap-3 text-xs">
              <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-brand-cyan">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-white/50">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 text-lg text-white/70">{post.excerpt}</p>
          </Reveal>

          <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80 prose-strong:text-white">
            {post.body.map((block: Post["body"][number], i: number) => {
              if (block.h) return <h2 key={i} className="mt-10 text-2xl font-bold">{block.h}</h2>;
              if (block.p) return <p key={i} className="mt-4 leading-relaxed">{block.p}</p>;
              if (block.list) return (
                <ul key={i} className="mt-4 list-disc space-y-1 pl-5">
                  {block.list.map((li: string) => <li key={li}>{li}</li>)}
                </ul>
              );
              return null;
            })}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="relative py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">Keep reading</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="group block"
                >
                  <div className="gradient-border h-full rounded-2xl p-6 transition-all hover:-translate-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                      {r.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">{r.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}