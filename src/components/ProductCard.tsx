import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function ProductCard({
  title,
  description,
  href,
  icon: Icon
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.32)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#1D6FFF]/45 hover:bg-white/[0.045] hover:shadow-[0_28px_110px_rgba(29,111,255,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/65"
    >
      <div
        className="absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#1D6FFF]/32 to-transparent transition group-hover:via-[#F3C743]/30"
        aria-hidden
      />
      <div className="relative flex size-11 items-center justify-center rounded-md border border-[#1D6FFF]/24 bg-[#1D6FFF]/10 text-[#DDE3EA] transition group-hover:border-[#1D6FFF]/50 group-hover:text-white">
        <Icon aria-hidden size={21} strokeWidth={1.8} />
      </div>
      <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-[#F4F7FA]">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-6 text-[#A7B0BE]">
        {description}
      </p>
      <span className="relative mt-6 inline-flex items-center text-sm font-semibold text-[#DDE3EA] transition group-hover:text-[#1D6FFF]">
        View product
        <ArrowRight
          aria-hidden
          size={16}
          className="ml-2 transition group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
