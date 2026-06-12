export interface ProgramCardTheme {
  surface: string;
  number: string;
  title: string;
  decorA: string;
  decorB: string;
  border: string;
  shadow: string;
}

/** Premium palette — navy, teal, #fab500 gold, cream, and mint — one theme per card. */
export const programCardThemes: ProgramCardTheme[] = [
  {
    surface: "bg-gradient-to-br from-primary via-[#0e5a82] to-secondary",
    number: "text-white/25 group-hover:text-white/35",
    title: "text-white",
    decorA: "bg-white/10",
    decorB: "bg-secondary/20",
    border: "border-border/60",
    shadow: "hover:shadow-xl hover:shadow-primary/10",
  },
  {
    surface: "bg-white",
    number: "text-gold-bright/45 group-hover:text-gold-bright/65",
    title: "text-primary",
    decorA: "bg-gold-bright/10",
    decorB: "bg-secondary/8",
    border: "border-border/80",
    shadow: "hover:shadow-lg hover:shadow-gold-bright/15",
  },
  {
    surface: "bg-gold-bright",
    number: "text-primary/20 group-hover:text-primary/30",
    title: "text-primary",
    decorA: "bg-white/20",
    decorB: "bg-primary/10",
    border: "border-gold-bright/80",
    shadow: "hover:shadow-xl hover:shadow-gold-bright/25",
  },
  // Row 2
  {
    surface: "bg-muted",
    number: "text-secondary/35 group-hover:text-secondary/50",
    title: "text-primary",
    decorA: "bg-secondary/10",
    decorB: "bg-primary/6",
    border: "border-border/80",
    shadow: "hover:shadow-lg hover:shadow-primary/8",
  },
  {
    surface: "bg-primary",
    number: "text-white/20 group-hover:text-white/30",
    title: "text-white",
    decorA: "bg-white/10",
    decorB: "bg-secondary/20",
    border: "border-primary/80",
    shadow: "hover:shadow-xl hover:shadow-primary/15",
  },
  {
    surface: "bg-gold-cream",
    number: "text-accent/55 group-hover:text-accent/75",
    title: "text-primary",
    decorA: "bg-accent/12",
    decorB: "bg-secondary/8",
    border: "border-accent/25",
    shadow: "hover:shadow-lg hover:shadow-accent/15",
  },
  // Row 3
  {
    surface: "bg-gradient-to-br from-teal-deep via-secondary to-secondary",
    number: "text-white/25 group-hover:text-white/35",
    title: "text-white",
    decorA: "bg-white/10",
    decorB: "bg-primary/15",
    border: "border-teal-deep/60",
    shadow: "hover:shadow-xl hover:shadow-teal-deep/20",
  },
  {
    surface: "bg-mint-soft",
    number: "text-secondary/40 group-hover:text-secondary/55",
    title: "text-primary",
    decorA: "bg-secondary/12",
    decorB: "bg-primary/6",
    border: "border-secondary/20",
    shadow: "hover:shadow-lg hover:shadow-secondary/10",
  },
  {
    surface: "bg-gradient-to-br from-teal-deep via-secondary to-gold-bright",
    number: "text-white/25 group-hover:text-white/35",
    title: "text-white",
    decorA: "bg-white/15",
    decorB: "bg-primary/15",
    border: "border-secondary/40",
    shadow: "hover:shadow-xl hover:shadow-gold-bright/20",
  },
];

export function getProgramCardTheme(index: number): ProgramCardTheme {
  return programCardThemes[index % programCardThemes.length];
}
