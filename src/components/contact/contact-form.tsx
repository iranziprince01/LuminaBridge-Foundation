"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import { ExternalLink } from "lucide-react";

interface ContactFormProps {
  defaultInquiry?: string;
}

export function ContactForm({ defaultInquiry = "general" }: ContactFormProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          To submit an information request, please use our online form. Our team will follow up
          as soon as possible.
        </p>
        <Button size="lg" className="mt-4 w-full sm:w-auto" asChild>
          <Link
            href={siteConfig.infoRequestFormUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LBF Request Information Form
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium">
              First Name
            </label>
            <Input id="firstName" name="firstName" placeholder="Your first name" />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium">
              Last Name
            </label>
            <Input id="lastName" name="lastName" placeholder="Your last name" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="inquiry" className="mb-1.5 block text-sm font-medium">
            Inquiry Type
          </label>
          <select
            id="inquiry"
            name="inquiry"
            defaultValue={defaultInquiry}
            className="flex h-11 w-full rounded-xl border border-border bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="general">General Inquiry</option>
            <option value="donate">Donation Inquiry</option>
            <option value="volunteer">Volunteer Inquiry</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="media">Media Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us how you'd like to get involved..."
            rows={5}
          />
        </div>

        <Button type="button" size="lg" className="w-full sm:w-auto" disabled>
          Coming Soon
        </Button>
      </form>
    </div>
  );
}
