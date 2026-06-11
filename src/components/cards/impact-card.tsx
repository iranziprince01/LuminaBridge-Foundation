"use client";

import { Card, CardContent } from "@/components/ui/card";
import { getIcon, type IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ImpactCardProps {
  title: string;
  description: string;
  icon: IconName;
  className?: string;
  variant?: "default" | "onPrimary";
}

export function ImpactCard({
  title,
  description,
  icon,
  className,
  variant = "default",
}: ImpactCardProps) {
  const Icon = getIcon(icon);
  const onPrimary = variant === "onPrimary";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("h-full", className)}
    >
      <Card
        className={cn(
          "h-full",
          onPrimary
            ? "border-4 border-[color-mix(in_srgb,#ffe600_50%,#0c4a6e_50%)] bg-transparent shadow-none hover:bg-white/5"
            : "border-border/60 hover:border-secondary/20 hover:shadow-md"
        )}
      >
        <CardContent className="p-6 sm:p-7 md:p-8 lg:p-9">
          <div
            className={cn(
              "mb-6 flex items-center justify-center",
              onPrimary
                ? "h-16 w-16 rounded-2xl border-4 border-[color-mix(in_srgb,#ffe600_50%,#0c4a6e_50%)] bg-transparent"
                : "h-12 w-12 rounded-lg bg-secondary/10"
            )}
          >
            <Icon
              className={cn(
                "fill-none",
                onPrimary ? "h-8 w-8 text-[#ffe600]" : "h-6 w-6 text-secondary"
              )}
            />
          </div>
          <h3
            className={cn(
              "text-lg font-bold sm:text-xl md:text-2xl",
              onPrimary ? "text-white" : "text-foreground"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "mt-3 text-base leading-relaxed",
              onPrimary ? "text-white/75" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
