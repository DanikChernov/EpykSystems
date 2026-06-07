import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { brand } from "@/lib/brand";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact | Epyk Systems",
  description:
    "Contact Epyk Systems to discuss workflow problems, inventory tracking, industrial software, computer vision feasibility, or focused operational automation.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start with the workflow that is causing friction."
        description="Use the form to describe the operational problem, current manual process, spreadsheet, approval path, inventory issue, or system idea you want to explore."
      />

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10 lg:px-8">
          <aside className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FB]">
              Epyk Systems
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
              Practical operational software for manufacturers, contractors,
              warehouses, field teams, and operations-heavy businesses.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-medium text-[#DDE3EA]">Email</p>
              <a
                href={`mailto:${brand.email}`}
                className="mt-2 inline-flex text-sm text-[#2D7CFF] transition hover:text-[#DDE3EA]"
              >
                {brand.email}
              </a>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-medium text-[#DDE3EA]">
                Helpful starting points
              </p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#A7B0BE]">
                <li>A workflow that gets repeated manually</li>
                <li>A spreadsheet or approval path that no longer holds up</li>
                <li>An inventory or material tracking gap</li>
                <li>A vision or automation idea that needs feasibility review</li>
              </ul>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
