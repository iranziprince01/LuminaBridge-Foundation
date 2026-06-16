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
};

export default nextConfig;
