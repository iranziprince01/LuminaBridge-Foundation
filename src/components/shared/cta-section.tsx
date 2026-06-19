import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/motion/fade-up";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CtaSection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CtaSectionProps) {
  return (
    <section className="gradient-cta relative overflow-hidden py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          description={description}
          light
        />

        <FadeUp className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="white" size="lg" asChild>
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="ml-1" />
            </Link>
          </Button>
          {secondaryCta && (
            <Button variant="white-outline" size="lg" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
