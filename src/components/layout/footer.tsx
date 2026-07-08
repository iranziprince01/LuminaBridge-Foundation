"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/shared/logo";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { FadeUp } from "@/components/motion/fade-up";
import { navigation } from "@/lib/data";
import { pageContainerClass } from "@/components/shared/page-container";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className={cn(pageContainerClass, "py-16 pb-[max(4rem,env(safe-area-inset-bottom))]")}>
        <StaggerContainer className="grid items-start gap-12 md:grid-cols-2 lg:grid-cols-4">
          <StaggerItem className="flex flex-col items-start lg:col-span-1">
            <Logo variant="footer" tone="white" href="/" />
            <div className="mt-4 space-y-4">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-secondary">
                {siteConfig.landAcknowledgement.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {siteConfig.landAcknowledgement.footerStatement}
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="md:pl-6 md:pt-0 lg:pl-12 lg:pt-28 xl:pl-16">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-secondary">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navigation
                .filter((item) => item.name !== "Home")
                .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary"
                  >
                    {item.name}
                  </Link>
                </li>
                ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="lg:pt-28">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-secondary">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/get-involved#volunteer" className="text-sm text-white/70 hover:text-secondary">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-white/70 hover:text-secondary">
                  Sponsor
                </Link>
              </li>
              <li>
                <Link href="/get-involved#partner" className="text-sm text-white/70 hover:text-secondary">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-white/70 hover:text-secondary">
                  Upcoming Events
                </Link>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem className="lg:pt-28">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <span>
                  {siteConfig.address.suite}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-secondary"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-secondary"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </motion.a>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeUp className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/70">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/70">
            <Link href="/privacy" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/80">
              Terms of Use
            </Link>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
