import { LeadershipCard } from "@/components/cards/leadership-card";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import {
  leadership,
  leadershipIntro,
  operationsTeam,
  operationsTeamIntro,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const leadershipSubheadingClass =
  "font-display text-balance text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl";

export function AboutLeadershipSection() {
  return (
    <>
      <FadeUp>
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          {leadershipIntro.description}
        </p>
      </FadeUp>

      <FadeUp className="mt-12 sm:mt-14 lg:mt-16">
        <h3 className={cn(leadershipSubheadingClass, "text-center")}>
          1. Executive Leadership
        </h3>
      </FadeUp>

      <StaggerContainer className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-10 lg:mt-12 lg:grid-cols-3 lg:gap-12">
        {leadership.map((leader, index) => (
          <StaggerItem key={leader.id}>
            <LeadershipCard leader={leader} priority={index === 0} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp className="mt-20 border-t border-border/60 pt-16 sm:mt-24 sm:pt-20 lg:mt-28 lg:pt-24">
        <h3 className={cn(leadershipSubheadingClass, "text-center")}>
          2. Operations Team
        </h3>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg md:text-xl">
          {operationsTeamIntro.description}
        </p>
      </FadeUp>

      <StaggerContainer className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
        {operationsTeam
          .filter((member) => !member.hidden)
          .map((member) => (
            <StaggerItem key={member.id}>
              <LeadershipCard leader={member} variant="compact" />
            </StaggerItem>
          ))}
      </StaggerContainer>

      <FadeUp className="mt-16 text-center sm:mt-20 md:mt-24 lg:mt-28">
        <h3 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          {leadershipIntro.closingTitle}
        </h3>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
          {leadershipIntro.closing}
        </p>
      </FadeUp>
    </>
  );
}
