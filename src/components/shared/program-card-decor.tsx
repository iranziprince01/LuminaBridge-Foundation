import type { ProgramCardTheme } from "@/lib/program-card-themes";
import { cn } from "@/lib/utils";

interface ProgramCardDecorProps {
  theme: ProgramCardTheme;
  size?: "card" | "hero";
  className?: string;
}

const decorSizes = {
  card: {
    a: "absolute -left-10 -top-10 h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40",
    b: "absolute -bottom-10 -right-10 h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44",
  },
  hero: {
    a: "absolute -left-14 -top-14 h-44 w-44 xl:-left-16 xl:-top-16 xl:h-52 xl:w-52",
    b: "absolute -bottom-14 -right-14 h-48 w-48 xl:-bottom-16 xl:-right-16 xl:h-56 xl:w-56",
  },
} as const;

export function ProgramCardDecor({
  theme,
  size = "card",
  className,
}: ProgramCardDecorProps) {
  const sizes = decorSizes[size];

  return (
    <div className={cn("pointer-events-none", className)} aria-hidden>
      <div className={cn("rounded-full", sizes.a, theme.decorA)} />
      <div className={cn("rounded-full", sizes.b, theme.decorB)} />
    </div>
  );
}
