import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SolutionDeploymentModels } from "@/components/SolutionDeploymentModels";
import { SolutionEngagementFit } from "@/components/SolutionEngagementFit";
import { createPageMetadata } from "@/lib/brand";
import {
  publishedSolutionAreas,
  solutionAreas,
  solutionQuestionTitles,
  type SolutionQuestionTitle
} from "@/lib/site";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

function getSolution(slug: string) {
  return solutionAreas.find((solution) => solution.slug === slug);
}

export function generateStaticParams() {
  return publishedSolutionAreas.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution || solution.unpublished) {
    return {};
  }

  return createPageMetadata({
    title: solution.metadataTitle ?? `${solution.title} | Solutions`,
    description: solution.metadataDescription ?? solution.summary,
    path: `/solutions/${solution.slug}`
  });
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution || solution.unpublished) {
    notFound();
  }

  const Icon = solution.icon;
  const questionRows: {
    title: SolutionQuestionTitle;
    copy: string;
  }[] = [
    { title: solutionQuestionTitles.problem, copy: solution.problem },
    { title: solutionQuestionTitles.audience, copy: solution.audience },
    { title: solutionQuestionTitles.approach, copy: solution.approach },
    { title: solutionQuestionTitles.availableNow, copy: solution.availableNow },
    {
      title: solutionQuestionTitles.discoveryNeeded,
      copy: solution.discoveryNeeded
    }
  ];

  if (solution.deploymentQuestion) {
    questionRows.splice(3, 0, {
      title: solutionQuestionTitles.deployment,
      copy: solution.deploymentQuestion
    });
  }

  if (solution.experience) {
    questionRows.splice(questionRows.length - 1, 0, {
      title: solutionQuestionTitles.experience,
      copy: solution.experience
    });
  }

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

      {solution.ecosystemLayer && solution.ecosystemHref ? (
        <Section className="border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-base leading-7 text-[#A7B0BE]">
              This is the commercial front of {solution.ecosystemLayer}.{" "}
              <Link
                href={solution.ecosystemHref}
                className="font-semibold text-[#DDE3EA] underline decoration-[#1D6FFF]/45 underline-offset-4 transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
              >
                See the architecture →
              </Link>
            </p>
          </div>
        </Section>
      ) : null}

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SolutionEngagementFit icon={Icon} />

          <div className="grid gap-6">
            {questionRows.map(({ title, copy }) => {
              const questionLink = solution.detailQuestionLinks?.find(
                (link) => link.question === title
              );
              const paragraphs = copy.split(/\n\n+/);

              return (
                <article
                  key={title}
                  className="border border-white/10 bg-white/[0.03] p-6"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FA]">
                    {title}
                  </h2>
                  {paragraphs.map((paragraph, index) => {
                    const isLastParagraph = index === paragraphs.length - 1;

                    return (
                      <p
                        key={paragraph}
                        className={`text-sm leading-6 text-[#A7B0BE] ${
                          index === 0 ? "mt-3" : "mt-4"
                        }`}
                      >
                        {paragraph}
                        {questionLink && isLastParagraph ? (
                          <>
                            {" "}
                            {questionLink.before}
                            <Link
                              href={questionLink.href}
                              className="font-semibold text-[#DDE3EA] underline decoration-[#1D6FFF]/45 underline-offset-4 transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                            >
                              {questionLink.label}
                            </Link>
                            {questionLink.after}
                          </>
                        ) : null}
                      </p>
                    );
                  })}
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {solution.operationalPatternNote ? (
        <Section className="border-y border-white/10 bg-[#080A0D]/56">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              Cross-system operating pattern
            </p>
            <p className="mt-4 text-base leading-7 text-[#DDE3EA]">
              {solution.operationalPatternNote}
            </p>
          </div>
        </Section>
      ) : null}

      <SolutionDeploymentModels models={solution.deploymentModels} />

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

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
            Illustrative scenario
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
            A concrete starting shape.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
            {solution.scenario}
          </p>
        </div>
      </Section>

      <CTASection
        title={`Discuss ${solution.title}.`}
        description="Start with the workflow, infrastructure, machine, data, or visibility problem that is costing real time every week."
      />
    </>
  );
}
