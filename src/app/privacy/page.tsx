import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/lib/legal-content";
import { privacyMetadata } from "@/lib/seo";

export const metadata: Metadata = privacyMetadata;

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      document={privacyPolicy}
      relatedHref="/terms"
      relatedLabel="Terms of Use"
    />
  );
}
