"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_CATEGORIES, type BlogMeta } from "@/lib/blog-types";

export function BlogList({ posts }: { posts: BlogMeta[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? posts
      : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {["All", ...BLOG_CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-accent text-background"
                : "bg-surface text-foreground-muted hover:text-foreground hover:bg-surface/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-border bg-background-secondary p-12 text-center">
          <p className="text-foreground-muted">
            No posts in this category yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group rounded-xl border border-border bg-background-secondary p-6 transition-all hover:border-border-hover hover:bg-surface">
                <div className="flex items-center gap-3 text-xs text-foreground-subtle mb-3">
                  <span className="inline-flex items-center rounded-full bg-accent-muted px-2.5 py-0.5 text-xs font-medium text-accent-hover">
                    {post.category}
                  </span>
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
    </>
  );
}
