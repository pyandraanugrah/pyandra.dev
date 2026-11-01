import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 mb-8 sm:mb-12",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs font-medium tracking-wider text-accent uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-primary-text sm:text-3xl break-words">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-secondary-text sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
