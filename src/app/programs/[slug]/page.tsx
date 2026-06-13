import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { FadeUp } from "@/components/motion/fade-up";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { AppIcon } from "@/components/shared/app-icon";
import { Button } from "@/components/ui/button";
import { getProgramById, programs } from "@/lib/programs-content";
import { pageTitles } from "@/lib/site-config";
import { createPageMetadata, getProgramPageMetadata } from "@/lib/seo";

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

  return (
    <>
      <PageBanner title={program.title} image={program.image} />
      <Section tone="white" backdrop="dots">
        <PageContainer className="max-w-4xl">
          <FadeUp>
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/10">
                <AppIcon name={program.icon} className="h-7 w-7 text-secondary" />
              </div>
            </div>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              {program.overview}
            </p>
          </FadeUp>

          <MotionReveal direction="scale" className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <Image
                src={program.image}
                alt={program.title}
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </MotionReveal>

          <FadeUp delay={0.1} className="mt-12">
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              {program.initiativesHeading}
            </h2>
            <ul className="mt-6 space-y-4">
              {program.initiatives.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.15} className="mt-12">
            <blockquote className="rounded-2xl border-l-4 border-accent bg-secondary/5 px-6 py-5 sm:px-8 sm:py-6">
              <p className="text-lg font-medium italic leading-relaxed text-foreground sm:text-xl">
                {program.closingStatement}
              </p>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/get-involved">
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#programs">View All Programs</Link>
            </Button>
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
