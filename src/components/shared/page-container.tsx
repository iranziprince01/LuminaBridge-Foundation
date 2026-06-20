import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  detail?: boolean;
}

/** Horizontal gutters — more breathing room on laptop and desktop viewports. */
export const pageGutterClass =
  "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16";

/** Default content shell: constrained on laptops, wider on large monitors. */
export const pageContainerClass = cn(
  "mx-auto w-full min-w-0",
  pageGutterClass,
  "max-w-6xl 2xl:max-w-7xl"
);

/** Long-form and program/event detail pages. */
export const pageContainerDetailClass = cn(
  "mx-auto w-full min-w-0",
  pageGutterClass,
  "max-w-5xl"
);

export const splitSectionGridClass =
  "grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20";

/** Body copy that reads cleanly on phones and can justify on wider screens. */
export const responsiveProseClass = "text-pretty md:text-justify";

export function PageContainer({
  children,
  className,
  narrow = false,
  detail = false,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        detail ? pageContainerDetailClass : pageContainerClass,
        narrow && "max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
