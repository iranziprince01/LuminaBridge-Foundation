import Image from "next/image";
import { Building2, Calendar, Goal, History, MapPin, Target } from "lucide-react";
import { PhotoGallery } from "@/components/events/photo-gallery";
import { PhotoSlot } from "@/components/events/photo-slot";
import { PageContainer } from "@/components/shared/page-container";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { StatStrip } from "@/components/shared/stat-strip";
import { FadeUp } from "@/components/motion/fade-up";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { newrootsFlyerImage, type Event } from "@/lib/data";
import { newrootsContent, newrootsPhotos } from "@/lib/newroots-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface NewRootsDetailProps {
  event: Event;
}

const eyebrowClass = "text-sm font-bold uppercase tracking-[0.2em] text-secondary";
const titleClass =
  "font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl";
const bodyClass = "text-base leading-relaxed text-muted-foreground md:text-lg";

const componentHeaderTones = ["bg-primary", "bg-secondary"];

export function NewRootsDetail({ event }: NewRootsDetailProps) {
  const content = newrootsContent;
  const photos = newrootsPhotos;

  const quickFacts = [
    { icon: Calendar, label: "Held On", value: event.date },
    { icon: MapPin, label: "Location", value: event.location },
    { icon: Building2, label: "Organized by", value: siteConfig.name },
  ];

  return (
    <>
      <PageBanner
        title={["NewRoots Canada", "Summit 2026"]}
        image={photos.banner.src}
        imageAlt={photos.banner.description}
        variant="event"
      />

      <Section tone="white" backdrop="none">
        <PageContainer>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-20">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/80 px-3 py-1 text-xs font-semibold text-white">
                <History className="h-3.5 w-3.5" aria-hidden />
                Past Event
              </span>
              <p className={cn("mt-6", eyebrowClass)}>{content.subtitle}</p>
              <h2 className={cn("mt-4", titleClass)}>{content.identityStatement}</h2>
              <p className={cn("mt-5", bodyClass)}>{content.badge}</p>

              <ul className="mt-8 space-y-3">
                {quickFacts.map(({ icon: Icon, label, value }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-border/60 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold leading-snug text-foreground sm:text-base">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <MotionReveal direction="scale">
              <div className="mx-auto max-w-lg overflow-hidden rounded-3xl shadow-2xl ring-1 ring-primary/10">
                <Image
                  src={newrootsFlyerImage}
                  alt="NewRoots Canada Summit 2026 event flyer"
                  width={1200}
                  height={1600}
                  className="h-auto w-full"
                  priority
                  sizes="(max-width: 1024px) 90vw, 512px"
                />
              </div>
            </MotionReveal>
          </div>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="none">
        <PageContainer>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <h2 className={titleClass}>Event Overview</h2>
              <StaggerContainer className="mt-6 space-y-5" staggerDelay={0.08}>
                {content.overview.map((paragraph) => (
                  <StaggerItem key={paragraph.slice(0, 48)}>
                    <p className={bodyClass}>{paragraph}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeUp>
            <MotionReveal direction="right">
              <PhotoSlot photo={photos.group} className="aspect-[4/3] shadow-lg" />
            </MotionReveal>
          </div>

          <div className="mt-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <MotionReveal direction="left" className="lg:order-1">
              <PhotoSlot photo={photos.facilitator} className="aspect-[4/3] shadow-lg" />
            </MotionReveal>
            <FadeUp className="lg:order-2">
              <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border/60 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                  Event Purpose
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {content.purpose}
                </p>
              </div>
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none">
        <PageContainer>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className={eyebrowClass}>Six Integrated Experiences</p>
            <h2 className={cn("mt-4", titleClass)}>What the Summit Featured</h2>
          </FadeUp>
          <StaggerContainer
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            staggerDelay={0.08}
          >
            {content.components.map((component, index) => (
              <StaggerItem key={component.number} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
                  <div
                    className={cn(
                      "px-5 py-4 text-white sm:px-6",
                      componentHeaderTones[index % componentHeaderTones.length]
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
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="none">
        <PageContainer>
          <FadeUp className="max-w-3xl">
            <p className={eyebrowClass}>Event Highlights</p>
            <h2 className={cn("mt-4", titleClass)}>Moments from the Summit</h2>
          </FadeUp>
          <FadeUp className="mt-12">
            <PhotoGallery photos={photos.highlights} columns={3} />
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none">
        <PageContainer>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <FadeUp className="h-full">
              <div className="h-full rounded-3xl border border-border/60 bg-white p-7 shadow-sm sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Goal className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                  Impact Goals
                </h2>
                <p className="mt-3 text-base text-muted-foreground">The summit set out to achieve:</p>
                <ul className="mt-5 space-y-3">
                  {content.expectedImpact.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp className="h-full">
              <div className="h-full rounded-3xl bg-primary p-7 text-white shadow-lg sm:p-9">
                <h2 className="font-display text-2xl font-bold">Long-Term Vision</h2>
                <div className="mt-4 space-y-4">
                  {content.longTermVision.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-white/90 md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp className="mt-8">
            <StatStrip stats={[...content.stats]} className="sm:grid-cols-2 lg:grid-cols-4" />
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
