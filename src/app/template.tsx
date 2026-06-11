"use client";

import { motion } from "framer-motion";
import { motionEase } from "@/components/motion/motion-presets";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}
