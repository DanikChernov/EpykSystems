import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { brand, createPageMetadata } from "@/lib/brand";
import { sensitiveFormWarning } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy | Epyk Systems",
  description:
    "Privacy information for Epyk Systems contact and assessment inquiries, including public-form limits for sensitive and controlled material.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy information for Epyk Systems inquiries."
        description="This page explains what the public website forms are intended to collect and what should not be submitted through them."
      />

      <Section
        eyebrow="Public forms"
        title="Submit only the information needed for initial contact."
        intro="Epyk uses contact and assessment intake submissions to review fit, respond to inquiries, and coordinate a next conversation."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FA]">
              Information you may submit
            </h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#A7B0BE]">
              <li>Name and contact details.</li>
              <li>Company, role, facility, and visitor-logistics context.</li>
              <li>General workflow, infrastructure, or assessment details.</li>
              <li>Preferred contact method and scheduling context.</li>
            </ul>
          </article>

          <article className="border border-[#F3C743]/24 bg-[#F3C743]/[0.07] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FA]">
              Sensitive-material warning
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#DDE3EA]">
              {sensitiveFormWarning}
            </p>
            <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
              The public forms are not approved for controlled or sensitive
              material. If documents or restricted information become necessary,
              an appropriate transfer method and scope should be established
              after intake.
            </p>
          </article>
        </div>
      </Section>

      <Section
        className="border-y border-white/10 bg-[#080A0D]/56"
        eyebrow="Use and service providers"
        title="Form submissions support direct follow-up."
        intro="Epyk may use website hosting, form-processing, and email-delivery providers to receive and respond to inquiries. The site does not use public-form copy to claim a controlled-data workflow."
      >
        <div className="mt-10 max-w-3xl space-y-5 text-sm leading-6 text-[#A7B0BE]">
          <p>
            Epyk does not sell personal information submitted through the public
            website forms. Submitted information may be retained as reasonably
            needed to handle the inquiry, support a potential engagement, and
            maintain ordinary business records.
          </p>
          <p>
            To request correction or deletion of contact information submitted
            through the site, email{" "}
            <a
              href={`mailto:${brand.email}`}
              className="text-[#1D6FFF] underline underline-offset-4"
            >
              {brand.email}
            </a>
            . Legal, security, or ordinary business-record obligations may limit
            what can be changed or deleted.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Questions"
        title="Need to discuss data boundaries before sharing details?"
        intro="Use a general message first. Epyk can define safer intake boundaries before any sensitive operational material is exchanged."
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
