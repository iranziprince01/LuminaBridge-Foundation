import type { Metadata } from "next";
import impactBannerImage from "../../../public/impact.jpg";
import impactStoryImage from "../../../public/impact2.jpg";
import storyImage from "../../../public/story.jpg";
import { ImpactCardsGrid } from "@/components/impact/impact-cards-grid";
import { PageBanner } from "@/components/shared/page-banner";
import { RelatedLinks } from "@/components/shared/related-links";
import { Section } from "@/components/shared/section";
import { PageContainer, splitSectionGridClass } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionImage } from "@/components/shared/section-image";
import { StatsSection } from "@/components/shared/stats-section";
import { Timeline } from "@/components/shared/timeline";
import { CommunityStoryCard } from "@/components/cards/community-story-card";
import { ValuesShowcase } from "@/components/sections/values-showcase";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import {
  futureReach,
  impactOutcomes,
  impactPageContent,
  impactTimeline,
  successStories,
} from "@/lib/data";
import { impactMetadata } from "@/lib/seo";

/** Set to true to restore the Community Highlights Gallery section. */
const showCommunityHighlightsGallery = false;

export const metadata: Metadata = impactMetadata;

const futureReachStats = futureReach.map((item) => ({
  value: item.metric,
  label: item.label,
}));

export default function ImpactPage() {
  const { origin, impact, journey } = impactPageContent;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Impact", path: "/impact" },
        ]}
      />
      <PageBanner title="Impact" image={impactBannerImage} />

      <Section tone="white" backdrop="dots">
        <PageContainer>
          <SectionHeader title={origin.title} align="left" className="mb-8 sm:mb-10 md:mb-12" />
          <div className={splitSectionGridClass}>
            <FadeUp>
              <SectionImage
                src={impactStoryImage}
                alt="Lumina Bridge Foundation community story and early beginnings in Edmonton, Alberta"
                natural
              />
            </FadeUp>
            <div className="md:self-center">
              <FadeUp>
                <blockquote className="border-l-4 border-accent pl-5 sm:pl-8">
                  <p className="text-pretty md:text-justify text-lg font-medium italic leading-relaxed text-foreground sm:text-xl md:text-2xl">
                    &ldquo;{origin.lead}&rdquo;
                  </p>
                </blockquote>
              </FadeUp>
              <div className="mt-8 space-y-5 sm:mt-10">
                {origin.paragraphs.map((paragraph) => (
                  <FadeUp key={paragraph.slice(0, 40)}>
                    <p className="text-pretty md:text-justify text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
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

      <Section tone="white" backdrop="orbs">
        <PageContainer>
          <SectionHeader title="Program Outcomes" align="left" className="mb-8 sm:mb-10" />
          <ValuesShowcase values={impactOutcomes} />
        </PageContainer>
      </Section>

      <section className="relative w-full overflow-hidden bg-secondary py-12 sm:py-16 md:py-20">
        <PageContainer className="relative z-10">
          <SectionHeader title="Communities Served & Future Goals" align="center" light />
          <FadeUp className="mt-10">
            <StatsSection stats={futureReachStats} dark />
          </FadeUp>
        </PageContainer>
      </section>

      <Section tone="green" backdrop="bridge">
        <PageContainer>
          <SectionHeader title="Success Stories" align="left" className="mb-8 sm:mb-10" />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {successStories.map((story) => (
              <StaggerItem key={story.title}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                    {story.program}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">{story.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                    {story.story}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-foreground">{story.author}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      {showCommunityHighlightsGallery ? (
        <Section tone="green" backdrop="dots">
          <PageContainer>
            <SectionHeader title="Community Highlights Gallery" align="left" className="mb-8 sm:mb-10" />
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {impact.cards.slice(0, 6).map((card) => (
                <StaggerItem key={card.id}>
                  <CommunityStoryCard src={card.image} alt={card.alt} />
                </StaggerItem>
              ))}
              <StaggerItem className="sm:col-span-2 lg:col-span-1">
                <CommunityStoryCard
                  src={storyImage}
                  alt="Community members gathering together outdoors at a Lumina Bridge Foundation event"
                />
              </StaggerItem>
            </StaggerContainer>
          </PageContainer>
        </Section>
      ) : null}

      <Section tone="white" backdrop="bridge">
        <PageContainer>
          <SectionHeader title={journey.title} />
          <div className="mt-12 sm:mt-16 md:mt-20">
            <Timeline items={impactTimeline} />
          </div>
          <RelatedLinks
            className="mt-16 border-t border-border/60 pt-16 sm:mt-20 sm:pt-20"
            title="Continue Exploring"
            links={[
              {
                href: "/about",
                label: "About Us",
                description: "Our mission, values, story, and leadership team in Edmonton.",
              },
              {
                href: "/programs",
                label: "Our Programs",
                description: "Youth leadership, arts, culture, and wellness programs in Alberta.",
              },
              {
                href: "/events",
                label: "Events",
                description: "Summits, festivals, and community gatherings across Alberta.",
              },
              {
                href: "/donate",
                label: "Donate",
                description: "Fund youth empowerment and community development initiatives.",
              },
              {
                href: "/get-involved",
                label: "Get Involved",
                description: "Volunteer, partner, or sponsor with our Alberta nonprofit.",
              },
            ]}
          />
        </PageContainer>
      </Section>
    </>
  );
}
