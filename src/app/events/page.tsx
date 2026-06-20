import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { EventCard } from "@/components/cards/event-card";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ItemListSchema } from "@/components/seo/item-list-schema";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { events, eventsClosing, eventPageBannerImage } from "@/lib/data";
import { eventsMetadata } from "@/lib/seo";

export const metadata: Metadata = eventsMetadata;

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
      <PageBanner title="Our Upcoming Signature Events" image={eventPageBannerImage} />
      <Section tone="white" backdrop="orbs">
        <PageContainer>
          <SectionHeader title="2026 Signature Events" align="left" className="mb-8 sm:mb-10" />
          <StaggerContainer className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24" staggerDelay={0.12}>
            {events.map((event, index) => (
              <StaggerItem key={event.id}>
                <EventCard event={event} featured priority={index === 0} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp className="mt-12 text-center sm:mt-16 md:mt-20">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              {eventsClosing}
            </p>
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
