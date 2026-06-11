"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  label: string;
  className?: string;
  inverted?: boolean;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  className,
  inverted = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericMatch = value.match(/^(\d+)/);
  const isNumeric = !!numericMatch;
  const target = isNumeric ? parseInt(numericMatch[1], 10) : 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, isNumeric, target]);

  const displayValue = isNumeric ? `${count}${suffix}` : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={cn("text-center", className)}
    >
      <div
        className={cn(
          "text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl",
          inverted ? "text-white" : "text-primary"
        )}
      >
        {displayValue}
      </div>
      <p
        className={cn(
          "mt-3 text-base font-semibold md:text-lg",
          inverted ? "text-white/75" : "text-muted-foreground"
        )}
      >
        {label}
      </p>
    </motion.div>
  );
}
