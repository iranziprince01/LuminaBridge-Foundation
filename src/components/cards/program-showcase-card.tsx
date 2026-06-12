"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/programs-content";
import { getProgramCardTheme } from "@/lib/program-card-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { springGentle } from "@/components/motion/motion-presets";

interface ProgramShowcaseCardProps {
  program: Program;
  index: number;
  className?: string;
}

export function ProgramShowcaseCard({
  program,
  index,
  className,
}: ProgramShowcaseCardProps) {
  const theme = getProgramCardTheme(index);

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={springGentle}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border shadow-sm transition-shadow",
        theme.border,
        theme.shadow,
        className
      )}
    >
      <div
        className={cn(
          "relative flex flex-1 flex-col overflow-hidden px-5 py-7 sm:px-6 sm:py-8 md:px-7 md:py-9",
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

        <div className="relative flex flex-1 items-center gap-4 sm:gap-5">
          <motion.span
            className={cn(
              "shrink-0 font-display text-5xl font-bold leading-none tracking-tight transition-colors sm:text-6xl md:text-7xl",
              theme.number
            )}
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={springGentle}
          >
            {program.number}
          </motion.span>

          <h3
            className={cn(
              "min-w-0 flex-1 text-balance font-sans text-lg font-semibold leading-snug sm:text-xl md:text-2xl",
              theme.title
            )}
          >
            {program.title}
          </h3>
        </div>

        <Link
          href={`/programs/${program.id}`}
          className={cn(
            "relative mt-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
            theme.border,
            theme.title,
            "hover:bg-white/20"
          )}
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
