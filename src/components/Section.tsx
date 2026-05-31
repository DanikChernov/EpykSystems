import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className,
  contentClassName
}: SectionProps) {
  return (
    <section className={cn("relative py-20 sm:py-24", className)}>
      <div className={cn("mx-auto max-w-7xl px-5 lg:px-8", contentClassName)}>
        {(eyebrow || title || intro) && (
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D7CFF]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FB] sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p className="mt-5 text-base leading-7 text-[#A7B0BE] sm:text-lg">
                {intro}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
