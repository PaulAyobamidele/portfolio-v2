import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { BlogList } from "@/components/BlogList";
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
        <p className="mb-8 text-lg text-foreground-muted">
          Thoughts on engineering, research, and everything in between.
        </p>

        <BlogList posts={posts} />
      </div>
    </div>
  );
}
