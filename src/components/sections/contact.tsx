import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";
import { profileData } from "@/data/profile";
import { Mail, Github, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="// 05. CONTACT"
            title="Let's Connect"
            description="Interested in collaborating, discussing frontend architectures, or exploring technical opportunities? Reach out directly."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* Email Card */}
            <div className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-8 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-accent">
                  <Mail className="h-4 w-4" />
                  <span>ELECTRONIC MAIL</span>
                </div>
                <h3 className="text-xl font-bold text-primary-text">Send a Message</h3>
                <p className="text-sm text-secondary-text leading-relaxed">
                  Direct inquiries regarding software projects, web development, or academic collaboration.
                </p>
                <div className="rounded border border-border bg-elevated p-3 font-mono text-sm text-primary-text select-all">
                  {profileData.email}
                </div>
              </div>

              <div className="pt-6">
                <Button
                  variant="primary"
                  href={`mailto:${profileData.email}`}
                  className="w-full sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  <span>Open Email Client</span>
                </Button>
              </div>
            </div>

            {/* GitHub & Source Card */}
            <div className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-8 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-accent">
                  <Github className="h-4 w-4" />
                  <span>VERSION CONTROL</span>
                </div>
                <h3 className="text-xl font-bold text-primary-text">GitHub Profile</h3>
                <p className="text-sm text-secondary-text leading-relaxed">
                  Explore open repositories, code contributions, commits, and experiments.
                </p>
                <div className="rounded border border-border bg-elevated p-3 font-mono text-sm text-primary-text select-all">
                  {profileData.githubUrl}
                </div>
              </div>

              <div className="pt-6">
                <Button
                  variant="secondary"
                  href={profileData.githubUrl}
                  external
                  className="w-full sm:w-auto gap-1.5"
                >
                  <Github className="h-4 w-4" />
                  <span>Visit GitHub Profile</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
