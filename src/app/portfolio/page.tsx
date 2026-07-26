import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/brand";
import { portfolioSections } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio | Epyk Systems",
  description:
    "Sanitized Epyk Systems case studies organized into client and operational deployments, internal platforms, and research laboratory work.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Case studies, product foundations, and research work labeled by maturity."
        description="Public examples are sanitized and intentionally avoid exposing proprietary code, private client details, unsupported metrics, invented screenshots, or claims that research systems are commercially available."
      />

      <Section
        eyebrow="Portfolio structure"
        title="Operational work is not presented at the same level as long-term research."
        intro="The portfolio separates real or operationally relevant work from internal platforms and research programs. Each case study uses the same structure so maturity, evidence, and future role are clear."
      >
        <div className="mt-12 grid gap-14">
          {portfolioSections.map((section) => {
            const sectionId = section.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <section key={section.title} aria-labelledby={sectionId}>
                <div className="mb-6 max-w-3xl">
                  <h2
                    id={sectionId}
                    className="text-2xl font-semibold tracking-tight text-[#F4F7FA]"
                  >
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                    {section.description}
                  </p>
                </div>
                <div className="grid gap-5 lg:grid-cols-2">
                  {section.items.map((item) => (
                    <CaseStudyCard key={item.title} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
            Evidence boundaries
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
            No fabricated proof.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
            The repository currently provides brand assets, not public product
            screenshots or approved client visuals. Where screenshots or
            operational metrics are not available for public release, the site
            says so directly.
          </p>
        </div>
      </Section>

      <CTASection
        title="Need a system shaped around a real operation?"
        description="Epyk can use existing operational patterns, internal platforms, and reference architectures as starting points for focused client builds."
      />
    </>
  );
}
