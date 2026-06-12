import { siteConfig } from "@/lib/site-config";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "NGO"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logoColor}`,
    description: siteConfig.description,
    email: siteConfig.email,
    foundingDate: siteConfig.founded.toString(),
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
        availableLanguage: ["English", "French"],
      },
      {
        "@type": "ContactPoint",
        contactType: "volunteer",
        email: siteConfig.volunteerEmail,
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
