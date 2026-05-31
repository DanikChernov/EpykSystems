import type { LucideIcon } from "lucide-react";

type PortfolioCardProps = {
  title: string;
  type: string;
  description: string;
  details: string[];
  icon: LucideIcon;
};

export function PortfolioCard({
  title,
  type,
  description,
  details,
  icon: Icon
}: PortfolioCardProps) {
  return (
    <article className="group rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.3)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:shadow-[0_24px_100px_rgba(45,124,255,0.12)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#2D7CFF]/24 bg-[#2D7CFF]/10 text-[#DDE3EA] transition group-hover:border-[#2D7CFF]/50">
          <Icon aria-hidden size={21} strokeWidth={1.8} />
        </div>
        <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-[#A7B0BE]">
          {type}
        </span>
      </div>
      <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#F4F7FB]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">{description}</p>
      <ul className="mt-5 grid gap-2">
        {details.map((detail) => (
          <li key={detail} className="flex gap-3 text-sm text-[#DDE3EA]">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2D7CFF]" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
