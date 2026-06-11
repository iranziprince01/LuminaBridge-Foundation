# LuminaBridge Foundation

Official website for **LuminaBridge Foundation** — a registered nonprofit based in Edmonton, Alberta, empowering youth, strengthening communities, and creating opportunities through arts, culture, leadership development, education, and community engagement across Alberta.

**Live site:** [luminabridgefoundation.org](https://luminabridgefoundation.org)

## Overview

This is a multi-page marketing and engagement site built with Next.js. It presents the foundation’s mission, programs, leadership, events, and ways to get involved. Content is driven from centralized data files so copy, stats, and program details can be updated without touching layout code.

### Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about, mission/vision, core values, programs, impact journey, testimonials |
| `/team` | Leadership team profiles |
| `/events` | Signature 2026 events listing |
| `/events/[slug]` | Event detail pages (Voices of New Canada, BridgeFest, Youth Unlocking Potential) |
| `/get-involved` | Partnership, volunteer, and stay-connected sections |
| `/donate` | Donation page (online giving coming soon) |

### Features

- Responsive layout with shared navbar and footer
- Framer Motion page transitions, scroll reveals, and hover animations
- SEO metadata, Open Graph tags, and JSON-LD organization schema
- Event registration links to Google Forms (participant and attendance)
- External info-request form for donations and general inquiries
- Brand-aligned design system (primary blue, secondary teal, accent gold)
- Optimized images via `next/image` with priority loading on key sections

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** Custom components with Radix UI primitives and class-variance-authority
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans (display), Instrument Sans (body) via `next/font`

## Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── page.tsx            # Home
│   ├── team/
│   ├── events/
│   │   └── [slug]/         # Dynamic event detail pages
│   ├── get-involved/
│   ├── donate/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── template.tsx        # Page transition wrapper
│   └── globals.css         # Design tokens and global styles
├── components/
│   ├── cards/              # Event, program, leadership, testimonial cards
│   ├── donate/             # Donation form
│   ├── events/             # Event registration blocks
│   ├── layout/             # Navbar, footer
│   ├── motion/             # Fade-up, stagger, motion presets
│   ├── sections/           # Home hero, get-involved content, contact
│   ├── seo/                # Structured data
│   ├── shared/             # Section, banners, timeline, images
│   └── ui/                 # Button, card, input, badge
└── lib/
    ├── data.ts             # Programs, events, team, testimonials, copy
    ├── site-config.ts      # Site name, contact, social, form URLs, page titles
    ├── icons.tsx           # Icon name mapping
    └── utils.ts            # Class name helpers

public/                     # Static assets (logos, photos, event flyer)
```

## Content & Configuration

Most site copy and structured content lives in two files:

- **`src/lib/data.ts`** — Programs, core values, leadership bios, events, testimonials, impact timeline, donation copy, and section text.
- **`src/lib/site-config.ts`** — Organization details (email, address, social links), external form URLs, page title templates, and SEO keywords.

To add or edit an event, update the `events` array in `data.ts`. Each event’s `id` becomes its URL slug (e.g. `voices-new-canada` → `/events/voices-new-canada`).

Event registration and info-request links are configured in `site-config.ts`:

```ts
siteConfig.eventRegistration.participant  // Participant registration
siteConfig.eventRegistration.attendance   // General attendance
siteConfig.infoRequestFormUrl             // Google Form for inquiries
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Deployment

The site is a standard Next.js application and can be deployed to [Vercel](https://vercel.com), Netlify, or any platform that supports Node.js. Set the production URL in `site-config.ts` (`siteConfig.url`) if it differs from the default.

## License

Private project — © LuminaBridge Foundation. All rights reserved.
