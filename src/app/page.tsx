import type { Metadata } from "next";
import impactImage from "../../public/impact.jpg";
import { siteConfig } from "@/lib/site-config";
import { HomeHero } from "@/components/sections/home-hero";
import { Section } from "@/components/shared/section";
import { SectionImage } from "@/components/shared/section-image";
import {
  SectionHeader,
  sectionHeadingClass,
} from "@/components/shared/section-header";
import { StatsSection } from "@/components/shared/stats-section";
import { Timeline } from "@/components/shared/timeline";
import { ProgramCard } from "@/components/cards/program-card";
import { CommunityStoryCard } from "@/components/cards/community-story-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { ImpactCard } from "@/components/cards/impact-card";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import {
  whoWeAre,
  missionVision,
  beliefQuote,
  nameMeaning,
  coreValues,
  programs,
  homeStats,
  impactNarrative,
  impactTimeline,
  testimonials,
} from "@/lib/data";

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <div id="top">
        <HomeHero />
      </div>

      <section className="w-full bg-secondary py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatsSection stats={homeStats} dark />
        </div>
      </section>

      <Section id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-stretch lg:gap-28">
            <div className="flex flex-col justify-center">
              <SectionHeader title={whoWeAre.title} align="left" className="mb-10" />
              <div className="space-y-6">
                {whoWeAre.paragraphs.map((paragraph, i) => (
                  <FadeUp key={i} delay={i * 0.08}>
                    <p className="text-justify text-lg leading-relaxed text-muted-foreground md:text-xl">
                      {paragraph}
                    </p>
                  </FadeUp>
                ))}
              </div>
              <FadeUp className="mt-12">
                <blockquote className="border-l-4 border-accent pl-8">
                  <p className="text-justify text-xl font-medium italic leading-relaxed text-foreground md:text-2xl">
                    &ldquo;{beliefQuote}&rdquo;
                  </p>
                </blockquote>
              </FadeUp>
            </div>
            <FadeUp delay={0.12} className="h-full">
              <SectionImage
                src="/community.jpg"
                alt="LuminaBridge Foundation community"
                tall
                className="h-full"
              />
            </FadeUp>
          </div>
        </div>
      </Section>

      <Section className="gradient-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-stretch lg:gap-28">
            <FadeUp className="h-full">
              <SectionImage
                src="/mission.jpg"
                alt="LuminaBridge Foundation mission in action"
                tall
                className="h-full"
              />
            </FadeUp>
            <div className="grid h-full gap-10">
              <FadeUp className="h-full">
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-3xl border border-border bg-white p-12 text-center shadow-sm md:min-h-[320px] md:p-14">
                  <span className="font-display text-lg font-extrabold uppercase tracking-widest text-secondary md:text-xl">
                    {missionVision.mission.title}
                  </span>
                  <p className="mt-5 text-xl leading-relaxed text-foreground md:text-2xl">
                    {missionVision.mission.content}
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.1} className="h-full">
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-3xl bg-primary p-12 text-center text-white shadow-lg md:min-h-[320px] md:p-14">
                  <span className="font-display text-lg font-extrabold uppercase tracking-widest text-[#ffe600] md:text-xl">
                    {missionVision.vision.title}
                  </span>
                  <p className="mt-5 text-xl leading-relaxed text-white/90 md:text-2xl">
                    {missionVision.vision.content}
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What Guides Everything We Do" light />
          <StaggerContainer className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {coreValues.map((value) => (
              <StaggerItem key={value.title}>
                <ImpactCard
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  variant="onPrimary"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <Section className="gradient-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-28">
            <FadeUp>
              <div className="max-w-xl">
                <h2 className={sectionHeadingClass}>{nameMeaning.title}</h2>
                <div className="mt-14 space-y-7 text-lg leading-relaxed text-muted-foreground md:mt-16 md:space-y-8 lg:mt-20">
                  <p className="flex items-start gap-3 md:gap-4">
                    <span className="shrink-0 font-bold text-secondary">Lumina</span>
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-secondary/45" aria-hidden />
                    <span>{nameMeaning.lumina}</span>
                  </p>
                  <p className="flex items-start gap-3 md:gap-4">
                    <span className="shrink-0 font-bold text-secondary">Bridge</span>
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-secondary/45" aria-hidden />
                    <span>{nameMeaning.bridge}</span>
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <SectionImage
                src="/hope.jpg"
                alt="Light, hope, and community connection"
              />
            </FadeUp>
          </div>
        </div>
      </Section>

      <Section id="programs" className="programs-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What We Do" />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {programs.map((program) => (
              <StaggerItem key={program.id}>
                <ProgramCard program={program} minimal />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <Section id="impact" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-28">
            <div>
              <SectionHeader
                title="Our Impact Journey"
                align="left"
                className="mb-10"
              />
              <div className="space-y-6">
                <FadeUp>
                  <p className="text-2xl font-semibold leading-relaxed text-foreground md:text-3xl">
                    {impactNarrative[0]}
                  </p>
                </FadeUp>
                <FadeUp delay={0.08}>
                  <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                    {impactNarrative[4]}
                  </p>
                </FadeUp>
              </div>
            </div>
            <FadeUp delay={0.12}>
              <SectionImage
                src={impactImage}
                alt="LuminaBridge Foundation team collaborating on community impact"
                tall
                priority
                objectPosition="center 25%"
              />
            </FadeUp>
          </div>

          <div className="mt-24 md:mt-32">
            <Timeline items={impactTimeline} />
          </div>
        </div>
      </Section>

      <Section className="testimonials-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Voices from Our Community" />
          <StaggerContainer className="grid gap-10 md:grid-cols-2 lg:gap-12">
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
            <StaggerItem>
              <CommunityStoryCard
                src="/story.jpg"
                alt="Community members gathering together outdoors"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>
    </>
  );
}
