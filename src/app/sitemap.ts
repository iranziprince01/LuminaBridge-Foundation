import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { events } from "@/lib/data";
import { programs } from "@/lib/programs-content";
import { absoluteUrl, staticSitemapPaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticSitemapPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map((event) => ({
    url: absoluteUrl(`/events/${event.id}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const programEntries: MetadataRoute.Sitemap = programs.map((program) => ({
    url: absoluteUrl(`/programs/${program.id}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedISO),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...eventEntries, ...programEntries, ...blogEntries];
}
