import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { EventCard } from "@/components/cards/event-card";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { events, eventsClosing, eventPageBannerImage } from "@/lib/data";
import { pageTitles } from "@/lib/site-config";

export const metadata: Metadata = {
  title: pageTitles.events,
  description:
    "Discover LuminaBridge Foundation's signature 2026 events: Voices of New Canada, BridgeFest, and Youth Unlocking Potential.",
};

export default function EventsPage() {
  return (
    <>
      <PageBanner title="Our Upcoming Signature Events" image={eventPageBannerImage} />
      <Section>
        <PageContainer>
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
