import { siteConfig } from "@/lib/site-config";

/**
 * Organization structured data (JSON-LD).
 * Update values in src/lib/site-config.ts — name, logo, URL, contact, and social links.
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "NGO"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logoColor}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.founded.toString(),
    slogan: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.suite,
      addressLocality: "Edmonton",
      addressRegion: "AB",
      postalCode: "T5J 3S4",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Alberta, Canada",
    },
    nonprofitStatus: "NonprofitType",
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
      },
      {
        "@type": "ContactPoint",
        contactType: "partnerships",
        email: siteConfig.partnershipEmail,
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
