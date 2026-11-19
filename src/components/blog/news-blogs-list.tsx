import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogHref, type BlogPost } from "@/lib/blog-posts";

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <time
      dateTime={post.publishedISO}
      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
    >
      <Calendar className="h-4 w-4 text-secondary" aria-hidden />
      {post.published}
    </time>
  );
}

function BlogCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  const isPhoto = post.coverLayout === "photo";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border/60">
      <Link
        href={getBlogHref(post.slug)}
        className="relative block aspect-[4/3] shrink-0 overflow-hidden bg-primary"
      >
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className={
            isPhoto
              ? "object-cover transition-transform duration-700 hover:scale-[1.03]"
              : "object-contain p-5 transition-transform duration-700 hover:scale-[1.02] sm:p-6"
          }
        />
      </Link>
      <div className="flex min-h-0 flex-1 flex-col p-6">
        <PostMeta post={post} />
        <h3 className="mt-4 line-clamp-3 min-h-[4.5rem] font-display text-xl font-bold tracking-tight text-foreground sm:min-h-[5.25rem] sm:text-2xl">
          <Link href={getBlogHref(post.slug)} className="transition-colors hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 min-h-[4.875rem] flex-1 text-base leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
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
  );
}

export function NewsBlogsList() {
  if (blogPosts.length === 0) {
    return (
      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
        New stories will appear here as they are published.
      </p>
    );
  }

  return (
    <ul className="grid auto-rows-fr gap-6 sm:grid-cols-2 sm:gap-8">
      {blogPosts.map((post, index) => (
        <li key={post.slug} className="h-full">
          <FadeUp delay={index * 0.05} className="h-full">
            <BlogCard post={post} priority={index === 0} />
          </FadeUp>
        </li>
      ))}
    </ul>
  );
}
