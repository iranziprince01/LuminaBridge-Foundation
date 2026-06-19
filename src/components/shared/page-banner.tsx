"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { motionEase, motionEaseOut } from "@/components/motion/motion-presets";
import { pageContainerClass } from "@/components/shared/page-container";
import { cn } from "@/lib/utils";

interface PageBannerProps {
  title: string | readonly string[];
  image?: string | StaticImageData;
  imageAlt?: string;
  className?: string;
  variant?: "default" | "event";
}

function getBannerAlt(title: string | readonly string[], imageAlt?: string): string {
  if (imageAlt) {
    return imageAlt;
  }

  const text = Array.isArray(title) ? title.join(" ") : title;
  return `${text}, Lumina Bridge Foundation banner`;
}

export function PageBanner({
  title,
  image = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80",
  imageAlt,
  className,
  variant = "default",
}: PageBannerProps) {
  const isEvent = variant === "event";

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
          alt={getBannerAlt(title, imageAlt)}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>
      <motion.div
        className={cn(
          "absolute inset-0",
          isEvent ? "gradient-hero-event" : "gradient-hero-premium"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: motionEase }}
      />
      <motion.div
        className={cn("absolute inset-0 mesh-bg", isEvent ? "opacity-35" : "opacity-20")}
        initial={{ opacity: 0 }}
        animate={{ opacity: isEvent ? 0.35 : 0.2 }}
        transition={{ duration: 1, delay: 0.1, ease: motionEase }}
      />
      <div className={cn("relative", pageContainerClass)}>
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: motionEase }}
          className={cn(
            "font-display font-bold tracking-tight text-white",
            isEvent
              ? "drop-shadow-[0_4px_28px_rgba(0,0,0,0.75)]"
              : "drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]",
            Array.isArray(title)
              ? "max-w-3xl text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.12] sm:max-w-4xl sm:text-[clamp(1.75rem,3.25vw,3.25rem)] lg:text-[clamp(2rem,2.75vw,3.5rem)] xl:max-w-5xl xl:text-[clamp(2.25rem,2.5vw,3.75rem)]"
              : "text-balance max-w-2xl text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.1] sm:max-w-3xl sm:text-[clamp(1.875rem,3.75vw,3.25rem)] lg:max-w-4xl lg:text-[clamp(2.25rem,3vw,3.75rem)] xl:text-[clamp(2.5rem,2.75vw,4.25rem)]"
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
