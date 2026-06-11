import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-20 md:space-y-28" staggerDelay={0.12}>
            {events.map((event, index) => (
              <StaggerItem key={event.id}>
                <EventCard event={event} featured priority={index === 0} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp className="mt-16 text-center md:mt-20">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {eventsClosing}
            </p>
          </FadeUp>
        </div>
      </Section>
    </>
  );
}
