"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, Lightbulb, Zap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects, DOMAIN_COLORS, allDomains, type Project } from "@/data/projects";

function DomainBadge({ domain }: { domain: string }) {
  const color = DOMAIN_COLORS[domain] ?? "#666";
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
      style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}
    >
      {domain}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div
        className="group rounded-xl border border-border bg-background-secondary overflow-hidden transition-all duration-300 hover:border-border-hover"
        style={{ borderTop: `3px solid ${project.color}` }}
      >
        {/* Header — always visible */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex flex-wrap gap-1.5">
              {project.domains.map((d) => (
                <DomainBadge key={d} domain={d} />
              ))}
            </div>
            <span
              className="text-[11px] font-mono font-bold tracking-widest"
              style={{ color: project.color }}
            >
              {project.id}
            </span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-1">
            {project.title}
          </h3>
          <p className="text-sm italic mb-4" style={{ color: project.color }}>
            {project.tagline}
          </p>

          {/* Problem — the hook */}
          <p className="text-sm leading-relaxed text-foreground-muted">
            {project.problem}
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md px-2.5 py-1 text-[11px] font-mono bg-surface text-foreground-subtle"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer"
            style={{ color: project.color }}
          >
            {expanded ? "Show less" : "Impact & innovation"}
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Expanded section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-4 border-t border-border pt-4">
                {/* Impact */}
                <div className="flex gap-3">
                  <Zap size={16} className="shrink-0 mt-0.5" style={{ color: project.color }} />
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-widest text-foreground-subtle mb-1">
                      Real-World Impact
                    </span>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Innovation */}
                <div className="flex gap-3">
                  <Lightbulb size={16} className="shrink-0 mt-0.5" style={{ color: project.color }} />
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-widest text-foreground-subtle mb-1">
                      Technical Innovation
                    </span>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      {project.innovation}
                    </p>
                  </div>
                </div>

                {/* GitHub link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-accent"
                    style={{ color: project.color }}
                  >
                    <Github size={15} />
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export function Projects() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const filtered = activeDomain
    ? projects.filter((p) => p.domains.includes(activeDomain))
    : projects;

  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Backend-first, local AI systems built for real-world impact."
      />

      {/* Domain filter */}
      <ScrollReveal>
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveDomain(null)}
            className={`rounded-full px-4 py-1.5 text-sm transition-all cursor-pointer ${
              activeDomain === null
                ? "bg-accent text-white"
                : "bg-surface text-foreground-muted hover:bg-surface-hover"
            }`}
          >
            All
          </button>
          {allDomains.map((domain) => (
            <button
              key={domain}
              onClick={() =>
                setActiveDomain(activeDomain === domain ? null : domain)
              }
              className="rounded-full px-4 py-1.5 text-sm transition-all cursor-pointer"
              style={
                activeDomain === domain
                  ? {
                      background: DOMAIN_COLORS[domain],
                      color: "#fff",
                    }
                  : {
                      background: "var(--surface)",
                      color: "var(--foreground-muted)",
                    }
              }
            >
              {domain}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Project grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
