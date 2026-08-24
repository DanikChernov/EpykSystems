"use client";

import Link from "next/link";
import { type ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type AssessmentCtaLinkProps = {
  href: string;
  children: ReactNode;
  location: string;
  className?: string;
  variant?: "primary" | "secondary";
};

const variantClasses = {
  primary:
    "border-[#1D6FFF]/45 bg-gradient-to-b from-[#1D6FFF] to-[#174FC2] text-white shadow-[0_0_26px_rgba(29,111,255,0.22)] hover:shadow-[0_0_34px_rgba(29,111,255,0.34)] focus-visible:ring-[#1D6FFF]/70",
  secondary:
    "border-white/12 bg-white/[0.04] text-[#DDE3EA] hover:border-[#F3C743]/35 hover:bg-white/[0.07] hover:text-white focus-visible:ring-[#F3C743]/70"
};

export function AssessmentCtaLink({
  href,
  children,
  location,
  className,
  variant = "primary"
}: AssessmentCtaLinkProps) {
  return (
    <Link
      href={href}
      onClick={() =>
        trackEvent("assessment_cta_click", {
          href,
          location,
          variant
        })
      }
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-center text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

