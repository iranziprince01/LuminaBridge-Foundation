import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Calendar,
  ExternalLink,
  Eye,
  Globe2,
  Headphones,
  HeartHandshake,
  Map,
  MapPin,
  Target,
  TrendingUp,
} from "lucide-react";
import { EventRegistration } from "@/components/events/event-registration";
import { PageContainer } from "@/components/shared/page-container";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
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

const disciplines = ["Music", "Theatre", "Dance", "Film", "Fashion", "Comedy", "Spoken Word"];

/** Ordered to match `bridgefestContent.communityImpact`. */
const impactStyles = [
  { icon: Headphones, className: "bg-secondary/10 text-secondary" },
  { icon: HeartHandshake, className: "bg-primary/10 text-primary" },
  { icon: Globe2, className: "bg-accent/15 text-[#a16207]" },
  { icon: Briefcase, className: "bg-secondary/10 text-secondary" },
];

const eyebrowClass = "text-sm font-bold uppercase tracking-[0.2em] text-secondary";
const sectionTitleClass =
  "font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl";
const bodyClass = "text-base leading-relaxed text-muted-foreground md:text-lg";

export function BridgeFestDetail({ event }: BridgeFestDetailProps) {
  const content = bridgefestContent;
  const { participant, attendance } = siteConfig.eventRegistration;
  const isPast = event.status === "past";

  const quickFacts = [
    { icon: Calendar, label: "Event Dates", value: content.dates, accent: "border-t-primary", iconClass: "bg-primary/10 text-primary" },
    { icon: MapPin, label: "Location", value: content.location, href: content.directionsUrl, accent: "border-t-secondary", iconClass: "bg-secondary/10 text-secondary" },
    { icon: Building2, label: "Organized by", value: content.organizer, accent: "border-t-accent", iconClass: "bg-accent/15 text-[#a16207]" },
  ];

  return (
    <>
      <PageBanner
        title={["BridgeFest Canada", "2026"]}
        image={event.image}
        imageAlt="BridgeFest Canada 2026 multicultural arts festival banner"
        variant="event"
      />

      <Section tone="white" backdrop="dots">
        <PageContainer>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-20">
            <FadeUp>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Three days. Five provinces.{" "}
                <span className="text-secondary">One stage for Canada&apos;s creative voices.</span>
              </h2>
              <p className={cn("mt-5", bodyClass)}>{content.tagline}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Art forms featured">
                {disciplines.map((label) => (
                  <li
                    key={label}
                    className="rounded-full border border-primary/15 bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"
                  >
                    {label}
                  </li>
                ))}
              </ul>

              {!isPast && (
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild>
                    <Link href={attendance} target="_blank" rel="noopener noreferrer">
                      Register to Attend
                      <ExternalLink className="h-4 w-4 opacity-80" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={participant} target="_blank" rel="noopener noreferrer">
                      Participate
                      <ExternalLink className="h-4 w-4 opacity-70" />
                    </Link>
                  </Button>
                </div>
              )}
            </FadeUp>

            <MotionReveal direction="scale" className="mx-auto w-full max-w-lg">
              <Image
                src={content.mainFlyer.src}
                alt={content.mainFlyer.alt}
                width={content.mainFlyer.width}
                height={content.mainFlyer.height}
                priority
                sizes="(max-width: 1024px) 90vw, 512px"
                className="h-auto w-full rounded-3xl shadow-2xl ring-1 ring-primary/10"
              />
            </MotionReveal>
          </div>

          <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-3 lg:gap-8" staggerDelay={0.08}>
            {quickFacts.map(({ icon: Icon, label, value, href, accent, iconClass }) => (
              <StaggerItem key={label}>
                <div
                  className={cn(
                    "flex h-full items-center gap-4 rounded-2xl border border-t-4 border-border/60 bg-white p-5 shadow-sm",
                    accent
                  )}
                >
                  <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", iconClass)}>
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold leading-snug text-foreground sm:text-base">
                      {value}
                    </p>
                    {href && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
                      >
                        Get directions
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <section className="bg-primary py-12 sm:py-14 md:py-16">
        <PageContainer>
          <StaggerContainer className="grid grid-cols-2 gap-y-10 md:grid-cols-4" staggerDelay={0.1}>
            {content.stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold text-gold-bright sm:text-5xl md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/85">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </section>

      <Section id="lineup" tone="white" backdrop="none">
        <PageContainer>
          <FadeUp className="mx-auto max-w-2xl text-center">
            <p className={eyebrowClass}>{content.lineup.eyebrow}</p>
            <h2 className={cn("mt-4", sectionTitleClass)}>{content.lineup.title}</h2>
            <p className={cn("mt-5", bodyClass)}>{content.lineup.intro}</p>
          </FadeUp>

          <StaggerContainer
            className="mt-12 grid gap-10 sm:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8"
            staggerDelay={0.12}
          >
            {content.lineup.flyers.map((flyer, index) => (
              <StaggerItem
                key={flyer.title}
                className={cn(
                  index === content.lineup.flyers.length - 1 &&
                    content.lineup.flyers.length % 2 === 1 &&
                    "md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:mx-0 lg:max-w-none"
                )}
              >
                <article>
                  <Image
                    src={flyer.src}
                    alt={flyer.alt}
                    width={flyer.width}
                    height={flyer.height}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 42vw, 30vw"
                    className="h-auto w-full rounded-3xl shadow-xl ring-1 ring-primary/10"
                  />
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground sm:text-2xl">
                    {flyer.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {flyer.caption}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <Section id="programme" tone="green" backdrop="none">
        <PageContainer>
          <FadeUp className="text-center">
            <p className={eyebrowClass}>Three Days of Excellence</p>
            <h2 className={cn("mt-4", sectionTitleClass)}>Festival Programming</h2>
            <p className={cn("mx-auto mt-5 max-w-2xl", bodyClass)}>
              From an opening celebration to a closing gala, every day brings a new side of
              Canada&apos;s creative scene.
            </p>
          </FadeUp>

          <StaggerContainer className="mt-12 space-y-6 sm:mt-14 lg:space-y-8" staggerDelay={0.12}>
            {content.programming.map((day, index) => (
              <StaggerItem key={day.day}>
                <article className="grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border/60 transition-shadow duration-300 hover:shadow-xl md:grid-cols-[17rem_1fr] lg:grid-cols-[20rem_1fr]">
                  <div
                    className={cn(
                      "relative flex flex-col justify-between gap-6 overflow-hidden p-6 text-white sm:p-8",
                      day.accent
                    )}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-1 -top-3 font-display text-[6rem] font-bold leading-none text-white/10"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-bright">
                        {day.day}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white/85">{day.date}</p>
                    </div>
                    <h3 className="relative font-display text-xl font-bold leading-snug sm:text-2xl">
                      {day.title}
                    </h3>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className={bodyClass}>{day.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${day.day} highlights`}>
                      {day.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs font-semibold text-secondary"
                        >
                          {highlight}
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

      <Section tone="white" backdrop="none">
        <PageContainer>
          <FadeUp className="max-w-3xl">
            <p className={eyebrowClass}>About the Festival</p>
            <h2 className={cn("mt-4", sectionTitleClass)}>Event Overview</h2>
          </FadeUp>
          <StaggerContainer className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-12" staggerDelay={0.08}>
            {content.overview.map((paragraph) => (
              <StaggerItem key={paragraph.slice(0, 48)}>
                <p className={bodyClass}>{paragraph}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
            <MotionReveal direction="left" className="h-full">
              <div className="h-full rounded-3xl bg-primary p-7 text-white shadow-lg sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Eye className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">Vision</h3>
                <p className="mt-3 text-base leading-relaxed text-white/90">{content.vision}</p>
              </div>
            </MotionReveal>
            <MotionReveal direction="right" className="h-full">
              <div className="h-full rounded-3xl border border-accent/30 bg-gold-cream p-7 shadow-sm sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-[#a16207]">
                  <Target className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Mission</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {content.mission}
                </p>
              </div>
            </MotionReveal>
          </div>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="none">
        <PageContainer>
          <FadeUp className="max-w-3xl">
            <p className={eyebrowClass}>Beyond the Stage</p>
            <h2 className={cn("mt-4", sectionTitleClass)}>Community Impact</h2>
            <p className={cn("mt-5", bodyClass)}>{content.communityImpactIntro}</p>
          </FadeUp>
          <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" staggerDelay={0.08}>
            {content.communityImpact.map((item, index) => {
              const { icon: Icon, className } = impactStyles[index % impactStyles.length];
              return (
                <StaggerItem key={item.title} className="h-full">
                  <div className="group h-full rounded-2xl border border-border/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg sm:p-7">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                        className
                      )}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none">
        <PageContainer>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <MotionReveal direction="left" className="h-full">
              <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border/60 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Map className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                  {content.nationalReach.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {content.nationalReach.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Provinces represented">
                  {content.nationalReach.provinces.map((province) => (
                    <li
                      key={province}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      <MapPin className="h-3 w-3 text-gold-bright" aria-hidden />
                      {province}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
            <MotionReveal direction="right" className="h-full">
              <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border/60 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <TrendingUp className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                  {content.economicSignificance.title}
                </h2>
                <div className="mt-3 space-y-4">
                  {content.economicSignificance.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>

          <FadeUp className="mt-6 lg:mt-8">
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border/60 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-foreground">
                {content.longTermVision.title}
              </h2>
              <div className="mt-3 grid gap-4 lg:grid-cols-2 lg:gap-12">
                {content.longTermVision.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="none">
        <PageContainer>
          <FadeUp>
            <EventRegistration event={event} />
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
