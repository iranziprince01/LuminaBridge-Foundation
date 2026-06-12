import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { ExternalLink } from "lucide-react";

export function DonationForm() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border/70 bg-muted/30 p-5 sm:p-6">
        <p className="text-sm font-semibold text-foreground sm:text-base">
          Complete and secure in-house donation processing is coming soon.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          We are building a fully integrated giving experience on this website. In the meantime,
          you can support our work through the official donation form below.
        </p>
      </div>

      <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Complete our official donation form to support Lumina Bridge Foundation programs across
          Alberta. The form opens in a new tab and only takes a few minutes to complete.
        </p>
        <Button size="lg" className="mt-5 w-full sm:w-auto" asChild>
          <Link
            href={siteConfig.donateFormUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Donation Form
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Prefer to reach out directly? Email us at{" "}
        <a
          href={`mailto:${siteConfig.email}?subject=Donation%20Inquiry`}
          className="font-semibold text-secondary hover:underline"
        >
          {siteConfig.email}
        </a>{" "}
        or call our {siteConfig.phoneLabel.toLowerCase()} at{" "}
        <a href={siteConfig.phoneHref} className="font-semibold text-secondary hover:underline">
          {siteConfig.phone}
        </a>
        . Our team will be happy to assist you.
      </p>
    </div>
  );
}
