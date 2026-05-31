import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:bg-white/[0.045] hover:shadow-[0_24px_90px_rgba(45,124,255,0.12)]",
        className
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-md border border-[#2D7CFF]/24 bg-[#2D7CFF]/10 text-[#DDE3EA] transition group-hover:border-[#2D7CFF]/50 group-hover:text-white">
        <Icon aria-hidden size={21} strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#F4F7FB]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">{description}</p>
    </article>
  );
}
