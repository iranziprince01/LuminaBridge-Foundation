"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { motionEase, motionEaseOut } from "@/components/motion/motion-presets";
import { pageContainerClass } from "@/components/shared/page-container";
import { cn } from "@/lib/utils";

interface PageBannerProps {
  title: string | readonly string[];
  image?: string | StaticImageData;
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
        "relative flex min-h-[50vh] items-end overflow-hidden pt-32 pb-16 sm:min-h-[58vh] sm:pt-36 sm:pb-20 md:min-h-[64vh] md:pt-40 md:pb-24 lg:min-h-[68vh] lg:pb-32",
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
      <div className={cn("relative", pageContainerClass)}>
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: motionEase }}
          className={cn(
            "font-display font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]",
            Array.isArray(title)
              ? "max-w-6xl text-[clamp(1.75rem,4.25vw,3.75rem)] leading-[1.12] sm:text-[clamp(2rem,4.5vw,4.25rem)] lg:text-[clamp(2.25rem,5vw,4.75rem)]"
              : "text-balance max-w-3xl text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.1] sm:max-w-4xl sm:text-[clamp(2.25rem,5.5vw,4.5rem)] lg:text-[clamp(2.75rem,6.5vw,5.5rem)]"
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
