"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
};

export function Blog({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <Section id="blog">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on engineering, research, and everything in between."
        />
        <ScrollReveal>
          <Card className="text-center py-12">
            <p className="text-foreground-muted">
              Blog posts coming soon. Stay tuned!
            </p>
          </Card>
        </ScrollReveal>
      </Section>
    );
  }

  return (
    <Section id="blog">
      <SectionHeading
        title="Blog"
        subtitle="Thoughts on engineering, research, and everything in between."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.1}>
            <Link href={`/blog/${post.slug}`}>
              <Card className="group h-full flex flex-col">
                <div className="flex items-center gap-3 text-xs text-foreground-subtle mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-foreground-subtle transition-all group-hover:text-accent group-hover:translate-x-1"
                  />
                </div>
              </Card>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {posts.length > 3 && (
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View all posts <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </Section>
  );
}
