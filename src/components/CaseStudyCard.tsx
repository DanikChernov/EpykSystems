import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/lib/site";

import { MaturityBadge } from "./MaturityBadge";

type CaseStudyCardProps = {
  item: CaseStudy;
};

const rows = [
  ["Problem", "problem"],
  ["Operational constraints", "constraints"],
  ["Epyk approach", "approach"],
  ["What was built", "built"],
  ["Current status", "currentStatus"],
  ["Public evidence", "publicEvidence"],
  ["Future role in the ecosystem", "futureRole"]
] as const;

export function CaseStudyCard({ item }: CaseStudyCardProps) {
  const Icon = item.icon;
  const approvedClientName =
    item.clientNameApproved && item.clientName ? item.clientName : null;
  const hasGallery = !item.publicationBlocked && item.screenshots.length > 0;

  return (
    <article className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.3)] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 text-[#DDE3EA]">
          <Icon aria-hidden size={21} strokeWidth={1.8} />
        </div>
        <MaturityBadge maturity={item.status} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8C96A3]">
          {item.category}
        </span>
        <span className="rounded-sm border border-[#F3C743]/18 bg-[#F3C743]/[0.055] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#DDE3EA]">
          {item.provenance}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
        {item.title}
      </h3>
      {approvedClientName ? (
        <p className="mt-2 text-sm leading-6 text-[#A7B0BE]">
          Client: {approvedClientName}
        </p>
      ) : null}

      <dl className="mt-6 grid gap-4">
        {rows.map(([label, key]) => {
          const value = item[key];

          if (!value) {
            return null;
          }

          return (
            <div key={key}>
              <dt className="text-sm font-semibold text-[#DDE3EA]">{label}</dt>
              <dd className="mt-1 whitespace-pre-line text-sm leading-6 text-[#A7B0BE]">
                {value}
              </dd>
            </div>
          );
        })}
      </dl>

      <div className="mt-6 grid gap-4 border-t border-white/10 pt-5">
        {item.solutionLinks.length > 0 ? (
          <div>
            <p className="text-sm font-semibold text-[#DDE3EA]">
              Supported solutions
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.solutionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-medium text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {item.ecosystemLinks.length > 0 ? (
          <div>
            <p className="text-sm font-semibold text-[#DDE3EA]">
              Ecosystem layer
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.ecosystemLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-medium text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {hasGallery ? (
        <div className="mt-7 grid gap-4">
          {item.screenshots.map((screenshot) => (
            <figure
              key={screenshot.src}
              className="overflow-hidden border border-white/10 bg-[#030405]/54"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width ?? 1920}
                height={screenshot.height ?? 1080}
                sizes="(min-width: 1024px) 42vw, 100vw"
                loading="lazy"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-[#A7B0BE]">
                {screenshot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-medium text-[#DDE3EA]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
