import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsOfUse } from "@/lib/legal-content";
import { termsMetadata } from "@/lib/seo";

export const metadata: Metadata = termsMetadata;

export default function TermsOfUsePage() {
  return (
    <LegalPage
      document={termsOfUse}
      relatedHref="/privacy"
      relatedLabel="Privacy Policy"
    />
  );
}
