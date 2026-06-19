import type { Program } from "@/lib/programs-content";
import { siteConfig } from "@/lib/site-config";
import { absoluteAsset, organizationId } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/seo";

interface ProgramSchemaProps {
  program: Program;
}

export function ProgramSchema({ program }: ProgramSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Program",
    name: program.title,
    description: program.description,
    url: absoluteUrl(`/programs/${program.id}`),
    image: absoluteAsset(program.image),
    provider: {
      "@type": "NGO",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Alberta, Canada",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Youth, newcomers, families, and underserved communities",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
