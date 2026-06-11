"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  fadeUpVariants,
  scaleInVariants,
  slideLeftVariants,
  slideRightVariants,
} from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right" | "scale";

const variantMap = {
  up: fadeUpVariants,
  left: slideLeftVariants,
  right: slideRightVariants,
  scale: scaleInVariants,
};

interface MotionRevealProps extends HTMLMotionProps<"div"> {
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}

export function MotionReveal({
  children,
  direction = "up",
  delay = 0,
  className,
  ...props
}: MotionRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variantMap[direction]}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
