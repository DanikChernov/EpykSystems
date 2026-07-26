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
      "Epyk Systems | Local-First Technology, Private AI and Industrial Infrastructure",
    template: "%s | Epyk Systems"
  },
  description:
    "Epyk Systems is a God-centered, community-minded, local-first technology ecosystem building private AI, secure infrastructure, operational software, perception, and industrial modernization systems.",
  applicationName: "Epyk Systems",
  alternates: {
    canonical: "/"
  },
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
      "Epyk Systems | Local-First Technology, Private AI and Industrial Infrastructure",
    description:
      "Epyk Systems is a God-centered, community-minded, local-first technology ecosystem building private AI, secure infrastructure, operational software, perception, and industrial modernization systems.",
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
    title:
      "Epyk Systems | Local-First Technology, Private AI and Industrial Infrastructure",
    description:
      "Epyk Systems is a God-centered, community-minded, local-first technology ecosystem building private AI, secure infrastructure, operational software, perception, and industrial modernization systems.",
    images: [brand.assets.logo]
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
        <div className="relative min-h-screen overflow-hidden bg-[#030405] text-[#F4F7FA]">
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
