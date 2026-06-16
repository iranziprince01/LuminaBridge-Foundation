import type { Metadata } from "next";
import { pageTitles, siteConfig } from "@/lib/site-config";

/** Unique meta descriptions for every indexable route. */
export const pageDescriptions = {
  home: siteConfig.description,
  team: "Meet the executive leadership and operations team behind Lumina Bridge Foundation, nonprofit leaders driving youth empowerment and community impact across Alberta.",
  events:
    "Discover Lumina Bridge Foundation's 2026 signature events in Alberta: NewRoots Canada Summit, BridgeFest, and Youth Unlocking Potential. Register and get involved.",
  programs:
    "Explore community-centered programs from Lumina Bridge Foundation in arts, mental wellness, youth leadership, entrepreneurship, newcomer support, and more across Alberta.",
  impact:
    "See how Lumina Bridge Foundation is building lasting community impact across Alberta and our vision for empowering youth, families, and newcomers nationwide.",
  donate:
    "Donate to Lumina Bridge Foundation and support youth leadership, arts, mental wellness, and community programs that strengthen Alberta communities.",
  getInvolved:
    "Partner, sponsor, volunteer, or request information about Lumina Bridge Foundation programs, events, and community initiatives across Alberta.",
  privacy:
    "Read the Lumina Bridge Foundation Privacy Policy to learn how we collect, use, and protect your personal information when you engage with our nonprofit.",
  terms:
    "Review the Lumina Bridge Foundation Terms of Use governing access to our website, programs, events, and digital services.",
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

function buildSocialImages(image: string, alt: string) {
  return [
    {
      url: image,
      width: siteConfig.ogImageWidth,
      height: siteConfig.ogImageHeight,
      alt,
    },
  ];
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  titleAbsolute?: boolean;
}

/** Builds per-page metadata with canonical URL, Open Graph, and Twitter Card tags. */
export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  noIndex = false,
  titleAbsolute = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = image ?? siteConfig.ogImage;
  const ogImageAlt = imageAlt ?? `${title}, ${siteConfig.shortName}`;

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: buildSocialImages(ogImage, ogImageAlt),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}

/** Root layout metadata shared across the site. */
export function getRootMetadata(): Metadata {
  const verification: Metadata["verification"] = {};

  if (process.env.GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.GOOGLE_SITE_VERIFICATION;
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Nonprofit",
    verification,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: siteConfig.url,
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: buildSocialImages(siteConfig.ogImage, siteConfig.name),
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
  };
}

export const staticSitemapPaths = [
  "",
  "/team",
  "/events",
  "/programs",
  "/impact",
  "/donate",
  "/get-involved",
  "/privacy",
  "/terms",
] as const;

export function getEventPageMetadata(
  slug: string,
  title: string,
  description: string,
  image?: string
): Metadata {
  return createPageMetadata({
    title,
    description,
    path: `/events/${slug}`,
    image: image ?? "/events.PNG",
    imageAlt: `${title}, Lumina Bridge Foundation event`,
  });
}

export function getProgramPageMetadata(
  slug: string,
  title: string,
  description: string,
  image: string
): Metadata {
  return createPageMetadata({
    title,
    description,
    path: `/programs/${slug}`,
    image,
    imageAlt: `${title}, Lumina Bridge Foundation program`,
  });
}

export const homeMetadata = createPageMetadata({
  title: pageTitles.home,
  description: pageDescriptions.home,
  path: "/",
  titleAbsolute: true,
});

export const teamMetadata = createPageMetadata({
  title: pageTitles.team,
  description: pageDescriptions.team,
  path: "/team",
  image: "/team.jpg",
});

export const eventsMetadata = createPageMetadata({
  title: pageTitles.events,
  description: pageDescriptions.events,
  path: "/events",
  image: "/events.PNG",
});

export const programsMetadata = createPageMetadata({
  title: pageTitles.programs,
  description: pageDescriptions.programs,
  path: "/programs",
  image: "/mission.jpg",
});

export const impactMetadata = createPageMetadata({
  title: pageTitles.impact,
  description: pageDescriptions.impact,
  path: "/impact",
  image: "/impact.jpg",
});

export const donateMetadata = createPageMetadata({
  title: pageTitles.donate,
  description: pageDescriptions.donate,
  path: "/donate",
  image: "/support.jpg",
});

export const getInvolvedMetadata = createPageMetadata({
  title: pageTitles.getInvolved,
  description: pageDescriptions.getInvolved,
  path: "/get-involved",
  image: "/involved.jpg",
});

export const privacyMetadata = createPageMetadata({
  title: pageTitles.privacy,
  description: pageDescriptions.privacy,
  path: "/privacy",
});

export const termsMetadata = createPageMetadata({
  title: pageTitles.terms,
  description: pageDescriptions.terms,
  path: "/terms",
});
