# Enterprise Trust & Discoverability Audit

**Site:** [https://www.luminabridgefoundation.org](https://www.luminabridgefoundation.org)  
**Audit date:** June 19, 2026  
**Stack:** Next.js 16 (App Router) on Vercel

---

## Executive Summary

The site had a strong SEO foundation (metadata helpers, sitemap, robots, Organization JSON-LD, GA4 hook). This audit identified one **critical production issue** (www vs non-www canonical mismatch) and several **enterprise trust gaps** (security headers, incomplete NGO schema graph, missing Bing verification, no Program schema).

**Fixes applied in this audit** are listed in the “Resolved” column below. Remaining items require DNS, registrar, or third-party console configuration outside the codebase.

---

## Requirement Checklist

| # | Requirement | Status | Notes |
|---|-------------|--------|-------|
| 1 | NGO schema markup | **Resolved** | `@graph` with `NGO`, `NonprofitOrganization`, `Organization`, `WebSite` |
| 2 | Organization schema | **Resolved** | Enhanced with `@id`, logo `ImageObject`, contact points, `knowsAbout` |
| 3 | Open Graph tags | **Pass** | Per-page via `createPageMetadata()`; `og:locale`, `og:country_name` added |
| 4 | Twitter cards | **Pass** | `summary_large_image` on all indexable routes; `@handle` ready when set |
| 5 | robots.txt | **Pass** | Generated at `/robots.txt` via `src/app/robots.ts` |
| 6 | sitemap.xml | **Pass** | Generated at `/sitemap.xml` — 9 static + 3 events + 9 programs = **21 URLs** |
| 7 | Canonical URLs | **Resolved** | Primary origin updated to `https://www.luminabridgefoundation.org` |
| 8 | Security headers | **Resolved** | CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| 9 | Indexable pages | **Pass** | All public routes indexed; 404 and invalid slugs use `noIndex` |
| 10 | Unique metadata | **Pass** | Unique title + description per route (see table below) |
| 11 | Google Search Console | **Partial** | Verification env var supported; submit sitemap after deploy |
| 12 | Bing Webmaster Tools | **Partial** | `BING_SITE_VERIFICATION` env var added; submit after deploy |
| 13 | FortiGuard / enterprise firewalls | **Partial** | Headers + nonprofit signals improved; manual categorization still needed |
| 14 | Mixed content / SSL / DNS | **Partial** | SSL valid; apex→www redirect confirmed; no `http://` in source |
| 15 | Enterprise / donor access report | **This document** | See “Blockers & Recommendations” |

---

## Resolved Issues (Code Changes)

### Critical: www vs non-www canonical split

**Finding:** Live traffic resolves to `https://www.luminabridgefoundation.org`, but metadata, sitemap, robots `Host`, and JSON-LD used `https://luminabridgefoundation.org` (apex). This splits PageRank, confuses crawlers, and weakens donor/enterprise trust signals.

**Fix:**
- `siteConfig.url` → `https://www.luminabridgefoundation.org`
- Permanent apex→www redirect in `next.config.ts`
- All canonical, OG, sitemap, and schema URLs now align with www

### NGO / Organization structured data

**Before:** Single `Organization` + `NGO` node with minimal fields.

**After (`src/components/seo/organization-schema.tsx`):**
- `@graph` with linked `WebSite` and `Organization`
- Types: `Organization`, `NGO`, `NonprofitOrganization`
- `legalName`, `foundingDate` (ISO), `knowsAbout`, `areaServed`, structured `logo`
- Multiple `contactPoint` entries (general, volunteer, partnerships)

**Added:** `ProgramSchema` on all `/programs/[slug]` pages; improved `EventSchema` with ISO dates and event-specific images.

### Security headers

Added in `next.config.ts`:
- `Content-Security-Policy` (allows GA, Google Fonts, Google Forms)
- `Strict-Transport-Security` with `includeSubDomains; preload`
- `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`

### Search engine verification

`.env.example` documents:
- `GOOGLE_SITE_VERIFICATION`
- `BING_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

---

## Per-Page Metadata Matrix

| Route | Indexable | Unique title | Unique description | Canonical |
|-------|-----------|--------------|-------------------|-----------|
| `/` | Yes | Yes | Yes | `/` |
| `/team` | Yes | Yes | Yes | `/team` |
| `/events` | Yes | Yes | Yes | `/events` |
| `/events/[slug]` (×3) | Yes | Yes | Yes | Per slug |
| `/programs` | Yes | Yes | Yes | `/programs` |
| `/programs/[slug]` (×9) | Yes | Yes | Yes | Per slug |
| `/impact` | Yes | Yes | Yes | `/impact` |
| `/donate` | Yes | Yes | Yes | `/donate` |
| `/get-involved` | Yes | Yes | Yes | `/get-involved` |
| `/privacy` | Yes | Yes | Yes | `/privacy` |
| `/terms` | Yes | Yes | Yes | `/terms` |
| 404 / invalid slugs | **No** | Yes | Yes | `noindex, nofollow` |

---

## Infrastructure Checks (Live)

| Check | Result |
|-------|--------|
| SSL certificate | Valid Let's Encrypt; CN=`www.luminabridgefoundation.org`; expires Sep 10, 2026 |
| HTTPS | Enforced; HSTS present on Vercel |
| Apex redirect | `luminabridgefoundation.org` → `www.luminabridgefoundation.org` (308) |
| Mixed content | No `http://` asset URLs in application source |
| robots.txt | `Allow: /` + sitemap reference |
| sitemap.xml | 21 URLs; will use www after deploy |

---

## Blockers & Recommendations (Manual / Ops)

These items can prevent enterprise firewall access, donor confidence, or search visibility even with correct code.

### High priority

1. **Deploy this audit commit** so www canonicals, security headers, and updated schema go live.
2. **Google Search Console**
   - Add property: `https://www.luminabridgefoundation.org`
   - Set `GOOGLE_SITE_VERIFICATION` in Vercel env
   - Submit sitemap: `https://www.luminabridgefoundation.org/sitemap.xml`
   - Request indexing for `/`, `/donate`, `/programs`, `/events`
3. **Bing Webmaster Tools**
   - Add site and set `BING_SITE_VERIFICATION`
   - Submit same sitemap URL
4. **FortiGuard / enterprise web filtering**
   - Submit categorization request: [FortiGuard Web Filter Lookup](https://www.fortiguard.com/webfilter)
   - Category target: **Non-Profit / Charity / Education**
   - Ensure Privacy Policy and Terms are linked in footer (already present)

### Medium priority

5. **Email authentication (donor trust)**
   - Configure **SPF**, **DKIM**, and **DMARC** for `@luminabridgefoundation.org`
   - Enterprise mail gateways often flag donation/contact mail without these records
6. **Google for Nonprofits / Charity validation**
   - Apply for [Google for Nonprofits](https://www.google.com/nonprofits/) and Google Ad Grants eligibility
7. **Registered charity number**
   - If a CRA or Alberta corporate registration number exists, add to footer and `nonprofitStatus` / schema for donor verification
8. **Twitter/X handle**
   - Set `siteConfig.twitterHandle` when an official account exists for richer Twitter cards
9. **Dedicated OG image**
   - Default share image is `/community.jpg`; consider a 1200×630 branded asset with logo + tagline for higher link-preview trust

### Low priority

10. **`/get-involved` is dynamic** (query param `?inquiry=`) — still indexable; canonical ignores query strings (correct).
11. **Youth Unlocking Potential event** has TBD date — Event schema omits `startDate` until announced (valid).
12. **External forms** (Google Forms) — some corporate networks block `forms.gle` / `docs.google.com`; provide `mailto:` and phone fallback (already on contact sections).

---

## Enterprise Donor Trust Signals (Present)

- Registered nonprofit positioning and Alberta location
- Privacy Policy (`/privacy`) and Terms of Use (`/terms`)
- Physical address, phone, and email in footer and schema
- Donation page with official form link
- Professional domain on `.org` TLD with valid SSL
- No gambling, adult, or high-risk content categories
- Security headers and CSP on deploy

---

## Files Touched in This Audit

| File | Purpose |
|------|---------|
| `src/lib/site-config.ts` | www canonical URL, `foundingDate`, `postalCode` |
| `src/lib/structured-data.ts` | Shared schema `@id` helpers |
| `src/lib/seo.ts` | Bing verification, OG country, icons, `en-CA` |
| `src/components/seo/organization-schema.tsx` | Full NGO `@graph` |
| `src/components/seo/program-schema.tsx` | Program JSON-LD |
| `src/components/seo/event-schema.tsx` | ISO dates, event images |
| `src/app/programs/[slug]/page.tsx` | Program schema injection |
| `src/app/robots.ts` | Googlebot + Bingbot rules |
| `src/app/layout.tsx` | `lang="en-CA"` |
| `next.config.ts` | Security headers, apex→www redirect |
| `.env.example` | Verification and analytics env vars |

---

## Post-Deploy Verification Checklist

```bash
# Canonical (should show www)
curl -sL https://www.luminabridgefoundation.org/ | grep 'rel="canonical"'

# robots.txt
curl -sL https://www.luminabridgefoundation.org/robots.txt

# sitemap (all loc entries should use www)
curl -sL https://www.luminabridgefoundation.org/sitemap.xml | grep '<loc>'

# Security headers (after deploy)
curl -sI https://www.luminabridgefoundation.org/ | grep -iE 'content-security|strict-transport|x-frame|referrer'
```

---

*Generated as part of the Lumina Bridge Foundation enterprise trust and SEO audit.*
