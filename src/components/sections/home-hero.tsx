"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/data";
import { pageContainerClass } from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";
import { motionEase, springGentle } from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

export function HomeHero() {
  return (
    <section
      id="hero"
      aria-label="Home hero"
      className="hero-viewport relative box-border overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={heroContent.image}
          alt="Community gathering"
          fill
          className="hero-ken-burns object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="gradient-hero-premium absolute inset-0" />

      <div className={cn(pageContainerClass, "hero-shell relative z-10")}>
        <div className="hero-headline-wrap">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: motionEase }}
            className="min-w-0"
          >
            <h1 className="hero-headline font-display w-full min-w-0 max-w-full text-balance break-words font-extrabold leading-[1.05] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: motionEase }}
                className="block text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
              >
                {heroContent.headline.primary}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: motionEase }}
                className="hero-headline-line block text-[#ffe600] drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
              >
                {heroContent.headline.accent}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: motionEase }}
                className="hero-headline-line block text-[#ffe600] drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
              >
                {heroContent.headline.secondary}
              </motion.span>
            </h1>
          </motion.div>
        </div>

        <div className="hero-cta-zone">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: motionEase }}
            className="hero-cta flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center [&_a]:w-full sm:[&_a]:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springGentle}
            >
              <Button variant="white" size="lg" className="hero-cta-btn" asChild>
                <Link href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label}
                  <ArrowRight />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springGentle}
            >
              <Button variant="white-outline" size="lg" className="hero-cta-btn" asChild>
                <Link href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
