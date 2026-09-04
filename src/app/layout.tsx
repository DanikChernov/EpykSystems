import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NeuralBackground } from "@/components/NeuralBackground";
import { brand } from "@/lib/brand";
import { organizationJsonLd } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default:
      "Epyk Systems | Operational Software and Private Infrastructure for Manufacturers",
    template: "%s | Epyk Systems"
  },
  description:
    "Founder-led operational software, inventory and material-control systems, private AI, and owner-controlled infrastructure for manufacturers.",
  applicationName: "Epyk Systems",
  keywords: [
    "local-first technology",
    "private AI",
    "industrial infrastructure",
    "operational software",
    "manufacturing modernization",
    "operational perception"
  ],
  authors: [{ name: "Epyk Systems" }],
  creator: "Epyk Systems",
  publisher: "Epyk Systems",
  openGraph: {
    type: "website",
    url: brand.url,
    siteName: brand.name,
    title:
      "Epyk Systems | Operational Software and Private Infrastructure for Manufacturers",
    description:
      "Founder-led operational software, inventory and material-control systems, private AI, and owner-controlled infrastructure for manufacturers.",
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
    title:
      "Epyk Systems | Operational Software and Private Infrastructure for Manufacturers",
    description:
      "Founder-led operational software, inventory and material-control systems, private AI, and owner-controlled infrastructure for manufacturers.",
    images: ["/opengraph-image"]
  },
  icons: {
    icon: brand.assets.favicon,
    shortcut: brand.assets.favicon,
    apple: brand.assets.favicon
  }
};

export const viewport: Viewport = {
  themeColor: brand.colors.obsidian,
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="relative min-h-screen overflow-hidden text-[#F4F7FA]">
          <NeuralBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
