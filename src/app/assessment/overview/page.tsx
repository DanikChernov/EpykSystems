import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PrintOverviewButton } from "@/components/assessment/PrintOverviewButton";
import { createPageMetadata } from "@/lib/brand";
import {
  assessmentBoundary,
  assessmentOffer,
  controlledDataWarning,
  evidenceClasses,
  findingModel,
  remediationPaths,
  stageOneBoundary
} from "@/lib/assessment";

export const metadata: Metadata = createPageMetadata({
  title: "Assessment Overview | Epyk Systems",
  description:
    "One-page overview of the Epyk Manufacturing Friction Assessment scope, pricing, evidence model, and deliverables.",
  path: assessmentOffer.overviewPath
});

export default function AssessmentOverviewPage() {
  return (
    <section className="relative px-5 py-12 print:bg-white print:px-0 print:py-0 print:text-black lg:px-8">
      <div className="mx-auto max-w-5xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_120px_rgba(0,0,0,0.42)] print:border-0 print:bg-white print:p-8 print:shadow-none sm:p-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 print:border-black/20 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743] print:text-black">
              Epyk Systems
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#F4F7FA] print:text-black sm:text-4xl">
              Epyk Manufacturing Friction Assessment
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#A7B0BE] print:text-black">
              Find where your operation is losing time, money, and knowledge
              before buying more software.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={assessmentOffer.path}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[#DDE3EA] transition hover:border-[#F3C743]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C743]/70 print:hidden"
            >
              <ArrowLeft aria-hidden size={16} className="mr-2" />
              Assessment Page
            </Link>
            <PrintOverviewButton />
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="border border-[#F3C743]/24 bg-[#F3C743]/[0.07] p-5 print:border-black/20 print:bg-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743] print:text-black">
              Commercial structure
            </p>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-[#F4F7FA] print:text-black">
              {assessmentOffer.priceDisplay}
            </p>
            <div className="mt-5 grid gap-2 text-sm leading-6 text-[#DDE3EA] print:text-black">
              <p>{assessmentOffer.deposit}</p>
              <p>{assessmentOffer.finalPayment}</p>
              <p>{assessmentOffer.includedTravel}</p>
              <p>{assessmentOffer.additionalTravel}</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {assessmentOffer.scope.map((item) => (
              <div
                key={item}
                className="flex gap-2 border border-white/10 bg-[#030405]/44 p-3 text-sm leading-6 text-[#DDE3EA] print:border-black/20 print:bg-white print:text-black"
              >
                <CheckCircle2
                  aria-hidden
                  size={16}
                  className="mt-1 shrink-0 text-[#1D6FFF] print:text-black"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold text-[#F4F7FA] print:text-black">
              Process
            </h2>
            <ol className="mt-3 grid gap-2 text-sm leading-6 text-[#A7B0BE] print:text-black">
              <li>1. Free 15-20 minute intake</li>
              <li>2. One working day onsite observation</li>
              <li>3. Off-site analysis and draft report</li>
              <li>4. Founder-led final walkthrough</li>
            </ol>
          </div>
          <div>
            <h2 className="text-base font-semibold text-[#F4F7FA] print:text-black">
              Evidence classes
            </h2>
            <div className="mt-3 grid gap-2 text-sm leading-6 text-[#A7B0BE] print:text-black">
              {evidenceClasses.map((item) => (
                <p key={item.label}>
                  <span className="font-semibold text-[#DDE3EA] print:text-black">
                    {item.label}:
                  </span>{" "}
                  {item.description}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-base font-semibold text-[#F4F7FA] print:text-black">
              Finding model
            </h2>
            <div className="mt-3 grid gap-2 text-sm leading-6 text-[#A7B0BE] print:text-black">
              <p>Impact 1-5, Frequency 1-5</p>
              <p>Severity = Impact x Frequency, range 1-25</p>
              <p>Confidence 1-5 and Effort 1-5 reported separately</p>
              <p>{findingModel.materialDefinition}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.03] p-5 print:border-black/20 print:bg-white">
            <h2 className="text-base font-semibold text-[#F4F7FA] print:text-black">
              Client receives
            </h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#A7B0BE] print:text-black">
              <li>Executive summary and current-state workflow map</li>
              <li>Findings overview with severity, confidence, effort, priority, and path</li>
              <li>Detailed material findings and quantified impact ranges where defensible</li>
              <li>Remediation roadmap and next-step discussion</li>
            </ul>
          </div>
          <div className="border border-white/10 bg-white/[0.03] p-5 print:border-black/20 print:bg-white">
            <h2 className="text-base font-semibold text-[#F4F7FA] print:text-black">
              Remediation may include
            </h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#A7B0BE] print:text-black">
              {remediationPaths.map((path) => (
                <li key={path}>{path}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 border border-white/10 bg-[#030405]/44 p-5 print:border-black/20 print:bg-white">
          <h2 className="text-base font-semibold text-[#F4F7FA] print:text-black">
            Boundaries
          </h2>
          <div className="mt-3 grid gap-2 text-sm leading-6 text-[#A7B0BE] print:text-black">
            <p>{stageOneBoundary}</p>
            <p>{assessmentBoundary}</p>
            <p>{controlledDataWarning}</p>
            <p>This report is not an implementation quote.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
