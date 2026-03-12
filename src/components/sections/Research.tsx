"use client";

import { useState } from "react";
import { FileText, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { publications, researchInterests } from "@/data/publications";

function PublicationCard({ pub }: { pub: (typeof publications)[0] }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showPlain, setShowPlain] = useState(false);

  return (
    <Card className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-semibold text-foreground leading-snug">{pub.title}</h4>
          <p className="mt-1 text-sm text-foreground-muted">
            {pub.authors.join(", ")}
          </p>
          <p className="mt-1 text-sm text-foreground-subtle">
            {pub.venue} &middot; {pub.year}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {pub.tags.map((tag) => (
          <Badge key={tag} variant="accent">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Toggles */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setShowAbstract(!showAbstract)}
          className="flex items-center gap-1 text-sm text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
        >
          {showAbstract ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          Abstract
        </button>
        {pub.plainSummary && (
          <button
            onClick={() => setShowPlain(!showPlain)}
            className="flex items-center gap-1 text-sm text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
          >
            {showPlain ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            Plain Summary
          </button>
        )}
        {pub.pdfUrl && (
          <a
            href={pub.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            <FileText size={14} />
            PDF
          </a>
        )}
        {pub.url && (
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            <ExternalLink size={14} />
            Link
          </a>
        )}
      </div>

      {/* Abstract */}
      {showAbstract && (
        <div className="rounded-lg bg-surface p-4 text-sm leading-relaxed text-foreground-muted">
          {pub.abstract}
        </div>
      )}

      {/* Plain summary */}
      {showPlain && pub.plainSummary && (
        <div className="rounded-lg border border-accent/20 bg-accent-muted p-4 text-sm leading-relaxed text-foreground-muted">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-accent">
            In plain language
          </span>
          {pub.plainSummary}
        </div>
      )}
    </Card>
  );
}

export function Research() {
  return (
    <Section id="research">
      <SectionHeading
        title="Research"
        subtitle="My research interests, publications, and contributions to the academic community."
      />

      {/* Research Interests */}
      <ScrollReveal>
        <h3 className="mb-6 text-xl font-semibold text-foreground">Research Interests</h3>
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {researchInterests.map((interest, i) => (
            <ScrollReveal key={interest.title} delay={i * 0.1}>
              <Card className="text-center h-full">
                <span className="mb-3 block text-3xl">{interest.icon}</span>
                <h4 className="mb-2 font-semibold text-foreground">{interest.title}</h4>
                <p className="text-sm leading-relaxed text-foreground-muted">
                  {interest.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* Publications */}
      <ScrollReveal>
        <h3 className="mb-6 text-xl font-semibold text-foreground">
          Publications
          <span className="ml-2 text-sm font-normal text-foreground-subtle">
            ({publications.length})
          </span>
        </h3>
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <PublicationCard pub={pub} />
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
