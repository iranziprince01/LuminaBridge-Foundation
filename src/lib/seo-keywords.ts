/**
 * Primary search phrases for Lumina Bridge Foundation.
 * Used in metadata, JSON-LD, and llms.txt — weave naturally in page copy where possible.
 */
export const brandKeywords = [
  "Lumina Bridge Foundation",
  "Lumina Bridge",
  "Lumina",
  "Bridge Foundation",
] as const;

export const geoKeywords = [
  "Edmonton",
  "Alberta",
  "Canada",
  "North America",
] as const;

export const topicKeywords = [
  "arts and culture",
  "youth leadership",
  "community development",
  "mental wellness",
  "nonprofit",
  "registered charity Alberta",
  "newcomer support",
  "refugee support",
  "financial literacy",
  "entrepreneurship",
  "volunteer opportunities",
  "community engagement",
  "BridgeConnect",
  "BridgeFest",
  "NewRoots Canada Summit",
] as const;

export const siteKeywords = [
  ...brandKeywords,
  ...geoKeywords,
  ...topicKeywords,
  "arts culture Canada",
  "arts culture Alberta",
  "arts culture Edmonton",
  "Lumina Bridge Foundation Edmonton",
  "Lumina Bridge Foundation Alberta",
  "Lumina Bridge Foundation Canada",
] as const;

/** Organization alternate names for entity recognition (Google, Bing, AI search). */
export const organizationAlternateNames = [
  "Lumina Bridge Foundation",
  "Lumina Bridge",
  "LBF",
  "Lumina Bridge Foundation Edmonton",
  "Lumina Bridge Foundation Alberta",
  "Lumina Bridge Foundation Canada",
] as const;

/** Google SERP snippet target: 110–130 characters. */
export function metaDescription(text: string, maxLength = 130): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const trimmed = normalized.slice(0, maxLength - 1);
  const lastSpace = trimmed.lastIndexOf(" ");
  const cut = lastSpace > 100 ? trimmed.slice(0, lastSpace) : trimmed;
  return `${cut.trim()}…`;
}
