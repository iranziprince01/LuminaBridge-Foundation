import { ICON_STROKE, type IconName, getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface AppIconProps {
  name: IconName;
  className?: string;
}

export function AppIcon({ name, className }: AppIconProps) {
  const Icon = getIcon(name);
  return (
    <Icon
      className={cn("fill-none", className)}
      strokeWidth={ICON_STROKE}
      absoluteStrokeWidth
    />
  );
}
