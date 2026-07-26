import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = "Start with one real problem.",
  description = "We begin with the problem that causes real friction every week, not with a predetermined platform sale.",
  primaryLabel = "Discuss Your Operation",
  secondaryLabel = "View Solutions",
  secondaryHref = "/solutions"
}: CTASectionProps) {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(17,21,26,0.92),rgba(8,10,13,0.98),rgba(3,4,5,0.96))] p-8 shadow-[0_28px_120px_rgba(0,0,0,0.48)] [clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,0_100%)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F3C743]/42 to-transparent"
            aria-hidden
          />
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F4F7FA]">
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#A7B0BE]">
              {description}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              href="/contact"
              className="rounded-md border border-[#1D6FFF]/45 bg-gradient-to-b from-[#1D6FFF] to-[#174FC2] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_0_26px_rgba(29,111,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(29,111,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold text-[#DDE3EA] transition hover:border-[#F3C743]/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C743]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
