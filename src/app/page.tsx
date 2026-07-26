import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { BrandHero } from "@/components/BrandHero";
import { CTASection } from "@/components/CTASection";
import { LocalFirstSection } from "@/components/LocalFirstSection";
import { PrincipleList } from "@/components/PrincipleList";
import { Section } from "@/components/Section";
import { SolutionCard } from "@/components/SolutionCard";
import { StatusBadge } from "@/components/StatusBadge";
import { brand, createPageMetadata } from "@/lib/brand";
import {
  commercialFocus,
  engagementSteps,
  ecosystemProjects,
  operationalNeeds,
  proofItems,
  solutionAreas
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title:
    "Epyk Systems | Local-First Technology, Private AI and Industrial Infrastructure",
  description:
    "Epyk Systems is a God-centered, community-minded, local-first technology ecosystem building private AI, secure infrastructure, operational software, perception, and industrial modernization systems.",
  path: "/"
});

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: brand.url,
    logo: `${brand.url}${brand.assets.logo}`,
    email: brand.email,
    description: brand.explanatoryLine,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Erie",
      addressRegion: "PA",
      addressCountry: "US"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <BrandHero />

      <Section
        eyebrow="Built for Real Operations"
        title="What Epyk builds today."
        intro="Epyk currently applies the local-first architecture to manufacturers, industrial teams, private infrastructure, local AI, workflow systems, inventory and material control, operational perception, secure machine connectivity, and technically complex environments."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutionAreas.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} compact />
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Start with one painful workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Start where the operation already hurts.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE] sm:text-lg">
              We begin with the problem that causes real friction every week,
              not with a predetermined platform sale. Epyk does not force
              unnecessary replacement or transformation.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {operationalNeeds.map((need) => (
                <div
                  key={need}
                  className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <CheckCircle2
                    aria-hidden
                    size={18}
                    className="shrink-0 text-[#1D6FFF]"
                  />
                  <span className="text-sm font-medium text-[#DDE3EA]">
                    {need}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {engagementSteps.map((step, index) => (
              <article
                key={step.title}
                className="border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)]"
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

      <LocalFirstSection />

      <Section
        eyebrow="Proof and selected work"
        title="Practical work, labeled honestly."
        intro="Public examples are sanitized. The site does not publish proprietary screenshots, unsupported metrics, invented clients, or claims that research systems are commercially finished."
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
                  <StatusBadge status={item.status} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#F4F7FA]">
                  {item.title}
                </h3>
                <dl className="mt-5 grid gap-4">
                  <div>
                    <dt className="text-sm font-semibold text-[#DDE3EA]">
                      Problem
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[#A7B0BE]">
                      {item.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-[#DDE3EA]">
                      What was built
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[#A7B0BE]">
                      {item.built}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-[#DDE3EA]">
                      Current status
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[#A7B0BE]">
                      {item.currentStatus}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-[#DDE3EA]">
                      Significance
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[#A7B0BE]">
                      {item.futureRole}
                    </dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              The larger ecosystem
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              One ecosystem being constructed in useful layers.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              Epyk Edge, Epyk AI, Epyk-1, Epyk-2, Epyk-3, and Myne-0 through
              Myne-3 cover infrastructure, intelligence, interfaces, control,
              perception, communications, energy, personal computing, and
              fabrication.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ecosystemProjects.map((project) => (
                <div
                  key={project.title}
                  className="border border-white/10 bg-[#030405]/48 px-4 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-[#F4F7FA]">
                      {project.title}
                    </span>
                    <span className="text-xs text-[#8C96A3]">
                      {project.layer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/ecosystem"
              className="mt-8 inline-flex items-center text-sm font-semibold text-[#DDE3EA] transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
            >
              See the Complete Ecosystem
              <ArrowRight aria-hidden size={16} className="ml-2" />
            </Link>
          </div>
          <ArchitectureDiagram compact />
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
              Epyk is openly Christian. That foundation informs service,
              stewardship, truth, privacy, human dignity, and responsible use
              of capability. Customers and visitors are never required to share
              that belief.
            </p>
          </div>
          <PrincipleList />
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/54">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commercialFocus.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-3 border border-white/10 bg-white/[0.03] p-4"
              >
                <Icon
                  aria-hidden
                  size={18}
                  className="mt-0.5 shrink-0 text-[#1D6FFF]"
                  strokeWidth={1.8}
                />
                <span className="text-sm font-medium leading-6 text-[#DDE3EA]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </Section>

      <CTASection
        title="Start with one real problem."
        description="Bring one painful workflow or infrastructure problem into the open. If Epyk can help, the first step is focused, practical, and tied to the way the operation actually works."
        primaryLabel="Discuss Your Operation"
        secondaryLabel="Explore Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
