"use client";

import { ValueShowcaseCard } from "@/components/cards/value-showcase-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import type { IconName } from "@/lib/icons";

interface ValueItem {
  title: string;
  description: string;
  icon: IconName;
}

interface ValuesShowcaseProps {
  values: ValueItem[];
}

export function ValuesShowcase({ values }: ValuesShowcaseProps) {
  return (
    <StaggerContainer
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 lg:grid-cols-3 lg:gap-10"
      staggerDelay={0.07}
    >
      {values.map((value, index) => (
        <StaggerItem key={value.title} variant="playful" className="h-full pr-2 pb-2 sm:pr-2.5 sm:pb-2.5">
          <ValueShowcaseCard
            title={value.title}
            description={value.description}
            icon={value.icon}
            index={index}
          />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
