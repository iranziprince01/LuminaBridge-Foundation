import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { ProgramsShowcase } from "@/components/sections/programs-showcase";
import { FadeUp } from "@/components/motion/fade-up";
import { programs, programsSection } from "@/lib/programs-content";
import { pageTitles } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: pageTitles.programs,
  description:
    "Explore Lumina Bridge Foundation's community-centered programs across arts, wellness, youth leadership, entrepreneurship, inclusion, and more across Alberta.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageBanner title="Our Programs" image="/mission.jpg" />
      <Section tone="white" backdrop="orbs">
        <PageContainer>
          <SectionHeader title={programsSection.title} align="left" className="mb-8 sm:mb-10" />
          <div className="max-w-3xl space-y-5">
            {programsSection.paragraphs.map((paragraph) => (
              <FadeUp key={paragraph.slice(0, 32)}>
                <p className="text-justify text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                  {paragraph}
                </p>
              </FadeUp>
            ))}
          </div>
          <div className="mt-12 sm:mt-16">
            <ProgramsShowcase programs={programs} />
          </div>
          <FadeUp className="mt-14 flex justify-center sm:mt-16">
            <Button size="lg" asChild>
              <Link href="/get-involved">
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
