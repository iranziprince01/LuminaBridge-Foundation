import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { heroContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const { headline, primaryCta, secondaryCta } = heroContent;

export const alt = `${siteConfig.name} — ${headline.primary} ${headline.primaryContinued} ${headline.accent} ${headline.secondary}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Matches `.gradient-hero-premium` from globals.css */
const heroGradientOverlay =
  "linear-gradient(to top, rgba(12, 74, 110, 0.94) 0%, rgba(12, 74, 110, 0.72) 35%, rgba(12, 74, 110, 0.2) 70%, transparent 100%), linear-gradient(to right, rgba(12, 74, 110, 0.82) 0%, rgba(13, 148, 136, 0.45) 45%, transparent 72%)";

export default async function OpenGraphImage() {
  const heroBuffer = await readFile(join(process.cwd(), "public", "hero.jpg"));
  const heroSrc = `data:image/jpeg;base64,${heroBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: 1200,
          height: 630,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "48px 72px",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroSrc}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1200,
              height: 630,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 0,
              left: 0,
              width: 1200,
              height: 630,
              background: heroGradientOverlay,
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              maxWidth: 920,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 58,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                textShadow: "0 2px 16px rgba(0,0,0,0.55)",
              }}
            >
              {headline.primary} {headline.primaryContinued}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 6,
                fontSize: 58,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#ffe600",
                textShadow: "0 2px 16px rgba(0,0,0,0.5)",
              }}
            >
              {headline.accent}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 6,
                fontSize: 58,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#ffe600",
                textShadow: "0 2px 16px rgba(0,0,0,0.5)",
              }}
            >
              {headline.secondary}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              position: "relative",
              marginTop: 36,
              gap: 16,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 28px",
                borderRadius: 999,
                background: "#ffffff",
                color: "#0c4a6e",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {primaryCta.label}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 28px",
                borderRadius: 999,
                background: "transparent",
                color: "#ffffff",
                fontSize: 22,
                fontWeight: 700,
                border: "2px solid rgba(255,255,255,0.85)",
              }}
            >
              {secondaryCta.label}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
