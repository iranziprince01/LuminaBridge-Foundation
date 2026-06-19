import Image from "next/image";
import { FadeUp } from "@/components/motion/fade-up";
import { pageContainerClass } from "@/components/shared/page-container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title?: string;
  description?: string;
  statement?: string;
  image?: string;
  className?: string;
}

function parseStatement(statement: string) {
  return statement
    .split(/\.\s+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => (part.endsWith(".") ? part : `${part}.`));
}

export function PageHero({
  title,
  description,
  statement,
  image = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80",
  className,
}: PageHeroProps) {
  const lines = statement ? parseStatement(statement) : [];

  return (
    <section
      className={cn(
        "relative flex overflow-hidden pt-40 md:pt-44",
        statement ? "min-h-[55vh] items-end pb-20 md:min-h-[60vh] md:pb-24" : "min-h-[50vh] items-center",
        className
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="gradient-hero-premium absolute inset-0" />
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className={cn("relative py-16", pageContainerClass)}>
        {statement ? (
          <FadeUp>
            <h1 className="max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.04] tracking-tight text-white sm:max-w-4xl lg:max-w-5xl lg:text-[clamp(2.25rem,4vw,4rem)]">
              {lines.map((line, i) => (
                <span
                  key={line}
                  className={cn(
                    "block",
                    i === lines.length - 1 &&
                      "text-[#ffe600] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
                  )}
                >
                  {line}
                </span>
              ))}
            </h1>
          </FadeUp>
        ) : (
          <FadeUp>
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:max-w-4xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                {description}
              </p>
            )}
          </FadeUp>
        )}
      </div>
    </section>
  );
}
