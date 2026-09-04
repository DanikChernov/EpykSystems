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
  primary: "epyk-button-primary text-white",
  secondary: "epyk-button-secondary text-[#DDE3EA]"
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
        "epyk-button inline-flex min-h-12 items-center justify-center border px-5 py-3 text-center text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

