"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../../public/hero.jpg";
import { heroContent } from "@/lib/data";
import { pageContainerClass } from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";
import { motionEase, springGentle } from "@/components/motion/motion-presets";
import { HeroNgoGraphic } from "@/components/sections/hero-ngo-graphic";
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
          src={heroImage}
          alt="Diverse youth and community members united — Lumina Bridge Foundation, Edmonton, Alberta"
          fill
          className="hero-ken-burns object-cover object-center"
          priority
          fetchPriority="high"
          quality={85}
          sizes="100vw"
        />
      </div>
      <div className="gradient-hero-premium absolute inset-0" />

      <div className={cn(pageContainerClass, "hero-shell relative z-10")}>
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-headline-wrap items-center text-center lg:items-stretch lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: motionEase }}
                className="min-w-0 w-full max-w-xl lg:max-w-none"
              >
                <h1 className="hero-headline font-display w-full min-w-0 max-w-full text-balance font-extrabold leading-[1.05] tracking-tight">
                  <span className="block xl:whitespace-nowrap">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6, ease: motionEase }}
                      className="block text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] xl:inline"
                    >
                      {heroContent.headline.primary}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18, duration: 0.6, ease: motionEase }}
                      className="hero-headline-line block text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] xl:mt-0 xl:inline xl:ml-[0.3ch]"
                    >
                      {heroContent.headline.primaryContinued}
                    </motion.span>
                  </span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.26, duration: 0.6, ease: motionEase }}
                    className="hero-headline-line block text-[#ffe600] drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
                  >
                    {heroContent.headline.accent}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.34, duration: 0.6, ease: motionEase }}
                    className="hero-headline-line block text-[#ffe600] drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
                  >
                    {heroContent.headline.secondary}
                  </motion.span>
                </h1>
              </motion.div>
            </div>

            <div className="hero-cta-zone justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: motionEase }}
                className="hero-cta mx-auto flex w-full max-w-xs shrink-0 flex-col items-center gap-3 sm:max-w-sm sm:flex-row sm:justify-center lg:mx-0 lg:max-w-none lg:items-start lg:justify-start [&_a]:w-full sm:[&_a]:w-auto"
              >
                <motion.div
                  className="w-full sm:w-auto"
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
                  className="w-full sm:w-auto"
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

          <div className="hero-graphic hidden lg:block">
            <HeroNgoGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
