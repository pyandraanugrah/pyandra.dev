import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/ui/section-reveal";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 border-t border-border">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="// 04. EDUCATION"
            title="Academic Background"
            description="Formal education and theoretical foundation in computer science and engineering."
          />

          <div className="max-w-3xl">
            <div className="relative pl-6 sm:pl-8 border-l border-border space-y-8">
              {/* Timeline Item */}
              <div className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-border bg-surface group-hover:border-accent group-hover:bg-accent transition-colors" />

                <div className="rounded-lg border border-border bg-surface p-6 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-bold text-primary-text">
                        Teknik Informatika (Informatics Engineering)
                      </h3>
                    </div>
                    <Badge variant="accent" size="sm">
                      In Progress
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-secondary-text">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Undergraduate Degree Program</span>
                  </div>

                  <p className="text-sm leading-relaxed text-secondary-text">
                    Building strong foundations in algorithms, data structures, software engineering principles, web technologies, and database management systems.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <Badge variant="default" size="sm">Software Engineering</Badge>
                    <Badge variant="default" size="sm">Web Technologies</Badge>
                    <Badge variant="default" size="sm">Database Systems</Badge>
                    <Badge variant="default" size="sm">Algorithms & Data Structures</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
