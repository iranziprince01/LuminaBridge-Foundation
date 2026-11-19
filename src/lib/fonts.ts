import localFont from "next/font/local";

/**
 * Self-hosted to keep Vercel/Turbopack builds offline-safe.
 * next/font/google can fail mid-build when fonts.gstatic.com hiccups
 * and surface that as a misleading "Module not found".
 */
export const sourceSans = localFont({
  src: [
    {
      path: "../fonts/SourceSans3-Latin.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../fonts/SourceSans3-LatinExt.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-source-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const sourceSerif = localFont({
  src: [
    {
      path: "../fonts/SourceSerif4-Latin.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../fonts/SourceSerif4-LatinExt.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-source-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
