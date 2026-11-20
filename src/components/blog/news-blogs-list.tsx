import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { blogPosts, getBlogHref, type BlogPost } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

function BlogCard({
  post,
  priority = false,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  const isPhoto = post.coverLayout === "photo";
  const href = getBlogHref(post.slug);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-white shadow-[0_1px_2px_rgba(12,74,110,0.04),0_8px_24px_rgba(12,74,110,0.06)] ring-1 ring-primary/[0.07] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(12,74,110,0.08),0_18px_40px_rgba(12,74,110,0.1)] sm:rounded-[1.5rem]">
      <Link
        href={href}
        className="relative block aspect-[16/11] shrink-0 overflow-hidden bg-primary"
      >
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          unoptimized={post.cover.src.includes("blob.vercel-storage.com")}
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.04]",
            isPhoto
              ? "object-cover object-top"
              : "object-contain p-3.5 sm:p-4"
          )}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent opacity-80"
        />
      </Link>

      <div className="relative flex min-h-0 flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
        <span
          aria-hidden
          className="mb-3 h-0.5 w-8 rounded-full bg-gradient-to-r from-secondary to-secondary/40 transition-all duration-500 group-hover:w-12"
        />

        <h3 className="line-clamp-3 font-display text-base font-bold tracking-tight text-foreground sm:min-h-[3.75rem] sm:text-lg lg:text-[1.2rem] lg:leading-snug">
          <Link href={href} className="transition-colors duration-300 hover:text-primary">
            {post.title}
          </Link>
        </h3>

        <time
          dateTime={post.publishedISO}
          className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground sm:text-[0.8125rem]"
        >
          <Calendar className="h-3.5 w-3.5 text-secondary" aria-hidden />
          {post.published}
        </time>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-colors duration-300 hover:text-secondary"
        >
          Read the story
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
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
    <ul className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-5">
      {blogPosts.map((post, index) => (
        <li key={post.slug} className="h-full min-w-0">
          <FadeUp delay={index * 0.05} className="h-full">
            <BlogCard post={post} priority={index < 3} />
          </FadeUp>
        </li>
      ))}
    </ul>
  );
}
