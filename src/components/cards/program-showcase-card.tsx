"use client";

import type { Program } from "@/lib/data";
import { getProgramCardTheme } from "@/lib/program-card-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProgramShowcaseCardProps {
  program: Program;
  index: number;
  className?: string;
}

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ProgramShowcaseCard({
  program,
  index,
  className,
}: ProgramShowcaseCardProps) {
  const number = formatIndex(index);
  const theme = getProgramCardTheme(index);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border shadow-sm transition-shadow",
        theme.border,
        theme.shadow,
        className
      )}
    >
      <div
        className={cn(
          "relative flex min-h-[200px] items-center gap-4 overflow-hidden px-5 py-8 sm:min-h-[240px] sm:gap-5 sm:px-6 sm:py-10 md:min-h-[260px] md:px-7 md:py-12",
          theme.surface
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full",
            theme.decorA
          )}
          aria-hidden
        />
        <div
          className={cn(
            "pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full",
            theme.decorB
          )}
          aria-hidden
        />

        <span
          className={cn(
            "relative shrink-0 font-display text-5xl font-bold leading-none tracking-tight transition-colors sm:text-6xl md:text-7xl",
            theme.number
          )}
        >
          {number}
        </span>

        <h3
          className={cn(
            "relative min-w-0 flex-1 text-balance font-sans text-lg font-semibold leading-snug sm:text-xl md:text-2xl",
            theme.title
          )}
        >
          {program.title}
        </h3>
      </div>
    </motion.article>
  );
}
