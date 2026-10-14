import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { EventCard } from "@/components/cards/event-card";
import { BlogsNewsSection } from "@/components/events/blogs-news-section";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ItemListSchema } from "@/components/seo/item-list-schema";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { events, eventPageBannerImage, pastEvents, upcomingEvents } from "@/lib/data";
import { eventsMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = eventsMetadata;

const eventGroups = [
  {
    id: "upcoming-events",
    title: "Upcoming Events",
    description: "Register to take part in or attend our next signature events.",
    items: upcomingEvents,
  },
  {
    id: "past-events",
    title: "Past Events",
    description: "A look back at signature events we have already brought to our community.",
    items: pastEvents,
  },
];

export default function EventsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ]}
      />
      <ItemListSchema
        items={events.map((event) => ({
          name: event.title,
          path: `/events/${event.id}`,
        }))}
      />
      <PageBanner title="Our Signature Events" image={eventPageBannerImage} />
      <Section tone="white" backdrop="orbs">
        <PageContainer>
          {eventGroups.map((group, groupIndex) =>
            group.items.length > 0 ? (
              <div key={group.id} id={group.id} className={cn(groupIndex > 0 && "mt-20 sm:mt-24 md:mt-28")}>
                <SectionHeader
                  title={group.title}
                  description={group.description}
                  align="left"
                  className="mb-8 sm:mb-10"
                />
                <StaggerContainer className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24" staggerDelay={0.12}>
                  {group.items.map((event, index) => (
                    <StaggerItem key={event.id}>
                      <EventCard event={event} featured priority={groupIndex === 0 && index === 0} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            ) : null
          )}
        </PageContainer>
      </Section>
      <BlogsNewsSection />
    </>
  );
}
