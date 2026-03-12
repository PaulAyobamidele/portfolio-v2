import Link from "next/link";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software engineering, research, AI, and everything in between.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground">
          Blog<span className="text-accent">.</span>
        </h1>
        <p className="mb-12 text-lg text-foreground-muted">
          Thoughts on engineering, research, and everything in between.
        </p>

        {posts.length === 0 ? (
          <div className="rounded-xl border border-border bg-background-secondary p-12 text-center">
            <p className="text-foreground-muted">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group rounded-xl border border-border bg-background-secondary p-6 transition-all hover:border-border-hover hover:bg-surface">
                  <div className="flex items-center gap-3 text-xs text-foreground-subtle mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="mb-2 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  <p className="mb-4 text-sm leading-relaxed text-foreground-muted">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-xs text-foreground-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-foreground-subtle transition-all group-hover:text-accent group-hover:translate-x-1"
                    />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
