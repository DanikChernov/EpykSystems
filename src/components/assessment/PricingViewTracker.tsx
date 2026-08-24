"use client";

import { type ReactNode, useEffect, useRef } from "react";

import { trackEvent } from "@/lib/analytics";

type PricingViewTrackerProps = {
  children: ReactNode;
};

export function PricingViewTracker({ children }: PricingViewTrackerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      trackEvent("pricing_view", { surface: "assessment" });
      return;
    }

    let tracked = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!tracked && entry?.isIntersecting) {
          tracked = true;
          trackEvent("pricing_view", { surface: "assessment" });
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}

