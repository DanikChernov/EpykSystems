import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/brand";
import { sensitiveFormWarning } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Terms | Epyk Systems",
  description:
    "Website terms for Epyk Systems, including public-form limits, informational content, engagement scope, and portfolio-label boundaries.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Website terms and public-form boundaries."
        description="This website explains Epyk Systems' current services, portfolio, assessment offer, and long-term direction. Actual work begins only under an agreed scope."
      />

      <Section
        eyebrow="Website use"
        title="The site is informational until a separate scope is agreed."
        intro="Nothing on the public site creates a services agreement, compliance certification, security audit, legal opinion, safety certification, or implementation commitment."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Engagement scope",
              body: "Operational software, infrastructure, assessment, integration, or implementation work must be separately scoped and agreed before work begins."
            },
            {
              title: "Portfolio labels",
              body: "Portfolio entries use maturity and provenance labels to separate production work, active development, prototypes, architecture, research, and future concepts."
            },
            {
              title: "No unsupported claims",
              body: "Public examples are sanitized and do not imply certifications, client results, savings, partnerships, or deployment claims unless explicitly stated."
            }
          ].map((item) => (
            <article
              key={item.title}
              className="border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FA]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-white/10 bg-[#080A0D]/56"
        eyebrow="Public form limits"
        title="Do not use public forms for controlled or sensitive material."
        intro={sensitiveFormWarning}
      >
        <div className="mt-10 max-w-3xl border border-[#F3C743]/24 bg-[#F3C743]/[0.07] p-6">
          <p className="text-sm leading-6 text-[#DDE3EA]">
            The public contact and assessment forms are intended for initial
            inquiry and intake only. If a project may involve controlled,
            restricted, proprietary, safety-critical, cybersecurity, legal, or
            regulatory material, the appropriate handling method must be
            discussed before that material is shared.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="Questions about scope or form limits?"
        intro="Use a general inquiry first and avoid sending sensitive details until the boundary is clear."
      >
        <Link
          href="/contact"
          className="epyk-button epyk-button-primary mt-8 inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(29,111,255,0.22)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
        >
          Contact Epyk
        </Link>
      </Section>
    </>
  );
}
