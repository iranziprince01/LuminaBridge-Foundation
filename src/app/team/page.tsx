import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { LeadershipCard } from "@/components/cards/leadership-card";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { leadership, leadershipIntro } from "@/lib/data";
import { pageTitles } from "@/lib/site-config";

export const metadata: Metadata = {
  title: pageTitles.team,
  description: leadershipIntro.description,
};

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title={leadershipIntro.title}
        image="/team.jpg"
      />
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-center text-base font-bold uppercase tracking-widest text-secondary md:text-lg">
              {leadershipIntro.subtitle}
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
              {leadershipIntro.description}
            </p>
          </FadeUp>

          <StaggerContainer className="mt-20 grid gap-10 md:mt-28 md:grid-cols-3 lg:gap-12">
            {leadership.map((leader, index) => (
              <StaggerItem key={leader.id}>
                <LeadershipCard leader={leader} priority={index === 0} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp className="mt-24 text-center md:mt-32">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {leadershipIntro.closingTitle}
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {leadershipIntro.closing}
            </p>
          </FadeUp>
        </div>
      </Section>
    </>
  );
}
