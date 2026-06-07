import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Build operational clarity into the work itself.",
  description = "Epyk Systems can help turn fragmented spreadsheets, disconnected approvals, and unclear inventory movement into practical software infrastructure."
}: CTASectionProps) {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(17,24,32,0.92),rgba(8,13,20,0.98),rgba(5,7,11,0.96))] p-8 shadow-[0_28px_120px_rgba(0,0,0,0.48)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2D7CFF]/14 blur-3xl" aria-hidden />
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F4F7FB]">
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#A7B0BE]">
              {description}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              href="/contact"
              className="rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_0_26px_rgba(45,124,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(45,124,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
            >
              Request a Consultation
            </Link>
            <Link
              href="/portfolio"
              className="rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold text-[#DDE3EA] transition hover:border-[#2D7CFF]/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
