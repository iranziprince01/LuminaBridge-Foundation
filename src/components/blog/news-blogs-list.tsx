import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogHref, type BlogPost } from "@/lib/blog-posts";

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#a16207]">
        {post.category}
      </span>
      <time
        dateTime={post.publishedISO}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
      >
        <Calendar className="h-4 w-4 text-secondary" aria-hidden />
        {post.published}
      </time>
    </div>
  );
}

export function NewsBlogsList() {
  const [featured, ...rest] = blogPosts;

  if (!featured) {
    return (
      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
        New stories will appear here as they are published.
      </p>
    );
  }

  return (
    <div className="space-y-10 sm:space-y-12">
      <FadeUp>
        <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border/60">
          <div className="grid items-center lg:grid-cols-[minmax(16rem,22rem)_1fr]">
            <Link href={getBlogHref(featured.slug)} className="block bg-primary p-5 sm:p-6 lg:p-8">
              <Image
                src={featured.cover.src}
                alt={featured.cover.alt}
                width={featured.cover.width}
                height={featured.cover.height}
                sizes="(max-width: 1024px) 90vw, 352px"
                priority
                className="mx-auto h-auto w-full max-w-sm rounded-2xl shadow-2xl ring-1 ring-white/15"
              />
            </Link>

            <div className="flex flex-col p-6 sm:p-8 lg:p-10 lg:pr-12">
              <PostMeta post={featured} />
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

      {rest.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {rest.map((post) => (
            <li key={post.slug}>
              <FadeUp>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border/60">
                  <Link href={getBlogHref(post.slug)} className="block bg-primary p-5">
                    <Image
                      src={post.cover.src}
                      alt={post.cover.alt}
                      width={post.cover.width}
                      height={post.cover.height}
                      sizes="(max-width: 640px) 90vw, 40vw"
                      className="mx-auto h-auto w-full max-w-xs rounded-2xl shadow-xl ring-1 ring-white/15"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <PostMeta post={post} />
                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      <Link href={getBlogHref(post.slug)} className="transition-colors hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-6">
                      <Button variant="outline" asChild>
                        <Link href={getBlogHref(post.slug)}>
                          Read the story
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </FadeUp>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
