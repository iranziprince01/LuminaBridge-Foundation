import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export const pageContainerClass =
  "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export const splitSectionGridClass =
  "grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16 xl:gap-20";

export function PageContainer({
  children,
  className,
  narrow = false,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        pageContainerClass,
        narrow && "max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
