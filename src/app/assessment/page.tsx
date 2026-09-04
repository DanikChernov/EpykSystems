import {
  ArrowRight,
  BadgeDollarSign,
  ClipboardCheck,
  Factory,
  FileText,
  Gauge,
  MapPinned,
  Route,
  ShieldCheck,
  Wrench
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AssessmentPageViewTracker } from "@/components/assessment/AssessmentAnalytics";
import { AssessmentCtaLink } from "@/components/assessment/AssessmentCtaLink";
import { AssessmentFaq } from "@/components/assessment/AssessmentFaq";
import { AssessmentIntakeForm } from "@/components/assessment/AssessmentIntakeForm";
import { PricingViewTracker } from "@/components/assessment/PricingViewTracker";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/brand";
import {
  assessmentBoundary,
  assessmentEngagementSequence,
  assessmentFit,
  assessmentHero,
  assessmentNotFit,
  assessmentOffer,
  assessmentServiceJsonLd,
  assessmentScopeExclusions,
  assessmentStages,
  clientDeliverables,
  controlledDataWarning,
  evidenceClasses,
  evidenceConfidenceRule,
  evidenceFields,
  exampleFindings,
  findingModel,
  knowledgeRetentionQuestions,
  observedFrictionSignals,
  remediationPaths,
  stageOneBoundary,
  validationRequirements,
  workflowDomains
} from "@/lib/assessment";

const pageMetadata = createPageMetadata({
  title: "Manufacturing Friction Assessment | Epyk Systems",
  description:
    "A fixed-scope manufacturing operational assessment for one facility and one workflow domain, with onsite observation, evidence-backed findings, quantified impact where defensible, and a remediation roadmap.",
  path: assessmentOffer.path,
  robots: {
    index: true,
    follow: true
  }
});

export const metadata: Metadata = {
  ...pageMetadata,
  keywords: [
    "manufacturing process assessment",
    "manufacturing workflow consulting",
    "manufacturing operational assessment",
    "shop floor process improvement",
    "manufacturing systems consulting",
    "CNC workflow optimization",
    "manufacturing digital transformation Erie PA",
    "manufacturing software consultant Erie PA"
  ]
};

const bookHref = `${assessmentOffer.path}#${assessmentOffer.bookHash}`;

export default function AssessmentPage() {
  return (
    <>
      <AssessmentPageViewTracker path={assessmentOffer.path} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(assessmentServiceJsonLd)
        }}
      />

      <section className="relative overflow-hidden border-b border-white/10 px-5 py-20 sm:py-24 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8C96A3]/45 to-transparent" />
        <div className="mx-auto grid max-w-7xl min-w-0 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="min-w-0 max-w-[22rem] sm:max-w-4xl">
            <p className="max-w-full break-words text-xs font-semibold uppercase tracking-[0.16em] text-[#F3C743] sm:text-sm sm:tracking-[0.22em]">
              {assessmentHero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl break-words text-3xl font-semibold leading-tight tracking-tight text-[#F4F7FA] sm:text-5xl lg:text-6xl">
              {assessmentHero.title}
            </h1>
            <p className="mt-6 max-w-3xl break-words text-base leading-7 text-[#A7B0BE] sm:text-lg sm:leading-8">
              {assessmentHero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="max-w-full break-words rounded-md border border-[#F3C743]/24 bg-[#F3C743]/[0.08] px-4 py-2 text-sm font-semibold text-[#F3C743]">
                {assessmentOffer.priceDisplay}
              </span>
              <span className="max-w-full break-words rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#DDE3EA]">
                One facility, one workflow, one onsite working day
              </span>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AssessmentCtaLink href={bookHref} location="assessment_hero">
                Book an Assessment
                <ArrowRight aria-hidden size={17} className="ml-2" />
              </AssessmentCtaLink>
              <AssessmentCtaLink
                href="#process"
                location="assessment_hero"
                variant="secondary"
              >
                See How It Works
              </AssessmentCtaLink>
            </div>
          </div>

          <div className="relative min-w-0 max-w-[22rem] sm:max-w-none">
            <div className="overflow-hidden border border-white/10 bg-[#080A0D]/70 shadow-[0_28px_120px_rgba(0,0,0,0.46)] [clip-path:polygon(0_0,calc(100%-24px)_0,100%_24px,100%_100%,0_100%)]">
              <div className="relative aspect-[16/10] border-b border-white/10">
                <Image
                  src="/images/portfolio/epykops/08-shop-flow.png"
                  alt="Manufacturing workflow map interface used to review job flow and handoffs."
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority
                  className="object-cover object-left-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030405]/72 via-transparent to-transparent" />
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-3">
                {[
                  ["OBSERVED", "Facts witnessed onsite"],
                  ["CLIENT-PROVIDED", "Inputs from people or systems"],
                  ["MODELED", "Ranges with assumptions shown"]
                ].map(([label, description]) => (
                  <div key={label} className="border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
                      {label}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[#A7B0BE]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="border-b border-white/10 bg-white/[0.02]">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              Fixed-scope first step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              For manufacturers with real friction and unclear technical scope.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              The assessment is a commercial service, not a mandatory gateway.
              Prospects who already know the system, integration, or build they
              need can still use Epyk&apos;s normal scoping path.
            </p>
            <Link
              href="/engagement"
              className="mt-6 inline-flex text-sm font-semibold text-[#DDE3EA] underline decoration-[#1D6FFF]/45 underline-offset-4 transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
            >
              See normal engagement structure
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {assessmentFit.map((item) => (
              <article
                key={item.title}
                className="border border-white/10 bg-white/[0.03] p-5"
              >
                <Factory
                  aria-hidden
                  size={20}
                  className="text-[#F3C743]"
                  strokeWidth={1.8}
                />
                <h3 className="mt-4 text-base font-semibold text-[#F4F7FA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What it covers"
        title="One workflow domain, followed through the real operation."
        intro="Intake selects one bounded workflow domain so observation can stay practical and the final report can stay defensible."
      >
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid gap-3">
            {workflowDomains.map((domain) => (
              <div
                key={domain}
                className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA]"
              >
                {domain}
              </div>
            ))}
          </div>

          <div className="border border-white/10 bg-[#080A0D]/56 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Common friction signals
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {observedFrictionSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-sm border border-white/10 bg-[#030405]/50 px-2.5 py-1 text-xs font-medium text-[#DDE3EA]"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Knowledge-retention discovery
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Tribal knowledge is operational risk, even before software is discussed.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              The assessment looks for knowledge that lives in memory, side
              notes, informal calls, and undocumented workarounds. Those risks
              can justify action on their own.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {knowledgeRetentionQuestions.map((question) => (
              <div
                key={question}
                className="border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-[#DDE3EA]"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="Four-stage process"
        title="The assessment moves from fit, to observation, to evidence, to decision."
        intro="The process is intentionally narrow: a free intake, one onsite working day, off-site analysis, and a founder-led walkthrough."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {assessmentStages.map((stage) => (
            <article
              key={stage.title}
              className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
                {stage.stage}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#F4F7FA]">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#F3C743]">
                {stage.duration}
              </p>
              <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
                {stage.description}
              </p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#DDE3EA]">
                {stage.outputs.map((output) => (
                  <li key={output} className="flex gap-2">
                    <ClipboardCheck
                      aria-hidden
                      size={16}
                      className="mt-1 shrink-0 text-[#1D6FFF]"
                    />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 border border-white/10 bg-[#030405]/44 p-6">
          <h3 className="text-xl font-semibold tracking-tight text-[#F4F7FA]">
            Engagement sequence
          </h3>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {assessmentEngagementSequence.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-[#DDE3EA]"
              >
                <span className="shrink-0 font-semibold text-[#F3C743]">
                  {index + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              Evidence methodology
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Findings keep facts, assumptions, and confidence separate.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              Every important finding is tied to an evidence class. Where
              possible, the report preserves source, timestamp, measurement
              method, provider, sample count, and observation period.
            </p>
            <div className="mt-6 border border-[#F3C743]/20 bg-[#F3C743]/[0.055] p-5">
              <p className="text-sm font-semibold text-[#F4F7FA]">
                {evidenceConfidenceRule}
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-3">
              {evidenceClasses.map((item) => (
                <article
                  key={item.label}
                  className="border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {evidenceFields.map((field) => (
                <div
                  key={field}
                  className="border border-white/10 bg-[#030405]/44 px-4 py-3 text-sm text-[#DDE3EA]"
                >
                  {field}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Finding model"
        title="Severity is calculated. Priority is judged."
        intro="The assessment does not use an old composite score. Impact, frequency, confidence, and effort stay visible so the client can see why a finding is prioritized."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-3">
            {findingModel.axes.map((axis) => (
              <div
                key={axis.label}
                className="grid gap-2 border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-[0.35fr_0.18fr_1fr] sm:items-start"
              >
                <p className="text-sm font-semibold text-[#F4F7FA]">
                  {axis.label}
                </p>
                <p className="text-sm font-semibold text-[#F3C743]">
                  {axis.range}
                </p>
                <p className="text-sm leading-6 text-[#A7B0BE]">
                  {axis.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            <div className="border border-[#F3C743]/20 bg-[#F3C743]/[0.055] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
                Material finding definition
              </p>
              <p className="mt-3 text-base leading-7 text-[#DDE3EA]">
                {findingModel.materialDefinition}
              </p>
            </div>
            {findingModel.priorityBands.map((band) => (
              <article
                key={band.label}
                className="border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-base font-semibold text-[#F4F7FA]">
                  {band.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#A7B0BE]">
                  {band.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Example finding patterns
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Findings show evidence, severity, confidence, effort, and path.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              These examples show the report structure, not customer results or
              promised savings.
            </p>
          </div>
          <div className="grid gap-4">
            {exampleFindings.map((finding) => (
              <article
                key={finding.id}
                className="border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-sm border border-[#1D6FFF]/30 bg-[#1D6FFF]/10 px-2.5 py-1 text-xs font-semibold text-[#DDE3EA]">
                    {finding.id}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
                    {finding.evidenceClass}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#F4F7FA]">
                  {finding.finding}
                </h3>
                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-5">
                  {[
                    ["Severity", finding.severity],
                    ["Confidence", finding.confidence],
                    ["Effort", finding.effort],
                    ["Priority", finding.priority],
                    ["Path", finding.recommendedPath]
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C96A3]">
                        {label}
                      </dt>
                      <dd className="mt-1 text-[#DDE3EA]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Client deliverable"
        title="The report creates a baseline for action and future validation."
        intro="For quantified findings, the assessment captures how the baseline was measured and how it should be re-measured after remediation. It does not invent automatic savings."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {clientDeliverables.map((deliverable) => (
              <article
                key={deliverable.title}
                className="border border-white/10 bg-white/[0.03] p-5"
              >
                <FileText
                  aria-hidden
                  size={20}
                  className="text-[#1D6FFF]"
                  strokeWidth={1.8}
                />
                <h3 className="mt-4 text-base font-semibold text-[#F4F7FA]">
                  {deliverable.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                  {deliverable.description}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-5">
            <div className="border border-white/10 bg-[#030405]/44 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
                Before / after validation
              </p>
              <div className="mt-5 grid gap-3">
                {validationRequirements.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-[#DDE3EA]"
                  >
                    <Gauge
                      aria-hidden
                      size={16}
                      className="mt-1 shrink-0 text-[#1D6FFF]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-white/10 bg-[#030405]/44 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
                Valid remediation paths
              </p>
              <div className="mt-5 grid gap-3">
                {remediationPaths.map((path) => (
                  <div key={path} className="flex gap-3 text-sm leading-6 text-[#DDE3EA]">
                    <Wrench
                      aria-hidden
                      size={16}
                      className="mt-1 shrink-0 text-[#F3C743]"
                    />
                    <span>{path}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Scope boundaries
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Focused enough to finish, explicit enough to trust.
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-7 text-[#A7B0BE]">
              <p>{stageOneBoundary}</p>
              <p>{assessmentBoundary}</p>
              <p>{controlledDataWarning}</p>
            </div>
          </div>
          <div className="grid gap-3">
            {[...assessmentScopeExclusions, ...assessmentNotFit].map((item) => (
              <div
                key={item}
                className="flex gap-3 border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-[#DDE3EA]"
              >
                <ShieldCheck
                  aria-hidden
                  size={18}
                  className="mt-0.5 shrink-0 text-[#1D6FFF]"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <PricingViewTracker>
        <Section
          className="border-b border-white/10"
          eyebrow="Pricing and timeline"
          title={assessmentOffer.priceDisplay}
          intro="A clear commercial entry point for manufacturers that need the problem understood before choosing a fix."
        >
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="border border-[#F3C743]/24 bg-[#F3C743]/[0.07] p-6">
              <BadgeDollarSign
                aria-hidden
                size={28}
                className="text-[#F3C743]"
                strokeWidth={1.7}
              />
              <p className="mt-5 text-4xl font-semibold tracking-tight text-[#F4F7FA]">
                $3,500
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
                Fixed price
              </p>
              <div className="mt-6 grid gap-3 text-sm leading-6 text-[#DDE3EA]">
                <p>{assessmentOffer.deposit}</p>
                <p>{assessmentOffer.finalPayment}</p>
              </div>
              <AssessmentCtaLink
                href={bookHref}
                location="assessment_pricing"
                className="mt-7 w-full"
              >
                Book an Assessment
                <ArrowRight aria-hidden size={17} className="ml-2" />
              </AssessmentCtaLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ...assessmentOffer.scope,
                assessmentOffer.draftTarget,
                assessmentOffer.walkthroughTarget,
                assessmentOffer.includedTravel,
                assessmentOffer.additionalTravel
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-[#DDE3EA]"
                >
                  <MapPinned
                    aria-hidden
                    size={17}
                    className="mt-1 shrink-0 text-[#1D6FFF]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </PricingViewTracker>

      <Section
        eyebrow="FAQ"
        title="Common questions before intake."
        intro="The intake call confirms fit before anyone schedules the paid onsite assessment."
      >
        <AssessmentFaq />
      </Section>

      <Section className="border-t border-white/10 bg-[#080A0D]/56">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Book an Assessment
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Start with the free intake.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              Submit enough context to choose the right first conversation. Do
              not upload or paste restricted technical content. If the assessment
              is not the right next step, Epyk will point you back to normal
              scoping instead.
            </p>
            <Link
              href={assessmentOffer.overviewPath}
              className="mt-6 inline-flex items-center text-sm font-semibold text-[#DDE3EA] underline decoration-[#1D6FFF]/45 underline-offset-4 transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
            >
              Open the one-page overview
              <Route aria-hidden size={16} className="ml-2" />
            </Link>
          </div>
          <AssessmentIntakeForm />
        </div>
      </Section>
    </>
  );
}
