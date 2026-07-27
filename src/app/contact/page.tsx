import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/brand";
import {
  contactDetails,
  contactStartingPoints,
  engagementPage,
  inquiryOptions
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact | Epyk Systems",
  description:
    "Contact Epyk Systems about operational software, inventory and material control, private AI, edge infrastructure, controlled environments, manufacturing modernization, operational perception, partnerships, or research.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the workflow or infrastructure problem causing real friction."
        description="Use the form to describe the operational problem, current manual process, spreadsheet, approval path, inventory issue, private AI need, infrastructure boundary, perception idea, or modernization work you want to explore."
      />

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10 lg:px-8">
          <aside className="flex flex-col border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
            <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FA]">
              Epyk Systems
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
              God-centered, community-minded, local-first technology for
              private infrastructure, local AI, industrial software,
              manufacturing modernization, workflow systems, inventory and
              material control, operational perception, and secure machine
              connectivity.
            </p>
            <p className="mt-4 text-sm leading-6 text-[#DDE3EA]">
              Based in {contactDetails.location}, working with industrial and
              technical teams regionally and remotely.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-medium text-[#DDE3EA]">Email</p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="mt-2 inline-flex text-sm text-[#1D6FFF] transition hover:text-[#DDE3EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
              >
                {contactDetails.email}
              </a>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6 lg:flex-1">
              <p className="text-sm font-medium text-[#DDE3EA]">
                Inquiry options
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {inquiryOptions.map((option) => (
                  <span
                    key={option}
                    className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-medium text-[#DDE3EA]"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6 lg:flex-1">
              <p className="text-sm font-medium text-[#DDE3EA]">
                Helpful starting points
              </p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#A7B0BE]">
                {contactStartingPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-medium text-[#DDE3EA]">
                Engagement structure
              </p>
              <Link
                href={engagementPage.path}
                className="mt-2 inline-flex text-sm font-semibold text-[#1D6FFF] transition hover:text-[#DDE3EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
              >
                See how Epyk scopes work
              </Link>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
