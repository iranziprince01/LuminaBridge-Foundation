import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    localPatterns: [
      {
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "luminabridgefoundation.org" }],
        destination: "https://www.luminabridgefoundation.org/:path*",
        permanent: true,
      },
      { source: "/events/voices-new-canada", destination: "/events/newroots-canada-summit", permanent: true },
      {
        source: "/programs/creative-industry-development",
        destination: "/programs/language-culture-belonging-initiative",
        permanent: true,
      },
      { source: "/about", destination: "/", permanent: false },
      { source: "/leadership", destination: "/team", permanent: false },
      { source: "/contact", destination: "/get-involved#contact", permanent: false },
    ];
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com data:",
          "img-src 'self' data: blob: https:",
          "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com",
          "frame-src https://docs.google.com https://forms.gle",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self' https://docs.google.com https://forms.gle",
          "frame-ancestors 'self'",
          "upgrade-insecure-requests",
        ].join("; "),
      },
    ];

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
