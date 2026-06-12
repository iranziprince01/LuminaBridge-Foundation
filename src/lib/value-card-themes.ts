export interface ValueCardTheme {
  surface: string;
  iconWrap: string;
  icon: string;
  title: string;
  description: string;
  border: string;
  hardShadow: string;
}

export const valueCardThemes: ValueCardTheme[] = [
  {
    surface: "bg-gradient-to-br from-primary via-[#0e5a82] to-secondary",
    iconWrap: "border-white/25 bg-white/15",
    icon: "text-white",
    title: "text-white",
    description: "text-white/80",
    border: "border-primary/30",
    hardShadow: "shadow-[8px_8px_0_0_rgba(8,50,72,0.3)] hover:shadow-[10px_10px_0_0_rgba(8,50,72,0.3)]",
  },
  {
    surface: "bg-gold-bright",
    iconWrap: "border-primary/15 bg-white/35",
    icon: "text-primary",
    title: "text-primary",
    description: "text-primary/80",
    border: "border-gold-bright/80",
    hardShadow: "shadow-[8px_8px_0_0_rgba(12,74,110,0.3)] hover:shadow-[10px_10px_0_0_rgba(12,74,110,0.3)]",
  },
  {
    surface: "bg-white",
    iconWrap: "border-secondary/25 bg-secondary/10",
    icon: "text-secondary",
    title: "text-primary",
    description: "text-muted-foreground",
    border: "border-border/70",
    hardShadow: "shadow-[8px_8px_0_0_rgba(13,148,136,0.3)] hover:shadow-[10px_10px_0_0_rgba(13,148,136,0.3)]",
  },
  {
    surface: "bg-mint-soft",
    iconWrap: "border-teal-deep/20 bg-white/70",
    icon: "text-teal-deep",
    title: "text-primary",
    description: "text-muted-foreground",
    border: "border-secondary/20",
    hardShadow: "shadow-[8px_8px_0_0_rgba(15,118,110,0.3)] hover:shadow-[10px_10px_0_0_rgba(15,118,110,0.3)]",
  },
  {
    surface: "bg-primary",
    iconWrap: "border-white/20 bg-white/10",
    icon: "text-gold-bright",
    title: "text-white",
    description: "text-white/80",
    border: "border-primary/80",
    hardShadow: "shadow-[8px_8px_0_0_rgba(250,181,0,0.3)] hover:shadow-[10px_10px_0_0_rgba(250,181,0,0.3)]",
  },
  {
    surface: "bg-gold-cream",
    iconWrap: "border-accent/30 bg-white/60",
    icon: "text-accent",
    title: "text-primary",
    description: "text-muted-foreground",
    border: "border-accent/25",
    hardShadow: "shadow-[8px_8px_0_0_rgba(212,168,83,0.3)] hover:shadow-[10px_10px_0_0_rgba(212,168,83,0.3)]",
  },
];

export function getValueCardTheme(index: number): ValueCardTheme {
  return valueCardThemes[index % valueCardThemes.length];
}
