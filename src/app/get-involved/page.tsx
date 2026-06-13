import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { ContactSection } from "@/components/sections/contact-section";
import { GetInvolvedContent } from "@/components/sections/get-involved-content";
import { getInvolvedMetadata } from "@/lib/seo";

export const metadata: Metadata = getInvolvedMetadata;

interface GetInvolvedPageProps {
  searchParams: Promise<{ inquiry?: string }>;
}

export default async function GetInvolvedPage({ searchParams }: GetInvolvedPageProps) {
  const { inquiry } = await searchParams;

  return (
    <>
      <PageBanner title="Get Involved" image="/involved.jpg" />
      <Section tone="white">
        <PageContainer>
          <GetInvolvedContent />
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="bridge">
        <ContactSection defaultInquiry={inquiry || "general"} />
      </Section>
    </>
  );
}
