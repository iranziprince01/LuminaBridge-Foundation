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
  variant?: "default" | "compact";
}

function getLeaderInitials(leader: Leader) {
  const source = leader.name.trim() || leader.role;
  const parts = source.split(/\s+/).filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
  }

  return source.charAt(0).toUpperCase();
}

export function LeadershipCard({
  leader,
  className,
  priority = false,
  variant = "default",
}: LeadershipCardProps) {
  const displayName = leader.name.trim() || leader.role;
  const showRole = Boolean(leader.name.trim());
  const isCompact = variant === "compact";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("h-full", className)}
    >
      <Card className="group h-full overflow-hidden border-border/60 hover:shadow-xl hover:shadow-primary/5">
        <div
          className={cn(
            "relative w-full overflow-hidden bg-muted",
            isCompact ? "aspect-square" : "aspect-[4/5]"
          )}
        >
          {leader.image ? (
            <Image
              src={leader.image}
              alt={displayName}
              fill
              priority={priority}
              className={cn(
                "h-full w-full object-cover transition-transform duration-500",
                isCompact
                  ? leader.imageClassName ??
                    cn(
                      "scale-[1.18] group-hover:scale-[1.24]",
                      leader.imagePosition ?? "object-[center_20%]"
                    )
                  : cn("group-hover:scale-105", leader.imagePosition, leader.imageClassName)
              )}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-secondary">
              <span
                className={cn(
                  "font-bold text-white/80",
                  isCompact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
                )}
              >
                {getLeaderInitials(leader)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <CardContent className={cn(isCompact ? "p-4 sm:p-5" : "p-5 sm:p-6")}>
          <h3
            className={cn(
              "font-bold text-foreground",
              isCompact ? "text-base sm:text-lg" : "text-lg sm:text-xl"
            )}
          >
            {displayName}
          </h3>
          {showRole && (
            <p className="mt-1 text-xs font-semibold text-secondary sm:text-sm">{leader.role}</p>
          )}
          <p
            className={cn(
              "leading-relaxed text-muted-foreground",
              isCompact ? "mt-2 text-xs sm:text-sm" : "mt-3 text-sm"
            )}
          >
            {leader.bio}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
