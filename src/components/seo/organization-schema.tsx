import { organizationAlternateNames, siteKeywords } from "@/lib/seo-keywords";
import { siteConfig } from "@/lib/site-config";
import {
  absoluteAsset,
  organizationId,
  siteOrigin,
  websiteId,
} from "@/lib/structured-data";

/**
 * Global NGO + Organization + WebSite structured data (JSON-LD @graph).
 * Strengthens entity signals for brand queries (e.g. "Lumina Bridge Foundation").
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
        alternateName: [...organizationAlternateNames],
        description: siteConfig.metaDescription,
        inLanguage: "en-CA",
        publisher: { "@id": organizationId },
        about: { "@id": organizationId },
      },
      {
        "@type": ["Organization", "NGO", "NonprofitOrganization"],
        "@id": organizationId,
        name: siteConfig.name,
        legalName: siteConfig.name,
        alternateName: [...organizationAlternateNames],
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
        keywords: siteConfig.keywords.join(", "),
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
          { "@type": "City", name: "Edmonton, Alberta, Canada" },
          { "@type": "AdministrativeArea", name: "Alberta, Canada" },
          { "@type": "Country", name: "Canada" },
        ],
        knowsAbout: [...siteKeywords],
        sameAs: Object.values(siteConfig.social),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: siteConfig.email,
            telephone: siteConfig.phone,
            areaServed: ["CA", "North America"],
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
