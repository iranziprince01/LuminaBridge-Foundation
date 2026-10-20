import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogHref } from "@/lib/blog-posts";

export function BlogsNewsSection() {
  const [featured] = blogPosts;

  return (
    <Section id="blogs-news" tone="green">
      <PageContainer>
        <SectionHeader
          title="Blogs & News"
          description="Stories, updates, and reflections from Lumina Bridge Foundation and the communities we serve."
          align="left"
          className="mb-8 sm:mb-10"
        />

        {featured ? (
          <FadeUp>
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border/60">
              <div className="grid items-center lg:grid-cols-[minmax(16rem,22rem)_1fr]">
                <Link
                  href={getBlogHref(featured.slug)}
                  className="block bg-primary p-5 sm:p-6 lg:p-8"
                >
                  <Image
                    src={featured.cover.src}
                    alt={featured.cover.alt}
                    width={featured.cover.width}
                    height={featured.cover.height}
                    sizes="(max-width: 1024px) 90vw, 352px"
                    className="mx-auto h-auto w-full max-w-sm rounded-2xl shadow-2xl ring-1 ring-white/15"
                  />
                </Link>

                <div className="flex flex-col p-6 sm:p-8 lg:p-10 lg:pr-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#a16207]">
                      {featured.category}
                    </span>
                    <time
                      dateTime={featured.publishedISO}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                    >
                      <Calendar className="h-4 w-4 text-secondary" aria-hidden />
                      {featured.published}
                    </time>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                    <Link href={getBlogHref(featured.slug)} className="transition-colors hover:text-primary">
                      {featured.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href={getBlogHref(featured.slug)}>
                        Read the story
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </FadeUp>
        ) : null}
      </PageContainer>
    </Section>
  );
}
