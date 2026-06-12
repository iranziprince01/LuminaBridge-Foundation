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
    <section className="relative min-h-screen overflow-hidden">
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

      <div
        className={cn(
          pageContainerClass,
          "relative grid min-h-[100dvh] w-full grid-rows-[1fr_auto] gap-16 pb-24 pt-36 sm:gap-20 sm:pb-32 sm:pt-44 md:pb-36 md:pt-48 lg:gap-28 lg:pb-44"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: motionEase }}
          className="flex min-w-0 items-end"
        >
          <h1 className="font-display w-full min-w-0 max-w-full text-balance break-words text-[clamp(2.25rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight sm:max-w-none sm:text-[clamp(2.75rem,8.5vw,6.25rem)] lg:text-[clamp(3rem,9vw,7rem)]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: motionEase }}
              className="block text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
            >
              {heroContent.headline.primary}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: motionEase }}
              className="mt-1 block text-[#ffe600] drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] lg:mt-2"
            >
              {heroContent.headline.secondary}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: motionEase }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center [&_a]:w-full sm:[&_a]:w-auto"
        >
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={springGentle}>
            <Button variant="white" size="lg" asChild>
              <Link href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
                <ArrowRight />
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={springGentle}>
            <Button variant="white-outline" size="lg" asChild>
              <Link href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
