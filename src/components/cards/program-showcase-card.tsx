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
        "@container/card group relative flex h-full min-h-[15.5rem] flex-col overflow-hidden rounded-3xl border shadow-sm transition-shadow sm:min-h-[16.5rem]",
        theme.border,
        theme.shadow,
        className
      )}
    >
      <div
        className={cn(
          "relative flex flex-1 flex-col overflow-hidden px-5 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8",
          theme.surface
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full sm:h-36 sm:w-36 md:h-40 md:w-40",
            theme.decorA
          )}
          aria-hidden
        />
        <div
          className={cn(
            "pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full sm:h-40 sm:w-40 md:h-44 md:w-44",
            theme.decorB
          )}
          aria-hidden
        />

        <div className="program-showcase-body relative flex min-h-0 flex-1 flex-col">
          <div className="program-showcase-header">
            <motion.span
              className={cn(
                "program-showcase-number font-display block font-bold leading-none tracking-tight transition-colors",
                theme.number
              )}
              whileHover={{ scale: 1.08, rotate: -2 }}
              transition={springGentle}
            >
              {program.number}
            </motion.span>

            <h3
              className={cn(
                "program-showcase-title mt-3 min-w-0 font-sans font-semibold leading-snug text-pretty sm:mt-3.5",
                theme.title
              )}
            >
              {program.title}
            </h3>
          </div>

          <Link
            href={`/programs/${program.id}`}
            className={cn(
              "program-showcase-cta relative mt-auto inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              theme.border,
              theme.title,
              "hover:bg-white/20"
            )}
          >
            Learn More
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
