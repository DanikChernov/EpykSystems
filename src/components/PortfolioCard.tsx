import type { LucideIcon } from "lucide-react";

type PortfolioCardProps = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  icon: LucideIcon;
};

export function PortfolioCard({
  title,
  category,
  summary,
  tags,
  icon: Icon
}: PortfolioCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.3)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:bg-white/[0.045] hover:shadow-[0_24px_100px_rgba(45,124,255,0.12)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#2D7CFF]/24 bg-[#2D7CFF]/10 text-[#DDE3EA] transition group-hover:border-[#2D7CFF]/50">
          <Icon aria-hidden size={21} strokeWidth={1.8} />
        </div>
        <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-[#A7B0BE]">
          {category}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#F4F7FB]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">{summary}</p>
      <div className="mt-5 flex flex-wrap gap-2 pt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-[#05070B]/42 px-3 py-1 text-xs font-medium text-[#DDE3EA]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
