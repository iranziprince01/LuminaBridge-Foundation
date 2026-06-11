"use client";

import { Program } from "@/lib/data";
import { AppIcon } from "@/components/shared/app-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProgramCardProps {
  program: Program;
  className?: string;
  compact?: boolean;
  minimal?: boolean;
}

export function ProgramCard({
  program,
  className,
  compact = false,
  minimal = false,
}: ProgramCardProps) {
  if (minimal) {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={cn("h-full", className)}
      >
        <Card className="group h-full rounded-2xl border-border/70 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-secondary/30 hover:bg-white hover:shadow-md">
          <CardContent className="flex h-full flex-col p-5 sm:p-6 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-secondary/25 bg-primary/5 transition-colors group-hover:border-secondary/40 group-hover:bg-primary/10">
              <AppIcon name={program.icon} className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="mt-5 text-base font-bold leading-snug text-foreground sm:mt-6 sm:text-lg md:text-xl">
              {program.title}
            </h3>
            <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
              {program.impact}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("h-full", className)}
    >
      <Card className="group h-full border-border/60 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5">
        <CardHeader className="pb-3">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 transition-colors group-hover:from-primary/15 group-hover:to-secondary/15">
            <AppIcon name={program.icon} className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-lg">{program.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {compact
              ? program.description.slice(0, 120) + "..."
              : program.description}
          </p>
          {!compact && (
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-secondary">
              {program.impact}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
