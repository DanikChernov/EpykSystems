import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { EcosystemCard } from "@/components/EcosystemCard";
import { EnvironmentDisclosure } from "@/components/EnvironmentDisclosure";
import { MaturityBadge } from "@/components/MaturityBadge";
import { MaturityLegend } from "@/components/MaturityLegend";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/brand";
import {
  edgeFamily,
  environmentZones,
  foundationEcosystemProjects,
  hospitalityCommitments,
  optionalTechnologyPrinciples,
  researchEcosystemProjects,
  sharedLanguage
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Ecosystem | Epyk Systems",
  description:
    "The Epyk ecosystem: Epyk Edge, Epyk AI, Epyk-1, Epyk-2, Epyk-3, Myne-0, Myne-1, Myne-2, Myne-3, and the long-term Epyk Environment.",
  path: "/ecosystem"
});

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem"
        title="Epyk Systems is one ecosystem being constructed in independently useful layers."
        description="The commercial work starts with practical systems that can help operations now. The larger vision connects infrastructure, intelligence, interfaces, control, perception, communications, energy, personal computing, fabrication, and a future physical environment."
      />

      <Section
        eyebrow="Foundation layers"
        title="Useful layers first. Complete integration over time."
        intro="Epyk does not need the entire ecosystem to be complete before individual layers become useful. The foundation layers connect current engagement paths to the larger architecture."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {foundationEcosystemProjects.map((project) => (
            <EcosystemCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <details className="group border border-white/10 bg-white/[0.03] p-6">
          <summary className="cursor-pointer list-none text-2xl font-semibold tracking-tight text-[#F4F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70">
            Research programs ({researchEcosystemProjects.length})
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#A7B0BE]">
            Long-horizon programs stay visible, but separated from the foundation
            layers and current engagement paths.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {researchEcosystemProjects.map((project) => (
              <EcosystemCard key={project.id} project={project} />
            ))}
          </div>
        </details>
      </Section>

      <Section>
        <details className="group border border-white/10 bg-white/[0.03] p-6">
          <summary className="cursor-pointer list-none text-2xl font-semibold tracking-tight text-[#F4F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70">
            Edge family
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#A7B0BE]">
            The family ranges from compact entry concepts to larger future
            architectures. Edge infrastructure services can be delivered today,
            while named hardware concepts remain architecture or research unless
            their status changes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {edgeFamily.map((item) => (
              <article
                key={item.title}
                className="border border-white/10 bg-[#030405]/44 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-[#F4F7FA]">
                    {item.title}
                  </h3>
                  <MaturityBadge maturity={item.status} />
                </div>
                <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </details>
      </Section>

      <Section
        className="border-y border-white/10 bg-white/[0.02]"
        eyebrow="Shared Epyk language"
        title="Every project may use different hardware, but every project should speak the same Epyk language."
        intro="The ecosystem needs a common operational foundation so devices, services, tools, sessions, and future environments can cooperate without collapsing into one uncontrolled platform."
      >
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sharedLanguage.map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA]"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <EnvironmentDisclosure
          zones={environmentZones}
          optionalTechnologyPrinciples={optionalTechnologyPrinciples}
          hospitalityCommitments={hospitalityCommitments}
        />
      </Section>

      <Section
        className="border-y border-white/10 bg-[#080A0D]/56"
        eyebrow="Maturity key"
        title="One vocabulary across the system."
        intro="The same maturity labels appear across Solutions, Ecosystem, and Portfolio."
      >
        <MaturityLegend className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" />
      </Section>

      <CTASection
        title="Use the vision to guide practical work."
        description="The ecosystem is ambitious, but current engagements still begin with one useful operational or infrastructure problem."
        secondaryLabel="View Current Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
