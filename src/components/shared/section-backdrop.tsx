"use client";

import type { SectionTone } from "@/components/shared/section";
import { cn } from "@/lib/utils";

export type SectionBackdropVariant = "auto" | "none" | "orbs" | "mesh" | "dots" | "bridge";
export type SectionBackdropTone = SectionTone | "dark";

interface SectionBackdropProps {
  tone?: SectionBackdropTone;
  variant?: SectionBackdropVariant;
  seed?: string;
  className?: string;
}

const whiteVariants: Exclude<SectionBackdropVariant, "auto" | "none">[] = [
  "orbs",
  "dots",
  "mesh",
  "bridge",
];

function resolveVariant(
  variant: SectionBackdropVariant,
  tone: SectionBackdropTone,
  seed?: string
): Exclude<SectionBackdropVariant, "auto" | "none"> | null {
  if (variant === "none") return null;
  if (variant !== "auto") return variant;

  if (tone === "dark") return "orbs";
  if (tone === "green") return "mesh";

  if (seed) {
    const index = [...seed].reduce((total, char) => total + char.charCodeAt(0), 0);
    return whiteVariants[index % whiteVariants.length];
  }

  return "orbs";
}

function FloatingOrbs({ tone }: { tone: SectionBackdropTone }) {
  const primary =
    tone === "dark"
      ? "bg-white/12"
      : tone === "green"
        ? "bg-secondary/14"
        : "bg-secondary/10";
  const accent =
    tone === "dark" ? "bg-white/8" : tone === "green" ? "bg-primary/10" : "bg-primary/6";
  const gold = tone === "dark" ? "bg-accent/15" : "bg-accent/10";

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "section-orb absolute -left-24 top-8 h-72 w-72 rounded-full blur-3xl",
          primary
        )}
      />
      <div
        aria-hidden
        className={cn(
          "section-orb section-orb-delay-2 absolute -right-20 top-1/3 h-64 w-64 rounded-full blur-3xl",
          accent
        )}
      />
      <div
        aria-hidden
        className={cn(
          "section-orb section-orb-delay-3 absolute bottom-0 left-1/3 h-48 w-48 rounded-full blur-3xl",
          gold
        )}
      />
    </>
  );
}

function BridgeArc({ tone }: { tone: SectionBackdropTone }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 480 240"
      className={cn(
        "pointer-events-none absolute -bottom-10 -right-8 h-48 w-96 text-secondary sm:-right-4 sm:h-56 sm:w-[28rem]",
        tone === "green" ? "opacity-[0.09]" : "opacity-[0.07]"
      )}
      fill="none"
    >
      <path
        d="M0 200 C120 40 360 40 480 200"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M40 200 C150 90 330 90 440 200"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.45"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SectionBackdrop({
  tone = "white",
  variant = "auto",
  className,
  seed,
}: SectionBackdropProps) {
  const resolved = resolveVariant(variant, tone, seed);
  if (!resolved) return null;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {resolved === "mesh" ? (
        <div className={cn("absolute inset-0 mesh-bg", tone === "green" ? "opacity-80" : "opacity-100")} />
      ) : null}

      {resolved === "dots" ? (
        <div
          className={cn(
            "absolute inset-0 section-backdrop-dots",
            tone === "green" ? "section-backdrop-dots-green" : "section-backdrop-dots-white"
          )}
        />
      ) : null}

      {resolved === "orbs" ? <FloatingOrbs tone={tone} /> : null}

      {resolved === "bridge" ? (
        <>
          <BridgeArc tone={tone} />
          <div
            className={cn(
              "section-orb absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full blur-3xl",
              tone === "green" ? "bg-secondary/12" : "bg-secondary/8"
            )}
          />
        </>
      ) : null}

      {resolved === "mesh" ? (
        <div
          className={cn(
            "section-orb absolute -right-24 bottom-0 h-56 w-56 rounded-full blur-3xl",
            tone === "green" ? "bg-primary/10" : "bg-secondary/8"
          )}
        />
      ) : null}
    </div>
  );
}
