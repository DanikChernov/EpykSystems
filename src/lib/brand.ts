export const brand = {
  name: "Epyk Systems",
  wordmark: "EPYK",
  descriptor: "SYSTEMS",
  tagline: "Built for Real Operations.",
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
    black: "#05070B",
    navy: "#080D14",
    charcoal: "#0B0F14",
    panel: "#111820",
    blue: "#2D7CFF",
    blueDeep: "#1E6BFF",
    blueSoft: "#3B82F6",
    text: "#F4F7FB",
    textSecondary: "#DDE3EA",
    muted: "#A7B0BE",
    subdued: "#7B8794"
  }
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Operations", href: "/operations" },
  { label: "Inventories", href: "/inventories" },
  { label: "Vision", href: "/vision" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;
