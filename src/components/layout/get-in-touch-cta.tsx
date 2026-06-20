"use client";

import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { springGentle } from "@/components/motion/motion-presets";
import { PageContainer } from "@/components/shared/page-container";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { ICON_STROKE } from "@/lib/icons";
import { cn } from "@/lib/utils";

type GetInTouchCtaTone = "white" | "green";

const socialLinks = [
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
] as const;

const contactItems = [
  {
    icon: MapPin,
    label: "Office",
    content: (
      <>
        {siteConfig.address.suite}
        <br />
        {siteConfig.address.city}, {siteConfig.address.country}
      </>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: siteConfig.phoneLabel,
    content: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Clock,
    label: "Office Hours",
    content: siteConfig.officeHours,
  },
] as const;

interface GetInTouchCtaProps {
  tone?: GetInTouchCtaTone;
}

export function GetInTouchCta({ tone = "green" }: GetInTouchCtaProps) {
  return (
    <section
      aria-labelledby="get-in-touch-heading"
      className={cn(
        "relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24",
        tone === "white"
          ? "section-bg-white border-t border-border/60"
          : "section-bg-green border-t border-secondary/10"
      )}
    >
      <SectionBackdrop
        tone={tone}
        variant={tone === "white" ? "bridge" : "mesh"}
        seed="get-in-touch"
      />
      <PageContainer className="relative z-10">
        <FadeUp>
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm sm:rounded-3xl">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="border-b border-border/60 p-6 sm:p-8 md:p-10 lg:border-b-0 lg:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm">
                  Connect with us
                </p>
                <h2
                  id="get-in-touch-heading"
                  className="mt-3 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl"
                >
                  Get in Touch
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Reach our Edmonton team for programs, partnerships, volunteering, or general
                  inquiries. We&apos;d love to hear from you.
                </p>

                <StaggerContainer className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6" staggerDelay={0.08}>
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <StaggerItem key={item.label}>
                        <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                        <Icon
                          className="h-5 w-5 text-secondary"
                          strokeWidth={ICON_STROKE}
                          absoluteStrokeWidth
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-primary/80">
                          {item.label}
                        </p>
                        {"href" in item && item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block break-words text-sm leading-relaxed text-foreground transition-colors hover:text-secondary sm:text-base"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {item.content}
                          </p>
                        )}
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
                </StaggerContainer>
              </div>

              <FadeUp delay={0.15} className="flex flex-col items-start gap-6 bg-gradient-to-br from-primary/[0.04] via-white to-secondary/[0.06] p-6 sm:p-8 md:p-10 lg:min-w-[280px] lg:items-center lg:text-center xl:min-w-[320px]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Follow us
                  </p>
                  <div className="mt-4 flex gap-3 lg:justify-center">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        transition={springGentle}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-white text-primary shadow-sm hover:border-secondary/40 hover:text-secondary hover:shadow-md"
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="w-full border-t border-border/60 pt-6 lg:border-t-0 lg:pt-0">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={springGentle}>
                    <Button variant="default" size="lg" className="w-full sm:w-auto" asChild>
                      <Link href="/get-involved">
                        Send a message
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground lg:text-center">
                    Or reach us at{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-secondary hover:underline"
                    >
                      {siteConfig.email}
                    </a>{" "}
                    or{" "}
                    <a
                      href={siteConfig.phoneHref}
                      className="font-medium text-secondary hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </FadeUp>
      </PageContainer>
    </section>
  );
}
