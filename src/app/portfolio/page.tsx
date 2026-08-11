import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { MaturityLegend } from "@/components/MaturityLegend";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/brand";
import { portfolioSections } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio | Epyk Systems",
  description:
    "Sanitized Epyk Systems case studies with explicit maturity, provenance, public evidence, and deployment status labels.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Case studies, product foundations, and research work labeled by maturity."
        description="Public case studies are sanitized to protect client and operational information. Maturity, public evidence, and deployment status are labeled explicitly on every entry."
      />

      <Section
        eyebrow="Portfolio structure"
        title="Peer systems, labeled by provenance and maturity."
        intro="Each case study uses the same structure so the public record shows what type of system it is, what solution paths it supports, and what evidence is approved for release."
      >
        <MaturityLegend className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5" />
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
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item) => (
                    <CaseStudyCard key={item.title} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      <CTASection
        title="Need a system shaped around a real operation?"
        description="Epyk can use existing operational patterns, internal platforms, and reference architectures as starting points for focused client builds."
      />
    </>
  );
}
