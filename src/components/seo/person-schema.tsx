import type { Leader } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { absoluteAsset, organizationId } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/seo";

interface PersonSchemaProps {
  people: Leader[];
}

export function PersonSchema({ people }: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": people.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      description: person.bio,
      ...(person.image ? { image: absoluteAsset(person.image) } : {}),
      url: absoluteUrl("/about"),
      worksFor: {
        "@type": "NGO",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
