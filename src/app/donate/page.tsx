import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { DonationForm } from "@/components/donate/donation-form";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { donationContent, donationExtendedContent } from "@/lib/data";
import { donateFaq } from "@/lib/faq-content";
import { siteConfig } from "@/lib/site-config";
import { donateMetadata } from "@/lib/seo";
import { AppIcon } from "@/components/shared/app-icon";

export const metadata: Metadata = donateMetadata;

export default function DonatePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Donate", path: "/donate" },
        ]}
      />
      <FaqSchema items={donateFaq} />
      <PageBanner title="Donate" image="/support.jpg" />

      <Section tone="white" backdrop="none">
        <PageContainer narrow>
          <SectionHeader title="Why Support Us" align="left" className="mb-0" />
          <FadeUp className="mt-8 space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              {donationContent.intro}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              {donationContent.whyDonate}
            </p>
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="mesh">
        <PageContainer narrow>
          <FadeUp>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                  <AppIcon name="Gift" className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Make a Donation
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {donationExtendedContent.futureGiving}
                  </p>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <DonationForm />
              </div>
              <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground sm:mt-8 sm:pt-6">
                {donationContent.inquiryNote}{" "}
                <a
                  href={`mailto:${siteConfig.email}?subject=Donation%20Inquiry`}
                  className="font-semibold text-secondary hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                or{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-secondary hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </FadeUp>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none">
        <PageContainer narrow>
          <SectionHeader title="Where Your Support Goes" align="left" className="mb-0" />
          <StaggerContainer className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {donationContent.supportAreas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 sm:mb-5 sm:h-12 sm:w-12">
                    <AppIcon name={area.icon} className="h-5 w-5 text-secondary sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">{area.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {area.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <Section tone="green" backdrop="mesh">
        <PageContainer>
          <SectionHeader title="Ways To Give" align="left" className="mb-8 sm:mb-10" />
          <StaggerContainer className="grid gap-6 md:grid-cols-3 md:gap-8">
            {donationExtendedContent.waysToGive.map((way) => (
              <StaggerItem key={way.title}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <AppIcon name={way.icon} className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">{way.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {way.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <Section tone="white" backdrop="none">
        <PageContainer narrow>
          <SectionHeader title="Frequently Asked Questions" align="left" />
          <dl className="mt-8 space-y-6">
            {donateFaq.map((item) => (
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
    </>
  );
}
