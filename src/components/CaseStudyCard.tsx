import type { CaseStudy } from "@/lib/site";

import { StatusBadge } from "./StatusBadge";

type CaseStudyCardProps = {
  item: CaseStudy;
};

const rows = [
  ["Problem", "problem"],
  ["Operational constraints", "constraints"],
  ["Epyk approach", "approach"],
  ["What was built", "built"],
  ["Current status", "currentStatus"],
  ["Evidence or result", "evidence"],
  ["Future role in the ecosystem", "futureRole"]
] as const;

export function CaseStudyCard({ item }: CaseStudyCardProps) {
  const Icon = item.icon;

  return (
    <article className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.3)] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 text-[#DDE3EA]">
          <Icon aria-hidden size={21} strokeWidth={1.8} />
        </div>
        <StatusBadge status={item.status} />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8C96A3]">
        {item.category}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
        {item.title}
      </h3>
      <dl className="mt-6 grid gap-4">
        {rows.map(([label, key]) => (
          <div key={key}>
            <dt className="text-sm font-semibold text-[#DDE3EA]">{label}</dt>
            <dd className="mt-1 text-sm leading-6 text-[#A7B0BE]">
              {item[key]}
            </dd>
          </div>
        ))}
      </dl>
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
