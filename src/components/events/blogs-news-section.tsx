import { CalendarCheck, Megaphone, Newspaper, Users, type LucideIcon } from "lucide-react";
import { Section } from "@/components/shared/section";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";
import { siteConfig } from "@/lib/site-config";

const reservedSlots: { category: string; description: string; icon: LucideIcon }[] = [
  {
    category: "Event Recaps",
    description: "Highlights, photos, and reflections from our signature events.",
    icon: CalendarCheck,
  },
  {
    category: "Community Stories",
    description: "The voices of fellows, newcomers, artists, and volunteers.",
    icon: Users,
  },
  {
    category: "Foundation News",
    description: "Announcements, partnerships, and program milestones.",
    icon: Megaphone,
  },
];

const socialLinks = [
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
];

export function BlogsNewsSection() {
  return (
    <Section id="blogs-news" tone="green">
      <PageContainer>
        <SectionHeader
          title="Blogs & News"
          description="Stories, updates, and reflections from Lumina Bridge Foundation and the communities we serve."
          align="left"
          className="mb-8 sm:mb-10"
        />

        <FadeUp>
          <div className="grid grid-cols-1 gap-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border/60 sm:p-9 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-12 lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <Newspaper className="h-6 w-6" aria-hidden />
                </span>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#a16207]">
                  Coming Soon
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Our first stories are on the way
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                We are preparing event recaps, community spotlights, and foundation updates. This
                space is reserved for them, and for the people whose journeys make our work
                possible.
              </p>
            </div>
            <div className="border-t border-border/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-sm font-semibold text-foreground">Follow along in the meantime</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Catch event moments and announcements as they happen on our social channels.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:border-secondary hover:bg-secondary/5"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <StaggerContainer
          className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:mt-8 lg:gap-8"
          staggerDelay={0.1}
        >
          {reservedSlots.map(({ category, description, icon: Icon }) => (
            <StaggerItem key={category} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border-2 border-dashed border-primary/20 bg-white/60 p-5 sm:p-6">
                <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-primary/5">
                  <Icon className="h-9 w-9 text-primary/40" aria-hidden />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-secondary">
                  {category}
                </p>
                <div className="mt-3 space-y-2" aria-hidden>
                  <div className="h-3 w-11/12 rounded-full bg-primary/10" />
                  <div className="h-3 w-3/4 rounded-full bg-primary/10" />
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-primary/50">
                  Reserved for upcoming posts
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </PageContainer>
    </Section>
  );
}
