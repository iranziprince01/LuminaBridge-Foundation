"use client";

import { usePathname } from "next/navigation";
import { GetInTouchCta } from "@/components/layout/get-in-touch-cta";

const HIDDEN_ON = ["/get-involved"];

export function GetInTouchCtaShell() {
  const pathname = usePathname();

  if (HIDDEN_ON.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return null;
  }

  const tone = pathname === "/" ? "white" : "green";

  return <GetInTouchCta tone={tone} />;
}
