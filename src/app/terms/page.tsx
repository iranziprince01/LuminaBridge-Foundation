import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsOfUse } from "@/lib/legal-content";
import { pageTitles, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: pageTitles.terms,
  description: termsOfUse.description,
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      document={termsOfUse}
      relatedHref="/privacy"
      relatedLabel="Privacy Policy"
    />
  );
}
