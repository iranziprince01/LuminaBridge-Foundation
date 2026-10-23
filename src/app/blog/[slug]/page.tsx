import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { PageContainer } from "@/components/shared/page-container";
import { Section } from "@/components/shared/section";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createPageMetadata({
      title: "Story not found",
      description: "This story could not be found on Lumina Bridge Foundation.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.cover.src,
    imageAlt: post.cover.alt,
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedISO,
    image: post.images.map((image) => image.src),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    description: post.excerpt,
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "News & Blogs", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Section tone="white">
        <PageContainer>
          <FadeUp>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              News & Blogs
            </Link>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-secondary">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <time
              dateTime={post.publishedISO}
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Calendar className="h-4 w-4 text-secondary" aria-hidden />
              {post.published}
            </time>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {post.excerpt}
            </p>
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="green">
        <PageContainer>
          {post.artists?.length ? (
            <>
              <FadeUp className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                  The singers
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Who you will hear
                </h2>
              </FadeUp>
              {post.nights?.length ? (
                <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                  {post.nights.map((night) => (
                    <li
                      key={night.label}
                      className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border/60 sm:p-6"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                        {night.label}
                      </p>
                      <p className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground">
                        {night.date}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{night.names}</p>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-12 space-y-16 sm:mt-16 lg:space-y-24">
                {post.artists.map((artist, index) => {
                  const flyerFirst = index % 2 === 1;

                  return (
                    <FadeUp key={artist.name}>
                      <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className={cn("max-w-xl", flyerFirst && "order-2")}>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            {String(index + 1).padStart(2, "0")} · {artist.role}
                          </p>
                          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            {artist.name}
                          </h3>
                          <p className="mt-3 text-sm font-semibold text-foreground sm:text-base">
                            {artist.when}
                          </p>
                          <div className="mt-6 space-y-4">
                            {artist.paragraphs.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="text-base leading-relaxed text-muted-foreground md:text-lg"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className={cn("flex justify-center", flyerFirst && "order-1")}>
                          <Image
                            src={artist.image.src}
                            alt={artist.image.alt}
                            width={artist.image.width}
                            height={artist.image.height}
                            {...(index === 0 ? { priority: true } : {})}
                            sizes="(max-width: 1024px) 90vw, 420px"
                            className="h-auto w-full max-w-sm rounded-3xl shadow-2xl ring-1 ring-primary/10"
                          />
                        </div>
                      </article>
                    </FadeUp>
                  );
                })}
              </div>

              {post.features?.length ? (
                <div className="mt-20 border-t border-primary/10 pt-16 sm:mt-24 sm:pt-20">
                  <FadeUp className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                      The company
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      Everyone who holds the weekend
                    </h2>
                  </FadeUp>
                  <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
                    {post.features.map((feature) => (
                      <FadeUp key={feature.title}>
                        <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border/60">
                          <div className="bg-primary p-5 sm:p-6">
                            <Image
                              src={feature.image.src}
                              alt={feature.image.alt}
                              width={feature.image.width}
                              height={feature.image.height}
                              sizes="(max-width: 1024px) 90vw, 40vw"
                              className="mx-auto h-auto w-full max-w-md rounded-2xl shadow-2xl ring-1 ring-white/15"
                            />
                          </div>
                          <div className="p-6 sm:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                              {feature.kicker}
                            </p>
                            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                              {feature.title}
                            </h3>
                            <div className="mt-4 space-y-4">
                              {feature.paragraphs.map((paragraph) => (
                                <p
                                  key={paragraph}
                                  className="text-base leading-relaxed text-muted-foreground"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </article>
                      </FadeUp>
                    ))}
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-12">
              {post.images.map((image) => (
                <FadeUp key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 640px) 90vw, 45vw"
                    className="h-auto w-full rounded-3xl shadow-2xl ring-1 ring-primary/10"
                  />
                </FadeUp>
              ))}
            </div>
          )}
        </PageContainer>
      </Section>

      <Section tone="white">
        <PageContainer>
          <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.8fr)] lg:gap-16">
            <div className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-border/60 sm:p-8 lg:p-10">
              <div className="max-w-3xl space-y-6">
                {post.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              {post.closing ? (
                <p className="mt-auto max-w-3xl pt-10 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {post.closing}
                </p>
              ) : null}
            </div>

            <aside className="flex h-full flex-col rounded-3xl bg-primary p-6 text-white sm:p-8 lg:sticky lg:top-28">
              <h2 className="font-display text-2xl font-bold tracking-tight">Be in the room</h2>
              <dl className="mt-6 space-y-4">
                {post.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-white">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button variant="white" asChild>
                  <Link href={siteConfig.eventRegistration.attendance} target="_blank" rel="noopener noreferrer">
                    Register to Attend
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="white-outline" asChild>
                  <Link href="/events/bridgefest">
                    Explore BridgeFest
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
