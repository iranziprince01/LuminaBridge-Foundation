import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, HeartHandshake, Languages, Sparkles, Target } from "lucide-react";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { StatStrip } from "@/components/shared/stat-strip";
import { FadeUp } from "@/components/motion/fade-up";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { Button } from "@/components/ui/button";
import { bridgeconnectContent } from "@/lib/bridgeconnect-content";
import type { Program } from "@/lib/programs-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface BridgeConnectDetailProps {
  program: Program;
}

export function BridgeConnectDetail({ program }: BridgeConnectDetailProps) {
  const content = bridgeconnectContent;

  return (
    <>
      <PageBanner
        title={["Language, Culture &", "Belonging Initiative"]}
        image={program.image}
        imageAlt="BridgeConnect language culture and belonging initiative banner"
      />

      <Section tone="white" backdrop="mesh">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
              {content.programName}
            </p>
            <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
              {content.subtitle}
            </p>
          </FadeUp>

          <MotionReveal direction="scale" className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-lg">
              <Image
                src={program.image}
                alt="Language, Culture and Belonging Initiative program banner"
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </MotionReveal>

          <FadeUp className="mt-16 rounded-2xl border border-secondary/25 bg-gradient-to-br from-secondary/10 via-white to-primary/5 p-6 text-center sm:p-8 md:p-10">
            <p className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              {content.identityStatement}
            </p>
          </FadeUp>

          <FadeUp className="mt-16">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10">
                <Sparkles className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Program Overview
              </h2>
            </div>
            <StaggerContainer className="mt-6 space-y-5" staggerDelay={0.08}>
              {content.overview.map((paragraph) => (
                <StaggerItem key={paragraph.slice(0, 48)}>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp className="mt-16 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Target className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">Why This Program Exists</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {content.whyExists}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                Six Integrated Pathways
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Program Pillars
              </h2>
            </div>
            <StaggerContainer className="mt-10 grid gap-6 lg:grid-cols-2" staggerDelay={0.08}>
              {content.pillars.map((pillar) => (
                <StaggerItem key={pillar.number}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
                    <div
                      className={cn(
                        "bg-gradient-to-r px-5 py-4 text-white sm:px-6",
                        pillar.accent
                      )}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                        Pillar {pillar.number}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold leading-snug sm:text-xl">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {pillar.description}
                      </p>
                      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-secondary">
                        Activities include
                      </p>
                      <ul className="mt-3 space-y-2">
                        {pillar.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex items-start gap-2.5 text-sm text-foreground sm:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp className="mt-20 rounded-2xl border border-border/60 bg-muted/40 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-5 w-5 text-secondary" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Expected Impact
              </h2>
            </div>
            <p className="mt-4 text-base text-muted-foreground">
              BridgeConnect aims to create transformation beyond language learning by helping newcomers:
            </p>
            <StaggerContainer className="mt-6 grid gap-3 sm:grid-cols-2" staggerDelay={0.06}>
              {content.expectedImpact.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-white px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp className="mt-16 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 sm:p-8 md:p-10">
            <div className="flex items-start gap-4">
              <Languages className="mt-1 h-5 w-5 shrink-0 text-secondary" />
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Long-Term Vision
                </h2>
                <div className="mt-6 space-y-5">
                  {content.longTermVision.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-12">
            <StatStrip stats={[...content.stats]} className="sm:grid-cols-2 lg:grid-cols-4" />
          </FadeUp>

          <FadeUp className="mt-16 rounded-2xl border border-border/60 bg-primary p-6 text-white sm:p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Program Identity Statement
            </p>
            <p className="mt-2 text-lg font-semibold text-white/90">{siteConfig.name}</p>
            <blockquote className="mt-6 border-l-4 border-secondary pl-5 text-lg font-medium italic leading-relaxed text-white/95 sm:text-xl">
              &ldquo;{content.identityStatement}&rdquo;
            </blockquote>
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <Globe2 className="h-4 w-4" />
              {siteConfig.url.replace("https://", "")}
            </a>
          </FadeUp>

          <FadeUp className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/get-involved">
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/events/newroots-canada-summit">NewRoots Canada Summit</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/programs">View All Programs</Link>
            </Button>
          </FadeUp>
        </div>
      </Section>
    </>
  );
}
