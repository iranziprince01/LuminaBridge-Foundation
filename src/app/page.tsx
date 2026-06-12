import type { Metadata } from "next";
import communityImage from "../../public/community.jpg";
import hopeImage from "../../public/hope.jpg";
import missionImage from "../../public/mission.jpg";
import storyImage from "../../public/story.jpg";
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
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { StatsSection } from "@/components/shared/stats-section";
import { PriorityPopulationsSection } from "@/components/sections/priority-populations-section";
import { ProgramsShowcase } from "@/components/sections/programs-showcase";
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
  programsSection,
  priorityPopulationsSection,
  homeStats,
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

      <section className="relative w-full overflow-hidden bg-secondary py-12 sm:py-16 md:py-20 lg:py-24">
        <SectionBackdrop tone="dark" variant="orbs" seed="home-stats" />
        <PageContainer className="relative z-10">
          <StatsSection stats={homeStats} dark />
        </PageContainer>
      </section>

      <Section id="about" tone="white">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <div className="md:self-center">
              <SectionHeader title={whoWeAre.title} align="left" className="mb-8" />
              <div className="space-y-5">
                {whoWeAre.paragraphs.map((paragraph, i) => (
                  <FadeUp key={i} delay={i * 0.08}>
                    <p className="text-justify text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                      {paragraph}
                    </p>
                  </FadeUp>
                ))}
              </div>
              <FadeUp className="mt-8 sm:mt-10">
                <blockquote className="border-l-4 border-accent pl-5 sm:pl-8">
                  <p className="text-justify text-lg font-medium italic leading-relaxed text-foreground sm:text-xl md:text-2xl">
                    &ldquo;{beliefQuote}&rdquo;
                  </p>
                </blockquote>
              </FadeUp>
            </div>
            <FadeUp delay={0.12}>
              <SectionImage
                src={communityImage}
                alt="Lumina Bridge Foundation community"
                natural
              />
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <Section id="mission" tone="green" backdrop="mesh">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <FadeUp className="md:order-none">
              <SectionImage
                src={missionImage}
                alt="Lumina Bridge Foundation mission in action"
                natural
              />
            </FadeUp>
            <div className="grid gap-6 sm:gap-8 md:gap-10 md:self-center">
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

      <Section id="values" tone="white" backdrop="dots">
        <PageContainer>
          <SectionHeader title="What Guides Everything We Do" />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {coreValues.map((value) => (
              <StaggerItem key={value.title}>
                <ImpactCard
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <Section id="meaning" tone="green" backdrop="bridge" className="!py-20 sm:!py-28 md:!py-36 lg:!py-44">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <FadeUp className="md:self-center">
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
                src={hopeImage}
                alt="Light, hope, and community connection"
                natural
              />
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <Section id="programs" tone="white" backdrop="orbs">
        <PageContainer>
          <SectionHeader title={programsSection.title} />
          <ProgramsShowcase programs={programs} />
        </PageContainer>
      </Section>

      <Section id="populations" tone="green" backdrop="mesh">
        <PriorityPopulationsSection
          title={priorityPopulationsSection.title}
          intro={priorityPopulationsSection.intro}
          lead={priorityPopulationsSection.lead}
          populations={priorityPopulationsSection.populations}
        />
      </Section>

      <Section id="stories" tone="white" backdrop="mesh">
        <PageContainer>
          <SectionHeader title="Impact Stories from Our Community" />
          <StaggerContainer className="grid items-stretch gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {testimonials.map((t) => (
              <StaggerItem key={t.id} className="h-full">
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
            <StaggerItem className="h-full">
              <CommunityStoryCard
                src={storyImage}
                alt="Community members gathering together outdoors"
              />
            </StaggerItem>
          </StaggerContainer>
        </PageContainer>
      </Section>
    </>
  );
}
