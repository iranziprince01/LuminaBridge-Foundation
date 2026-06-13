import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { pageTitles } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: pageTitles.eventNotFound,
  description:
    "The page you are looking for could not be found. Return to Lumina Bridge Foundation to explore our programs, events, and community impact.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-secondary">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
        The page you requested does not exist or may have moved. Explore our programs, events, or
        contact us to learn more about Lumina Bridge Foundation.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/get-involved">Get Involved</Link>
        </Button>
      </div>
    </section>
  );
}
