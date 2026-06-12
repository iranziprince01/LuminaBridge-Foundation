"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/fade-up";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { springGentle } from "@/components/motion/motion-presets";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import type { PriorityPopulation } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PriorityPopulationsSectionProps {
  title: string;
  intro: string;
  lead: string;
  populations: PriorityPopulation[];
}

function PopulationRow({
  population,
  index,
}: {
  population: PriorityPopulation;
  index: number;
}) {
  const imageRight = index % 2 === 1;
  const slideFrom = imageRight ? "right" : "left";

  return (
    <article className="overflow-hidden rounded-none border-b border-border/60 bg-white last:border-b-0">
      <div className="grid md:grid-cols-2">
        <MotionReveal
          direction={slideFrom}
          delay={index * 0.08}
          className={cn(
            "group relative min-h-[14rem] overflow-hidden rounded-none sm:min-h-[16rem] md:min-h-[18rem] lg:min-h-[20rem]",
            imageRight && "md:order-2"
          )}
        >
          <Image
            src={population.image}
            alt={population.alt}
            fill
            className="rounded-none object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          />
        </MotionReveal>

        <MotionReveal
          direction={imageRight ? "left" : "right"}
          delay={index * 0.08 + 0.1}
          className={cn(
            "flex items-center px-6 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-12 lg:py-12",
            imageRight && "md:order-1"
          )}
        >
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...springGentle, delay: index * 0.08 + 0.15 }}
              className="inline-block font-display text-4xl font-bold leading-none text-secondary/25 sm:text-5xl"
            >
              {population.number}
            </motion.span>
            <h3 className="mt-4 font-display text-xl font-bold leading-snug text-foreground sm:text-2xl">
              {population.title}
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              {population.summary}
            </p>
          </div>
        </MotionReveal>
      </div>
    </article>
  );
}

export function PriorityPopulationsSection({
  title,
  intro,
  lead,
  populations,
}: PriorityPopulationsSectionProps) {
  return (
    <PageContainer>
      <SectionHeader title={title} description={intro} align="left" className="mb-6 sm:mb-8" />
      <FadeUp>
        <p className="max-w-3xl font-sans text-base font-semibold text-foreground sm:text-lg">
          {lead}
        </p>
      </FadeUp>

      <div className="mt-10 overflow-hidden rounded-none border border-border/60 bg-white sm:mt-12">
        {populations.map((population, index) => (
          <PopulationRow key={population.id} population={population} index={index} />
        ))}
      </div>
    </PageContainer>
  );
}
