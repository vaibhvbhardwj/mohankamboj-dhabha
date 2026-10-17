# Mohan Kamboj Dhaba & Hotel Website

Production-oriented website for Mohan Kamboj Dhaba & Hotel, a pure-vegetarian dhaba and hotel on NH-44 in Murthal, Sonipat, Haryana.

The menu is for browsing and downloading. Room availability, event arrangements and EV enquiries go directly to the team on WhatsApp; there is no online food ordering or live booking system.

## Stack

- Next.js App Router with TypeScript
- Plain CSS design tokens in `src/app/globals.css`
- Static export via `next.config.mjs`
- No backend, database, accounts, payment integration or external form service

## Setup

```bash
npm install
npm run dev
```

Preview locally at the URL printed by Next, usually `http://127.0.0.1:3000`.

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

## Routes

- `/`
- `/dining`
- `/menu`
- `/rooms`
- `/facilities`
- `/gallery`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

The app also includes `not-found`, `error`, `robots.txt`, `sitemap.xml`, and `llms.txt`. Production builds automatically check SEO metadata and local links, including filename case and in-page anchors.

## Updating Business Constants

Edit `src/data/business.ts` for:

- display name
- establishment year
- phone and WhatsApp number
- address
- Google Maps URL
- social links
- confirmed public claims

Claims marked `needs-confirmation` are filtered out of public trust content.

## Updating Content

- Menu categories and enquiry items: `src/data/menu.ts`
- Rooms and policies: `src/data/rooms.ts`
- Facilities: `src/data/facilities.ts`
- Gallery metadata: `src/data/gallery.ts`
- FAQs: `src/data/faqs.ts`
- Navigation: `src/data/navigation.ts`
- SEO titles/descriptions: `src/data/seo.ts`

Do not add prices, room tiers, hours, ratings, testimonials, parking capacity or EV specs until approved by the client.

## Replacing Images

Property and timeline photographs use the supplied archive. Licensed food replacements and remaining reference photography are recorded in `TEMP_IMAGE_CREDITS.md` and `ASSET_MANIFEST.md`. Shared mappings are in `src/data/images.ts`. Runtime assets must live in `public/`; original uploads and local QA screenshots are excluded from Git.

Recommended launch photos:

- exterior hero, landscape and mobile
- daytime facade and entrance
- dining hall
- signature food
- room and bathroom per room type
- parking overview
- EV charger in property context
- founder/family portrait

## WhatsApp Message Generation

All conversion flows use:

`https://wa.me/919306447185?text=<URL-encoded-message>`

The planner in `src/components/WhatsAppPlanner.tsx`:

- validates required fields
- validates room date order
- omits blank optional fields
- creates readable plain-text messages
- uses `encodeURIComponent`
- provides open WhatsApp, copy-message and call fallbacks
- keeps personal values in browser memory only
- does not log names, dates, notes or message content

## Deployment checks

Run `npm run build:production` before publishing. Use `npm run check:links -- --external` to additionally inspect public third-party link destinations. Do not treat HTTP responses from social platforms as proof of live booking or message delivery.

## Deployment

The production domain is configured as `https://mohankambojdhaba.com` in `site.config.json`. Run `npm run build:production` and `npm run check:export`. The static export is written to `out/`; host configuration and complete instructions are in [DEPLOYMENT.md](DEPLOYMENT.md). `npm start` previews the export locally. `NEXT_PUBLIC_SITE_URL` can override the public origin at build time.

