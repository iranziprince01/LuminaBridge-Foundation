"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionEase, motionEaseOut } from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

interface PageBannerProps {
  title: string | readonly string[];
  image?: string;
  className?: string;
}

export function PageBanner({
  title,
  image = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80",
  className,
}: PageBannerProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[58vh] items-end overflow-hidden pt-40 pb-24 sm:min-h-[64vh] sm:pb-28 md:min-h-[68vh] md:pt-44 md:pb-32 lg:min-h-[74vh] lg:pb-36",
        className
      )}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.1, ease: motionEaseOut }}
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>
      <motion.div
        className="gradient-hero-premium absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: motionEase }}
      />
      <motion.div
        className="absolute inset-0 mesh-bg opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.1, ease: motionEase }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: motionEase }}
          className={cn(
            "font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]",
            Array.isArray(title)
              ? "max-w-6xl text-[clamp(1.875rem,4.25vw,4rem)] leading-[1.12]"
              : "max-w-4xl text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[1.05]"
          )}
        >
          {Array.isArray(title) ? (
            <>
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </>
          ) : (
            title
          )}
        </motion.h1>
      </div>
    </section>
  );
}
