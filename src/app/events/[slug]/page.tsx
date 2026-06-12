import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { FadeUp } from "@/components/motion/fade-up";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { EventRegistration } from "@/components/events/event-registration";
import { StatStrip } from "@/components/shared/stat-strip";
import { Button } from "@/components/ui/button";
import { events, eventFlyerImage, getEventById, eventPageBannerImage } from "@/lib/data";
import { eventTabTitles, pageTitles } from "@/lib/site-config";
import { Calendar, MapPin } from "lucide-react";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.id }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventById(slug);

  if (!event) {
    return { title: pageTitles.eventNotFound };
  }

  return {
    title: eventTabTitles[slug] ?? event.title.replace(/ 2026$/, ""),
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventById(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <PageBanner title={event.title} image={eventPageBannerImage} />
      <Section tone="white" backdrop="dots">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">
              {event.tagline}
            </p>

            {event.theme && (
              <p className="mt-4 text-lg font-semibold text-primary">{event.theme}</p>
            )}

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-secondary" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-secondary" />
                {event.location}
              </span>
            </div>
          </FadeUp>

          <MotionReveal direction="scale" className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-lg">
              <Image
                src={eventFlyerImage}
                alt={`${event.title} event flyer`}
                width={1200}
                height={1600}
                className="h-auto w-full object-contain"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </MotionReveal>

          <StaggerContainer className="mt-10 space-y-6" staggerDelay={0.08}>
            {event.paragraphs.map((paragraph) => (
              <StaggerItem key={paragraph}>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {paragraph}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {event.categories && event.categories.length > 0 && (
            <FadeUp className="mt-10">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Artistic Categories
              </h2>
              <StaggerContainer className="mt-4 grid gap-3 sm:grid-cols-2">
                {event.categories.map((category) => (
                  <StaggerItem key={category}>
                    <div className="rounded-xl border border-border/60 bg-muted/50 px-4 py-3 text-sm font-semibold text-foreground">
                      {category}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeUp>
          )}

          <FadeUp className="mt-10 rounded-2xl border border-border/60 bg-muted/40 p-5 sm:mt-12 sm:p-6 md:p-8">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Expected Impact
            </h2>
            <StaggerContainer className="mt-6 space-y-3" staggerDelay={0.06}>
              {event.impactItems.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp className="mt-10">
            <StatStrip stats={event.stats} />
          </FadeUp>

          <FadeUp className="mt-12">
            <EventRegistration event={event} />
          </FadeUp>

          <FadeUp className="mt-10 flex flex-wrap gap-3 border-t border-border/60 pt-8">
            <p className="w-full text-sm text-muted-foreground">
              Interested in supporting this event as a volunteer or partner?
            </p>
            <Button size="sm" variant="outline" asChild>
              <Link href="/get-involved#volunteer">Volunteer</Link>
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <Link href="/get-involved#partner">Partner With Us</Link>
            </Button>
          </FadeUp>
        </div>
      </Section>
    </>
  );
}
