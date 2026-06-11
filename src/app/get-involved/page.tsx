import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { ContactSection } from "@/components/sections/contact-section";
import { GetInvolvedContent } from "@/components/sections/get-involved-content";
import { pageTitles } from "@/lib/site-config";

export const metadata: Metadata = {
  title: pageTitles.getInvolved,
  description:
    "Partner, sponsor, volunteer, or request information about LuminaBridge Foundation programs across Alberta.",
};

interface GetInvolvedPageProps {
  searchParams: Promise<{ inquiry?: string }>;
}

export default async function GetInvolvedPage({ searchParams }: GetInvolvedPageProps) {
  const { inquiry } = await searchParams;

  return (
    <>
      <PageBanner title="Get Involved" image="/involved.jpg" />
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GetInvolvedContent />
        </div>
      </Section>

      <Section className="gradient-section">
        <ContactSection defaultInquiry={inquiry || "general"} />
      </Section>
    </>
  );
}
