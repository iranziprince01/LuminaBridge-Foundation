"use client";

import { TimelineItem } from "@/lib/data";
import { FadeUp } from "@/components/motion/fade-up";
import { cn } from "@/lib/utils";

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-primary to-accent md:left-1/2 md:-translate-x-px"
        aria-hidden
      />

      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {items.map((item, index) => (
          <FadeUp key={`${item.year}-${item.title}`} delay={index * 0.06}>
            <div
              className={cn(
                "relative flex flex-col md:flex-row md:items-center",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="hidden flex-1 md:block" />

              <div className="absolute left-4 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-secondary shadow-md shadow-secondary/30 md:left-1/2">
                <div className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>

              <div
                className={cn(
                  "ml-12 w-full flex-1 md:ml-0",
                  index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                )}
              >
                <div
                  className={cn(
                    "w-full rounded-2xl border border-border bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-md md:px-8 md:py-6",
                    index % 2 === 0 ? "md:ml-auto md:max-w-xl" : "md:mr-auto md:max-w-xl"
                  )}
                >
                  <span className="text-sm font-bold uppercase tracking-wider text-secondary">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-base leading-relaxed text-muted-foreground md:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
