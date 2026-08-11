import { maturityDefinitions, maturityLabels, type MaturityStatus } from "@/lib/site";
import { cn } from "@/lib/utils";

type MaturityBadgeProps = {
  maturity: MaturityStatus;
  className?: string;
};

const maturityStyles: Record<MaturityStatus, string> = {
  available:
    "border-[#1D6FFF]/35 bg-[#1D6FFF]/12 text-[#DDE3EA] shadow-[0_0_18px_rgba(29,111,255,0.1)]",
  "active-development":
    "border-[#F3C743]/38 bg-[#F3C743]/10 text-[#F4F7FA] shadow-[0_0_18px_rgba(243,199,67,0.08)]",
  "reference-architecture":
    "border-[#8C96A3]/32 bg-[#8C96A3]/10 text-[#DDE3EA]",
  "research-program": "border-white/14 bg-white/[0.045] text-[#A7B0BE]",
  "future-environment":
    "border-[#F3C743]/34 bg-[linear-gradient(90deg,rgba(243,199,67,0.12),rgba(140,150,163,0.08))] text-[#F4F7FA]"
};

export function MaturityBadge({ maturity, className }: MaturityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full w-fit items-center rounded-sm border px-2.5 py-1 text-left text-xs font-semibold uppercase leading-4 tracking-[0.16em] whitespace-normal",
        maturityStyles[maturity],
        className
      )}
      title={maturityDefinitions[maturity]}
    >
      {maturityLabels[maturity]}
    </span>
  );
}
