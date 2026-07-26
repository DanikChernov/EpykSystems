import type { Metadata } from "next";

export const brand = {
  name: "Epyk Systems",
  wordmark: "EPYK",
  descriptor: "SYSTEMS",
  invitation: "STEP INTO EPYK",
  promise: "THE EDGE OF FREEDOM",
  tagline: "Built for Real Operations.",
  explanatoryLine:
    "A God-centered, community-minded, local-first technology ecosystem where intelligence, infrastructure, and digital life remain under the control of the people who use them.",
  principles: [
    "Welcome without pressure.",
    "Assistance without intrusion.",
    "Intelligence without control.",
    "Technology without unnecessary dependence.",
    "Hospitality in service to God and people."
  ],
  domain: "epyk-systems.com",
  url: "https://www.epyk-systems.com",
  email: "contact@epyk-systems.com",
  assets: {
    logo: "/brand/epyk-systems-logo.png",
    logoReference: "/brand/epyk-systems-logo-reference.png",
    icon: "/brand/epyk-icon.png",
    favicon: "/brand/favicon.png"
  },
  colors: {
    obsidian: "#030405",
    black: "#080A0D",
    charcoal: "#11151A",
    silverDark: "#252B32",
    silverMuted: "#8C96A3",
    blue: "#1D6FFF",
    blueDeep: "#1E6BFF",
    blueSoft: "#2563EB",
    gold: "#F3C743",
    goldSoft: "#F6C945",
    text: "#F4F7FA",
    textSecondary: "#DDE3EA",
    muted: "#A7B0BE",
    subdued: "#7B8794"
  }
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Operational Software", href: "/solutions/operational-software" },
      {
        label: "Inventory and Material Control",
        href: "/solutions/inventory-and-material-control"
      },
      { label: "Private AI", href: "/solutions/private-ai" },
      { label: "Edge Infrastructure", href: "/solutions/edge-infrastructure" },
      { label: "Epyk Perception", href: "/solutions/perception" },
      {
        label: "Industrial Modernization",
        href: "/solutions/secure-industrial-modernization"
      }
    ]
  },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path
}: PageMetadataOptions): Metadata {
  return {
    title: {
      absolute: title
    },
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: brand.name,
      title,
      description,
      images: [
        {
          url: brand.assets.logo,
          width: 1345,
          height: 360,
          alt: "Epyk Systems logo"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [brand.assets.logo]
    }
  };
}
