import { absoluteUrl } from "@/lib/seo";

export interface ItemListEntry {
  name: string;
  path: string;
}

interface ItemListSchemaProps {
  items: ItemListEntry[];
}

export function ItemListSchema({ items }: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
