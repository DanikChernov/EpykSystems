import type { ReactNode } from "react";

import { type MaturityStatus } from "@/lib/site";

import { GradientGlow } from "./GradientGlow";
import { StatusBadge } from "./StatusBadge";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  status?: MaturityStatus;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  status,
  children
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
      <GradientGlow variant="hero" className="-right-20 top-10 rotate-[-9deg]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8C96A3]/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1D6FFF]/35 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              {eyebrow}
            </p>
            {status ? <StatusBadge status={status} /> : null}
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#F4F7FA] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A7B0BE]">
            {description}
          </p>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
