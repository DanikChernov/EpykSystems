import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";
import { engagementPage, navItems, solutionAreas } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    ...navItems.map((item) => item.href),
    engagementPage.path,
    ...solutionAreas.map((solution) => `/solutions/${solution.slug}`)
  ];

  return routes.map((route) => ({
    url: `${brand.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : route === "/solutions" ? 0.85 : 0.7
  }));
}
