"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/fade-up";
import { motionEase, viewportDefault } from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

export const sectionHeadingClass =
  "font-display text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <FadeUp className={cn("mb-10 sm:mb-14 md:mb-20 lg:mb-24", className)}>
      <div
        className={cn(
          "max-w-3xl",
          align === "center" && "mx-auto text-center"
        )}
      >
        <h2
          className={cn(
            sectionHeadingClass,
            light ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={viewportDefault}
          transition={{ delay: 0.15, duration: 0.55, ease: motionEase }}
          className={cn(
            "mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-secondary to-[#ffe600]",
            align === "center" ? "mx-auto origin-center" : "origin-left"
          )}
          aria-hidden
        />
        {description && (
          <p
            className={cn(
              "mt-5 font-sans text-lg leading-relaxed md:text-xl md:leading-relaxed",
              light ? "text-white/80" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </FadeUp>
  );
}
