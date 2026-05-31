import type { ReactNode } from "react";

import { GradientGlow } from "./GradientGlow";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
      <GradientGlow
        variant="hero"
        className="-right-28 -top-28"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2D7CFF]/45 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D7CFF]">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#F4F7FB] sm:text-5xl lg:text-6xl">
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
