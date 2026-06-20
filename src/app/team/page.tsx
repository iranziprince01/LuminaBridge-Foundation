import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { teamMetadata } from "@/lib/seo";

export const metadata: Metadata = teamMetadata;

export default function TeamPage() {
  redirect("/about#leadership");
}
