import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { aboutPoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Epyk Systems is a founder-led industrial systems company shaped by hands-on CNC, manufacturing, workflow, inventory, automation, computer vision, and operations-first software experience."
};

const bridgePoints = [
  "Industrial workflows",
  "CNC and manufacturing background",
  "Practical automation",
  "Operations-first software",
  "Shop-floor reality connected to modern systems",
  "Computer vision and AI as supporting tools"
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Epyk Systems"
        title="Built by someone who understands operational friction firsthand."
        description="Epyk Systems is founder-led and grounded in the kind of industrial work where software has to be useful under real constraints: busy floors, shifting schedules, material confusion, approvals, evidence, and the daily pressure to keep work moving."
      >
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(45,124,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(45,124,255,0.34)]"
        >
          Start a Conversation
          <ArrowRight aria-hidden size={17} className="ml-2" />
        </Link>
      </PageHeader>

      <Section
        eyebrow="Operating perspective"
        title="Software designed for the floor, not just the office."
        intro="The company is built from a builder/operator perspective. The point is not to sell oversized software into small and mid-sized industrial teams. The point is to understand the actual friction, then design systems that fit the workflow."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {aboutPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur"
            >
              <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FB]">
                {point.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080D14]/54">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D7CFF]">
              Practical technical direction
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FB] sm:text-4xl">
              Modern architecture, grounded expectations.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              Epyk Systems uses automation, computer vision, and assistant-style
              infrastructure where they support the business case. These tools
              matter, but they are not a substitute for clean data, reliable
              workflows, clear permissions, and systems people can actually use.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {bridgePoints.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4"
              >
                <CheckCircle2
                  aria-hidden
                  size={18}
                  className="mt-0.5 shrink-0 text-[#2D7CFF]"
                />
                <span className="text-sm leading-6 text-[#A7B0BE]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Company stage"
        title="Early-stage, serious, and built to mature with deployments."
        intro="Epyk Systems is intentionally presented as a focused industrial systems company, not a giant enterprise vendor. The direction is scalable, but the work starts with practical systems, clear requirements, and measurable operational improvement."
      >
        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.03] p-6 text-base leading-7 text-[#A7B0BE] sm:p-8">
          The best systems usually start by solving one painful workflow well.
          From there, they can grow into connected operations, inventory,
          reporting, vision, and automation infrastructure that reflects how the
          business actually runs.
        </div>
      </Section>

      <CTASection
        title="Build from the operation outward."
        description="Epyk Systems is best suited for teams that need practical software, operational understanding, and technical depth without inflated claims or unnecessary complexity."
      />
    </>
  );
}
