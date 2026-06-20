import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { privacyPolicy } from "@/lib/legal-content";
import { privacyMetadata } from "@/lib/seo";

export const metadata: Metadata = privacyMetadata;

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <LegalPage
        document={privacyPolicy}
        relatedHref="/terms"
        relatedLabel="Terms of Use"
      />
    </>
  );
}
