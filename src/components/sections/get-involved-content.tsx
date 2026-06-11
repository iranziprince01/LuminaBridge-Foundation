import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";
import { sectionHeadingClass } from "@/components/shared/section-header";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/shared/social-icons";
import { contactContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ExternalLink, HandHeart, Users } from "lucide-react";

export function GetInvolvedContent() {
  return (
    <>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <FadeUp>
          <article
            id="partner"
            className="scroll-mt-28 flex h-full flex-col rounded-2xl border border-border bg-white p-9 shadow-sm md:p-12"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Partnership &amp; Sponsorship Inquiries
            </h2>
            <p className="mt-5 flex-1 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {contactContent.partnership}
            </p>
            <p className="mt-6 text-sm font-semibold text-foreground">
              For partnership and sponsorship opportunities, please contact:
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 text-base font-semibold text-secondary hover:underline"
            >
              {siteConfig.email}
            </a>
          </article>
        </FadeUp>

        <FadeUp delay={0.1}>
          <article
            id="volunteer"
            className="scroll-mt-28 flex h-full flex-col rounded-2xl border border-border bg-white p-9 shadow-sm md:p-12"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
              <HandHeart className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Volunteer With Us
            </h2>
            <p className="mt-5 flex-1 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {contactContent.volunteer}
            </p>
            <p className="mt-6 text-sm font-semibold text-foreground">
              To learn more about volunteer opportunities, email:
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 text-base font-semibold text-secondary hover:underline"
            >
              {siteConfig.email}
            </a>
          </article>
        </FadeUp>
      </div>

      <FadeUp className="mt-16">
        <article className="rounded-2xl border border-border bg-white p-9 shadow-sm md:p-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Stay Connected
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {contactContent.stayConnected}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
              { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
              { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:border-secondary hover:bg-secondary/5"
              >
                <Icon className="h-4 w-4 text-primary" />
              </a>
            ))}
          </div>
        </article>
      </FadeUp>

      <FadeUp className="mt-16">
        <article
          id="contact"
          className="scroll-mt-28 rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/5 to-primary/5 p-9 md:p-12"
        >
          <h2 className={sectionHeadingClass}>LBF Request Information Form</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Submit your inquiry through our official request form. Whether you are interested
            in programs, partnerships, sponsorships, volunteering, or community initiatives,
            our team is ready to assist you.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <Link
              href={siteConfig.infoRequestFormUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Request Information Form
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </article>
      </FadeUp>
    </>
  );
}
