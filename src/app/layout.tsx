import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GetInTouchCtaShell } from "@/components/layout/get-in-touch-cta-shell";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { MotionProvider } from "@/components/motion/motion-provider";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { getRootMetadata } from "@/lib/seo";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata = getRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      data-scroll-behavior="smooth"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full scroll-smooth`}
    >
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <GoogleAnalytics />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <GetInTouchCtaShell />
          <Footer />
          <ScrollToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
