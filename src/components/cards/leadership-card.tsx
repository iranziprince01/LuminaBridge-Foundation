"use client";

import Image from "next/image";
import { Leader } from "@/lib/data";
import { cn } from "@/lib/utils";

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
    <article
      tabIndex={0}
      className={cn("group relative h-full outline-none", className)}
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 ease-out",
          "group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/10",
          "group-focus-within:-translate-y-1 group-focus-within:shadow-xl group-focus-within:shadow-primary/10"
        )}
      >
        {/* Photo */}
        <div
          className={cn(
            "relative w-full shrink-0 overflow-hidden bg-muted",
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
                        "scale-[1.18] group-hover:scale-[1.24] group-focus-within:scale-[1.24]",
                        leader.imagePosition ?? "object-[center_20%]"
                      )
                  : cn(
                      "group-hover:scale-105 group-focus-within:scale-105",
                      leader.imagePosition,
                      leader.imageClassName
                    )
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
        </div>

        {/* Spacer keeps collapsed card height (name + title only) */}
        <div
          className={cn(
            "invisible shrink-0",
            isCompact ? "px-4 py-4 sm:px-5 sm:py-5" : "px-5 py-5 sm:px-6 sm:py-6"
          )}
          aria-hidden="true"
        >
          <h3
            className={cn(
              "font-bold",
              isCompact ? "text-base sm:text-lg" : "text-lg sm:text-xl"
            )}
          >
            {displayName}
          </h3>
          {showRole && (
            <p className="mt-1 text-xs font-semibold sm:text-sm">{leader.role}</p>
          )}
        </div>

        {/*
          Bottom-anchored panel: bio expands upward into the photo,
          pushing name + title up above it with the same slide-up feel.
        */}
        <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden rounded-b-2xl">
          <div
            className={cn(
              "bg-gradient-to-t from-card via-card to-card/95 backdrop-blur-[2px]",
              "transition-shadow duration-300"
            )}
          >
            <div
              className={cn(
                isCompact ? "px-4 pt-4 sm:px-5 sm:pt-5" : "px-5 pt-5 sm:px-6 sm:pt-6"
              )}
            >
              <h3
                className={cn(
                  "font-bold text-foreground",
                  isCompact ? "text-base sm:text-lg" : "text-lg sm:text-xl"
                )}
              >
                {displayName}
              </h3>
              {showRole && (
                <p className="mt-1 text-xs font-semibold text-secondary sm:text-sm">
                  {leader.role}
                </p>
              )}
            </div>

            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                "grid-rows-[0fr] opacity-0",
                "group-hover:grid-rows-[1fr] group-hover:opacity-100",
                "group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100"
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className={cn(
                    "translate-y-3 leading-relaxed text-muted-foreground transition-transform duration-300 ease-out",
                    "group-hover:translate-y-0 group-focus-within:translate-y-0",
                    isCompact
                      ? "px-4 pb-4 pt-3 text-xs sm:px-5 sm:pb-5 sm:text-sm"
                      : "px-5 pb-5 pt-3 text-sm sm:px-6 sm:pb-6"
                  )}
                >
                  {leader.bio}
                </p>
              </div>
            </div>

            {/* Collapsed bottom padding for name/title block */}
            <div
              className={cn(
                "transition-[height] duration-300 ease-out",
                isCompact
                  ? "h-4 group-hover:h-0 group-focus-within:h-0 sm:h-5"
                  : "h-5 group-hover:h-0 group-focus-within:h-0 sm:h-6"
              )}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
