import Link from "next/link";

import { brand, navItems } from "@/lib/brand";

import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#05070B]/92">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Logo variant="full" imageClassName="h-16 w-[230px] sm:w-[270px]" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#A7B0BE]">
            {brand.tagline} Practical software infrastructure for operational
            clarity, workflow visibility, and inventory control.
          </p>
          <a
            href={`mailto:${brand.email}`}
            className="mt-5 inline-flex text-sm font-medium text-[#DDE3EA] transition hover:text-[#2D7CFF]"
          >
            {brand.email}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#DDE3EA]">
            Navigation
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#A7B0BE] transition hover:text-[#F4F7FB]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#DDE3EA]">
            Deployment
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#A7B0BE]">
            Built for deployment to Cloudflare Pages, Vercel, or Netlify with a
            custom domain at {brand.domain}.
          </p>
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
