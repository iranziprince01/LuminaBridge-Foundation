"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CommunityStoryCardProps {
  src: string;
  alt: string;
  className?: string;
}

export function CommunityStoryCard({ src, alt, className }: CommunityStoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("h-full", className)}
    >
      <Card className="h-full overflow-hidden border-border/60 bg-white">
        <div className="relative min-h-[16rem] w-full sm:min-h-[20rem] md:min-h-[24rem] lg:min-h-full lg:aspect-auto">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Card>
    </motion.div>
  );
}
