"use client";

import Image from "next/image";
import { highlightImpactNumbers } from "@/components/impact/highlight-impact-numbers";
import type { ImpactContentCard } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ImpactImageCardProps {
  card: ImpactContentCard;
  className?: string;
  priority?: boolean;
}

export function ImpactImageCard({ card, className, priority = false }: ImpactImageCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-shadow hover:border-secondary/25 hover:shadow-lg hover:shadow-secondary/10",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {highlightImpactNumbers(card.text)}
        </p>
      </div>
    </motion.article>
  );
}
