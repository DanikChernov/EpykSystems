import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/brand";
import { solutionAreas } from "@/lib/site";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

function getSolution(slug: string) {
  return solutionAreas.find((solution) => solution.slug === slug);
}

export function generateStaticParams() {
  return solutionAreas.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {};
  }

  return createPageMetadata({
    title: `${solution.title} | Solutions`,
    description: solution.summary,
    path: `/solutions/${solution.slug}`
  });
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  const Icon = solution.icon;

  return (
    <>
      <PageHero
        eyebrow="Solution"
        title={solution.title}
        description={solution.summary}
        status={solution.status}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/solutions"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#DDE3EA] transition hover:border-[#F3C743]/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C743]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
          >
            <ArrowLeft aria-hidden size={17} className="mr-2" />
            All Solutions
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#1D6FFF]/45 bg-gradient-to-b from-[#1D6FFF] to-[#174FC2] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(29,111,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(29,111,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
          >
            Discuss This Problem
            <ArrowRight aria-hidden size={17} className="ml-2" />
          </Link>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="border border-white/10 bg-white/[0.03] p-6">
            <div className="flex size-12 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 text-[#DDE3EA]">
              <Icon aria-hidden size={22} strokeWidth={1.8} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
              Engagement fit
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
              Epyk does not sell a predetermined replacement platform. The
              first scope is shaped around the problem, the operating boundary,
              and the team that has to use the system.
            </p>
          </aside>

          <div className="grid gap-6">
            {[
              ["What problem does this solve?", solution.problem],
              ["Who is it for?", solution.audience],
              ["How does Epyk approach it?", solution.approach],
              ["What is available now?", solution.availableNow],
              [
                "What requires discovery or custom implementation?",
                solution.discoveryNeeded
              ]
            ].map(([title, copy]) => (
              <article
                key={title}
                className="border border-white/10 bg-white/[0.03] p-6"
              >
                <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FA]">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="border-y border-white/10 bg-[#080A0D]/56"
        eyebrow="Deployment models"
        title="Connected where useful, private where needed."
        intro="Local infrastructure and private operation can form the foundation. Cloud platforms and external APIs may be connected when useful, but they remain optional extensions rather than unavoidable dependencies."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {solution.deploymentModels.map((model) => (
            <div
              key={model}
              className="flex gap-3 border border-white/10 bg-white/[0.03] p-4"
            >
              <CheckCircle2
                aria-hidden
                size={18}
                className="mt-0.5 shrink-0 text-[#1D6FFF]"
              />
              <span className="text-sm leading-6 text-[#DDE3EA]">{model}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Capabilities"
        title="The solution is scoped to the operation."
        intro="These are capability areas, not a promise that every engagement includes every module."
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solution.features.map((feature) => (
            <div
              key={feature}
              className="border border-white/10 bg-white/[0.03] p-5 text-sm font-medium leading-6 text-[#DDE3EA]"
            >
              {feature}
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title={`Discuss ${solution.title}.`}
        description="Start with the workflow, infrastructure, machine, data, or visibility problem that is costing real time every week."
      />
    </>
  );
}
