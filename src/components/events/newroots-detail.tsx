import Image from "next/image";
import {
  Building2,
  Calendar,
  FileText,
  Goal,
  History,
  MapPin,
  Target,
  Telescope,
} from "lucide-react";
import { EventRegistration } from "@/components/events/event-registration";
import { PageContainer } from "@/components/shared/page-container";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { StatStrip } from "@/components/shared/stat-strip";
import { FadeUp } from "@/components/motion/fade-up";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { newrootsFlyerImage, newrootsSummitPhoto, type Event } from "@/lib/data";
import { newrootsContent } from "@/lib/newroots-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface NewRootsDetailProps {
  event: Event;
}

export function NewRootsDetail({ event }: NewRootsDetailProps) {
  const content = newrootsContent;

  return (
    <>
      <PageBanner
        title={["NewRoots Canada", "Summit 2026"]}
        image={newrootsSummitPhoto}
        imageAlt="Newcomers and community members gathered around the table at NewRoots Canada Summit 2026"
        variant="event"
      />

      <Section tone="white" backdrop="mesh">
        <PageContainer detail>
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/80 px-3 py-1 text-xs font-semibold text-white">
              <History className="h-3.5 w-3.5" aria-hidden />
              Past Event
            </span>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-secondary">
              {content.subtitle}
            </p>
            <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
              {content.badge}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { icon: Calendar, label: "Held On", value: event.date },
                { icon: MapPin, label: "Location", value: event.location },
                { icon: Building2, label: "Organized by", value: siteConfig.name },
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
                src={newrootsFlyerImage}
                alt="NewRoots Canada Summit 2026 event flyer"
                width={1200}
                height={1600}
                className="h-auto w-full object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </MotionReveal>

          <FadeUp className="mt-16 rounded-2xl border border-secondary/25 bg-gradient-to-br from-secondary/10 via-white to-primary/5 p-6 text-center sm:p-8 md:p-10">
            <p className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              {content.identityStatement}
            </p>
          </FadeUp>

          <FadeUp className="mt-16">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10">
                <FileText className="h-5 w-5 text-secondary" />
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

          <FadeUp className="mt-16 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Target className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">Event Purpose</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {content.purpose}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                Six Integrated Experiences
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What the Summit Featured
              </h2>
            </div>
            <StaggerContainer className="mt-10 grid gap-6 lg:grid-cols-2" staggerDelay={0.08}>
              {content.components.map((component) => (
                <StaggerItem key={component.number}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
                    <div
                      className={cn(
                        "bg-gradient-to-r px-5 py-4 text-white sm:px-6",
                        component.accent
                      )}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                        Component {component.number}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold leading-snug sm:text-xl">
                        {component.title}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {component.description}
                      </p>
                      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-secondary">
                        Activities
                      </p>
                      <ul className="mt-3 space-y-2">
                        {component.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex items-start gap-2.5 text-sm text-foreground sm:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp className="mt-20 rounded-2xl border border-border/60 bg-muted/40 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-3">
              <Goal className="h-5 w-5 text-secondary" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Impact Goals
              </h2>
            </div>
            <p className="mt-4 text-base text-muted-foreground">The summit set out to achieve:</p>
            <StaggerContainer className="mt-6 grid gap-3 sm:grid-cols-2" staggerDelay={0.06}>
              {content.expectedImpact.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-white px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp className="mt-16 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 sm:p-8 md:p-10">
            <div className="flex items-start gap-4">
              <Telescope className="mt-1 h-5 w-5 shrink-0 text-secondary" />
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Long-Term Vision
                </h2>
                <div className="mt-6 space-y-5">
                  {content.longTermVision.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-12">
            <StatStrip stats={[...content.stats]} className="sm:grid-cols-2 lg:grid-cols-4" />
          </FadeUp>

          <FadeUp className="mt-12">
            <EventRegistration event={event} />
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
