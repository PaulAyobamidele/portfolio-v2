"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skillCategories } from "@/data/skills";

const levelColors = {
  Primary: "bg-accent/20 text-accent-hover",
  Proficient: "bg-emerald-500/15 text-emerald-400",
  Familiar: "bg-amber-500/15 text-amber-400",
  Learning: "bg-purple-500/15 text-purple-400",
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with daily."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, i) => (
          <ScrollReveal key={category.title} delay={i * 0.1}>
            <Card className="h-full">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-lg bg-surface/50 px-3 py-2.5 transition-colors hover:bg-surface"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {skill.name}
                      </p>
                      <span
                        className={`inline-block mt-0.5 rounded-full px-2 py-0.5 text-[10px] font-medium ${levelColors[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-foreground-subtle">
        {Object.entries(levelColors).map(([level, classes]) => (
          <span key={level} className="flex items-center gap-1.5">
            <span className={`inline-block h-2 w-2 rounded-full ${classes.split(" ")[0]}`} />
            {level}
          </span>
        ))}
      </div>
    </Section>
  );
}
