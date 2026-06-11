import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

type LogoVariant = "nav" | "footer" | "hero";
type LogoTone = "color" | "white";

const variantStyles: Record<LogoVariant, string> = {
  nav: "h-[4.5rem] w-auto sm:h-20 md:h-24",
  footer: "h-28 w-auto sm:h-32 md:h-36",
  hero: "h-32 w-auto sm:h-36 md:h-40",
};

interface LogoProps {
  variant?: LogoVariant;
  tone?: LogoTone;
  className?: string;
  href?: string;
}

export function Logo({
  variant = "nav",
  tone = "color",
  className,
  href = "/",
}: LogoProps) {
  const src = tone === "white" ? siteConfig.logoWhite : siteConfig.logoColor;
  const alt = "LuminaBridge Foundation";

  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={href ? "" : alt}
      className={cn(variantStyles[variant], "object-contain", className)}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0 items-start justify-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
        aria-label={`${alt} — Home`}
      >
        {image}
      </Link>
    );
  }

  return image;
}

interface NavbarLogoProps {
  scrolled: boolean;
}

/** Crossfades between white and color logos on scroll. */
export function NavbarLogo({ scrolled }: NavbarLogoProps) {
  const alt = "LuminaBridge Foundation";

  return (
    <Link
      href="/"
      className={cn(
        "relative inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg",
        variantStyles.nav
      )}
      aria-label={`${alt} — Home`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={siteConfig.logoColor}
        alt=""
        aria-hidden
        className={cn(
          "h-full w-auto object-contain transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={siteConfig.logoWhite}
        alt=""
        aria-hidden
        className={cn(
          "absolute left-0 top-0 h-full w-auto object-contain transition-opacity duration-300",
          scrolled ? "opacity-0" : "opacity-100"
        )}
      />
    </Link>
  );
}
