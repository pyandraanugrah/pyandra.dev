import * as React from "react";
import { Container } from "@/components/ui/container";
import { profileData } from "@/data/profile";
import { ArrowUp, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50 py-12 transition-colors">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary-text">
              <Terminal className="h-3.5 w-3.5 text-accent" />
              <span>DEVELOPER.LOG // {profileData.displayName}</span>
            </div>
            <p className="text-xs text-secondary-text">
              Built with Next.js, React, TypeScript, and Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-secondary-text">
            <span className="break-words">© {currentYear} {profileData.name}</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors ml-auto sm:ml-0"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
