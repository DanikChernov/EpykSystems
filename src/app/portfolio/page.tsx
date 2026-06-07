import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/brand";
import { portfolioSections } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio | Epyk Systems",
  description:
    "Sanitized examples of Epyk Systems operational systems, industrial prototypes, technical foundations, and computer vision concepts.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Operational systems, prototypes, and technical foundations."
        description="Public examples are sanitized and intentionally avoid exposing proprietary code, private client details, or unsupported claims. The emphasis is on relevant operating patterns and technical foundations."
      />

      <Section
        eyebrow="Sanitized examples"
        title="Relevant work organized by operational purpose."
        intro="The current portfolio separates client-facing operational systems from technical foundations that support future product capabilities."
      >
        <div className="mt-12 grid gap-12">
          {portfolioSections.map((section) => {
            const sectionId = section.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <section key={section.title} aria-labelledby={sectionId}>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2
                      id={sectionId}
                      className="text-2xl font-semibold tracking-tight text-[#F4F7FB]"
                    >
                      {section.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A7B0BE]">
                      {section.description}
                    </p>
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item) => (
                    <PortfolioCard key={item.title} {...item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080D14]/54">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D7CFF]">
            Private builds
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FB] sm:text-4xl">
            Business-safe by design.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
            Some systems are internal prototypes, technical foundations, or
            private builds. Public demos and sanitized case studies will be
            added as deployments mature.
          </p>
        </div>
      </Section>

      <CTASection
        title="Need a system shaped around a real operation?"
        description="Epyk Systems can use existing prototypes, reusable modules, and operational architecture patterns as a starting point for focused client builds."
      />
    </>
  );
}
