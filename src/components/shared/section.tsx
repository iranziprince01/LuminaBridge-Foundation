"use client";

import { motion } from "framer-motion";
import { motionEase } from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: motionEase }}
      className={cn(
        "scroll-mt-24 py-16 sm:py-24 md:py-32 lg:py-44",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
