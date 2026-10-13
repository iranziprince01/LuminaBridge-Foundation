import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Calendar,
  Compass,
  ExternalLink,
  HandCoins,
  HandHeart,
  Handshake,
  Landmark,
  Lightbulb,
  Map,
  MapPin,
  Megaphone,
  Mic,
  Quote,
  Rocket,
  Share2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { PhotoGallery } from "@/components/events/photo-gallery";
import { PhotoSlot } from "@/components/events/photo-slot";
import { FadeUp } from "@/components/motion/fade-up";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { PageContainer } from "@/components/shared/page-container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { eventPageBannerImage } from "@/lib/data";
import {
  leadWhereYouLandContent as content,
  leadWhereYouLandLinks as links,
} from "@/lib/lead-where-you-land-content";
import { cn } from "@/lib/utils";

const learningIcons = [Compass, Rocket, Megaphone, Lightbulb, HandHeart, Landmark];
const pathwayIcons = [Map, Briefcase, Users, HandCoins];
const otherWayIcons = [Briefcase, Mic, Building2, Share2];

const iconTones = [
  "bg-primary/10 text-primary",
  "bg-secondary/10 text-secondary",
  "bg-accent/15 text-[#a16207]",
];
const figureTones = ["text-primary", "text-secondary", "text-[#a16207]"];

const eyebrowClass = "text-sm font-bold uppercase tracking-[0.2em] text-secondary";
const titleClass =
  "font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl";
const bodyClass = "text-base leading-relaxed text-muted-foreground md:text-lg";

export function LeadWhereYouLandDetail() {
  const {
    hero,
    about,
    whyItMatters,
    experience,
    pathways,
    cohort,
    highlights,
    partners,
    support,
    join,
    photos,
  } = content;

  return (
    <>
      <section
        id="page-banner"
        className="relative isolate overflow-hidden bg-primary pb-16 pt-28 sm:pb-20 sm:pt-32 md:pt-36 lg:pb-24 lg:pt-40"
      >
        {photos.hero.src && (
          <>
            <Image
              src={photos.hero.src}
              alt={photos.hero.description}
              fill
              priority
              className="-z-20 object-cover object-[center_30%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 -z-10 bg-primary/80" aria-hidden />
          </>
        )}
        <PageContainer>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <FadeUp>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
                {hero.phase}
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-gold-bright sm:text-sm">
                {hero.eyebrow}
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {hero.headline}
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="white" asChild>
                  <Link href={links.donate}>
                    Support a Young Leader
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="white-outline" asChild>
                  <Link href={links.registerInterest} target="_blank" rel="noopener noreferrer">
                    Join the Next Cohort
                    <ExternalLink className="h-4 w-4 opacity-80" />
                  </Link>
                </Button>
              </div>
            </FadeUp>
            <MotionReveal direction="scale">
              <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/15">
                <Image
                  src={eventPageBannerImage}
                  alt="Lead Where You Land fellows, mentors and guests together on Gala Night"
                  width={2400}
                  height={1600}
                  priority
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </MotionReveal>
          </div>
        </PageContainer>
      </section>

      <Section tone="white" backdrop="none">
        <PageContainer>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <p className={eyebrowClass}>{about.eyebrow}</p>
              <h2 className={cn("mt-4", titleClass)}>{about.title}</h2>
              <div className="mt-6 space-y-5">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className={bodyClass}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-8 border-l-4 border-accent pl-5 text-lg font-medium leading-relaxed text-foreground md:text-xl">
                {about.belief}
              </p>
            </FadeUp>
            <MotionReveal direction="right">
              <PhotoSlot photo={photos.about} className="aspect-[4/3]" />
            </MotionReveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <MotionReveal direction="left" className="h-full">
              <div className="h-full rounded-3xl bg-primary p-7 text-white sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Target className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">Our Mission</h3>
                <p className="mt-3 text-base leading-relaxed text-white/90 md:text-lg">
                  {about.mission}
                </p>
              </div>
            </MotionReveal>
            <MotionReveal direction="right" className="h-full">
              <div className="h-full rounded-3xl border border-accent/30 bg-gold-cream p-7 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-[#a16207]">
                  <Sparkles className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {about.vision}
                </p>
              </div>
            </MotionReveal>
          </div>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="none">
        <PageContainer>
          <FadeUp className="max-w-3xl">
            <p className={eyebrowClass}>{whyItMatters.eyebrow}</p>
            <h2 className={cn("mt-4", titleClass)}>{whyItMatters.title}</h2>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3" staggerDelay={0.1}>
            {whyItMatters.figures.map((figure, index) => (
              <StaggerItem key={figure.value} className="h-full">
                <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border/60 sm:p-8">
                  <p
                    className={cn(
                      "font-display text-6xl font-bold leading-none md:text-7xl",
                      figureTones[index % figureTones.length]
                    )}
                  >
                    {figure.value}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-foreground/80">
                    {figure.caption}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp className="mt-12 grid gap-8 md:grid-cols-2">
            {whyItMatters.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={bodyClass}>
                {paragraph}
              </p>
            ))}
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none">
        <PageContainer>
          <FadeUp className="max-w-3xl">
            <p className={eyebrowClass}>{experience.eyebrow}</p>
            <h2 className={cn("mt-4", titleClass)}>{experience.title}</h2>
            <p className={cn("mt-6", bodyClass)}>{experience.intro}</p>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {experience.pillars.map((pillar, index) => (
              <MotionReveal key={pillar.title} direction={index === 0 ? "left" : "right"} className="h-full">
                <div
                  className={cn(
                    "h-full rounded-3xl p-7 text-white sm:p-9",
                    index === 0 ? "bg-primary" : "bg-secondary"
                  )}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-bright">
                    Pillar {index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{pillar.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-white/75">{pillar.subtitle}</p>
                  <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
                    {pillar.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal direction="scale" className="mt-6">
            <PhotoSlot photo={photos.pillars} className="aspect-[16/9]" sizes="100vw" />
          </MotionReveal>

          <FadeUp className="mt-20">
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              {experience.learningTitle}
            </h3>
          </FadeUp>
          <StaggerContainer className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.07}>
            {experience.learning.map((item, index) => {
              const Icon = learningIcons[index % learningIcons.length];
              return (
                <StaggerItem key={item.title} className="h-full">
                  <div className="group h-full rounded-2xl border border-border/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                        iconTones[index % iconTones.length]
                      )}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h4 className="mt-5 text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <MotionReveal direction="left">
              <PhotoSlot photo={photos.learning} className="aspect-[4/3]" />
            </MotionReveal>
            <FadeUp>
              <Quote className="h-10 w-10 text-accent" aria-hidden />
              <blockquote className="mt-5 font-display text-3xl font-bold leading-snug text-primary sm:text-4xl">
                &ldquo;{experience.quote}&rdquo;
              </blockquote>
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="none">
        <PageContainer>
          <FadeUp className="max-w-3xl">
            <p className={eyebrowClass}>{pathways.eyebrow}</p>
            <h2 className={cn("mt-4", titleClass)}>{pathways.title}</h2>
            <p className={cn("mt-6", bodyClass)}>{pathways.intro}</p>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
            {pathways.cards.map((card, index) => {
              const Icon = pathwayIcons[index % pathwayIcons.length];
              return (
                <StaggerItem key={card.title} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border/60 sm:p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <span className="font-display text-3xl font-bold text-primary/15">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold leading-snug text-foreground">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <MotionReveal direction="left">
              <PhotoSlot photo={photos.pathways} className="aspect-[4/3]" />
            </MotionReveal>
            <FadeUp>
              <p className="border-l-4 border-secondary pl-6 font-display text-2xl font-bold leading-snug text-primary sm:text-3xl">
                {pathways.closing}
              </p>
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <section className="bg-primary py-16 sm:py-20 md:py-24">
        <PageContainer>
          <FadeUp className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-bright">
              {cohort.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {cohort.title}
            </h2>
          </FadeUp>
          <StaggerContainer
            className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.1}
          >
            {cohort.figures.map((figure) => (
              <StaggerItem key={figure.caption} className="text-center">
                <p className="font-display text-5xl font-bold text-gold-bright md:text-6xl">
                  {figure.value}
                </p>
                <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-white/85">
                  {figure.caption}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </section>

      <Section tone="white" backdrop="none">
        <PageContainer>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <FadeUp>
              <p className={eyebrowClass}>Cohort 1 · October 7, 2026</p>
              <p className={cn("mt-5", bodyClass)}>{cohort.summary}</p>
            </FadeUp>
            <FadeUp className="rounded-3xl border border-accent/30 bg-gold-cream p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-[#a16207]">
                  <Award className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">{cohort.gala.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-foreground/80">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-secondary" aria-hidden />
                  {cohort.gala.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-secondary" aria-hidden />
                  {cohort.gala.venue}
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {cohort.gala.description}
              </p>
            </FadeUp>
          </div>

          <FadeUp className="mt-16">
            <p className={eyebrowClass}>{highlights.eyebrow}</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              {highlights.title}
            </h3>
            <div className="mt-8 aspect-video overflow-hidden rounded-3xl bg-primary shadow-lg ring-1 ring-border/60">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${highlights.videoId}?rel=0`}
                title={highlights.videoTitle}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </FadeUp>

          <FadeUp className="mt-5 md:mt-6">
            <PhotoGallery photos={photos.gallery} />
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="none">
        <PageContainer>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className={eyebrowClass}>{partners.eyebrow}</p>
            <h2 className={cn("mt-4", titleClass)}>{partners.title}</h2>
            <p className={cn("mt-6", bodyClass)}>{partners.intro}</p>
          </FadeUp>
          <StaggerContainer
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
            staggerDelay={0.06}
          >
            {partners.list.map((partner) => (
              <StaggerItem key={partner.name} className="h-full">
                <div className="flex h-full min-h-[7.5rem] flex-col items-center justify-center rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-border/60">
                  <p className="text-sm font-bold leading-snug text-primary sm:text-base">
                    {partner.name}
                  </p>
                  {"role" in partner && (
                    <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {partner.role}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp className="mt-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <p className="text-base font-medium text-foreground">{partners.cta}</p>
            <Button variant="outline" asChild>
              <a href={links.contact}>
                <Handshake className="h-4 w-4" />
                Become a Partner
              </a>
            </Button>
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none">
        <PageContainer>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <MotionReveal direction="left">
              <PhotoSlot photo={photos.support} className="aspect-[4/3]" />
            </MotionReveal>
            <FadeUp>
              <p className={eyebrowClass}>{support.eyebrow}</p>
              <h2 className={cn("mt-4", titleClass)}>{support.title}</h2>
              <p className={cn("mt-6", bodyClass)}>{support.intro}</p>
            </FadeUp>
          </div>

          <FadeUp className="mt-16">
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              {support.givingTitle}
            </h3>
          </FadeUp>
          <StaggerContainer
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
            staggerDelay={0.07}
          >
            {support.gifts.map((gift, index) => {
              const featured = index === support.gifts.length - 1;
              return (
                <StaggerItem key={gift.amount} className="h-full">
                  <div
                    className={cn(
                      "h-full rounded-2xl p-6",
                      featured
                        ? "bg-primary text-white"
                        : "border border-border/60 bg-white shadow-sm"
                    )}
                  >
                    <p
                      className={cn(
                        "font-display text-3xl font-bold",
                        featured ? "text-gold-bright" : "text-primary"
                      )}
                    >
                      {gift.amount}
                    </p>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed",
                        featured ? "text-white/90" : "text-muted-foreground"
                      )}
                    >
                      {gift.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <FadeUp className="mt-8 flex justify-center">
            <Button size="lg" asChild>
              <Link href={links.donate}>
                Donate Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeUp>

          <div className="mt-20 rounded-3xl bg-muted/60 p-7 sm:p-10">
            <FadeUp>
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {support.otherWaysTitle}
              </h3>
            </FadeUp>
            <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2" staggerDelay={0.07}>
              {support.otherWays.map((way, index) => {
                const Icon = otherWayIcons[index % otherWayIcons.length];
                return (
                  <StaggerItem key={way.title}>
                    <div className="flex gap-4">
                      <div
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                          iconTones[index % iconTones.length]
                        )}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground sm:text-lg">{way.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {way.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
            <FadeUp className="mt-8">
              <Button variant="outline" asChild>
                <a href={links.contact}>
                  Get Involved
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="none">
        <PageContainer>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className={eyebrowClass}>{join.eyebrow}</p>
            <h2 className={cn("mt-4", titleClass)}>{join.title}</h2>
            <p className={cn("mt-6", bodyClass)}>{join.intro}</p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild>
                <Link href={links.registerInterest} target="_blank" rel="noopener noreferrer">
                  Register Your Interest
                  <ExternalLink className="h-4 w-4 opacity-80" />
                </Link>
              </Button>
            </div>
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
