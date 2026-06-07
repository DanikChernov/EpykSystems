import type { MetadataRoute } from "next";

import { brand, navItems } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navItems.map((item) => ({
    url: `${brand.url}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7
  }));
}
