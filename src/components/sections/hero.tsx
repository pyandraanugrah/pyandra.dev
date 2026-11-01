import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";
import { TerminalCard } from "@/components/terminal/terminal-card";
import { profileData } from "@/data/profile";
import { ArrowDown, Github, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      <Container>
        <SectionReveal>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Hero Content */}
            <div className="flex flex-col items-start gap-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-secondary-text shadow-sm">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-accent">
                  <span>{"// IDENTITY"}</span>
                  <span className="text-secondary-text">::</span>
                  <span className="text-secondary-text font-normal">{profileData.title}</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-primary-text sm:text-5xl lg:text-6xl">
                  {profileData.displayName}
                </h1>
                <p className="text-xl font-medium text-primary-text/90 sm:text-2xl">
                  {profileData.headline}
                </p>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-secondary-text sm:text-lg">
                {profileData.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button size="lg" variant="primary" href="#projects">
                  <span>View Projects</span>
                  <ArrowDown className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="secondary" href="#contact">
                  <Mail className="h-4 w-4" />
                  <span>Contact Me</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  href={profileData.githubUrl}
                  external
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 text-xs font-mono text-secondary-text">
                <span>FOCUS: {profileData.focus}</span>
                <span>•</span>
                <span>EDU: {profileData.education}</span>
              </div>
            </div>

            {/* Right Column: Terminal Preview */}
            <div className="w-full lg:col-span-5">
              <TerminalCard />
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
