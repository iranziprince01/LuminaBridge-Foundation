import { siteConfig } from "@/lib/site-config";

/** Canonical site origin — must match the primary live hostname (www). */
export const siteOrigin = siteConfig.url.replace(/\/$/, "");

export const websiteId = `${siteOrigin}/#website`;
export const organizationId = `${siteOrigin}/#organization`;

export function absoluteAsset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteOrigin}${normalized}`;
}
