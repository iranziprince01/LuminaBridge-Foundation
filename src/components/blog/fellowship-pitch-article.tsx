import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Heart, Sparkles, Users } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { PageContainer } from "@/components/shared/page-container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog-posts";

interface FellowshipPitchArticleProps {
  post: BlogPost;
}

export function FellowshipPitchArticle({ post }: FellowshipPitchArticleProps) {
  const eventCta = post.cta;
  const sidePhoto = post.images.find((image) => image.src !== post.cover.src);

  return (
    <>
      <Section tone="green">
        <PageContainer>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <FadeUp className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
                {post.category}
              </p>
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <time
                dateTime={post.publishedISO}
                className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground sm:text-base"
              >
                <Calendar className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                {post.published}
              </time>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {post.excerpt}
              </p>
              {eventCta ? (
                <div className="mt-8">
                  <Button variant="default" asChild>
                    <Link href={eventCta.href}>
                      {eventCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ) : null}
            </FadeUp>

            <FadeUp delay={0.08} className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-primary p-4 shadow-2xl ring-1 ring-primary/15 sm:p-5">
                <Image
                  src={post.cover.src}
                  alt={post.cover.alt}
                  width={post.cover.width}
                  height={post.cover.height}
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </FadeUp>
          </div>
        </PageContainer>
      </Section>

      <Section tone="white">
        <PageContainer>
          <FadeUp>
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.75fr)] lg:gap-8">
              <div className="flex flex-col gap-6 rounded-[1.75rem] bg-white p-6 ring-1 ring-border/60 sm:gap-7 sm:p-8 lg:p-9">
                <div className="space-y-5 sm:space-y-6">
                  {post.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/[0.06] via-secondary/[0.05] to-transparent p-5 ring-1 ring-border/50 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                      <Sparkles className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                        Pitch Competition
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
                        Friday, 20 November 2026
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Fellows present their community-focused projects and compete for a chance
                        to bring their ideas to life. This moment celebrates dedication, innovation,
                        and the next generation of leaders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-primary/[0.03] p-5 ring-1 ring-border/50 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Heart className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                        Sponsor & Partner
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
                        Thank you, SOARING
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        We extend our sincere appreciation to SOARING for their partnership,
                        sponsorship, and support in delivering this program. Their commitment helps
                        empower young people, develop future leaders, and create opportunities for
                        youth to thrive.
                      </p>
                      <p className="mt-3 text-sm font-medium leading-relaxed text-foreground sm:text-base">
                        Thank you for believing in our mission and investing in the next generation
                        of leaders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {sidePhoto ? (
                  <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-border/60">
                    <Image
                      src={sidePhoto.src}
                      alt={sidePhoto.alt}
                      width={sidePhoto.width}
                      height={sidePhoto.height}
                      sizes="(max-width: 1024px) 90vw, 320px"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ) : null}

                <aside className="rounded-[1.75rem] bg-primary p-6 text-white shadow-sm sm:p-7 lg:p-8">
                  <div className="flex items-center gap-2 text-sm text-white/75">
                    <Users className="h-4 w-4 text-secondary-foreground" aria-hidden />
                    Lead Where You Land
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    At a glance
                  </h2>
                  <dl className="mt-6 space-y-4">
                    {post.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-white/55">
                          {fact.label}
                        </dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-white sm:text-[0.9375rem]">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {eventCta ? (
                    <div className="mt-8">
                      <Button variant="white" className="w-full" asChild>
                        <Link href={eventCta.href}>
                          {eventCta.label}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ) : null}
                </aside>

                {post.closing ? (
                  <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-secondary via-secondary to-primary p-6 text-white shadow-sm sm:p-7">
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.14),transparent_55%)]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-1 -top-4 font-display text-[6rem] leading-none text-white/15 select-none"
                    >
                      “
                    </span>
                    <p className="relative font-display text-2xl font-bold tracking-tight text-balance sm:text-[1.65rem] sm:leading-snug">
                      {post.closing}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
