import { Stat } from "@/lib/data";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { cn } from "@/lib/utils";

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
  dark?: boolean;
}

export function StatsSection({ stats, className, dark = false }: StatsSectionProps) {
  return (
    <StaggerContainer
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10 lg:grid-cols-5",
        className
      )}
    >
      {stats.map((stat) => (
        <StaggerItem key={stat.label}>
          <AnimatedCounter
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            inverted={dark}
          />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
