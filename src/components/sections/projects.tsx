import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/ui/section-reveal";
import { projectsData } from "@/data/projects";
import { ExternalLink, Github, Layers, Users, Smartphone, Laptop } from "lucide-react";

export function ProjectsSection() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "remindtask":
        return <Laptop className="h-5 w-5 text-accent" />;
      case "acicu":
        return <Users className="h-5 w-5 text-accent" />;
      case "siap-generus":
        return <Smartphone className="h-5 w-5 text-accent" />;
      default:
        return <Layers className="h-5 w-5 text-accent" />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-border">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="// 03. FEATURED PROJECTS"
            title="Engineered Works"
            description="A curated selection of three featured software projects, detailing purpose, architecture, and exact contributions."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {projectsData.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-lg border border-border bg-surface shadow-sm transition-all duration-200 hover:border-secondary-text/30"
              >
                <div className="p-5 sm:p-7 space-y-4 sm:space-y-5">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2.5">
                      {getProjectIcon(project.id)}
                      <div>
                        <span className="font-mono text-[11px] text-accent uppercase tracking-wider block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-primary-text">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-secondary-text min-h-[3.5rem] sm:min-h-[4rem]">
                    {project.description}
                  </p>

                  {/* Contribution note if available */}
                  {project.contribution && (
                    <div className="rounded border border-border bg-elevated/60 p-3 text-xs leading-relaxed text-secondary-text">
                      <span className="font-mono text-accent font-semibold block mb-1">
                        Role: {project.role}
                      </span>
                      <span>{project.contribution}</span>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[11px] text-secondary-text uppercase block">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="default" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-border bg-elevated/40 p-3.5 sm:px-6">
                  <Button
                    size="sm"
                    variant="outline"
                    href={project.repositoryUrl}
                    external
                    className="gap-1.5"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Repository</span>
                  </Button>

                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="primary"
                      href={project.liveUrl}
                      external
                      className="gap-1.5"
                      aria-label={`Open live demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
