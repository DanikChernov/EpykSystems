import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { createPageMetadata } from "@/lib/brand";
import { aboutPoints } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About | Epyk Systems",
  description:
    "Founder-led industrial software company built by Daniel Chernov - grounded in CNC and manufacturing experience, edge ML, and operations-first system design.",
  path: "/about"
});

const bridgePoints = [
  "CNC and manufacturing familiarity",
  "Shop-floor friction",
  "Workflow and inventory systems",
  "Cloud, local-first, and edge options",
  "Automation and AI as support tools",
  "Focused early-stage builds"
];

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Chernov",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "Epyk Systems"
    },
    sameAs: [
      "https://www.linkedin.com/in/daniel-chernov-84727a283/",
      "https://github.com/DanikChernov"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PageHeader
        eyebrow="About Epyk Systems"
        title="Founder-led industrial software, grounded in real operations."
        description="Epyk Systems is founder-led and grounded in industrial work where software has to be useful under real constraints: busy floors, shifting schedules, material confusion, approvals, evidence, and the pressure to keep work moving."
      >
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(45,124,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(45,124,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
        >
          Start a Conversation
          <ArrowRight aria-hidden size={17} className="ml-2" />
        </Link>
      </PageHeader>

      <Section className="border-b border-white/10 bg-[#080D14]/40">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="flex size-24 items-center justify-center rounded-lg border border-[#2D7CFF]/25 bg-[#2D7CFF]/10 text-3xl font-semibold text-[#DDE3EA]">
              DC
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#2D7CFF]">
              The founder
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F4F7FB]">
              Daniel Chernov
            </h2>
            <p className="mt-1 text-sm font-medium text-[#A7B0BE]">
              Founder
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href="https://www.linkedin.com/in/daniel-chernov-84727a283/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#2D7CFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70"
              >
                <LinkedInIcon className="size-[17px]" />
                LinkedIn
              </a>
              <a
                href="https://github.com/DanikChernov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#2D7CFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70"
              >
                <GitHubIcon className="size-[17px]" />
                GitHub
              </a>
              <a
                href="mailto:contact@epyk-systems.com"
                className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#2D7CFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70"
              >
                <Mail aria-hidden size={17} />
                Email
              </a>
            </div>
          </aside>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D7CFF]">
              The founder
            </p>
            <div className="mt-5 space-y-5 text-base leading-7 text-[#A7B0BE] sm:text-lg sm:leading-8">
              <p>
                I came to software from the shop floor, not the other way
                around. I&apos;ve run Swiss CNC machines, repaired legacy
                metrology systems nobody else could get booting, built data
                center infrastructure, and worked production environments where
                the &quot;system&quot; was a spreadsheet and a clipboard.
              </p>
              <p>
                Today I work as an edge ML / computer vision engineer on
                production AI pipelines, and I build operational software for
                industrial teams through Epyk Systems. That combination is the
                point: I&apos;ve personally lived the friction these systems are
                designed to remove - material confusion, status hidden in
                messages, approvals that happen in hallways - and I know what
                software has to do to survive contact with a real floor.
              </p>
              <p>
                Epyk Systems is early-stage and founder-led by design. You work
                directly with the person who designs, builds, and ships your
                system.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Operating perspective"
        title="Software designed for the floor, not just the office."
        intro="The work starts with the actual friction, then turns it into systems people can use without forcing a large-enterprise process onto a smaller operation."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {aboutPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur"
            >
              <h3 className="text-xl font-semibold tracking-tight text-[#F4F7FB]">
                {point.title}
              </h3>
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
              infrastructure where they support the business case. Those tools
              matter, but they are not a substitute for clean data, reliable
              workflows, clear permissions, and systems people can actually use.
              Systems are typically built on proven foundations - PostgreSQL,
              Python services, and cross-platform apps that run on the desktop,
              a phone, or a shop-floor terminal.
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
        title="Early-stage, serious, and built to mature with real use."
        intro="Epyk Systems is a focused industrial systems company, not a large enterprise vendor. The direction is scalable, but the work starts with practical requirements and a contained operational problem."
      >
        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.03] p-6 text-base leading-7 text-[#A7B0BE] sm:p-8">
          The best systems usually start by solving one painful workflow well.
          From there, they can grow into connected operations, inventory,
          reporting, vision, and automation infrastructure when the added scope
          is justified by the business.
        </div>
      </Section>

      <CTASection
        title="Build from the operation outward."
        description="Epyk Systems is best suited for teams that need practical software, operational understanding, and technical depth without inflated claims or unnecessary complexity."
      />
    </>
  );
}
