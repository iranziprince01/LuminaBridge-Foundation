import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/motion/fade-up";

export const sectionHeadingClass =
  "text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <FadeUp className={cn("mb-16 md:mb-24 lg:mb-28", className)}>
      <div
        className={cn(
          "max-w-3xl",
          align === "center" && "mx-auto text-center"
        )}
      >
        <h2
          className={cn(
            sectionHeadingClass,
            light ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed md:text-xl md:leading-relaxed",
              light ? "text-white/80" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </FadeUp>
  );
}
