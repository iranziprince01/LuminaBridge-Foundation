import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { Section } from "@/components/shared/section";
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
              {donationContent.intro}
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
              {donationContent.whyDonate}
            </p>
          </FadeUp>

          <SectionHeader
            title="Where Your Support Goes"
            className="mt-20 md:mt-28"
          />
          <StaggerContainer className="grid gap-8 md:grid-cols-3 lg:gap-10">
            {donationContent.supportAreas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm md:p-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                    <Sparkles className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">{area.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <Section className="gradient-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Make a Donation
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Online donation processing is coming soon. Preview the form below — we will
                    activate secure giving shortly.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <DonationForm />
              </div>
              <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
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
        </div>
      </Section>
    </>
  );
}
