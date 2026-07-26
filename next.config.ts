import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/operations",
        destination: "/solutions/operational-software",
        permanent: true
      },
      {
        source: "/inventories",
        destination: "/solutions/inventory-and-material-control",
        permanent: true
      },
      {
        source: "/vision",
        destination: "/solutions/perception",
        permanent: true
      }
    ];
  },
  turbopack: {
    root
  }
};

export default nextConfig;
