import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionLinkCtaProps {
  href: string;
  label: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionLinkCta({
  href,
  label,
  className,
  align = "left",
}: SectionLinkCtaProps) {
  return (
    <FadeUp className={cn("mt-10 sm:mt-12", align === "center" && "text-center", className)}>
      <Button
        variant="outline"
        size="lg"
        className={cn(align === "center" && "mx-auto")}
        asChild
      >
        <Link href={href}>
          {label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </FadeUp>
  );
}
