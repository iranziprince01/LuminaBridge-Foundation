"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { scaleInVariants, motionEase } from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  tall?: boolean;
  objectPosition?: string;
}

export function SectionImage({
  src,
  alt,
  className,
  priority = false,
  tall = false,
  objectPosition = "center",
}: SectionImageProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={scaleInVariants}
      transition={{ duration: 0.7, ease: motionEase }}
      whileHover={{ scale: 1.02 }}
      className={cn("relative w-full rounded-3xl shadow-sm", className)}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-3xl",
          tall
            ? "min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem] lg:h-full lg:min-h-[32rem] xl:min-h-[36rem]"
            : "min-h-[14rem] sm:min-h-[18rem] md:min-h-[22rem] lg:min-h-[28rem] xl:min-h-[32rem]"
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700"
          style={{ objectPosition }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}
