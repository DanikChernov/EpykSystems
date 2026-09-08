import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BrandHero } from "@/components/BrandHero";
import { MaturityBadge } from "@/components/MaturityBadge";
import { PrincipleList } from "@/components/PrincipleList";
import { Section } from "@/components/Section";
import { assessmentOffer, homepageAssessment } from "@/lib/assessment";
import { brand, createPageMetadata } from "@/lib/brand";
import {
  engagementSteps,
  founderProfile,
  localFirstPoints,
  proofItems
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title:
    "Epyk Systems | Operational Software and Private Infrastructure for Manufacturers",
  description:
    "Founder-led operational software, inventory and material-control systems, private AI, and owner-controlled infrastructure for manufacturers.",
  path: "/"
});

const currentCapabilities = [
  {
    title: "Operational Software",
    href: "/solutions/operational-software",
    description:
      "Workflow tools, approval paths, production records, reporting, permissions, and audit-aware systems shaped around the way the work actually moves."
  },
  {
    title: "Inventory and Material Control",
    href: "/solutions/inventory-and-material-control",
    description:
      "Material requests, approvals, locations, reorder signals, lot history, traceability, and job-linked movement without forcing a broad platform replacement."
  },
  {
    title: "Private AI",
    href: "/solutions/private-ai",
    description:
      "Local model serving, data boundaries, controlled AI workflows, and optional cloud connections where they are useful."
  },
  {
    title: "Edge Infrastructure",
    href: "/solutions/edge-infrastructure",
    description:
      "Owner-controlled compute, storage, networking, backup and recovery, and observability for private operational systems."
  },
  {
    title: "Secure Industrial Modernization",
    href: "/solutions/secure-industrial-modernization",
    description:
      "Secure machine connectivity, read-only monitoring, integration planning, and staged modernization that respects existing systems and operating constraints."
  },
  {
    title: "Epyk Perception",
    href: "/solutions/perception",
    description:
      "Local detection, tracking, events, and evidence capture for assets, objects, and workflow signals, with privacy boundaries and human judgment kept explicit."
  }
] as const;

export default function Home() {
  return (
    <>
      <BrandHero />

      <Section
        eyebrow={homepageAssessment.eyebrow}
        title={homepageAssessment.title}
        intro={homepageAssessment.description}
      >
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
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
          <div className="border border-[#F3C743]/24 bg-[#F3C743]/[0.07] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Bounded first step
            </p>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA]">
              {assessmentOffer.priceDisplay}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
              Starts with a free 15-20 minute intake, then one onsite
              observation day if the assessment is the right fit.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={`${assessmentOffer.path}#${assessmentOffer.bookHash}`}
                className="epyk-button epyk-button-primary inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(29,111,255,0.22)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
              >
                Book an Assessment
                <ArrowRight aria-hidden size={16} className="ml-2" />
              </Link>
              <Link
                href={assessmentOffer.path}
                className="epyk-button epyk-button-secondary inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold text-[#DDE3EA] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
              >
                View Assessment Scope
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
            Built for Real Operations
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
            What Epyk builds today.
          </h2>
          <p className="mt-5 max-w-5xl text-base leading-7 text-[#A7B0BE] sm:text-lg">
            Epyk currently applies local-first architecture to manufacturers,
            industrial teams, private infrastructure, local AI, workflow
            systems, inventory and material control, operational perception,
            secure machine connectivity, and technically complex environments.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {currentCapabilities.map((capability) => (
            <Link
              key={capability.title}
              href={capability.href}
              className="group flex h-full min-h-56 flex-col border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.26)] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)] transition duration-300 hover:-translate-y-0.5 hover:border-[#1D6FFF]/35 hover:shadow-[0_28px_110px_rgba(29,111,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
              aria-label={`Explore ${capability.title}`}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
                {capability.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
                {capability.description}
              </p>
              <span className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-[#DDE3EA] transition group-hover:text-[#1D6FFF]">
                Explore
                <ArrowRight aria-hidden size={15} className="ml-2" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/solutions"
            className="epyk-button epyk-button-primary inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(29,111,255,0.22)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
          >
            Explore All Solutions
            <ArrowRight aria-hidden size={16} className="ml-2" />
          </Link>
        </div>
      </Section>

      <Section>
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

      <Section>
        <div className="grid gap-6 border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.26)] [clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,0_100%)] sm:grid-cols-[auto_1fr] sm:items-center lg:p-7">
          {founderProfile.photoAvailable ? (
            <Image
              src={founderProfile.photoSrc}
              alt={`${founderProfile.name}, ${founderProfile.title}`}
              width={320}
              height={320}
              sizes="7rem"
              className="epyk-card-button size-24 border border-[#1D6FFF]/25 object-cover sm:size-28"
            />
          ) : (
            <div
              className="flex size-24 items-center justify-center border border-[#1D6FFF]/25 bg-[#1D6FFF]/10 text-3xl font-semibold text-[#DDE3EA] sm:size-28"
              aria-label={`${founderProfile.name}, ${founderProfile.title}`}
            >
              {founderProfile.initials}
            </div>
          )}
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Founder-led delivery
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F4F7FA] sm:text-3xl">
              Daniel Chernov builds from manufacturing reality into working systems.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#A7B0BE] sm:text-base sm:leading-7">
              Daniel’s background spans manufacturing and CNC environments,
              infrastructure and networking, full-stack operational software,
              and production-AI systems that connect models to real workflows,
              evidence, and controls.
            </p>
            <Link
              href={founderProfile.aboutHref}
              className="epyk-button epyk-button-secondary mt-6 inline-flex min-h-11 items-center justify-center border px-4 py-2 text-sm font-semibold text-[#DDE3EA] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
            >
              Read About Daniel
              <ArrowRight aria-hidden size={15} className="ml-2" />
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
          <div className="border border-[#F3C743]/20 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              God-centered, never coercive
            </p>
            <p className="mt-4 text-sm leading-6 text-[#DDE3EA]">
              {brand.godCenteredStatement}
            </p>
          </div>
          <PrincipleList />
        </div>

        <div className="mt-12 border border-white/10 p-8 [clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,0_100%)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
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
            className="epyk-button epyk-button-primary mt-8 inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(29,111,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(29,111,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405] lg:mt-0"
          >
            Discuss Your Operation
            <ArrowRight aria-hidden size={17} className="ml-2" />
          </Link>
        </div>
      </Section>
    </>
  );
}
