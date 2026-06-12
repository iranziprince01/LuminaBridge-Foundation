import Link from "next/link";
import { PageContainer } from "@/components/shared/page-container";
import { legalLastUpdated, type LegalDocument } from "@/lib/legal-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface LegalPageProps {
  document: LegalDocument;
  relatedHref: string;
  relatedLabel: string;
}

export function LegalPage({ document, relatedHref, relatedLabel }: LegalPageProps) {
  return (
    <>
      <section className="border-b border-border bg-primary pt-32 pb-14 text-primary-foreground sm:pt-36 sm:pb-16 md:pb-20">
        <PageContainer>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm">
            Legal
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight">
            {document.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {document.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 text-sm text-primary-foreground/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            <p>
              Last updated:{" "}
              <span className="font-medium text-primary-foreground">{legalLastUpdated}</span>
            </p>
            <span className="hidden text-primary-foreground/30 sm:inline" aria-hidden>
              |
            </span>
            <Link
              href={relatedHref}
              className="font-semibold text-secondary transition-colors hover:text-secondary/80"
            >
              {relatedLabel} →
            </Link>
          </div>
        </PageContainer>
      </section>

      <section className="section-bg-white py-12 sm:py-16 md:py-20">
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <nav aria-label={`${document.title} table of contents`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                  On this page
                </p>
                <ul className="mt-4 space-y-2 border-l border-border pl-4">
                  {document.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block py-0.5 text-sm leading-snug text-muted-foreground transition-colors hover:text-primary"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <article className="min-w-0">
              <div className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-12">
                {document.sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={cn(
                      "scroll-mt-28",
                      index > 0 && "mt-10 border-t border-border/60 pt-10"
                    )}
                  >
                    <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-relaxed text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-4 list-disc space-y-2.5 pl-5 text-base leading-relaxed text-muted-foreground marker:text-secondary">
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                This page is provided for informational purposes and does not constitute legal
                advice. For specific legal questions, please consult qualified counsel or contact
                us directly at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-secondary hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </article>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
