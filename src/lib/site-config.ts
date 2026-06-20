export const pageTitles = {
  home: "Lumina Bridge Foundation",
  team: "Team",
  events: "Events",
  donate: "Donate",
  getInvolved: "Get Involved",
  impact: "Impact",
  programs: "Programs",
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  eventNotFound: "Event Not Found",
  programNotFound: "Program Not Found",
} as const;

export const eventTabTitles: Record<string, string> = {
  "newroots-canada-summit": "NewRoots Canada Summit",
  bridgefest: "BridgeFest Canada",
  "youth-unlocking-potential": "Youth Unlocking Potential",
};

export const siteConfig = {
  name: "Lumina Bridge Foundation",
  shortName: "Lumina Bridge",
  /** Stable Google meta description (~150 chars). */
  metaDescription:
    "Lumina Bridge Foundation is a registered nonprofit in Edmonton, Alberta, Canada. Arts, culture, youth leadership, and community programs across Alberta.",
  /** Visible site summary (footer, schema). */
  description:
    "Lumina Bridge Foundation is a registered nonprofit in Edmonton, Alberta, Canada. We empower youth and communities through arts, culture, leadership, mental wellness, and community engagement.",
  /** Primary canonical origin — must match live DNS (www redirects from apex). */
  url: "https://www.luminabridgefoundation.org",
  logoColor: "/logo_color.svg",
  logoWhite: "/logo_white.svg",
  favicon: "/favicon.png",
  /** Default Open Graph / Twitter Card image for social sharing */
  ogImage: "/community.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  email: "info@luminabridgefoundation.org",
  phone: "+1 (780) 292-5470",
  phoneLabel: "Office phone",
  phoneHref: "tel:+17802925470",
  volunteerEmail: "info@luminabridgefoundation.org",
  partnershipEmail: "info@luminabridgefoundation.org",
  address: {
    suite: "Suite 3400, 10180 – 101 Street NW",
    city: "Edmonton, Alberta T5J 3S4",
    postalCode: "T5J 3S4",
    country: "Canada",
  },
  location: "Suite 3400, 10180 – 101 Street NW, Edmonton, Alberta T5J 3S4, Canada",
  officeHours: "Monday – Friday, 9:00 AM – 5:00 PM (Mountain Time)",
  founded: 2024,
  foundingDate: "2024-09-01",
  foundedLabel: "September 2024",
  registered: 2026,
  tagline: "Building Bridges. Unlocking Potential. Transforming Communities.",
  keywords: [
    "Lumina Bridge Foundation",
    "Lumina Bridge",
    "Lumina",
    "Bridge Foundation",
    "nonprofit Edmonton",
    "nonprofit Alberta",
    "nonprofit Canada",
    "arts and culture Canada",
    "arts and culture Alberta",
    "arts and culture Edmonton",
    "youth leadership Alberta",
    "community foundation Alberta",
    "mental wellness Alberta",
    "newcomer support Edmonton",
    "BridgeConnect",
    "BridgeFest Canada",
    "NewRoots Canada Summit",
    "volunteer Edmonton",
    "donate nonprofit Alberta",
  ],
  /** Optional @handle for Twitter/X cards — set when account is active. */
  twitterHandle: undefined as string | undefined,
  social: {
    facebook: "https://web.facebook.com/profile.php?id=61590717957417",
    instagram: "https://instagram.com/luminabridgefoundation",
  },
  infoRequestFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdKWU5utNS4jz41CcP4hKA9O3-XF8eh1VWCLDU6mK8YRvKZiA/viewform",
  donateFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSep13rOx4CjohFylRRzTWnWJ83F6mLenfIKJg9zP4yBT3f87A/viewform",
  eventRegistration: {
    participant: "https://forms.gle/k8G3mx8WCrC2gFqp9",
    attendance: "https://forms.gle/FEdqCdqWKszDhSDV6",
  },
};
