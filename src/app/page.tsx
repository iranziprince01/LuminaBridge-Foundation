import type { Metadata } from "next";
import impactImage from "../../public/impact.jpg";
import { siteConfig } from "@/lib/site-config";
import { HomeHero } from "@/components/sections/home-hero";
import { Section } from "@/components/shared/section";
import { SectionImage } from "@/components/shared/section-image";
import {
  PageContainer,
  splitSectionGridClass,
} from "@/components/shared/page-container";
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

const missionCardClass =
  "flex h-full min-h-[240px] flex-col items-center justify-center rounded-3xl p-6 text-center shadow-sm sm:min-h-[260px] sm:p-8 md:min-h-[280px] md:p-10 lg:min-h-[320px] lg:p-12";

export default function HomePage() {
  return (
    <>
      <div id="top">
        <HomeHero />
      </div>

      <section className="w-full bg-secondary py-12 sm:py-16 md:py-20 lg:py-24">
        <PageContainer>
          <StatsSection stats={homeStats} dark />
        </PageContainer>
      </section>

      <Section id="about">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <div className="flex flex-col justify-center">
              <SectionHeader title={whoWeAre.title} align="left" className="mb-8" />
              <div className="space-y-5">
                {whoWeAre.paragraphs.map((paragraph, i) => (
                  <FadeUp key={i} delay={i * 0.08}>
                    <p className="text-left text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                      {paragraph}
                    </p>
                  </FadeUp>
                ))}
              </div>
              <FadeUp className="mt-8 sm:mt-10">
                <blockquote className="border-l-4 border-accent pl-5 sm:pl-8">
                  <p className="text-left text-lg font-medium italic leading-relaxed text-foreground sm:text-xl md:text-2xl">
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
        </PageContainer>
      </Section>

      <Section className="gradient-section">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <FadeUp className="h-full md:order-none">
              <SectionImage
                src="/mission.jpg"
                alt="LuminaBridge Foundation mission in action"
                tall
                className="h-full"
              />
            </FadeUp>
            <div className="grid h-full gap-6 sm:gap-8 md:gap-10">
              <FadeUp className="h-full">
                <div
                  className={`${missionCardClass} border border-border bg-white`}
                >
                  <span className="font-display text-base font-extrabold uppercase tracking-widest text-secondary sm:text-lg md:text-xl">
                    {missionVision.mission.title}
                  </span>
                  <p className="mt-4 text-lg leading-relaxed text-foreground sm:mt-5 sm:text-xl md:text-2xl">
                    {missionVision.mission.content}
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.1} className="h-full">
                <div className={`${missionCardClass} bg-primary text-white shadow-lg`}>
                  <span className="font-display text-base font-extrabold uppercase tracking-widest text-[#ffe600] sm:text-lg md:text-xl">
                    {missionVision.vision.title}
                  </span>
                  <p className="mt-4 text-lg leading-relaxed text-white/90 sm:mt-5 sm:text-xl md:text-2xl">
                    {missionVision.vision.content}
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </PageContainer>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <PageContainer>
          <SectionHeader title="What Guides Everything We Do" light />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
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
        </PageContainer>
      </Section>

      <Section className="gradient-section">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <FadeUp>
              <div className="max-w-xl">
                <h2 className={sectionHeadingClass}>{nameMeaning.title}</h2>
                <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground sm:mt-12 sm:space-y-7 sm:text-lg md:mt-14 md:text-xl lg:mt-16">
                  <p className="flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 font-bold text-secondary">Lumina</span>
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-secondary/45" aria-hidden />
                    <span>{nameMeaning.lumina}</span>
                  </p>
                  <p className="flex items-start gap-3 sm:gap-4">
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
        </PageContainer>
      </Section>

      <Section id="programs" className="programs-section-bg">
        <PageContainer>
          <SectionHeader title="What We Do" />
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {programs.map((program) => (
              <StaggerItem key={program.id}>
                <ProgramCard program={program} minimal />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <Section id="impact" className="bg-white">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <div>
              <SectionHeader
                title="Our Impact Journey"
                align="left"
                className="mb-8"
              />
              <div className="space-y-5">
                <FadeUp>
                  <p className="text-xl font-semibold leading-relaxed text-foreground sm:text-2xl md:text-3xl">
                    {impactNarrative[0]}
                  </p>
                </FadeUp>
                <FadeUp delay={0.08}>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
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

          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
            <Timeline items={impactTimeline} />
          </div>
        </PageContainer>
      </Section>

      <Section className="testimonials-section-bg">
        <PageContainer>
          <SectionHeader title="Voices from Our Community" />
          <StaggerContainer className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
            <StaggerItem className="md:col-span-2 lg:col-span-1">
              <CommunityStoryCard
                src="/story.jpg"
                alt="Community members gathering together outdoors"
              />
            </StaggerItem>
          </StaggerContainer>
        </PageContainer>
      </Section>
    </>
  );
}
