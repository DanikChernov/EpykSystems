import { ImageResponse } from "next/og";

import { brand } from "@/lib/brand";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(720px 520px at 6% 50%, rgba(29,111,255,0.34), transparent 68%), radial-gradient(700px 520px at 96% 42%, rgba(243,199,67,0.22), transparent 70%), linear-gradient(112deg, #030405 0%, #080A0D 48%, #11151A 100%)",
          color: brand.colors.text,
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            color: brand.colors.gold,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase"
          }}
        >
          {brand.wordmark} {brand.descriptor}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              color: brand.colors.blue,
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.14em",
              marginBottom: 26,
              textTransform: "uppercase"
            }}
          >
            {brand.promise}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.03,
              maxWidth: 900
            }}
          >
            Operational software and private infrastructure for manufacturers.
          </div>
        </div>
        <div
          style={{
            color: brand.colors.muted,
            display: "flex",
            fontSize: 25,
            lineHeight: 1.35,
            maxWidth: 820
          }}
        >
          Founder-led systems built around real workflows, material control,
          private AI, edge infrastructure, and secure industrial modernization.
        </div>
      </div>
    ),
    size
  );
}
