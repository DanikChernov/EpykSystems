import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Epyk Systems to discuss workflow modernization, inventory tracking, industrial operations software, computer vision, or practical automation projects."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Discuss an operational system, prototype, or workflow problem."
        description="Use the form to describe the business context, workflow friction, inventory issue, or technical foundation you want to explore."
      />

      <section className="relative py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <aside className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FB]">
              Epyk Systems
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
              Practical operational software for industrial teams, contractors,
              manufacturers, warehouses, and operations-heavy businesses.
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
                Good fit conversations
              </p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#A7B0BE]">
                <li>Workflow modernization</li>
                <li>Inventory and material tracking</li>
                <li>Industrial automation concepts</li>
                <li>Computer vision feasibility</li>
                <li>Prototype and system architecture</li>
              </ul>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
