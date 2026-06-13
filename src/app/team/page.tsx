import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { LeadershipCard } from "@/components/cards/leadership-card";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { leadership, leadershipIntro, operationsTeam, operationsTeamIntro } from "@/lib/data";
import { teamMetadata } from "@/lib/seo";

export const metadata: Metadata = teamMetadata;

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title={leadershipIntro.title}
        image="/team.jpg"
      />
      <Section tone="white" backdrop="mesh">
        <PageContainer>
          <FadeUp>
            <p className="text-center text-sm font-bold uppercase tracking-widest text-secondary sm:text-base md:text-lg">
              {leadershipIntro.subtitle}
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
              {leadershipIntro.description}
            </p>
          </FadeUp>

          <SectionHeader
            title="Executive Leadership"
            align="center"
            className="mt-12 sm:mt-16 lg:mt-20"
          />

          <StaggerContainer className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-10 lg:mt-12 lg:grid-cols-3 lg:gap-12">
            {leadership.map((leader, index) => (
              <StaggerItem key={leader.id}>
                <LeadershipCard leader={leader} priority={index === 0} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp className="mt-20 border-t border-border/60 pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24">
            <SectionHeader
              title={operationsTeamIntro.subtitle}
              description={operationsTeamIntro.description}
              align="center"
              className="mb-0"
            />
          </FadeUp>

          <StaggerContainer className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
            {operationsTeam.map((member) => (
              <StaggerItem key={member.id}>
                <LeadershipCard leader={member} variant="compact" />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp className="mt-16 text-center sm:mt-20 md:mt-24 lg:mt-28">
            <h2 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              {leadershipIntro.closingTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
              {leadershipIntro.closing}
            </p>
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
