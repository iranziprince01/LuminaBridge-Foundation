"use client";

import { motion } from "framer-motion";
import { motionEase } from "@/components/motion/motion-presets";
import {
  SectionBackdrop,
  type SectionBackdropVariant,
} from "@/components/shared/section-backdrop";
import { cn } from "@/lib/utils";

export type SectionTone = "white" | "green";

export const sectionToneClass: Record<SectionTone, string> = {
  white: "section-bg-white",
  green: "section-bg-green",
};

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  backdrop?: SectionBackdropVariant;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  tone = "white",
  backdrop = "auto",
  className,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: motionEase }}
      className={cn(
        "relative overflow-hidden scroll-mt-24 py-16 sm:py-24 md:py-32 lg:py-44",
        sectionToneClass[tone],
        className
      )}
    >
      <SectionBackdrop tone={tone} variant={backdrop} seed={id} />
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}
