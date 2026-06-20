import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionLinkCta } from "@/components/shared/section-link-cta";
import { ContactSection } from "@/components/sections/contact-section";
import { GetInvolvedContent } from "@/components/sections/get-involved-content";
import { GetInvolvedOptionsGrid } from "@/components/sections/get-involved-options-grid";
import { FadeUp } from "@/components/motion/fade-up";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { getInvolvedFaq } from "@/lib/faq-content";
import { getInvolvedMetadata } from "@/lib/seo";

export const metadata: Metadata = getInvolvedMetadata;

interface GetInvolvedPageProps {
  searchParams: Promise<{ inquiry?: string }>;
}

export default async function GetInvolvedPage({ searchParams }: GetInvolvedPageProps) {
  const { inquiry } = await searchParams;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Get Involved", path: "/get-involved" },
        ]}
      />
      <FaqSchema items={getInvolvedFaq} />
      <PageBanner title="Get Involved" image="/involved.jpg" />
      <Section tone="white">
        <PageContainer>
          <SectionHeader
            title="Ways to Support Our Mission"
            description="Volunteer, partner, sponsor, or engage your community with Lumina Bridge Foundation programs across Alberta."
            align="left"
            className="mb-8 sm:mb-10"
          />
          <GetInvolvedOptionsGrid />
          <SectionLinkCta href="/donate" label="Explore Donation Opportunities" align="center" />
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="mesh">
        <PageContainer>
          <GetInvolvedContent />
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="dots">
        <PageContainer narrow>
          <SectionHeader title="Frequently Asked Questions" align="left" />
          <dl className="mt-8 space-y-6">
            {getInvolvedFaq.map((item) => (
              <FadeUp key={item.question}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                  <dt className="text-lg font-bold text-foreground sm:text-xl">{item.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </dd>
                </div>
              </FadeUp>
            ))}
          </dl>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="bridge">
        <ContactSection defaultInquiry={inquiry || "general"} />
      </Section>
    </>
  );
}
