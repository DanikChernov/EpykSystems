import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Section } from "@/components/Section";
import { portfolioItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A business-safe overview of Epyk Systems project categories, prototypes, internal systems, reusable modules, operational concepts, and technical foundations."
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Operational systems, prototypes, and technical foundations."
        description="This portfolio describes project categories and examples without exposing proprietary code. The emphasis is on reusable operating patterns, practical system design, and technical foundations that can mature into client-ready deployments."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
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
            Some systems are internal prototypes or private builds. Public demos
            and sanitized case studies will be added as client deployments
            mature.
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
