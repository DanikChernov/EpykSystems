import { CheckCircle2, Mail } from "lucide-react";
import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PrincipleList } from "@/components/PrincipleList";
import { Section } from "@/components/Section";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { brand, createPageMetadata } from "@/lib/brand";
import { aboutPoints, trustPoints } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About | Epyk Systems",
  description:
    "About Epyk Systems: a God-centered, community-minded, local-first technology ecosystem founded by Daniel Chernov and grounded in manufacturing, CNC, infrastructure, software, and practical operations.",
  path: "/about"
});

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
      <PageHero
        eyebrow="About Epyk Systems"
        title="A local-first technology ecosystem, built from practical operations outward."
        description={brand.explanatoryLine}
      />

      <Section
        eyebrow="What Epyk is"
        title="Useful present-day systems moving toward a larger integrated ecosystem."
        intro="Epyk is not only a software consultancy and not yet a finished complete environment. It is a company building practical systems now while developing a broader ecosystem with honest maturity labels."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {aboutPoints.map((point) => (
            <article
              key={point.title}
              className="border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-[#F4F7FA]">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
            <div className="flex size-24 items-center justify-center border border-[#1D6FFF]/25 bg-[#1D6FFF]/10 text-3xl font-semibold text-[#DDE3EA]">
              DC
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              Founder
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
              Daniel Chernov
            </h2>
            <div className="mt-6 grid gap-3">
              <a
                href="https://www.linkedin.com/in/daniel-chernov-84727a283/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
              >
                <LinkedInIcon className="size-[17px]" />
                LinkedIn
              </a>
              <a
                href="https://github.com/DanikChernov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
              >
                <GitHubIcon className="size-[17px]" />
                GitHub
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
              >
                <Mail aria-hidden size={17} />
                Email
              </a>
            </div>
          </aside>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              Founder perspective
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
                Today I work as an edge ML and computer vision engineer on
                production AI pipelines, and I build operational software,
                infrastructure, and modernization systems through Epyk Systems.
                That combination matters because these systems are meant to
                survive contact with real floors, real approvals, real
                materials, and real constraints.
              </p>
              <p>
                Epyk Systems is early-stage and founder-led. Customers work
                directly with the person designing, building, and shipping the
                system.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3C743]">
              God-centered foundation
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              Explicit, restrained, and never coercive.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              Epyk Systems is openly Christian. That foundation informs how we
              understand service, stewardship, truth, privacy, human dignity,
              and the responsible use of capability. Customers and visitors are
              never required to share our beliefs, and faith is never used as a
              substitute for honest work or technical excellence.
            </p>
          </div>
          <PrincipleList />
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-[#080A0D]/56">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
              Community commitment
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F7FA] sm:text-4xl">
              The long-term environment is meant to serve people, not capture them.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#A7B0BE]">
              Epyk&apos;s long-term physical environment is intended to serve
              customers, employees, builders, students, visitors, and the
              surrounding community. It is planned as a working place,
              engineering laboratory, hospitality venue, and public environment
              where technology is present but never forced.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="flex gap-3 border border-white/10 bg-white/[0.03] p-4"
                >
                  <Icon
                    aria-hidden
                    size={18}
                    className="mt-0.5 shrink-0 text-[#1D6FFF]"
                    strokeWidth={1.8}
                  />
                  <span className="text-sm leading-6 text-[#DDE3EA]">
                    {point.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Long-term direction"
        title="Present-day usefulness comes first."
        intro="The ecosystem direction is large, but Epyk does not need the entire future environment to exist before the current work can be useful. Operational software, inventory control, private AI, edge infrastructure, perception prototypes, and secure modernization remain practical engagement areas today."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Available services are scoped through client engagements.",
            "Active systems and prototypes are labeled as development work.",
            "Research programs and the future environment are not sold as mature products."
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 border border-white/10 bg-white/[0.03] p-5"
            >
              <CheckCircle2
                aria-hidden
                size={18}
                className="mt-0.5 shrink-0 text-[#1D6FFF]"
              />
              <span className="text-sm leading-6 text-[#DDE3EA]">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Build from the operation outward."
        description="Epyk is best suited for teams that need practical software, local-first infrastructure, private AI, perception, or modernization without inflated claims or unnecessary complexity."
      />
    </>
  );
}
