import type { Metadata } from "next";
import Link from "next/link";
import communityImage from "../../../public/community.jpg";
import hopeImage from "../../../public/hope.jpg";
import missionImage from "../../../public/mission.jpg";
import { AboutLeadershipSection } from "@/components/sections/about-leadership-section";
import { ValuesShowcase } from "@/components/sections/values-showcase";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer, splitSectionGridClass } from "@/components/shared/page-container";
import { SectionHeader, sectionHeadingClass } from "@/components/shared/section-header";
import { SectionImage } from "@/components/shared/section-image";
import { CtaSection } from "@/components/shared/cta-section";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { PersonSchema } from "@/components/seo/person-schema";
import {
  aboutPageContent,
  aboutStory,
  beliefQuote,
  coreValues,
  leadership,
  missionVision,
  nameMeaning,
  operationsTeam,
  whoWeAre,
  whyWeExist,
} from "@/lib/data";
import { aboutMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = aboutMetadata;

const missionCardClass =
  "flex h-full min-h-[240px] flex-col items-center justify-center rounded-3xl p-6 text-center shadow-sm sm:min-h-[260px] sm:p-8 md:min-h-[280px] md:p-10 lg:min-h-[320px] lg:p-12";

const teamMembers = [
  ...leadership,
  ...operationsTeam.filter((member) => !member.hidden),
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PersonSchema people={teamMembers} />
      <PageBanner title={aboutPageContent.hero.title} image={communityImage} />

      <Section tone="white" backdrop="none">
        <PageContainer>
          <SectionHeader title={whoWeAre.title} align="left" className="mb-8" />
          <div className={splitSectionGridClass}>
            <div className="space-y-5 md:self-center">
              {whoWeAre.paragraphs.map((paragraph) => (
                <FadeUp key={paragraph.slice(0, 40)}>
                  <p className="text-pretty md:text-justify text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                    {paragraph}
                  </p>
                </FadeUp>
              ))}
              <FadeUp className="mt-8 sm:mt-10">
                <blockquote className="border-l-4 border-accent pl-5 sm:pl-8">
                  <p className="text-pretty md:text-justify text-lg font-medium italic leading-relaxed text-foreground sm:text-xl md:text-2xl">
                    &ldquo;{beliefQuote}&rdquo;
                  </p>
                </blockquote>
              </FadeUp>
            </div>
            <FadeUp delay={0.12}>
              <SectionImage
                src={communityImage}
                alt="Lumina Bridge Foundation community in Edmonton, Alberta"
                natural
              />
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="mesh">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <FadeUp>
              <SectionImage
                src={missionImage}
                alt="Lumina Bridge Foundation mission in action across Alberta"
                natural
              />
            </FadeUp>
            <div className="grid gap-6 sm:gap-8 md:gap-10 md:self-center">
              <FadeUp spring className="h-full">
                <div className={`${missionCardClass} border border-border bg-white`}>
                  <span className="font-display text-base font-extrabold uppercase tracking-widest text-secondary sm:text-lg md:text-xl">
                    {missionVision.mission.title}
                  </span>
                  <p className="mt-4 text-lg leading-relaxed text-foreground sm:mt-5 sm:text-xl md:text-2xl">
                    {missionVision.mission.content}
                  </p>
                </div>
              </FadeUp>
              <FadeUp spring delay={0.12} className="h-full">
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

      <Section tone="white" backdrop="none">
        <PageContainer>
          <SectionHeader title="Our Story" align="left" className="mb-8 sm:mb-10" />
          <StaggerContainer className="grid gap-6 md:grid-cols-3 md:gap-8">
            {aboutStory.map((chapter, index) => (
              <StaggerItem key={chapter.title}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    Chapter {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">{chapter.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {chapter.content}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="mesh">
        <PageContainer>
          <SectionHeader title="Our Core Values" />
          <ValuesShowcase values={coreValues} />
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <FadeUp className="md:self-center">
              <div className="max-w-xl">
                <h2 className={sectionHeadingClass}>{nameMeaning.title}</h2>
                <StaggerContainer
                  className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground sm:mt-12 sm:space-y-7 sm:text-lg md:mt-14 md:text-xl lg:mt-16"
                  staggerDelay={0.12}
                >
                  <StaggerItem>
                    <p className="flex items-start gap-3 sm:gap-4">
                      <span className="shrink-0 font-bold text-secondary">Lumina</span>
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-secondary/45"
                        aria-hidden
                      />
                      <span>{nameMeaning.lumina}</span>
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="flex items-start gap-3 sm:gap-4">
                      <span className="shrink-0 font-bold text-secondary">Bridge</span>
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-secondary/45"
                        aria-hidden
                      />
                      <span>{nameMeaning.bridge}</span>
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="mt-4 text-base leading-relaxed sm:text-lg">{nameMeaning.closing}</p>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <SectionImage src={hopeImage} alt="Light, hope, and community connection" natural />
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <Section id="leadership" tone="green" backdrop="mesh" className="scroll-mt-28">
        <PageContainer>
          <SectionHeader
            title={aboutPageContent.leadershipSectionTitle}
            align="center"
            className="mb-0"
          />
          <div className="mt-10 sm:mt-12">
            <AboutLeadershipSection />
          </div>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none">
        <PageContainer narrow>
          <SectionHeader title={whyWeExist.title} align="left" />
          <div className="mt-8 space-y-5">
            {whyWeExist.paragraphs.map((paragraph) => (
              <FadeUp key={paragraph.slice(0, 40)}>
                <p className="text-pretty md:text-justify text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                  {paragraph}
                </p>
              </FadeUp>
            ))}
            <FadeUp>
              <p className="text-pretty md:text-justify text-base font-bold italic leading-relaxed text-secondary sm:text-lg md:text-xl">
                &ldquo;{siteConfig.landAcknowledgement.statement}&rdquo;
              </p>
            </FadeUp>
          </div>
          <FadeUp className="mt-10">
            <Link
              href="/impact"
              className="text-base font-semibold text-secondary hover:underline sm:text-lg"
            >
              Explore our community impact →
            </Link>
          </FadeUp>
        </PageContainer>
      </Section>

      <CtaSection
        title="Join Our Mission"
        description="Partner with Lumina Bridge Foundation to empower youth, celebrate culture, and strengthen communities across Alberta."
        primaryCta={{ label: "Get Involved", href: "/get-involved" }}
        secondaryCta={{ label: "Donate", href: "/donate" }}
      />
    </>
  );
}
