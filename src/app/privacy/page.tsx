import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/lib/legal-content";
import { pageTitles, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: pageTitles.privacy,
  description: privacyPolicy.description,
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      document={privacyPolicy}
      relatedHref="/terms"
      relatedLabel="Terms of Use"
    />
  );
}
