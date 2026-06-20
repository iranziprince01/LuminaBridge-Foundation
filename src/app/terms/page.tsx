import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { termsOfUse } from "@/lib/legal-content";
import { termsMetadata } from "@/lib/seo";

export const metadata: Metadata = termsMetadata;

export default function TermsOfUsePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ]}
      />
      <LegalPage
        document={termsOfUse}
        relatedHref="/privacy"
        relatedLabel="Privacy Policy"
      />
    </>
  );
}
