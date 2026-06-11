import { FadeUp } from "@/components/motion/fade-up";
import { pageContainerClass } from "@/components/shared/page-container";
import { cn } from "@/lib/utils";
import { sectionHeadingClass } from "@/components/shared/section-header";
import { ContactForm } from "@/components/contact/contact-form";
import { contactContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { ICON_STROKE } from "@/lib/icons";
import { Clock, Mail, MapPin } from "lucide-react";

interface ContactSectionProps {
  defaultInquiry?: string;
}

export function ContactSection({ defaultInquiry = "general" }: ContactSectionProps) {
  const contactItems = [
    {
      icon: MapPin,
      title: "Head Office",
      content: (
        <>
          {siteConfig.address.suite}
          <br />
          {siteConfig.address.city}
          <br />
          {siteConfig.address.country}
        </>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: siteConfig.officeHours,
    },
  ];

  return (
    <div className={pageContainerClass}>
      <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <FadeUp>
            <h2 className={sectionHeadingClass}>
              Get in Touch
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {contactContent.intro}
            </p>

            <div className="mt-8 space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon
                        className="h-5 w-5 text-primary"
                        strokeWidth={ICON_STROKE}
                        absoluteStrokeWidth
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-secondary hover:underline"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </FadeUp>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <FadeUp delay={0.15}>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <h3 className="text-xl font-bold">LBF Request Information Form</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete the request form below or use the direct link above. On-site messaging
                is coming soon.
              </p>
              <div className="mt-8">
                <ContactForm defaultInquiry={defaultInquiry} />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
