import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Calendar,
  Globe2,
  Mail,
  MapPin,
  Music2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { EventRegistration } from "@/components/events/event-registration";
import { PageBanner } from "@/components/shared/page-banner";
import { pageContainerDetailClass } from "@/components/shared/page-container";
import { Section } from "@/components/shared/section";
import { StatStrip } from "@/components/shared/stat-strip";
import { FadeUp } from "@/components/motion/fade-up";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { Button } from "@/components/ui/button";
import type { Event } from "@/lib/data";
import { bridgefestContent } from "@/lib/bridgefest-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface BridgeFestDetailProps {
  event: Event;
}

export function BridgeFestDetail({ event }: BridgeFestDetailProps) {
  const content = bridgefestContent;

  return (
    <>
      <PageBanner
        title={["BridgeFest Canada", "2026"]}
        image={event.image}
        imageAlt="BridgeFest Canada 2026 multicultural arts festival banner"
        variant="event"
      />

      <Section tone="white" backdrop="dots">
        <div className={pageContainerDetailClass}>
          <FadeUp>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
              {content.tagline}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Calendar, label: "Event Dates", value: content.dates },
                { icon: MapPin, label: "Location", value: content.location },
                { icon: Building2, label: "Organized by", value: content.organizer },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border/60 bg-muted/30 p-5 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-secondary" aria-hidden />
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-foreground sm:text-base">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          <MotionReveal direction="scale" className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-lg">
              <Image
                src={event.image}
                alt="BridgeFest Canada 2026 event banner"
                width={1200}
                height={1600}
                className="h-auto w-full object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </MotionReveal>

          <FadeUp className="mt-16">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10">
                <Sparkles className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Event Overview
              </h2>
            </div>
            <StaggerContainer className="mt-6 space-y-5" staggerDelay={0.08}>
              {content.overview.map((paragraph) => (
                <StaggerItem key={paragraph.slice(0, 48)}>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp className="mt-16">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">Vision</h2>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {content.vision}
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/5 to-[#ffe600]/10 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-secondary" />
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">Mission</h2>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {content.mission}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                Three Days of Excellence
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Festival Programming
              </h2>
            </div>
            <StaggerContainer className="mt-10 space-y-6" staggerDelay={0.1}>
              {content.programming.map((day, index) => (
                <StaggerItem key={day.day}>
                  <article className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
                    <div
                      className={cn(
                        "bg-gradient-to-r px-6 py-4 text-white sm:px-8",
                        day.accent
                      )}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                        {day.day}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                        {day.title}
                      </h3>
                    </div>
                    <div className="flex gap-5 p-6 sm:p-8">
                      <div className="hidden shrink-0 sm:flex sm:h-12 sm:w-12 sm:items-center sm:justify-center sm:rounded-full sm:bg-muted sm:text-lg sm:font-bold sm:text-primary">
                        {index + 1}
                      </div>
                      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                        {day.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp className="mt-20">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-secondary" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Community Impact
              </h2>
            </div>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {content.communityImpactIntro}
            </p>
            <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2" staggerDelay={0.08}>
              {content.communityImpact.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp className="mt-16 rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-white to-secondary/5 p-6 sm:p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Music2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {content.nationalReach.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {content.nationalReach.description}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {content.economicSignificance.title}
            </h2>
            <div className="mt-6 space-y-5">
              {content.economicSignificance.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="mt-16 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 sm:p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {content.longTermVision.title}
            </h2>
            <div className="mt-6 space-y-5">
              {content.longTermVision.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="mt-12">
            <StatStrip stats={[...content.stats]} className="sm:grid-cols-2 lg:grid-cols-4" />
          </FadeUp>

          <FadeUp className="mt-12">
            <EventRegistration event={event} />
          </FadeUp>

          <FadeUp className="mt-16 rounded-2xl border border-border/60 bg-primary p-6 text-white sm:p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Lumina Bridge Foundation
            </p>
            <p className="mt-2 text-lg font-semibold text-white/90">
              Edmonton, Alberta, Canada
            </p>
            <blockquote className="mt-6 border-l-4 border-secondary pl-5 text-lg font-medium italic leading-relaxed text-white/95 sm:text-xl">
              &ldquo;{content.quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                <Globe2 className="h-4 w-4" />
                {siteConfig.url.replace("https://", "")}
              </a>
            </div>
          </FadeUp>

          <FadeUp className="mt-10 flex flex-wrap gap-3 border-t border-border/60 pt-8">
            <p className="w-full text-sm text-muted-foreground">
              Interested in supporting BridgeFest as a volunteer, partner, or sponsor?
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
