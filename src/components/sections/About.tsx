"use client";

import Image from "next/image";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { personal } from "@/data/personal";
import { timeline } from "@/data/timeline";

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  research: Briefcase,
};

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About"
        subtitle="My journey from Electrical Engineering to Fullstack Development and Research."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        {/* Left: Image + Currently */}
        <ScrollReveal direction="left" className="lg:col-span-2">
          <div className="space-y-6">
            {/* Profile image */}
            <div className="relative mx-auto w-64 lg:w-full">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 blur-lg" />
              <Image
                src={personal.avatar}
                alt={personal.name}
                width={400}
                height={400}
                className="relative rounded-2xl border border-border object-cover"
              />
            </div>

            {/* Currently section */}
            <Card className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-subtle">
                Currently
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">
                  <span className="text-accent font-medium">Building:</span>{" "}
                  {personal.currently.building}
                </p>
                <p className="text-foreground-muted">
                  <span className="text-accent font-medium">Researching:</span>{" "}
                  {personal.currently.researching}
                </p>
                <p className="text-foreground-muted">
                  <span className="text-accent font-medium">Reading:</span>{" "}
                  {personal.currently.reading}
                </p>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {personal.stats.map((stat) => (
                <Card key={stat.label} className="text-center p-4">
                  <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs text-foreground-subtle">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Bio + Timeline */}
        <ScrollReveal direction="right" className="lg:col-span-3">
          <div className="space-y-8">
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground-muted">
                {personal.shortBio}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-foreground-subtle">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent" />
                  {personal.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={14} className="text-accent" />
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-foreground">Journey</h3>
              <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
                {timeline.map((item, i) => {
                  const Icon = iconMap[item.type];
                  return (
                    <ScrollReveal key={i} delay={i * 0.1}>
                      <div className="relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background-secondary">
                          <Icon size={12} className="text-accent" />
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-foreground-subtle">
                            <span>{item.subtitle}</span>
                            <span className="text-border">|</span>
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {item.date}
                            </span>
                          </div>
                          {item.description && (
                            <p className="mt-1 text-sm text-foreground-muted">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
