import Link from "next/link";

import type { CaseStudy } from "@/lib/site";

import { MaturityBadge } from "./MaturityBadge";
import { PortfolioCaseStudyCard } from "./PortfolioCaseStudyCard";

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
  const detailRows: { label: string; value: string }[] = rows.flatMap(
    ([label, key]) => {
      const value = item[key];

      return value ? [{ label, value }] : [];
    }
  );
  const previewTags = item.tags.slice(0, 3);
  const remainingTagCount = item.tags.length - previewTags.length;

  return (
    <PortfolioCaseStudyCard
      title={item.title}
      summary={item.summary}
      screenshots={item.screenshots}
      cardIcon={
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#030405]/74 text-[#DDE3EA] backdrop-blur-sm">
          <Icon aria-hidden size={20} strokeWidth={1.8} />
        </div>
      }
      modalIcon={
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 text-[#DDE3EA]">
          <Icon aria-hidden size={21} strokeWidth={1.8} />
        </div>
      }
      cardMaturity={<MaturityBadge maturity={item.status} />}
      modalMaturity={<MaturityBadge maturity={item.status} />}
      cardMeta={<PortfolioMeta category={item.category} provenance={item.provenance} />}
      previewTags={
        <div className="flex flex-wrap gap-2">
          {previewTags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-medium text-[#DDE3EA]"
            >
              {tag}
            </span>
          ))}
          {remainingTagCount > 0 ? (
            <span className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-medium text-[#8C96A3]">
              +{remainingTagCount}
            </span>
          ) : null}
        </div>
      }
      modalDetails={
        <div className="grid gap-5">
          <PortfolioMeta
            category={item.category}
            provenance={item.provenance}
          />

          {approvedClientName ? (
            <p className="text-sm leading-6 text-[#A7B0BE]">
              Client: {approvedClientName}
            </p>
          ) : null}

          <div>
            <p className="text-sm font-semibold text-[#DDE3EA]">Summary</p>
            <p className="mt-1 text-sm leading-6 text-[#A7B0BE]">
              {item.summary}
            </p>
          </div>

          <dl className="grid gap-4 border-t border-white/10 pt-5">
            {detailRows.map((row) => (
              <div key={row.label}>
                <dt className="text-sm font-semibold text-[#DDE3EA]">
                  {row.label}
                </dt>
                <dd className="mt-1 whitespace-pre-line text-sm leading-6 text-[#A7B0BE]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-4 border-t border-white/10 pt-5">
            {item.solutionLinks.length > 0 ? (
              <PortfolioLinkGroup
                title="Supported solutions"
                links={item.solutionLinks}
              />
            ) : null}

            {item.ecosystemLinks.length > 0 ? (
              <PortfolioLinkGroup
                title="Ecosystem layer"
                links={item.ecosystemLinks}
              />
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-medium text-[#DDE3EA]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      }
    />
  );
}

function PortfolioMeta({
  category,
  provenance
}: {
  category: string;
  provenance: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-sm border border-white/10 bg-[#030405]/44 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8C96A3]">
        {category}
      </span>
      <span className="rounded-sm border border-[#F3C743]/18 bg-[#F3C743]/[0.055] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#DDE3EA]">
        {provenance}
      </span>
    </div>
  );
}

function PortfolioLinkGroup({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-[#DDE3EA]">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
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
  );
}
