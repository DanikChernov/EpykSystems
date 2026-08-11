import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { MaturityLegend } from "@/components/MaturityLegend";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  SolutionDirectory,
  type SolutionDirectoryItem
} from "@/components/SolutionDirectory";
import { createPageMetadata } from "@/lib/brand";
import {
  publishedSolutionAreas,
  solutionParentLines
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Solutions | Epyk Systems",
  description:
    "A concise directory of Epyk Systems solution areas for operational software, inventory and material control, private AI, edge infrastructure, Epyk Perception, and secure industrial modernization.",
  path: "/solutions"
});

export default function SolutionsPage() {
  const directorySolutions: SolutionDirectoryItem[] = publishedSolutionAreas.map(
    ({
      audience,
      directorySummary,
      directoryTags,
      parentLine,
      problem,
      representativeCapabilities,
      slug,
      status,
      title,
      typicalDeployment
    }) => ({
      audience,
      directorySummary,
      directoryTags,
      parentLine,
      problem,
      representativeCapabilities,
      slug,
      status,
      title,
      typicalDeployment
    })
  );

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="A concise directory of Epyk solution areas."
        description="Open a solution for a brief overview, or continue to its dedicated page for full details."
      />

      <Section className="border-b border-white/10">
        <div className="max-w-4xl border border-white/10 bg-white/[0.03] p-6 [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
            How Epyk approaches operational problems
          </p>
          <p className="mt-4 text-base leading-7 text-[#A7B0BE] sm:text-lg">
            Epyk begins with a real operational problem, then selects the
            software, infrastructure, intelligence, or integration required to
            solve it. Open a solution for a brief overview, or continue to its
            dedicated page for full details.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Solution directory"
        title="Scan the available paths."
        intro="All entries are collapsed by default. Opening one overview closes the others so the page stays compact."
      >
        <div className="mt-10">
          <SolutionDirectory
            solutions={directorySolutions}
            parentLines={solutionParentLines}
          />
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Maturity key
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Capability is labeled before you open a page.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              The same maturity labels appear across Solutions, Ecosystem, and
              Portfolio so current services, development work, architecture,
              research, and future environments stay distinct.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <MaturityLegend className="contents" />
          </div>
        </div>
      </Section>

      <CTASection
        title="Start with one real problem."
        description="Bring the workflow, infrastructure, intelligence, or integration issue that creates recurring friction. The first step stays focused."
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
