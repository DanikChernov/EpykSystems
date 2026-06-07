import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";
import { visionFeatures } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Epyk Vision | Industrial Computer Vision and Process Evidence",
  description:
    "Industrial computer vision for object and equipment tracking, workflow verification, process evidence, edge-ready pipelines, and operational system integration.",
  path: "/vision"
});

const useCases = [
  "Detecting whether materials or bins are present",
  "Confirming pickup/drop-off events",
  "Tracking equipment movement",
  "Supporting safety visibility",
  "Flagging process anomalies",
  "Linking visual events to jobs, inventory, or work orders"
];

const integrations = [
  "Epyk Operations for workflow events",
  "Epyk Inventories for material/bin visibility",
  "Dashboards for visual alerts and evidence",
  "Future multimodal operational assistants"
];

export default function VisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Epyk Vision"
        title="Visual context for real operations."
        description="Epyk Vision connects camera-based signals to operational context so teams can understand what happened, where it happened, and whether the process moved as expected."
      >
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(45,124,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(45,124,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
        >
          Discuss Vision
          <ArrowRight aria-hidden size={17} className="ml-2" />
        </Link>
      </PageHeader>

      <Section
        eyebrow="Operational perception"
        title="A future-facing product line for process evidence, object tracking, and floor visibility."
        intro="Epyk Vision is an industrial computer vision direction that can integrate with operations and inventory systems. It is built around clear purpose, appropriate permissions, and practical privacy boundaries."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visionFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-white/10 bg-[#080D14]/54"
        eyebrow="Vision that supports operations"
        title="Cameras should support operational clarity, not replace human judgment."
        intro="The goal is to reduce uncertainty, improve documentation, and connect visual events to operational workflows without turning the system into a monitoring culture."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Support teams with context around physical events and workflow movement.",
            "Preserve useful evidence for review without turning the system into a monitoring culture.",
            "Use edge or local deployment where privacy, bandwidth, or facility constraints matter."
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 text-sm leading-6 text-[#A7B0BE]"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Example use cases"
        title="Practical visual signals that connect to the work."
        intro="Epyk Vision is most useful when visual events become structured operational evidence: a bin is present, a part moved, a drop-off happened, a process drifted, or a safety-relevant signal needs review."
      >
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase}
              className="flex gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4"
            >
              <CheckCircle2
                aria-hidden
                size={18}
                className="mt-0.5 shrink-0 text-[#2D7CFF]"
              />
              <span className="text-sm leading-6 text-[#A7B0BE]">
                {useCase}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-white/10 bg-white/[0.02]"
        eyebrow="Built to integrate"
        title="Vision becomes more valuable when it connects to operations."
        intro="The long-term direction is a practical perception layer that turns camera-based operational signals into workflow context, inventory visibility, visual audit trails, and useful alerts."
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration) => (
            <div
              key={integration}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-sm font-medium leading-6 text-[#DDE3EA]"
            >
              {integration}
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Use visual context where it reduces operational uncertainty."
        description="Epyk Vision is advanced infrastructure for practical use cases: object tracking, process verification, safety awareness, and evidence that connects back to the work."
      />
    </>
  );
}
