"use client";

import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CommunityStoryCardProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

export function CommunityStoryCard({ src, alt, className }: CommunityStoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("h-full w-full", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm",
          "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[12rem]"
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}
