import { MapPin } from "lucide-react";
import Link from "next/link";

import { brand, navItems } from "@/lib/brand";

import { Logo } from "./Logo";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#05070B]/92">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.15fr_0.85fr] md:items-start lg:px-8">
        <div className="max-w-xl">
          <Logo variant="full" imageClassName="h-16 w-[230px] sm:w-[270px]" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#A7B0BE]">
            {brand.tagline} Practical software for industrial workflows,
            inventory control, and operational visibility.
          </p>
          <a
            href={`mailto:${brand.email}`}
            className="mt-5 inline-flex rounded-sm text-sm font-medium text-[#DDE3EA] transition hover:text-[#2D7CFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70"
          >
            {brand.email}
          </a>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-[#A7B0BE]">
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden size={16} className="text-[#2D7CFF]" />
              Erie, Pennsylvania
            </span>
            <span className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/daniel-chernov-84727a283/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daniel Chernov on LinkedIn"
                className="inline-flex size-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-[#DDE3EA] transition hover:border-[#2D7CFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href="https://github.com/DanikChernov"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daniel Chernov on GitHub"
                className="inline-flex size-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-[#DDE3EA] transition hover:border-[#2D7CFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70"
              >
                <GitHubIcon className="size-4" />
              </a>
            </span>
          </div>
        </div>

        <div className="md:justify-self-end">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#DDE3EA]">
            Navigation
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 sm:gap-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm text-[#A7B0BE] transition hover:text-[#F4F7FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5">
        <p className="mx-auto max-w-7xl text-xs text-[#7B8794] lg:px-8">
          &copy; {year} Epyk Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
