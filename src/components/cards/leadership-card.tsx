"use client";

import Image from "next/image";
import { Leader } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LeadershipCardProps {
  leader: Leader;
  className?: string;
  priority?: boolean;
}

export function LeadershipCard({ leader, className, priority = false }: LeadershipCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("h-full", className)}
    >
      <Card className="group h-full overflow-hidden border-border/60 hover:shadow-xl hover:shadow-primary/5">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          {leader.image ? (
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary to-secondary">
              <span className="text-5xl font-bold text-white/80">
                {leader.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
          <p className="mt-1 text-sm font-semibold text-secondary">{leader.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {leader.bio}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
