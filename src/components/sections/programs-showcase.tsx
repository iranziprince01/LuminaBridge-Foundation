"use client";

import { ProgramShowcaseCard } from "@/components/cards/program-showcase-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import type { Program } from "@/lib/data";

interface ProgramsShowcaseProps {
  programs: Program[];
}

export function ProgramsShowcase({ programs }: ProgramsShowcaseProps) {
  return (
    <StaggerContainer
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
      staggerDelay={0.06}
    >
      {programs.map((program, index) => (
        <StaggerItem key={program.id} variant="playful">
          <ProgramShowcaseCard program={program} index={index} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
