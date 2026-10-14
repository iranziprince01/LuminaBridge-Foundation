import Image from "next/image";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { partners, partnersSection } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PartnersSection() {
  return (
    <PageContainer>
      <SectionHeader
        title={partnersSection.title}
        description={partnersSection.description}
        className="mb-8 sm:mb-10 md:mb-12 lg:mb-14"
      />
      <StaggerContainer
        className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        staggerDelay={0.08}
      >
        {partners.map((partner) => (
          <StaggerItem key={partner.name} className="h-full">
            <div className="flex h-28 items-center justify-center rounded-2xl border border-border/60 bg-white px-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md sm:h-36 sm:px-7">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                sizes="(max-width: 1024px) 45vw, 240px"
                className={cn(
                  "w-auto max-w-full object-contain",
                  partner.compact ? "h-16 sm:h-20" : "h-12 sm:h-16"
                )}
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </PageContainer>
  );
}
