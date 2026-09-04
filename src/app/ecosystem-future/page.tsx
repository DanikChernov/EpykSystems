import type { Metadata } from "next";
import Link from "next/link";

import { EnvironmentDisclosure } from "@/components/EnvironmentDisclosure";
import { MaturityBadge } from "@/components/MaturityBadge";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/brand";
import {
  environmentEntity,
  environmentZones,
  hospitalityCommitments,
  optionalTechnologyPrinciples
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Future Ecosystem Environment | Epyk Systems",
  description:
    "The long-term Epyk Environment concept: headquarters, engineering laboratory, employee workspace, customer experience, public environment, community space, and hospitality venue.",
  path: "/ecosystem-future",
  robots: {
    index: false,
    follow: false
  }
});

export default function EcosystemFuturePage() {
  const summary =
    environmentEntity?.summary ??
    "The long-term Epyk Environment is the planned physical integration point for the wider Epyk ecosystem.";
  const scope = environmentEntity?.ecosystem?.scope ?? [];

  return (
    <>
      <PageHero
        eyebrow="Future Ecosystem"
        title="The Epyk Environment is separated from the current ecosystem page."
        description={summary}
      >
        <div className="flex flex-wrap items-center gap-3">
          <MaturityBadge maturity="future-environment" />
          <Link
            href="/ecosystem"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[#DDE3EA] transition hover:border-[#F3C743]/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C743]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
          >
            Back to Ecosystem
          </Link>
        </div>
      </PageHero>

      {scope.length > 0 ? (
        <Section
          eyebrow="Future scope"
          title="A long-term physical integration concept, not a current offering."
          intro={environmentEntity?.ecosystem?.role}
        >
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {scope.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA]"
              >
                {item}
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <EnvironmentDisclosure
          zones={environmentZones}
          optionalTechnologyPrinciples={optionalTechnologyPrinciples}
          hospitalityCommitments={hospitalityCommitments}
          defaultOpen
        />
      </Section>

      <Section>
        <div className="max-w-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
            Direct-reference page
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
            Current work still starts with practical operations.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
            The future environment is intentionally separated from the current
            ecosystem page so present-day software, infrastructure, and
            manufacturing work stay clear.
          </p>
          <Link
            href="/ecosystem"
            className="epyk-button epyk-button-secondary mt-7 inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold text-[#DDE3EA] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
          >
            Back to Current Ecosystem
          </Link>
        </div>
      </Section>
    </>
  );
}
