"use client";

import { ImpactImageCard } from "@/components/cards/impact-image-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import type { ImpactContentCard } from "@/lib/data";

interface ImpactCardsGridProps {
  cards: ImpactContentCard[];
}

export function ImpactCardsGrid({ cards }: ImpactCardsGridProps) {
  return (
    <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-4 xl:gap-8">
      {cards.map((card, index) => (
        <StaggerItem key={card.id}>
          <ImpactImageCard card={card} priority={index < 2} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
