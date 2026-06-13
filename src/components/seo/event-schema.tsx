import { Event as EventType } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/seo";

interface EventSchemaProps {
  event: EventType;
  slug: string;
}

export function EventSchema({ event, slug }: EventSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Edmonton",
        addressRegion: "AB",
        addressCountry: "CA",
      },
    },
    image: `${siteConfig.url}/events.PNG`,
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: absoluteUrl(`/events/${slug}`),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
