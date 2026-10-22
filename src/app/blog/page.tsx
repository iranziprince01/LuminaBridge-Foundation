import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { NewsBlogsList } from "@/components/blog/news-blogs-list";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ItemListSchema } from "@/components/seo/item-list-schema";
import { blogPosts } from "@/lib/blog-posts";
import { img } from "@/lib/image-urls";
import { newsMetadata } from "@/lib/seo";

export const metadata: Metadata = newsMetadata;

export default function NewsBlogsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "News & Blogs", path: "/blog" },
        ]}
      />
      <ItemListSchema
        items={blogPosts.map((post) => ({
          name: post.title,
          path: `/blog/${post.slug}`,
        }))}
      />
      <PageBanner
        title="News & Blogs"
        image={img("/story.jpg")}
        imageAlt="Community gathering, Lumina Bridge Foundation news and blogs banner"
      />
      <Section tone="white" backdrop="orbs">
        <PageContainer>
          <SectionHeader
            title="Latest Stories"
            description="Stories, updates, and reflections from Lumina Bridge Foundation and the communities we serve."
            align="left"
            className="mb-8 sm:mb-10"
          />
          <NewsBlogsList />
        </PageContainer>
      </Section>
    </>
  );
}
