import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  ExternalLink,
  MapPin,
  Quote,
} from "lucide-react";
import { PageContainer } from "@/components/shared/page-container";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { BridgeFestWatchSection } from "@/components/events/bridgefest-watch-section";
import { Button } from "@/components/ui/button";
import type { Event } from "@/lib/data";
import { bridgefestContent } from "@/lib/bridgefest-content";
import {
  bridgefestHighlight,
  bridgefestHighlightPost,
} from "@/lib/bridgefest-highlight-post";
import { getBlogHref } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

interface BridgeFestDetailProps {
  event: Event;
}

const eyebrowClass = "text-sm font-bold uppercase tracking-[0.2em] text-secondary";
const sectionTitleClass =
  "font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl";
const bodyClass = "text-base leading-relaxed text-muted-foreground md:text-lg";

function isPortrait(image: { width: number; height: number }) {
  return image.height > image.width;
}

export function BridgeFestDetail({ event }: BridgeFestDetailProps) {
  const highlight = bridgefestHighlight;
  const content = bridgefestContent;
  const blogHref = getBlogHref(bridgefestHighlightPost.slug);

  const artistsWithPhotos = highlight.placeholders.filter((person) => person.image);
  const featuredQuote = highlight.quotes[0];
  const supportingQuotes = highlight.quotes.slice(1);

  const quickFacts = [
    {
      icon: Calendar,
      label: "Event Dates",
      value: content.dates,
      accent: "border-t-primary",
      iconClass: "bg-primary/10 text-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: content.location,
      href: content.directionsUrl,
      accent: "border-t-secondary",
      iconClass: "bg-secondary/10 text-secondary",
    },
    {
      icon: Building2,
      label: "Organized by",
      value: content.organizer,
      accent: "border-t-accent",
      iconClass: "bg-accent/15 text-[#a16207]",
    },
  ];

  return (
    <>
      <PageBanner
        title={["BridgeFest Canada", "2026"]}
        image={event.image}
        imageAlt="Dancers and singers celebrate on stage at BridgeFest Canada 2026"
        variant="event"
      />

      <Section tone="white" backdrop="orbs">
        <PageContainer>
          <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] lg:gap-12">
            <FadeUp className="flex flex-col justify-center">
              <p className={eyebrowClass}>Past event · Recap</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                A journey around the world,{" "}
                <span className="text-secondary">right here in Edmonton.</span>
              </h2>
              <div className="mt-6 space-y-5">
                {highlight.intro.map((paragraph) => (
                  <p key={paragraph} className={cn(bodyClass, "text-justify")}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href={blogHref}>
                    Read the full story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.08} className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-border/50 lg:min-h-full">
              <Image
                src={highlight.introImage.src}
                alt={highlight.introImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 30vw"
                className="object-cover"
              />
            </FadeUp>
          </div>

          <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-8" staggerDelay={0.08}>
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
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
                      >
                        Get directions
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    ) : null}
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

      <Section tone="green" backdrop="none">
        <PageContainer>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className={eyebrowClass}>Cultures shared</p>
            <h2 className={cn("mt-4", sectionTitleClass)}>{highlight.culturesTitle}</h2>
            <div className="mt-6 space-y-4">
              {highlight.culturesBody.map((paragraph) => (
                <p key={paragraph} className={bodyClass}>
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-10 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              {highlight.cultures.join(" · ")}
            </p>
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none" id="three-nights">
        <PageContainer>
          <FadeUp className="max-w-3xl">
            <p className={eyebrowClass}>Three unforgettable nights</p>
            <h2 className={cn("mt-4", sectionTitleClass)}>How the weekend unfolded</h2>
            <p className={cn("mt-5", bodyClass)}>
              Each evening had its own rhythm — from opening night energy to the main-event
              full house and a closing night that belonged to the whole community.
            </p>
          </FadeUp>
        </PageContainer>
      </Section>

      {highlight.days.map((day, index) => {
        const tone = index % 2 === 0 ? "green" : "white";
        const galleryPreview = day.gallery.slice(0, day.galleryLayout === "uniform" ? 4 : 4);

        return (
          <Section key={day.id} id={day.id} tone={tone} backdrop={tone === "green" ? "orbs" : "none"}>
            <PageContainer>
              <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-12">
                <FadeUp>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-display text-5xl font-bold tracking-tight text-primary/20 sm:text-6xl">
                      Day {String(index + 1).padStart(2, "0")}:
                    </span>
                    <span className="text-base font-bold text-muted-foreground sm:text-lg">
                      {day.label}, {day.date}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {day.title}
                  </h3>
                  <p className={cn("mt-4", bodyClass)}>{day.summary}</p>
                  <p className="mt-5 text-sm font-semibold text-foreground">{day.performers}</p>
                </FadeUp>

                <FadeUp delay={0.06}>
                  <div className="overflow-hidden rounded-[1.75rem] bg-primary/5 shadow-xl ring-1 ring-primary/10">
                    <Image
                      src={day.featured.src}
                      alt={day.featured.alt}
                      width={day.featured.width}
                      height={day.featured.height}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </FadeUp>
              </div>

              <StaggerContainer
                className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
                staggerDelay={0.05}
              >
                {galleryPreview.map((image) => (
                  <StaggerItem
                    key={image.src}
                    className="overflow-hidden rounded-2xl bg-muted shadow-sm ring-1 ring-border/50"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className={cn(
                        "h-full w-full object-cover",
                        isPortrait(image) ? "aspect-[3/4]" : "aspect-[3/2]"
                      )}
                    />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </PageContainer>
          </Section>
        );
      })}

      <BridgeFestWatchSection tone="white" mode="all" />

      <Section tone="green" backdrop="orbs">
        <PageContainer>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className={eyebrowClass}>What people said</p>
            <h2 className={cn("mt-4", sectionTitleClass)}>Voices from the room</h2>
            <p className={cn("mt-5", bodyClass)}>{highlight.quotesIntro}</p>
          </FadeUp>

          {featuredQuote ? (
            <FadeUp className="mx-auto mt-12 max-w-4xl">
              <figure className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
                <Quote className="h-10 w-10 text-gold-bright" aria-hidden />
                <blockquote className="mt-6">
                  <p className="font-display text-xl font-medium leading-relaxed text-white/95 sm:text-2xl md:text-3xl">
                    &ldquo;{featuredQuote.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-8 border-t border-white/15 pt-5">
                  <p className="font-display text-lg font-bold">{featuredQuote.name}</p>
                  <p className="mt-1 text-sm text-white/65">{featuredQuote.role}</p>
                </figcaption>
              </figure>
            </FadeUp>
          ) : null}

          {supportingQuotes.length > 0 ? (
            <StaggerContainer className="mt-6 grid gap-6 md:grid-cols-2 lg:gap-8" staggerDelay={0.1}>
              {supportingQuotes.map((item) => (
                <StaggerItem key={item.name}>
                  <figure className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-border/60 sm:p-8">
                    <Quote className="h-7 w-7 text-secondary" aria-hidden />
                    <blockquote className="mt-4 flex-1">
                      <p className="text-base leading-relaxed text-muted-foreground">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border/60 pt-4">
                      <p className="font-display text-lg font-bold text-foreground">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : null}
        </PageContainer>
      </Section>

      {artistsWithPhotos.length > 0 ? (
        <Section tone="white" backdrop="none" id="artists">
          <PageContainer>
            <FadeUp className="max-w-3xl">
              <p className={eyebrowClass}>On stage</p>
              <h2 className={cn("mt-4", sectionTitleClass)}>Faces of the weekend</h2>
              <p className={cn("mt-5", bodyClass)}>{highlight.placeholdersBody}</p>
            </FadeUp>

            <StaggerContainer
              className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5"
              staggerDelay={0.06}
            >
              {artistsWithPhotos.map((person) => (
                <StaggerItem key={person.name}>
                  <article className="overflow-hidden rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-border/60">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={person.image!.src}
                        alt={person.image!.alt}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 18vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-3 font-display text-base font-bold tracking-tight text-foreground">
                      {person.name}
                      <span className="text-sm font-normal text-muted-foreground">
                        {" "}
                        - {person.role}
                      </span>
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </PageContainer>
        </Section>
      ) : null}

      <Section tone="white" backdrop="none">
        <PageContainer>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold-bright/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-secondary/30 blur-3xl"
            />

            <div className="relative z-10 grid items-stretch lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)]">
              <FadeUp className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-16">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-bright">
                  Thank you
                </p>
                <div className="mt-6 space-y-5">
                  {highlight.thanks.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-2xl text-base leading-relaxed text-white/85 text-justify md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="mt-10 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                  {highlight.closing}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button variant="white" asChild>
                    <Link href={blogHref}>
                      Read the full story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="white-outline" asChild>
                    <Link href="/events">Back to Events</Link>
                  </Button>
                </div>
              </FadeUp>

              <FadeUp delay={0.08} className="relative min-h-[22rem] lg:min-h-full">
                <Image
                  src={highlight.thanksImage.src}
                  alt={highlight.thanksImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </FadeUp>
            </div>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
