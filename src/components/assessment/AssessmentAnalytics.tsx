"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

type AssessmentPageViewTrackerProps = {
  path: string;
};

export function AssessmentPageViewTracker({
  path
}: AssessmentPageViewTrackerProps) {
  useEffect(() => {
    trackEvent("assessment_page_view", { path });
  }, [path]);

  return null;
}

