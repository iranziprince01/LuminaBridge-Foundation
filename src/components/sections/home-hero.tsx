"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={heroContent.image}
        alt="Community gathering"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="gradient-hero-premium absolute inset-0" />

      <div className="relative mx-auto grid min-h-[100dvh] w-full max-w-7xl grid-rows-[1fr_auto] gap-10 px-4 pb-24 pt-36 sm:gap-16 sm:px-6 sm:pb-32 sm:pt-44 md:pb-36 md:pt-48 lg:gap-20 lg:px-8 lg:pb-44">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end"
        >
          <h1 className="text-balance max-w-[18ch] text-[clamp(2.25rem,8vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white sm:max-w-none sm:text-[clamp(2.75rem,8.5vw,6.25rem)] lg:text-[clamp(3rem,9vw,7rem)]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="block"
            >
              {heroContent.headline.primary}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-1 block text-[#ffe600] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] lg:mt-2"
            >
              {heroContent.headline.secondary}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center [&_a]:w-full sm:[&_a]:w-auto"
        >
          <Button variant="white" size="lg" asChild>
            <Link href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
              <ArrowRight />
            </Link>
          </Button>
          <Button variant="white-outline" size="lg" asChild>
            <Link href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
