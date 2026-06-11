"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUpVariants, motionEase } from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.65,
  className,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUpVariants}
      transition={{ duration, delay, ease: motionEase }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
