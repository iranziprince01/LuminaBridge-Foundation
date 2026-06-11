"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const amountOptions = ["25", "50", "100", "250"];

export function DonationForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div>
        <p className="mb-3 text-sm font-medium text-foreground">Donation frequency</p>
        <div className="flex flex-wrap gap-3">
          {["One-time", "Monthly"].map((option) => (
            <button
              key={option}
              type="button"
              disabled
              className={cn(
                "rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground",
                option === "One-time" && "border-primary/30 bg-primary/5"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-foreground">Select an amount (CAD)</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {amountOptions.map((amount) => (
            <button
              key={amount}
              type="button"
              disabled
              className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-semibold text-muted-foreground"
            >
              ${amount}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <Input disabled placeholder="Custom amount" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="donorName" className="mb-1.5 block text-sm font-medium">
            Full Name
          </label>
          <Input id="donorName" name="donorName" disabled placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="donorEmail" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <Input
            id="donorEmail"
            name="donorEmail"
            type="email"
            disabled
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="donationMessage" className="mb-1.5 block text-sm font-medium">
          Message <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <Textarea
          id="donationMessage"
          name="donationMessage"
          disabled
          placeholder="Share why you are supporting LuminaBridge Foundation..."
          rows={4}
        />
      </div>

      <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Secure online giving is coming soon. In the meantime, reach out to discuss donation
          opportunities and how your support can make an impact.
        </p>
        <a
          href={`mailto:${siteConfig.email}?subject=Donation%20Inquiry`}
          className="mt-3 inline-block text-sm font-semibold text-secondary hover:underline"
        >
          {siteConfig.email}
        </a>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button type="button" size="lg" disabled>
          Coming Soon
        </Button>
        <Button type="button" size="lg" variant="outline" asChild>
          <Link
            href={siteConfig.infoRequestFormUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Information
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </form>
  );
}
