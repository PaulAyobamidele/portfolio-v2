"use client";

import { Calendar, Presentation, FileText, Video } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { workshops, researchTools } from "@/data/workshops";

const typeIcons = {
  Workshop: Presentation,
  Talk: Presentation,
  Poster: FileText,
  Tutorial: FileText,
  Conference: Presentation,
};

export function Workshops() {
  if (workshops.length === 0 && researchTools.length === 0) {
    return null;
  }

  return (
    <Section id="workshops">
      {/* Workshops & Talks */}
      {workshops.length > 0 && (
        <>
          <SectionHeading
            title="Workshops & Talks"
            subtitle="Presentations, workshops, and talks I've given."
          />
          <div className="mb-16 grid gap-4 md:grid-cols-2">
            {workshops.map((workshop, i) => {
              const Icon = typeIcons[workshop.type];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">
                          {workshop.type}
                        </Badge>
                        <h4 className="font-semibold text-foreground">
                          {workshop.title}
                        </h4>
                        <p className="mt-1 text-sm text-foreground-muted">
                          {workshop.event}
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-foreground-subtle">
                          <Calendar size={12} />
                          {workshop.date}
                        </p>
                        <p className="mt-2 text-sm text-foreground-muted">
                          {workshop.description}
                        </p>
                        <div className="mt-3 flex gap-3">
                          {workshop.slidesUrl && (
                            <a
                              href={workshop.slidesUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover"
                            >
                              <FileText size={14} /> Slides
                            </a>
                          )}
                          {workshop.recordingUrl && (
                            <a
                              href={workshop.recordingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover"
                            >
                              <Video size={14} /> Recording
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </>
      )}

      {/* Research Tools */}
      {researchTools.length > 0 && (
        <>
          <SectionHeading
            title="Research Tools"
            subtitle="Open-source tools and frameworks I've built or contributed to."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {researchTools.map((tool, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="h-full space-y-3">
                  <h4 className="font-semibold text-foreground font-mono">
                    {tool.name}
                  </h4>
                  <p className="text-sm text-foreground-muted">{tool.description}</p>
                  {tool.installCommand && (
                    <code className="block rounded-lg bg-surface px-4 py-2 text-sm text-accent font-mono">
                      $ {tool.installCommand}
                    </code>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tags.map((tag) => (
                      <Badge key={tag} variant="accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {tool.githubUrl && (
                    <a
                      href={tool.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-accent-hover"
                    >
                      View on GitHub &rarr;
                    </a>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
