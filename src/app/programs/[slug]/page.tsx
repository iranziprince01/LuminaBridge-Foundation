import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer, splitSectionGridClass } from "@/components/shared/page-container";
import { FadeUp } from "@/components/motion/fade-up";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { AppIcon } from "@/components/shared/app-icon";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/shared/cta-section";
import { BridgeConnectDetail } from "@/components/programs/bridgeconnect-detail";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ProgramSchema } from "@/components/seo/program-schema";
import { getProgramById, programs } from "@/lib/programs-content";
import { pageTitles } from "@/lib/site-config";
import { createPageMetadata, getProgramPageMetadata } from "@/lib/seo";

function highlightText(text: string, phrases: string[]): React.ReactNode {
  if (!phrases.length) return text;
  const escaped = phrases
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    phrases.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="font-semibold text-secondary">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

interface ProgramDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.id }));
}

export async function generateMetadata({
  params,
}: ProgramDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramById(slug);

  if (!program) {
    return createPageMetadata({
      title: pageTitles.programNotFound,
      description: "This program page could not be found on Lumina Bridge Foundation.",
      path: `/programs/${slug}`,
      noIndex: true,
    });
  }

  return getProgramPageMetadata(slug, program.title, program.description, program.image);
}

export default async function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const { slug } = await params;
  const program = getProgramById(slug);

  if (!program) {
    notFound();
  }

  if (slug === "language-culture-belonging-initiative") {
    return (
      <>
        <ProgramSchema program={program} />
        <BreadcrumbSchema
          items={[
            { name: "Home", path: "/" },
            { name: "Programs", path: "/programs" },
            { name: program.title, path: `/programs/${slug}` },
          ]}
        />
        <BridgeConnectDetail program={program} />
      </>
    );
  }

  return (
    <>
      <ProgramSchema program={program} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Programs", path: "/programs" },
          { name: program.title, path: `/programs/${slug}` },
        ]}
      />
      <PageBanner title={program.title} image={program.image} />

      {/* 1 — Overview (white) */}
      <Section tone="white" backdrop="none">
        <PageContainer>
          <div className={splitSectionGridClass}>
            <FadeUp className="md:self-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 mb-6">
                <AppIcon name={program.icon} className="h-7 w-7 text-secondary" />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                {highlightText(program.overview, program.highlightPhrases ?? [])}
              </p>
            </FadeUp>
            <MotionReveal direction="scale" delay={0.12}>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </MotionReveal>
          </div>
        </PageContainer>
      </Section>

      {/* 2 — Body paragraphs (green) — always rendered; falls back to closing statement */}
      <Section tone="green" backdrop="mesh">
        <PageContainer>
          {program.bodyParagraphs && program.bodyParagraphs.length > 0 ? (
            <div className="space-y-10">
              {program.bodyParagraphs.map((paragraph, index) => {
                const midIndex = Math.floor((program.bodyParagraphs!.length - 1) / 2);
                const isAfterMid = program.secondaryImage && index === midIndex;
                return (
                  <div key={paragraph.slice(0, 48)}>
                    <FadeUp>
                      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                        {highlightText(paragraph, program.highlightPhrases ?? [])}
                      </p>
                    </FadeUp>
                    {isAfterMid && (
                      <MotionReveal direction="scale" className="mt-10">
                        <div className="w-full overflow-hidden rounded-3xl shadow-xl">
                          <Image
                            src={program.secondaryImage!}
                            alt={`${program.title} — community in action`}
                            width={1200}
                            height={800}
                            className="h-auto w-full object-contain"
                            sizes="(max-width: 768px) 100vw, 1200px"
                          />
                        </div>
                      </MotionReveal>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <FadeUp>
              <blockquote className="text-center">
                <p className="font-display text-xl font-semibold italic leading-relaxed text-foreground sm:text-2xl md:text-3xl">
                  &ldquo;{program.closingStatement}&rdquo;
                </p>
                <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-secondary to-[#ffe600]" />
              </blockquote>
            </FadeUp>
          )}
        </PageContainer>
      </Section>

      {/* 3 — Benefits grid (white) */}
      <Section tone="white" backdrop="dots">
        <PageContainer>
          <FadeUp>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              What We Offer
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              {program.initiativesHeading}
            </h2>
          </FadeUp>
          <StaggerContainer
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
            staggerDelay={0.07}
          >
            {program.initiatives.map((item) => (
              <StaggerItem key={item} variant="playful">
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border/70 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      {/* 4 — Closing statement (green) — only for programs that have body paragraphs */}
      {program.bodyParagraphs && program.bodyParagraphs.length > 0 && (
        <Section tone="green" backdrop="mesh">
          <PageContainer narrow>
            <FadeUp>
              <blockquote className="text-center">
                <p className="font-display text-xl font-semibold italic leading-relaxed text-foreground sm:text-2xl md:text-3xl">
                  &ldquo;{program.closingStatement}&rdquo;
                </p>
                <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-secondary to-[#ffe600]" />
              </blockquote>
            </FadeUp>
          </PageContainer>
        </Section>
      )}

      <CtaSection
        title="Ready to Get Involved?"
        description="Join Lumina Bridge Foundation and help us empower youth, strengthen communities, and create lasting change across Alberta."
        primaryCta={{ label: "Get Involved", href: "/get-involved" }}
        secondaryCta={{ label: "View All Programs", href: "/programs" }}
      />
    </>
  );
}
