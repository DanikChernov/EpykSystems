import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { founderProfile } from "@/lib/site";

import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

type FounderCardProps = {
  showAboutLink?: boolean;
};

export function FounderCard({ showAboutLink = true }: FounderCardProps) {
  return (
    <aside className="border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
      {founderProfile.photoAvailable ? (
        <Image
          src={founderProfile.photoSrc}
          alt={`${founderProfile.name}, ${founderProfile.title}`}
          width={320}
          height={320}
          sizes="(min-width: 1024px) 18rem, 12rem"
          className="size-28 border border-[#1D6FFF]/25 object-cover"
        />
      ) : (
        <div
          className="flex size-28 items-center justify-center border border-[#1D6FFF]/25 bg-[#1D6FFF]/10 text-3xl font-semibold text-[#DDE3EA]"
          aria-label={`${founderProfile.name}, ${founderProfile.title}`}
        >
          {founderProfile.initials}
        </div>
      )}
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1D6FFF]">
        {founderProfile.title}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F4F7FA]">
        {founderProfile.name}
      </h2>
      <p className="mt-4 text-sm leading-6 text-[#DDE3EA]">
        {founderProfile.directWorkLine}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <a
          href={founderProfile.links[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
        >
          <LinkedInIcon className="size-[17px]" />
          LinkedIn
        </a>
        <a
          href={founderProfile.links[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
        >
          <GitHubIcon className="size-[17px]" />
          GitHub
        </a>
        <a
          href={founderProfile.links[2].href}
          className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
        >
          <Mail aria-hidden size={17} />
          Email
        </a>
        <a
          href={founderProfile.links[3].href}
          className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
        >
          <Phone aria-hidden size={17} />
          {founderProfile.links[3].label}
        </a>
      </div>
      {showAboutLink ? (
        <Link
          href={founderProfile.aboutHref}
          className="mt-5 inline-flex text-sm font-semibold text-[#DDE3EA] underline decoration-[#1D6FFF]/45 underline-offset-4 transition hover:text-[#1D6FFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
        >
          About Daniel Chernov
        </Link>
      ) : null}
    </aside>
  );
}
