import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Camera, MapPin, Quote } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import {
  BridgeFestDayVideos,
  BridgeFestWatchSection,
} from "@/components/events/bridgefest-watch-section";
import { PageContainer } from "@/components/shared/page-container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

interface BridgeFestHighlightArticleProps {
  post: BlogPost;
}

function isPortrait(image: { width: number; height: number }) {
  return image.height > image.width;
}

export function BridgeFestHighlightArticle({ post }: BridgeFestHighlightArticleProps) {
  const highlight = post.highlight;

  if (!highlight) {
    return null;
  }

  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-primary text-white">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/10"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,83,0.18),transparent_50%)]"
        />

        <PageContainer className="relative z-10 flex min-h-[78vh] flex-col justify-end pb-12 pt-28 sm:pb-16 sm:pt-32 md:pb-20">
          <FadeUp className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-bright">
              {highlight.kicker}
            </p>
            <p className="mt-4 font-display text-lg font-semibold tracking-wide text-white sm:text-xl">
              Lumina Bridge Foundation
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-3xl font-bold tracking-tight text-balance drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/85 sm:text-base">
              <time dateTime={post.publishedISO} className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0 text-gold-bright" aria-hidden />
                {post.facts.find((fact) => fact.label === "Dates")?.value ?? post.published}
              </time>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold-bright" aria-hidden />
                {post.facts.find((fact) => fact.label === "Venue")?.value ??
                  "Old Strathcona Performing Arts Centre, Edmonton"}
              </span>
            </div>
          </FadeUp>
        </PageContainer>
      </section>

      <Section tone="white" backdrop="orbs">
        <PageContainer>
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-10">
            <FadeUp className="flex flex-col justify-center space-y-5">
              {highlight.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted-foreground text-justify md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </FadeUp>

            <FadeUp delay={0.08} className="h-full">
              <div className="grid h-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-muted shadow-xl ring-1 ring-border/50 sm:aspect-auto sm:h-full sm:min-h-[28rem]">
                  <Image
                    src={highlight.introImage.src}
                    alt={highlight.introImage.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 28vw"
                    className="object-cover"
                  />
                </div>

                <aside className="flex h-full min-h-[28rem] flex-col justify-center overflow-hidden rounded-[1.75rem] bg-primary p-6 text-white shadow-xl sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-bright">
                    Weekend at a glance
                  </p>
                  <dl className="mt-6 space-y-5">
                    {post.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-white/55">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-white">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="none">
        <PageContainer>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
              Cultures shared
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {highlight.culturesTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {highlight.culturesBody.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="mt-10 sm:mt-12">
            <p className="mx-auto max-w-3xl text-center font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              {highlight.cultures.join(" · ")}
            </p>
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none" id="three-nights">
        <PageContainer>
          <FadeUp className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
              Three unforgettable nights
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Friday, Saturday, and Sunday in photos
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Each evening had its own rhythm. Scroll through the rooms, the stages, and the people
              who made BridgeFest Canada 2026 feel like home.
            </p>
          </FadeUp>
        </PageContainer>
      </Section>

      {highlight.days.map((day, index) => {
        const tone = index % 2 === 0 ? "green" : "white";
        const uniform = day.galleryLayout === "uniform";

        return (
          <Section
            key={day.id}
            id={day.id}
            tone={tone}
            backdrop={tone === "green" ? "orbs" : "none"}
          >
            <PageContainer>
              <article className="space-y-8">
                <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12">
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
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {day.summary}
                    </p>
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
                        {...(index === 0 ? { priority: true } : {})}
                      />
                    </div>
                  </FadeUp>
                </div>

                <StaggerContainer
                  className={cn(
                    "grid gap-3 sm:gap-4",
                    uniform
                      ? "grid-cols-2 lg:grid-cols-4"
                      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  )}
                  staggerDelay={0.05}
                >
                  {day.gallery.map((image) => {
                    const portrait = isPortrait(image);

                    return (
                      <StaggerItem
                        key={image.src}
                        className={cn(
                          "overflow-hidden rounded-2xl bg-muted shadow-sm ring-1 ring-border/50",
                          !uniform && portrait && "row-span-2"
                        )}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className={cn(
                            "h-full w-full object-cover",
                            uniform
                              ? "aspect-[3/2] h-auto"
                              : portrait
                                ? "min-h-[18rem] sm:min-h-[22rem]"
                                : "aspect-[3/2]"
                          )}
                        />
                      </StaggerItem>
                    );
                    })}
                  </StaggerContainer>

                  <BridgeFestDayVideos dayId={day.id} />
                </article>
              </PageContainer>
            </Section>
          );
        })}

      <BridgeFestWatchSection tone="white" mode="all" />

      <Section tone="green" backdrop="orbs">
        <PageContainer>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
              What people said
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Voices from the room
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {highlight.quotesIntro}
            </p>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8" staggerDelay={0.1}>
            {highlight.quotes.map((item, index) => (
              <StaggerItem key={item.name}>
                <figure
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-8",
                    index === 0
                      ? "bg-primary text-white lg:col-span-1"
                      : "bg-white text-foreground ring-1 ring-border/60"
                  )}
                >
                  <Quote
                    className={cn(
                      "h-8 w-8",
                      index === 0 ? "text-gold-bright" : "text-secondary"
                    )}
                    aria-hidden
                  />
                  <blockquote className="mt-5 flex-1">
                    <p
                      className={cn(
                        "text-base leading-relaxed md:text-[1.05rem]",
                        index === 0 ? "text-white/90" : "text-muted-foreground"
                      )}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 border-t border-current/10 pt-5">
                    <p className="font-display text-lg font-bold tracking-tight">{item.name}</p>
                    <p
                      className={cn(
                        "mt-1 text-sm",
                        index === 0 ? "text-white/65" : "text-muted-foreground"
                      )}
                    >
                      {item.role}
                    </p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none" id="faces">
        <PageContainer>
          <FadeUp className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {highlight.placeholdersTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {highlight.placeholdersBody}
            </p>
          </FadeUp>

          <StaggerContainer
            className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
            staggerDelay={0.06}
          >
            {highlight.placeholders.map((person) => (
              <StaggerItem key={person.name}>
                <div
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-[1.5rem] p-5",
                    person.image
                      ? "bg-white shadow-sm ring-1 ring-border/60"
                      : "border border-dashed border-secondary/35 bg-[linear-gradient(160deg,rgba(15,118,110,0.06),rgba(12,74,110,0.04)_45%,transparent)] transition-colors hover:border-secondary/55"
                  )}
                >
                  {person.image ? (
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={person.image.src}
                        alt={person.image.alt}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-white/70 ring-1 ring-border/50">
                      <div className="text-center">
                        <Camera className="mx-auto h-8 w-8 text-secondary/45" aria-hidden />
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary/70">
                          {person.note ?? "Portrait coming soon"}
                        </p>
                      </div>
                    </div>
                  )}
                  <p className="mt-3 font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
                    <span>{person.name}</span>
                    <span className="text-sm font-normal text-muted-foreground">
                      {" "}
                      - {person.role}
                    </span>
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

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
                <div className="mt-10">
                  <Button variant="white" asChild>
                    <Link href="/events/bridgefest">
                      Explore BridgeFest
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
