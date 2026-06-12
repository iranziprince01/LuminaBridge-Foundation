"use client";

import { motion, type Variants } from "framer-motion";
import {
  playfulStaggerItemVariants,
  staggerItemVariants,
  viewportDefault,
} from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

type StaggerVariant = "default" | "playful";

const itemVariantMap: Record<StaggerVariant, Variants> = {
  default: staggerItemVariants,
  playful: playfulStaggerItemVariants,
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: StaggerVariant;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  variant = "default",
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: 0.05 },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: StaggerVariant;
}) {
  return (
    <motion.div variants={itemVariantMap[variant]} className={cn(className)}>
      {children}
    </motion.div>
  );
}
