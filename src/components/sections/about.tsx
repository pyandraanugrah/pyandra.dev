import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/ui/section-reveal";
import { profileData } from "@/data/profile";
import { Code2, Sparkles, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-border">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="// 01. ABOUT"
            title="Background & Focus"
            description="A quick overview of my background, core focus areas, and technical mindset."
          />

          <div className="grid gap-6 md:grid-cols-12">
            {/* Main Biography Card */}
            <div className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-8 md:col-span-8 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-accent">
                  <Code2 className="h-4 w-4" />
                  <span>BIOGRAPHY</span>
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-primary-text/90">
                  {profileData.bio}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-2 items-center">
                <span className="font-mono text-xs text-secondary-text mr-2">Core Mindset:</span>
                <Badge variant="default">Clean Code</Badge>
                <Badge variant="default">Collaborative</Badge>
                <Badge variant="default">Continuous Learning</Badge>
                <Badge variant="accent">Frontend-Focused</Badge>
              </div>
            </div>

            {/* Quick Facts / Focus Cards */}
            <div className="flex flex-col gap-6 md:col-span-4">
              <div className="rounded-lg border border-border bg-surface p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-accent">
                  <GraduationCap className="h-4 w-4" />
                  <span>ACADEMIC STATUS</span>
                </div>
                <h3 className="font-semibold text-primary-text">Teknik Informatika</h3>
                <p className="text-sm text-secondary-text leading-relaxed">
                  Currently pursuing an Informatics Engineering degree, deepening foundations in computing, software architecture, and algorithms.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-accent">
                  <Sparkles className="h-4 w-4" />
                  <span>AREAS OF INTEREST</span>
                </div>
                <ul className="space-y-2 text-sm text-secondary-text">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Modern Web Development (React / Next.js)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Artificial Intelligence in Software</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Responsive UI & Developer Tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
