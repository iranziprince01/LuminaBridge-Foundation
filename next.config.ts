import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: false },
      { source: "/leadership", destination: "/team", permanent: false },
      { source: "/contact", destination: "/get-involved#contact", permanent: false },
    ];
  },
};

export default nextConfig;
