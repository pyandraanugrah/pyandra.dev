import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/ui/section-reveal";
import { skillsData } from "@/data/skills";
import { Layout, Database, Terminal, Wrench } from "lucide-react";

export function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend Development":
        return <Layout className="h-4 w-4 text-accent" />;
      case "Backend & Database":
        return <Database className="h-4 w-4 text-accent" />;
      case "Programming Languages":
        return <Terminal className="h-4 w-4 text-accent" />;
      case "Tools & Workflow":
        return <Wrench className="h-4 w-4 text-accent" />;
      default:
        return <Terminal className="h-4 w-4 text-accent" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-border">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="// 02. SKILLS"
            title="Technical Capabilities"
            description="Technologies, frameworks, and tools used across personal and collaborative software projects."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillsData.map((category) => (
              <div
                key={category.category}
                className="flex flex-col rounded-lg border border-border bg-surface p-6 shadow-sm transition-all duration-200 hover:border-secondary-text/30"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  {getCategoryIcon(category.category)}
                  <h3 className="font-mono text-xs font-semibold tracking-wider text-primary-text uppercase">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="default"
                      className="hover:border-accent hover:text-primary-text transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-elevated/50 p-4 text-xs font-mono text-secondary-text flex items-center justify-between flex-wrap gap-2">
            <span>{"// VERIFIED SKILLS ONLY"}</span>
            <span>NO ARBITRARY PERCENTAGES OR PROGRESS BARS</span>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
