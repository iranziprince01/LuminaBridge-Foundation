import type { Metadata } from "next";
import impactBannerImage from "../../../public/impact.jpg";
import impactStoryImage from "../../../public/impact2.jpg";
import { ImpactCardsGrid } from "@/components/impact/impact-cards-grid";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer, splitSectionGridClass } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionImage } from "@/components/shared/section-image";
import { Timeline } from "@/components/shared/timeline";
import { FadeUp } from "@/components/motion/fade-up";
import { impactPageContent, impactTimeline } from "@/lib/data";
import { pageTitles } from "@/lib/site-config";

export const metadata: Metadata = {
  title: pageTitles.impact,
  description:
    "Discover how Lumina Bridge Foundation is building lasting impact across Alberta and our vision for empowering communities across Canada.",
};

export default function ImpactPage() {
  const { origin, impact, journey } = impactPageContent;

  return (
    <>
      <PageBanner title="Impact" image={impactBannerImage} />
      <Section tone="white" backdrop="dots">
        <PageContainer>
          <SectionHeader title={origin.title} align="left" className="mb-8 sm:mb-10 md:mb-12" />
          <div className={splitSectionGridClass}>
            <FadeUp>
              <SectionImage
                src={impactStoryImage}
                alt="Lumina Bridge Foundation community story and early beginnings"
                natural
                priority
              />
            </FadeUp>
            <div className="md:self-center">
              <FadeUp>
                <blockquote className="border-l-4 border-accent pl-5 sm:pl-8">
                  <p className="text-justify text-lg font-medium italic leading-relaxed text-foreground sm:text-xl md:text-2xl">
                    &ldquo;{origin.lead}&rdquo;
                  </p>
                </blockquote>
              </FadeUp>
              <div className="mt-8 space-y-5 sm:mt-10">
                {origin.paragraphs.map((paragraph, i) => (
                  <FadeUp key={paragraph} delay={i * 0.08}>
                    <p className="text-justify text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                      {paragraph}
                    </p>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="mesh">
        <PageContainer>
          <SectionHeader title={impact.title} align="left" className="mb-8 sm:mb-10" />
          <ImpactCardsGrid cards={impact.cards} />
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="bridge">
        <PageContainer>
          <SectionHeader title={journey.title} />
          <div className="mt-12 sm:mt-16 md:mt-20">
            <Timeline items={impactTimeline} />
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
