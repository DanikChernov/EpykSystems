import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";
import { operationsFeatures } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Epyk Operations | Workflow Visibility and Job Tracking",
  description:
    "Workflow visibility, job tracking, approvals, scheduling visibility, dashboards, audit logs, and practical operational automation for industrial teams.",
  path: "/operations"
});

const workflowOutcomes = [
  "Jobs move through visible stages instead of disappearing into messages.",
  "Approvals keep context attached to the decision.",
  "Managers can see schedule pressure, activity, and blockers earlier.",
  "Operators and field teams get a simpler way to update progress.",
  "Audit logs preserve the operational story behind the work."
];

const customizableFits = [
  "Manufacturing production flow",
  "Construction and jobsite coordination",
  "Fabrication shop scheduling",
  "Service and field team activity",
  "Internal operations and approvals"
];

export default function OperationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Epyk Operations"
        title="Workflow visibility for work that cannot be managed from memory."
        description="Epyk Operations gives teams a structured way to track jobs, approvals, schedules, progress, and activity history around real operational work."
      >
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(45,124,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(45,124,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
        >
          Discuss Operations
          <ArrowRight aria-hidden size={17} className="ml-2" />
        </Link>
      </PageHeader>

      <Section
        eyebrow="Core platform"
        title="A practical operating layer for jobs, approvals, teams, and progress."
        intro="The platform is designed for changing priorities, missing context, repeated approvals, and status uncertainty."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {operationsFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080D14]/54">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D7CFF]">
              Workflow evidence
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FB] sm:text-4xl">
              Make operational progress easier to see, prove, and improve.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              Epyk Operations brings job status, team activity, field or
              production progress, and approval decisions into one operating
              structure. The goal is to reduce the uncertainty that causes
              missed steps, rework, and stalled decisions.
            </p>
          </div>
          <div className="grid gap-3">
            {workflowOutcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4"
              >
                <CheckCircle2
                  aria-hidden
                  size={18}
                  className="mt-0.5 shrink-0 text-[#2D7CFF]"
                />
                <span className="text-sm leading-6 text-[#A7B0BE]">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-3 rounded-lg border border-white/10 bg-[#05070B]/58 p-4 md:grid-cols-5">
          {["Intake", "Approve", "Schedule", "Progress", "Audit"].map(
            (step, index) => (
              <div
                key={step}
                className="relative rounded-md border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7B8794]">
                  Step 0{index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold text-[#DDE3EA]">
                  {step}
                </p>
                {index < 4 ? (
                  <span
                    className="absolute right-[-0.4rem] top-1/2 hidden h-px w-3 bg-[#2D7CFF]/55 md:block"
                    aria-hidden
                  />
                ) : null}
              </div>
            )
          )}
        </div>
      </Section>

      <Section
        eyebrow="Operational fit"
        title="Configured around the way the business actually runs."
        intro="The same operating layer can support shop schedules, jobsite coordination, service activity, or internal approval flows."
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {customizableFits.map((fit) => (
            <div
              key={fit}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-sm font-medium leading-6 text-[#DDE3EA]"
            >
              {fit}
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Turn workflow friction into visible operating structure."
        description="Start with one high-friction workflow, then expand into approvals, reporting, scheduling visibility, and operational automation that fits the business."
      />
    </>
  );
}
