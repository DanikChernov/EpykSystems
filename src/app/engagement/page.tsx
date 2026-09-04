import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { assessmentOffer, homepageAssessment } from "@/lib/assessment";
import { createPageMetadata } from "@/lib/brand";
import { engagementPage } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: engagementPage.metadataTitle,
  description: engagementPage.metadataDescription,
  path: engagementPage.path
});

export default function EngagementPage() {
  return (
    <>
      <PageHero
        eyebrow={engagementPage.hero.eyebrow}
        title={engagementPage.hero.title}
        description={engagementPage.hero.description}
      />

      <Section
        eyebrow="Stage-by-stage structure"
        title="The first step is designed to reduce ambiguity, not create dependency."
        intro="Each stage makes the next decision clearer. The client sees what happens, what they receive, and what Epyk needs before the work moves forward."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {engagementPage.stages.map((stage, index) => (
            <article
              key={stage.title}
              className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26)]"
            >
              <span className="flex size-9 items-center justify-center rounded-md border border-[#1D6FFF]/30 bg-[#1D6FFF]/10 text-sm font-semibold text-[#DDE3EA]">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#F4F7FA]">
                {stage.title}
              </h3>
              <dl className="mt-5 grid gap-4 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-[#DDE3EA]">What happens</dt>
                  <dd className="mt-1 text-[#A7B0BE]">{stage.whatHappens}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#DDE3EA]">
                    Client receives
                  </dt>
                  <dd className="mt-1 text-[#A7B0BE]">
                    {stage.clientReceives}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#DDE3EA]">Epyk needs</dt>
                  <dd className="mt-1 text-[#A7B0BE]">{stage.epykNeeds}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Scope boundaries
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Work begins only after the boundary is defined.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              The point of the engagement structure is to keep the first system
              bounded enough to build, review, hand over, and judge honestly.
            </p>
          </div>
          <ul className="grid gap-3">
            {engagementPage.scopeBoundaries.map((item) => (
              <li
                key={item}
                className="flex gap-3 border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-[#DDE3EA]"
              >
                <CheckCircle2
                  aria-hidden
                  size={18}
                  className="mt-0.5 shrink-0 text-[#1D6FFF]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="How pricing works"
        title="Scope comes before a quote."
        intro={engagementPage.pricing}
      >
        <div className="mt-10 border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm leading-6 text-[#A7B0BE]">
            {engagementPage.pricingNote}
          </p>
          <p className="mt-4 text-sm leading-6 text-[#DDE3EA]">
            {engagementPage.pricingEvidence}
          </p>
        </div>
      </Section>

      <Section
        className="border-y border-white/10 bg-[#080A0D]/56"
        eyebrow={homepageAssessment.eyebrow}
        title="When scope is unclear, start with the Manufacturing Friction Assessment."
        intro={homepageAssessment.description}
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="border border-[#F3C743]/24 bg-[#F3C743]/[0.07] p-6">
            <p className="text-3xl font-semibold tracking-tight text-[#F4F7FA]">
              {assessmentOffer.priceDisplay}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
              One facility, one workflow domain, one onsite working day, and a
              founder-led report walkthrough.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {homepageAssessment.bullets.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <a
          href={`${assessmentOffer.path}#${assessmentOffer.bookHash}`}
          className="epyk-button epyk-button-primary mt-8 inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(29,111,255,0.22)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
        >
          Start the Intake
        </a>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              What Epyk does not do
            </p>
            <ul className="mt-5 grid gap-3">
              {engagementPage.doesNotDo.map((item) => (
                <li key={item} className="text-sm leading-6 text-[#DDE3EA]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#F3C743]/20 bg-[#F3C743]/[0.055] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              What the client gets to keep
            </p>
            <ul className="mt-5 grid gap-3">
              {engagementPage.keeps.map((item) => (
                <li key={item} className="text-sm leading-6 text-[#DDE3EA]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        title="Start with a bounded conversation."
        description="Bring the operational problem first. The process is designed to make the next step clear before any build begins."
        secondaryLabel="View Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
