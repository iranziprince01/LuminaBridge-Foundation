import {
  Award,
  Briefcase,
  Calendar,
  Globe,
  HandHeart,
  Heart,
  Lightbulb,
  Megaphone,
  Music,
  Palette,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Award,
  Briefcase,
  Calendar,
  Globe,
  HandHeart,
  Heart,
  Lightbulb,
  Megaphone,
  Music,
  Palette,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
};

export type IconName = keyof typeof iconMap;

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}
