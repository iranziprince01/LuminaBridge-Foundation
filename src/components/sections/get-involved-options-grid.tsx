import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppIcon } from "@/components/shared/app-icon";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { getInvolvedOptions } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function GetInvolvedOptionsGrid() {
  return (
    <StaggerContainer className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
      {getInvolvedOptions.map((option) => (
        <StaggerItem key={option.id}>
          <FadeUp className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 sm:mb-5 sm:h-12 sm:w-12">
                <AppIcon name={option.icon} className="h-5 w-5 text-secondary sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">{option.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {option.description}
              </p>
              <Button variant="outline" className="mt-6 w-full sm:w-auto" asChild>
                <Link href={option.href}>
                  {option.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </article>
          </FadeUp>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
