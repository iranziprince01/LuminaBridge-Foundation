import type { Metadata } from "next";
import { metaDescription } from "@/lib/seo-keywords";
import { pageTitles, siteConfig } from "@/lib/site-config";

/** Unique meta descriptions for every indexable route (~150–158 characters). */
export const pageDescriptions = {
  home: siteConfig.metaDescription,
  team: metaDescription(
    "Meet the Lumina Bridge Foundation team in Edmonton, Alberta — leaders in arts, culture, youth empowerment, and community impact across Canada."
  ),
  events: metaDescription(
    "Lumina Bridge Foundation events in Alberta, Canada — NewRoots Summit, BridgeFest, and youth programs. Arts, culture, and community gatherings in Edmonton."
  ),
  programs: metaDescription(
    "Explore Lumina Bridge Foundation programs in Edmonton and Alberta: arts, culture, youth leadership, mental wellness, entrepreneurship, and newcomer support."
  ),
  impact: metaDescription(
    "See Lumina Bridge Foundation impact in Edmonton, Alberta, and across Canada — youth, arts, culture, mental wellness, and community development outcomes."
  ),
  donate: metaDescription(
    "Donate to Lumina Bridge Foundation in Edmonton, Alberta. Support arts, culture, youth leadership, mental wellness, and community programs across Alberta."
  ),
  getInvolved: metaDescription(
    "Partner, volunteer, or sponsor Lumina Bridge Foundation in Edmonton, Alberta. Join our arts, culture, and community programs across Alberta and Canada."
  ),
  privacy: metaDescription(
    "Lumina Bridge Foundation Privacy Policy — how we collect, use, and protect personal information when you use our Edmonton, Alberta nonprofit website and services."
  ),
  terms: metaDescription(
    "Lumina Bridge Foundation Terms of Use for our website, programs, and events. Registered nonprofit based in Edmonton, Alberta, Canada."
  ),
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
  const snippetDescription = metaDescription(description);

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description: snippetDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description: snippetDescription,
      countryName: "Canada",
      images: buildSocialImages(ogImage, ogImageAlt),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: snippetDescription,
      images: [ogImage],
      ...(siteConfig.twitterHandle
        ? { creator: siteConfig.twitterHandle, site: siteConfig.twitterHandle }
        : {}),
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

  if (process.env.BING_SITE_VERIFICATION) {
    verification.other = {
      ...(verification.other ?? {}),
      "msvalidate.01": process.env.BING_SITE_VERIFICATION,
    };
  }

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
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
    other: {
      "content-language": "en-CA",
    },
    alternates: {
      canonical: siteConfig.url,
      languages: {
        "en-CA": siteConfig.url,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.metaDescription,
      images: buildSocialImages(siteConfig.ogImage, siteConfig.name),
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.metaDescription,
      images: [siteConfig.ogImage],
      ...(siteConfig.twitterHandle
        ? { creator: siteConfig.twitterHandle, site: siteConfig.twitterHandle }
        : {}),
    },
    icons: {
      icon: siteConfig.favicon,
      apple: "/apple-icon.png",
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
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
    description: metaDescription(
      `${description} — Lumina Bridge Foundation event in Alberta, Canada.`
    ),
    path: `/events/${slug}`,
    image: image ?? "/events.PNG",
    imageAlt: `${title}, Lumina Bridge Foundation event in Edmonton Alberta`,
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
    description: metaDescription(
      `${description} — Lumina Bridge Foundation program in Edmonton, Alberta, Canada.`
    ),
    path: `/programs/${slug}`,
    image,
    imageAlt: `${title}, Lumina Bridge Foundation program in Alberta`,
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
