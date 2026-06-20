import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";

export interface RelatedLink {
  href: string;
  label: string;
  description?: string;
}

interface RelatedLinksProps {
  title: string;
  links: RelatedLink[];
  className?: string;
}

export function RelatedLinks({ title, links, className }: RelatedLinksProps) {
  return (
    <FadeUp className={className}>
      <nav aria-label={title}>
        <h2 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-colors hover:border-secondary/40 hover:bg-mint-soft/40 sm:p-6"
              >
                <span className="flex items-center gap-2 text-base font-bold text-foreground sm:text-lg">
                  {link.label}
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-secondary transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
                {link.description ? (
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {link.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </FadeUp>
  );
}
