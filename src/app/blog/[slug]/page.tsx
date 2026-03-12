import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXContent } from "./mdx-content";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          All posts
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-foreground-subtle mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.frontmatter.readingTime}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {post.frontmatter.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-accent-muted px-3 py-1 text-xs font-medium text-accent-hover"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground-muted prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-accent prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-blockquote:border-accent prose-blockquote:text-foreground-muted prose-li:text-foreground-muted">
          <MDXContent source={post.content} />
        </div>
      </div>
    </article>
  );
}
