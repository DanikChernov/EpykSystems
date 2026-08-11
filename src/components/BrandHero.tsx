import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { homePage, systemSignals } from "@/lib/site";

export function BrandHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8C96A3]/45 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[#F3C743]">
            {homePage.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#F4F7FA] sm:text-5xl lg:text-6xl">
            {homePage.hero.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#A7B0BE]">
            {homePage.hero.description}
          </p>
          <div className="mt-7 max-w-3xl border-l border-[#F3C743]/35 pl-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#DDE3EA]">
              {homePage.hero.brandLine}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">
              {homePage.hero.foundationLine}
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#1D6FFF]/45 bg-gradient-to-b from-[#1D6FFF] to-[#174FC2] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(29,111,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(29,111,255,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
            >
              Solve an Operational Problem
              <ArrowRight aria-hidden size={17} className="ml-2" />
            </Link>
            <Link
              href="/ecosystem"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#DDE3EA] transition hover:border-[#F3C743]/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C743]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
            >
              Explore the Epyk Ecosystem
            </Link>
          </div>
        </div>

        <div className="relative min-h-[440px]" aria-label="Epyk operating map">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(140,150,163,0.14)_38%,transparent_39%,transparent_62%,rgba(29,111,255,0.16)_63%,transparent_68%)]" />
          <div className="absolute left-[10%] top-[12%] h-[70%] w-px bg-gradient-to-b from-transparent via-[#8C96A3]/45 to-transparent" />
          <div className="absolute left-[30%] top-[4%] h-[88%] w-px bg-gradient-to-b from-transparent via-[#1D6FFF]/45 to-transparent" />
          <div className="absolute left-[58%] top-[12%] h-[74%] w-px bg-gradient-to-b from-transparent via-[#8C96A3]/28 to-transparent" />
          <div className="absolute left-[82%] top-[24%] h-[58%] w-px bg-gradient-to-b from-transparent via-[#F3C743]/40 to-transparent" />
          <div className="absolute inset-x-0 top-[26%] h-px bg-gradient-to-r from-transparent via-[#8C96A3]/35 to-transparent" />
          <div className="absolute inset-x-0 top-[54%] h-px bg-gradient-to-r from-transparent via-[#1D6FFF]/35 to-transparent" />
          <div className="absolute inset-x-0 top-[78%] h-px bg-gradient-to-r from-transparent via-[#8C96A3]/25 to-transparent" />

          <div className="relative grid h-full gap-4 sm:grid-cols-2">
            {systemSignals.map((signal, index) => {
              const Icon = signal.icon;

              return (
                <div
                  key={signal.label}
                  className="relative flex min-h-40 flex-col justify-between border border-white/10 bg-[#080A0D]/58 p-5 shadow-[0_22px_90px_rgba(0,0,0,0.32)] [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,18px_100%,0_calc(100%-18px))]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Icon
                      aria-hidden
                      size={22}
                      strokeWidth={1.7}
                      className={index === 0 ? "text-[#F3C743]" : "text-[#1D6FFF]"}
                    />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8C96A3]">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#DDE3EA]">
                      {signal.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#A7B0BE]">
                      {signal.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
