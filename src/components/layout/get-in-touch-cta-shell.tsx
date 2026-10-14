"use client";

import { usePathname } from "next/navigation";
import { GetInTouchCta } from "@/components/layout/get-in-touch-cta";

const HIDDEN_ON = ["/get-involved"];

/** Pages whose final section is green, so the CTA must be white to keep backgrounds alternating. */
const WHITE_ON = ["/events/youth-unlocking-potential-2026", "/events/bridgefest"];

export function GetInTouchCtaShell() {
  const pathname = usePathname();

  if (HIDDEN_ON.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return null;
  }

  const tone = WHITE_ON.includes(pathname) ? "white" : "green";

  return <GetInTouchCta tone={tone} />;
}
