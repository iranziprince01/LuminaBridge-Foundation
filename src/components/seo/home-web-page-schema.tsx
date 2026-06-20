import { siteConfig } from "@/lib/site-config";
import { organizationId, siteOrigin, websiteId } from "@/lib/structured-data";

/** Home page WebPage entity — reinforces brand query relevance for Lumina Bridge Foundation. */
export function HomeWebPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteOrigin}/#webpage`,
    url: siteOrigin,
    name: siteConfig.name,
    description: siteConfig.metaDescription,
    inLanguage: "en-CA",
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteOrigin}${siteConfig.ogImage}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
