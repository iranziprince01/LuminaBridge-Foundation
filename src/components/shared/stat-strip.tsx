import { cn } from "@/lib/utils";

interface StatItem {
  label: string;
  value: string;
}

interface StatStripProps {
  stats: StatItem[];
  className?: string;
}

export function StatStrip({ stats, className }: StatStripProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-3",
        stats.length === 3 && "sm:grid-cols-3",
        stats.length === 5 && "[&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1",
        className
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl bg-muted p-3 text-center sm:p-4"
        >
          <div className="text-base font-bold text-primary sm:text-lg">
            {stat.value}
          </div>
          <div className="mt-1 text-[0.7rem] leading-snug text-muted-foreground sm:text-xs">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
