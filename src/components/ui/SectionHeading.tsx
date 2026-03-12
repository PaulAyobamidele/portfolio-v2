"use client";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-foreground-muted text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
