"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  fadeUpSpringVariants,
  fadeUpVariants,
  motionEase,
  viewportDefault,
} from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  className?: string;
  spring?: boolean;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.65,
  spring = false,
  className,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      variants={spring ? fadeUpSpringVariants : fadeUpVariants}
      transition={spring ? { delay } : { duration, delay, ease: motionEase }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
