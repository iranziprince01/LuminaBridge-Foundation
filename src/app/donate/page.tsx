import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { DonationForm } from "@/components/donate/donation-form";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { donationContent } from "@/lib/data";
import { pageTitles, siteConfig } from "@/lib/site-config";
import { Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: pageTitles.donate,
  description:
    "Support LuminaBridge Foundation's youth, arts, and community programs across Alberta. Online giving coming soon.",
};

export default function DonatePage() {
  return (
    <>
      <PageBanner title="Donate" image="/hope.jpg" />
      <Section>
        <PageContainer>
          <FadeUp>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              {donationContent.intro}
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
              {donationContent.whyDonate}
            </p>
          </FadeUp>

          <SectionHeader
            title="Where Your Support Goes"
            className="mt-12 sm:mt-16 md:mt-20 lg:mt-28"
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1">
            {donationContent.supportAreas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 md:p-10">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 sm:mb-5 sm:h-12 sm:w-12">
                    <Sparkles className="h-5 w-5 text-secondary sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl md:text-2xl">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                    {area.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PageContainer>
      </Section>

      <Section className="gradient-section">
        <PageContainer narrow>
          <FadeUp>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                  <Heart className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Make a Donation
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Online donation processing is coming soon. Preview the form below — we will
                    activate secure giving shortly.
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
                </a>
              </p>
            </div>
          </FadeUp>
        </PageContainer>
      </Section>
    </>
  );
}
