"use client";

import { AppIcon } from "@/components/shared/app-icon";
import type { IconName } from "@/lib/icons";
import { getValueCardTheme } from "@/lib/value-card-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { springGentle } from "@/components/motion/motion-presets";

interface ValueShowcaseCardProps {
  title: string;
  description: string;
  icon: IconName;
  index: number;
  className?: string;
}

export function ValueShowcaseCard({
  title,
  description,
  icon,
  index,
  className,
}: ValueShowcaseCardProps) {
  const theme = getValueCardTheme(index);

  return (
    <motion.article
      whileHover={{ x: -2, y: -2 }}
      transition={springGentle}
      className={cn(
        "group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-none border transition-shadow duration-200 sm:min-h-[240px]",
        theme.surface,
        theme.border,
        theme.hardShadow,
        className
      )}
    >
      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-none border",
            theme.iconWrap
          )}
        >
          <AppIcon name={icon} className={cn("h-5 w-5", theme.icon)} />
        </div>

        <h3
          className={cn(
            "mt-5 font-display text-xl font-bold tracking-tight sm:text-2xl",
            theme.title
          )}
        >
          {title}
        </h3>

        <p className={cn("mt-3 flex-1 text-sm leading-relaxed sm:text-base", theme.description)}>
          {description}
        </p>
      </div>
    </motion.article>
  );
}
