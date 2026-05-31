import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NeuralBackground } from "@/components/NeuralBackground";
import { brand } from "@/lib/brand";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: "Epyk Systems | Operational Systems for Industrial Work",
    template: "%s | Epyk Systems"
  },
  description:
    "Practical software infrastructure for workflow visibility, inventory control, industrial operations, and computer vision.",
  applicationName: "Epyk Systems",
  keywords: [
    "industrial software",
    "workflow automation",
    "inventory tracking",
    "material tracking",
    "computer vision",
    "operations software"
  ],
  authors: [{ name: "Epyk Systems" }],
  creator: "Epyk Systems",
  publisher: "Epyk Systems",
  openGraph: {
    type: "website",
    url: brand.url,
    siteName: brand.name,
    title: "Epyk Systems | Operational Systems for Industrial Work",
    description:
      "Practical software infrastructure for workflow visibility, inventory control, industrial operations, and computer vision.",
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
    title: "Epyk Systems | Operational Systems for Industrial Work",
    description:
      "Practical software infrastructure for workflow visibility, inventory control, industrial operations, and computer vision.",
    images: [brand.assets.logo]
  },
  icons: {
    icon: brand.assets.favicon,
    shortcut: brand.assets.favicon,
    apple: brand.assets.favicon
  }
};

export const viewport: Viewport = {
  themeColor: brand.colors.black,
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
        <div className="relative min-h-screen overflow-hidden bg-[#05070B] text-[#F4F7FB]">
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
