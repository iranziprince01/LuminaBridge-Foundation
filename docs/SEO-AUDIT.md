# SEO Audit — Lumina Bridge Foundation

**Site:** https://www.luminabridgefoundation.org  
**Audit date:** June 2026  
**Stack:** Next.js App Router (metadata API, sitemap, robots, JSON-LD)

---

## Executive summary

On-site SEO is **production-ready** for discoverability on Google and other search engines. Technical foundations (canonical URLs, sitemap, robots, structured data, meta descriptions, Open Graph) are implemented.

**Important:** No website can *force* Google, Bing, or Gemini to rank #1 or guarantee top-3 placement. Rankings depend on authority, backlinks, user behaviour, competition, and time. For the branded query **“Lumina Bridge Foundation”**, this official site is strongly positioned to rank well because the organization name is unique and consistently used across metadata, schema, and content.

---

## What is implemented (on-site)

### Technical SEO
| Item | Status | Location |
|------|--------|----------|
| Canonical www URL | ✅ | `site-config.ts`, apex → www redirect in `next.config.ts` |
| `sitemap.xml` | ✅ | `src/app/sitemap.ts` |
| `robots.txt` | ✅ | `src/app/robots.ts` |
| Per-page canonical | ✅ | `createPageMetadata()` in `src/lib/seo.ts` |
| `metadataBase` | ✅ | Root layout metadata |
| Security headers | ✅ | `next.config.ts` |
| Mobile-friendly layout | ✅ | Responsive design |

### Meta tags
| Item | Status |
|------|--------|
| Home title | ✅ Absolute: **Lumina Bridge Foundation** |
| Meta descriptions | ✅ ~150–158 chars via `metaDescription()` |
| Keywords meta | ✅ Brand + geo + topic in `site-config.ts` |
| Open Graph / Twitter | ✅ All indexable pages |

**Home meta description:**  
*Lumina Bridge Foundation is a registered nonprofit in Edmonton, Alberta, Canada. Arts, culture, youth leadership, and community programs across Alberta.*

### Structured data (JSON-LD)
| Schema | Pages |
|--------|-------|
| Organization + NGO + WebSite | Global |
| WebPage | Home |
| Program | Program detail |
| Event | Event detail |
| BreadcrumbList | Programs + events |

### AI discoverability
| Item | Status |
|------|--------|
| `public/llms.txt` | ✅ |
| Entity schema + NAP consistency | ✅ |

---

## Target queries (realistic expectations)

| Query | On-site readiness | Typical outcome |
|-------|-------------------|-----------------|
| **Lumina Bridge Foundation** | Excellent | Official site should rank **#1 or top 3** when indexed |
| **Lumina Bridge Edmonton** | Strong | Usually among top official results |
| **arts culture Alberta nonprofit** | Good content | Requires backlinks + time |

---

## Off-site actions (required for top rankings)

1. **Google Business Profile** — Edmonton NAP matching the site  
2. **Google Search Console** — Monitor branded queries (sitemap submitted ✅)  
3. **Bing Webmaster Tools** — Submit sitemap; set `BING_SITE_VERIFICATION`  
4. **Backlinks** — Partners, events, charity directories  
5. **Google Analytics** — Set `NEXT_PUBLIC_GA_MEASUREMENT_ID`  
6. **Consistent branding** — “Lumina Bridge Foundation” on all profiles

---

## Environment variables

See `.env.example` for `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `GOOGLE_SITE_VERIFICATION`, and `BING_SITE_VERIFICATION`.

---

## Conclusion

On-site SEO is complete. Top-3 for **“Lumina Bridge Foundation”** is achievable as the authoritative site. Generic keywords need ongoing authority building beyond code changes.
