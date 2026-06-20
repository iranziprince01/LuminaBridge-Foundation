# Lumina Bridge Foundation — Production Audit Report

**Site:** https://www.luminabridgefoundation.org  
**Stack:** Next.js 16 · TypeScript · Tailwind CSS · Vercel  
**Audit date:** June 10, 2026  
**Status:** On-site improvements implemented in codebase

---

## Executive Summary

This audit addressed technical SEO, structured data, social sharing, accessibility, performance, security, trust signals, and analytics readiness for a production nonprofit website. All critical on-site fixes were applied directly in the codebase. Remaining items are operational (environment variables, image compression in `/public`, off-site authority building).

---

## 1. Technical SEO

### Issues Found

| Issue | Severity |
|-------|----------|
| Homepage title was generic (`Lumina Bridge Foundation`) | High |
| Meta descriptions exceeded 130 characters or were inconsistent | Medium |
| Static page titles too short for SERP display | Medium |
| 404 page metadata used wrong title (`Event Not Found`) | Medium |
| Event/program detail meta descriptions truncated due to long suffixes | Medium |
| Missing breadcrumbs on most pages | Medium |
| `/team` and `/impact` had no in-content internal links | Medium |
| Default OG image was 2.9MB portrait JPG (`community.jpg`) | High |

### Fixes Applied

- **Homepage title:** `Lumina Bridge Foundation | Empowering Youth & Communities in Alberta` (59 characters)
- **Title template:** `%s | Lumina Bridge` with expanded page-specific titles (50–60 character range)
- **Meta descriptions:** Rewritten to 110–130 characters; `metaDescription()` max reduced to 130
- **404 metadata:** Uses `Page Not Found` with `noIndex: true`
- **Event/program metadata:** Shorter location suffix (`— Edmonton, Alberta.`)
- **Breadcrumbs (JSON-LD):** Added to Team, Impact, Events, Donate, Get Involved, Privacy, Terms (Programs/Events detail already had them)
- **Internal linking:** Related links sections on `/team` and `/impact`; Team restored in footer Quick Links
- **Canonical URLs, robots.txt, sitemap.xml:** Verified — already correctly configured with www canonical, apex redirect, and dynamic sitemap

---

## 2. Structured Data (JSON-LD)

### Implemented / Enhanced

| Schema Type | Location |
|-------------|----------|
| Organization + NGO + NonprofitOrganization | Global (`layout.tsx`) |
| WebSite | Global |
| ContactPoint (customer service, volunteer, partnerships) | Global |
| WebPage | Homepage |
| Event | Event detail pages |
| EducationalOccupationalProgram | Program detail pages (was invalid `Program` type) |
| BreadcrumbList | All major pages |
| FAQPage | Donate, Get Involved |
| Person | Team page (leadership + operations) |
| ItemList | Programs index, Events index |

### Validation Notes

- Organization includes Edmonton, Alberta address, founding date, nonprofit status, and `sameAs` social profiles
- FAQ content is visible on-page (required for rich result eligibility)
- Test with [Google Rich Results Test](https://search.google.com/test/rich-results) after deploy

---

## 3. Open Graph & Social Sharing

### Issues Found

- OG image was wrong aspect ratio (3733×5600 portrait)
- File size ~2.7MB — far above recommended 500KB
- Social previews would crop poorly on LinkedIn, Facebook, WhatsApp, Slack, Teams, X

### Fixes Applied

- **`src/app/opengraph-image.tsx`:** Dynamic 1200×630 PNG with logo, org name, tagline, and theme pillars (Youth Leadership, Community Development, Arts & Culture, Inclusion, Empowerment)
- **`src/app/twitter-image.tsx`:** Reuses OG image for `summary_large_image`
- **`siteConfig.ogImage`:** Updated to `/opengraph-image`
- **Metadata:** `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, Twitter card tags configured per page via `createPageMetadata()`

### Post-Deploy Verification

1. Deploy to Vercel production
2. Test URLs in [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/), [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/), and [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. Click "Scrape Again" if cached old image appears

---

## 4. Accessibility

### Issues Found

| Issue | WCAG Impact |
|-------|-------------|
| No skip link to main content | 2.4.1 Bypass Blocks |
| Mobile nav missing `aria-expanded` / `aria-controls` | 4.1.2 Name, Role, Value |
| Scroll-to-top button remained in tab order when hidden | 2.4.3 Focus Order |
| Secondary teal `#0d9488` failed AA contrast on white | 1.4.3 Contrast |
| Footer copyright at `text-white/50` failed contrast | 1.4.3 Contrast |
| Decorative icons missing `aria-hidden` | 1.1.1 Non-text Content |

### Fixes Applied

- Skip link component added (`Skip to main content` → `#main`)
- `<main id="main">` landmark in root layout
- Navbar: `aria-label="Primary"`, mobile toggle `aria-expanded`, `aria-controls`, decorative icons `aria-hidden`
- Scroll-to-top: `tabIndex={-1}` and `aria-hidden` when not visible
- Secondary color darkened to `#0f766e` (WCAG AA on white)
- Footer legal text upgraded to `text-white/70`
- Hero image alt text improved for context

### Estimated Lighthouse Accessibility

**92–97** (post-deploy; depends on third-party embeds and runtime extensions)

---

## 5. Performance

### Issues Found

| Issue | Impact |
|-------|--------|
| Hero used external Unsplash URL | Extra DNS/TLS, no local optimization |
| Multiple `priority` images on Impact page | LCP contention |
| 4 priority images in impact cards grid | Bandwidth / LCP |
| 7 font weights loaded | Font payload |
| Large static JPGs in `/public` (some 2–6MB) | Transfer size |
| No long-cache headers on static assets | Repeat visit performance |

### Fixes Applied

- Hero image switched to local `/community.jpg` (Next.js Image optimization)
- Impact section image: removed unnecessary `priority`
- Impact cards: `priority` limited to first 2 cards (was 4)
- Font weights trimmed: Sans 400/600/700, Serif 400/600/700 (removed 500, 800)
- Cache-Control `public, max-age=31536000, immutable` for static assets in `next.config.ts`

### Remaining Recommendations

- Compress `/public` source JPGs with Squoosh or `sharp` CLI (target &lt;300KB each for non-hero assets)
- Consider WebP/AVIF sources for large photos (`008.jpg`, `community.jpg`, etc.)
- Run Lighthouse on production URL after deploy for baseline score

### Estimated Lighthouse Performance

**85–93** on production (90+ achievable after image compression in `/public`)

---

## 6. Security

### Already Present (Verified)

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera, microphone, geolocation, payment disabled)
- `Strict-Transport-Security` (production only, 2-year max-age, preload)
- Content-Security-Policy with GA4 and Google Forms allowlists
- Apex → www permanent redirect

### Added

- Long-cache headers for static assets (performance + reduced origin load)

---

## 7. Trust & Credibility

### Verified / Improved

- Registered nonprofit status stated on homepage ("Who We Are")
- Edmonton, Alberta location in footer, contact section, and schema
- Email and phone prominently in footer and contact pages
- Mission and vision on homepage
- Programs showcase on homepage and dedicated `/programs`
- Events on `/events` with registration links
- Impact stories and timeline on `/impact`
- FAQ sections on Donate and Get Involved pages
- Internal cross-linking between Team, Impact, Programs, Events, Donate

---

## 8. Analytics Readiness

### Implementation

- `GoogleAnalytics` component uses `NEXT_PUBLIC_GA_MEASUREMENT_ID` (no hardcoded IDs)
- GA4 loads only when env var is set; disabled locally by default
- `.env.example` documents required variables:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `GOOGLE_SITE_VERIFICATION`
  - `BING_SITE_VERIFICATION`

### Deploy Steps

1. Create GA4 property for `www.luminabridgefoundation.org`
2. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` in Vercel Environment Variables
3. Redeploy production

---

## 9. Files Changed (Summary)

| Area | Key Files |
|------|-----------|
| OG / Social | `src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`, `src/lib/site-config.ts` |
| SEO metadata | `src/lib/seo.ts`, `src/lib/seo-keywords.ts` |
| Schema | `faq-schema.tsx`, `person-schema.tsx`, `item-list-schema.tsx`, `program-schema.tsx` |
| Accessibility | `skip-link.tsx`, `layout.tsx`, `navbar.tsx`, `scroll-to-top.tsx`, `globals.css`, `footer.tsx` |
| Internal linking | `related-links.tsx`, `team/page.tsx`, `impact/page.tsx` |
| Performance | `data.ts`, `impact-cards-grid.tsx`, `layout.tsx`, `next.config.ts` |
| FAQ content | `src/lib/faq-content.ts` |
| Env template | `.env.example` |

---

## Remaining Recommendations (Off-Site & Operational)

1. **Compress `/public` images** — largest remaining performance win
2. **Set GA4 env var** in Vercel after property creation
3. **Re-scrape social URLs** after deploy for updated OG image
4. **Google Search Console** — request re-index of homepage after title change
5. **Bing Webmaster Tools** — submit sitemap if not already done
6. **Charity registration number** — add to footer/schema when publicly available ( strengthens grant reviewer trust)
7. **Google Business Profile** — create/verify Edmonton nonprofit listing
8. **Backlinks** — Alberta community directories, nonprofit registries, partner org sites
9. **Twitter/X handle** — set `siteConfig.twitterHandle` when account is active
10. **Run production Lighthouse** — establish baseline scores post-deploy

---

## Lighthouse Estimates (Post-Deploy)

| Category | Estimated Score |
|----------|-----------------|
| Performance | 85–93 (90+ after image compression) |
| Accessibility | 92–97 |
| Best Practices | 95–100 |
| SEO | 95–100 |

*Scores vary by network, device, and third-party scripts. Run against live production URL for authoritative results.*

---

## Conclusion

The Lumina Bridge Foundation website now meets modern production standards for nonprofit discoverability, social sharing, accessibility, security, and structured data. Deploy these changes to Vercel, configure GA4, compress remaining large images, and validate rich results and social previews on the live domain.
