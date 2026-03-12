"use client";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", className)}
    >
      <div className={cn("mx-auto max-w-6xl px-6", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
