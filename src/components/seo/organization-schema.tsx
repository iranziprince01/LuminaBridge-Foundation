import { siteConfig } from "@/lib/site-config";
import {
  absoluteAsset,
  organizationId,
  siteOrigin,
  websiteId,
} from "@/lib/structured-data";

/**
 * Global NGO + Organization + WebSite structured data (JSON-LD @graph).
 * Values are sourced from src/lib/site-config.ts.
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteOrigin,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        inLanguage: "en-CA",
        publisher: { "@id": organizationId },
      },
      {
        "@type": ["Organization", "NGO", "NonprofitOrganization"],
        "@id": organizationId,
        name: siteConfig.name,
        legalName: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteOrigin,
        logo: {
          "@type": "ImageObject",
          url: absoluteAsset(siteConfig.logoColor),
        },
        image: absoluteAsset(siteConfig.ogImage),
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        foundingDate: siteConfig.foundingDate,
        slogan: siteConfig.tagline,
        nonprofitStatus: "Registered Nonprofit Organization (Alberta, Canada)",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.suite,
          addressLocality: "Edmonton",
          addressRegion: "AB",
          postalCode: siteConfig.address.postalCode,
          addressCountry: "CA",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Alberta, Canada" },
          { "@type": "Country", name: "Canada" },
        ],
        knowsAbout: siteConfig.keywords,
        sameAs: Object.values(siteConfig.social),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: siteConfig.email,
            telephone: siteConfig.phone,
            areaServed: "CA",
            availableLanguage: ["English", "French"],
          },
          {
            "@type": "ContactPoint",
            contactType: "volunteer",
            email: siteConfig.volunteerEmail,
            areaServed: "CA",
            availableLanguage: ["English", "French"],
          },
          {
            "@type": "ContactPoint",
            contactType: "partnerships",
            email: siteConfig.partnershipEmail,
            areaServed: "CA",
            availableLanguage: ["English", "French"],
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
