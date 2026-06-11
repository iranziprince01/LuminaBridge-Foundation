import {
  Banknote,
  Briefcase,
  Brush,
  Building2,
  CalendarDays,
  ChartLine,
  Compass,
  Gift,
  Globe2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Landmark,
  Medal,
  MessagesSquare,
  Mic2,
  ShieldCheck,
  Sun,
  Theater,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export const ICON_STROKE = 1.5;

export const iconMap = {
  Banknote,
  Briefcase,
  Brush,
  Building2,
  CalendarDays,
  ChartLine,
  Compass,
  Gift,
  Globe2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Landmark,
  Medal,
  MessagesSquare,
  Mic2,
  ShieldCheck,
  Sun,
  Theater,
  UsersRound,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}
