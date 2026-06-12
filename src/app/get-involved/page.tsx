import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { ContactSection } from "@/components/sections/contact-section";
import { GetInvolvedContent } from "@/components/sections/get-involved-content";
import { pageTitles } from "@/lib/site-config";

export const metadata: Metadata = {
  title: pageTitles.getInvolved,
  description:
    "Partner, sponsor, volunteer, or request information about Lumina Bridge Foundation programs across Alberta.",
};

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
