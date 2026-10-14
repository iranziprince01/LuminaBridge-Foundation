import { Event as EventType } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { absoluteAsset, organizationId } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/seo";

interface EventSchemaProps {
  event: EventType;
  slug: string;
}

const eventStartDates: Record<string, string | undefined> = {
  "newroots-canada-summit": "2026-08-01",
  bridgefest: "2026-11-06",
  "youth-unlocking-potential-2026": "2026-10-07",
  "youth-unlocking-potential": undefined,
};

const eventEndDates: Record<string, string | undefined> = {
  bridgefest: "2026-11-08",
};

export function EventSchema({ event, slug }: EventSchemaProps) {
  const startDate = eventStartDates[slug];
  const endDate = eventEndDates[slug];
  const isTbd = !startDate;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    ...(startDate ? { startDate } : {}),
    ...(endDate ? { endDate } : {}),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: isTbd
      ? "https://schema.org/EventScheduled"
      : "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue?.name ?? event.location,
      address: {
        "@type": "PostalAddress",
        ...(event.venue
          ? { streetAddress: event.venue.streetAddress, postalCode: event.venue.postalCode }
          : {}),
        addressLocality: "Edmonton",
        addressRegion: "AB",
        addressCountry: "CA",
      },
    },
    image: absoluteAsset(event.image),
    organizer: {
      "@type": "NGO",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: absoluteUrl(`/events/${slug}`),
    isAccessibleForFree: true,
    inLanguage: "en-CA",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
