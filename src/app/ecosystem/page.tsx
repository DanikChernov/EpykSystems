import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CTASection } from "@/components/CTASection";
import { EcosystemCard } from "@/components/EcosystemCard";
import { EnvironmentZoneCard } from "@/components/EnvironmentZoneCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { createPageMetadata } from "@/lib/brand";
import {
  edgeFamily,
  ecosystemProjects,
  environmentZones,
  hospitalityCommitments,
  optionalTechnologyPrinciples,
  sharedLanguage
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Ecosystem | Epyk Systems",
  description:
    "The Epyk ecosystem: Epyk Edge, Epyk AI, Epyk-1, Epyk-2, Epyk-3, Myne-0, Myne-1, Myne-2, Myne-3, and the long-term Epyk Environment.",
  path: "/ecosystem"
});

export default function EcosystemPage() {
  const edge = ecosystemProjects.find((project) => project.title === "Epyk Edge");
  const ai = ecosystemProjects.find((project) => project.title === "Epyk AI");
  const rest = ecosystemProjects.filter(
    (project) => project.title !== "Epyk Edge" && project.title !== "Epyk AI"
  );

  return (
    <>
      <PageHero
        eyebrow="Ecosystem"
        title="Epyk Systems is one ecosystem being constructed in independently useful layers."
        description="The commercial work starts with practical systems that can help operations now. The larger vision connects infrastructure, intelligence, interfaces, control, perception, communications, energy, personal computing, fabrication, and a future physical environment."
      />

      <Section
        eyebrow="Architectural map"
        title="Useful layers first. Complete integration over time."
        intro="Epyk does not need the entire ecosystem to be complete before individual layers become useful. The map below separates the local infrastructure foundation, active intelligence work, product research, and long-horizon Myne programs."
      >
        <div className="mt-10">
          <ArchitectureDiagram />
        </div>
      </Section>

      {edge ? (
        <Section className="border-y border-white/10 bg-[#080A0D]/56">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
                  Epyk Edge
                </p>
                <StatusBadge status={edge.status} />
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
                The physical infrastructure foundation.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
                Epyk Edge is the foundation for compute, storage, networking,
                security, identity, observability, AI hosting, backup, and
                recovery. It is presented as a reference architecture, while
                related edge infrastructure work can be delivered through
                current client engagements.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {edgeFamily.map((item) => (
                <article
                  key={item.title}
                  className="border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-[#F4F7FA]">
                      {item.title}
                    </h3>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {ai ? (
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
                  Epyk AI
                </p>
                <StatusBadge status={ai.status} />
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
                Local intelligence and orchestration.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
                Epyk AI connects specialized models, private data, tools,
                infrastructure, and Epyk devices. It is not positioned as a
                simple outside-model competitor. The goal is controlled
                orchestration where local systems and optional external models
                can both be governed by the owner.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ai.scope.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border border-white/10 bg-white/[0.03] p-4"
                >
                  <CheckCircle2
                    aria-hidden
                    size={18}
                    className="mt-0.5 shrink-0 text-[#1D6FFF]"
                  />
                  <span className="text-sm leading-6 text-[#DDE3EA]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <Section
        className="border-y border-white/10 bg-white/[0.02]"
        eyebrow="Epyk and Myne layers"
        title="Interfaces, control, perception, communications, energy, context, and fabrication."
        intro="These layers are included to show the complete direction. They are not presented as finished commercial products unless their maturity badge says otherwise."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((project) => (
            <EcosystemCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section
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

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              The Epyk Environment
            </p>
            <StatusBadge status="Future Environment" />
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
            The first full physical integration of the ecosystem.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
            The long-term Epyk Environment is planned as headquarters,
            engineering laboratory, employee workspace, customer experience,
            public environment, community space, hospitality venue, and the
            first complete physical integration of the ecosystem. It is not
            presented as open today.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {environmentZones.map((zone) => (
            <EnvironmentZoneCard key={zone.title} zone={zone} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              Optional technology
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA]">
              The environment is ready. The choice is yours.
            </h2>
            <ul className="mt-6 grid gap-3">
              {optionalTechnologyPrinciples.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#DDE3EA]">
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

          <div className="border border-[#F3C743]/18 bg-[#F3C743]/[0.055] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Hospitality
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA]">
              Hospitality is not a transaction.
            </h2>
            <p className="mt-4 text-base font-semibold text-[#DDE3EA]">
              Premium quality. Honest price. No exploitation.
            </p>
            <ul className="mt-6 grid gap-3">
              {hospitalityCommitments.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#DDE3EA]">
                  <CheckCircle2
                    aria-hidden
                    size={18}
                    className="mt-0.5 shrink-0 text-[#F3C743]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
