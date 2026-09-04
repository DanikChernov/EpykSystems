import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/brand";

const title = "Page Not Found | Epyk Systems";
const description =
  "The requested Epyk Systems page could not be found. Use the main links to return to current public pages.";

export const metadata: Metadata = {
  title: {
    absolute: title
  },
  description,
  robots: "noindex, nofollow",
  openGraph: {
    type: "website",
    siteName: brand.name,
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Epyk Systems industrial software and private infrastructure"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"]
  }
};

const recoveryLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" }
];

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="This Epyk page does not exist."
      description="The URL may be wrong, moved, or no longer public. Use one of the links below to continue."
    >
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-4">
        {recoveryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="epyk-button epyk-button-secondary inline-flex min-h-12 items-center justify-center border px-4 py-3 text-center text-sm font-semibold text-[#DDE3EA] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </PageHero>
  );
}
