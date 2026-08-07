import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { BrandHero } from "@/components/BrandHero";
import { FounderCard } from "@/components/FounderCard";
import { MaturityBadge } from "@/components/MaturityBadge";
import { PrincipleList } from "@/components/PrincipleList";
import { Section } from "@/components/Section";
import { brand, createPageMetadata } from "@/lib/brand";
import {
  engagementSteps,
  featuredSolutionAreas,
  localFirstPoints,
  proofItems,
  solutionParentLines
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title:
    "Epyk Systems | Operational Software and Private Infrastructure for Manufacturers",
  description:
    "Founder-led operational software, inventory and material-control systems, private AI, and owner-controlled infrastructure for manufacturers.",
  path: "/"
});

export default function Home() {
  return (
    <>
      <BrandHero />

      <Section className="border-b border-white/10 bg-white/[0.02]">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <FounderCard />
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              Founder-led delivery
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              The person assessing the operation is the person building the system.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              Epyk Systems is intentionally direct: the engagement starts with
              operational assessment, moves through scoped design and build, and
              finishes with testing and handover around the actual workflow.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Built for Real Operations"
        title="What Epyk builds today."
        intro="Epyk currently applies local-first architecture to manufacturers, industrial teams, private infrastructure, local AI, workflow systems, inventory and material control, operational perception, secure machine connectivity, and technically complex environments."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {solutionParentLines.map((line) => {
            const children = featuredSolutionAreas.filter(
              (solution) =>
                solution.parentLine === line.title &&
                solution.showOnHome !== false
            );

            return (
              <article
                key={line.title}
                className="border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
                  {line.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
                  {line.description}
                </p>
                <div className="mt-6 grid gap-4">
                  {children.map((solution) => {
                    const Icon = solution.icon;

                    return (
                      <div
                        key={solution.slug}
                        className="border border-white/10 bg-[#030405]/44 p-4"
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <Icon
                            aria-hidden
                            size={18}
                            strokeWidth={1.8}
                            className="text-[#1D6FFF]"
                          />
                          <h3 className="text-base font-semibold text-[#F4F7FA]">
                            {solution.title}
                          </h3>
                          <MaturityBadge maturity={solution.status} />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                          {solution.directorySummary}
                        </p>
                        <Link
                          href={`/solutions/${solution.slug}`}
                          className="mt-4 inline-flex items-center text-sm font-semibold text-[#DDE3EA] transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                        >
                          View solution
                          <ArrowRight aria-hidden size={15} className="ml-2" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Start with one painful workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Start where the operation already hurts.
            </h2>
            <div className="mt-5 space-y-5 text-base leading-7 text-[#A7B0BE] sm:text-lg">
              <p>
                Epyk begins with the problem that causes real friction every
                week, not with a predetermined platform sale. Epyk does not
                force unnecessary replacement or transformation.
              </p>
              <p>
                Local infrastructure and private operation form the resilient
                foundation: {localFirstPoints.join(", ")}.
              </p>
            </div>
            <Link
              href="/solutions"
              className="mt-8 inline-flex items-center text-sm font-semibold text-[#DDE3EA] transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
            >
              Explore current solution paths
              <ArrowRight aria-hidden size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid gap-4">
            {engagementSteps.map((step, index) => (
              <article
                key={step.title}
                className="border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="flex size-9 items-center justify-center rounded-md border border-[#1D6FFF]/30 bg-[#1D6FFF]/10 text-sm font-semibold text-[#DDE3EA]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#F4F7FA]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Proof and selected work"
        title="Practical work, labeled honestly."
        intro="Selected systems are tied to explicit maturity labels, provenance, and the public evidence that is approved for release."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {proofItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.3)] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 text-[#DDE3EA]">
                    <Icon aria-hidden size={21} strokeWidth={1.8} />
                  </div>
                  <MaturityBadge maturity={item.status} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#F4F7FA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                  {item.problem}
                </p>
                <Link
                  href="/portfolio"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#DDE3EA] transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                >
                  View portfolio context
                  <ArrowRight aria-hidden size={15} className="ml-2" />
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        className="border-y border-white/10 bg-white/[0.02]"
        eyebrow="The larger ecosystem"
        title="One ecosystem being constructed in useful layers."
        intro="The larger system covers infrastructure, intelligence, interfaces, control, perception, communications, energy, personal computing, and fabrication."
      >
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <ArchitectureDiagram compact />
          <div className="max-w-xl">
            <Link
              href="/ecosystem"
              className="inline-flex items-center text-sm font-semibold text-[#DDE3EA] transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
            >
              See the Complete Ecosystem
              <ArrowRight aria-hidden size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Lived principles"
        title="Operating principles, not decorative slogans."
        intro="The site, the service model, and the long-term environment should behave consistently with the company promise."
      >
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="border border-[#F3C743]/20 bg-[#F3C743]/[0.055] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              God-centered, never coercive
            </p>
            <p className="mt-4 text-sm leading-6 text-[#DDE3EA]">
              {brand.godCenteredStatement}
            </p>
          </div>
          <PrincipleList />
        </div>

        <div className="mt-12 border border-white/10 bg-[linear-gradient(135deg,rgba(17,21,26,0.92),rgba(8,10,13,0.98),rgba(3,4,5,0.96))] p-8 [clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,0_100%)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F4F7FA]">
              Start with one real problem.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#A7B0BE]">
              Bring one painful workflow or infrastructure problem into the
              open. If Epyk can help, the first step is focused, practical, and
              tied to the way the operation actually works.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md border border-[#1D6FFF]/45 bg-gradient-to-b from-[#1D6FFF] to-[#174FC2] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(29,111,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(29,111,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405] lg:mt-0"
          >
            Discuss Your Operation
            <ArrowRight aria-hidden size={17} className="ml-2" />
          </Link>
        </div>
      </Section>
    </>
  );
}
