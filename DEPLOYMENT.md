# Deploying the website

This site exports static HTML to `out/`. No database or application server is required.

## Netlify from GitHub

Import the `vaibhvbhardwj/mohankamboj-dhabha` GitHub repository into Netlify and select branch `main`. The committed `netlify.toml` configures:

- Build command: `npm run build:production`
- Publish directory: `out`
- Node.js 24 and static-only Next.js deployment
- `noindex` metadata and robots for Deploy Previews and branch deployments
- Permanent HTTPS/www redirects to `https://mohankambojdhaba.com` and redirects from the old `/dining` URLs to `/menu/`

Set `mohankambojdhaba.com` as the primary custom domain in Netlify, add `www.mohankambojdhaba.com` as an alias, and follow Netlify's displayed DNS records. Enable the HTTPS certificate after DNS resolves. The final `.netlify.app` hostname is assigned by Netlify and is not hard-coded into this project.

`public/_headers` is copied into `out/` and supplies security headers plus immutable caching for hashed assets. Unknown URLs should use the exported `404.html` with HTTP 404. Do not add a catch-all homepage rewrite.

## Local release build

1. Use Node.js 24 and run `npm ci`.
2. The owner's public domain, `https://mohankambojdhaba.com`, is already configured in `site.config.json`. To change it, update that file or set `NEXT_PUBLIC_SITE_URL` in the hosting environment or `.env.production.local`. Do not include a path, query string, or fragment.
3. Run `npm run lint` and `npm run typecheck`.
4. Run `npm run build:production`. It rejects local and example domains. Canonical links, Open Graph URLs, structured data, robots, and the sitemap all use this setting.
5. Run `npm run check:export` to verify every exported route, linked file, canonical URL, metadata, JSON-LD, sitemap, robots file, and 404 page. Publish only `out/`. Vercel and Netlify configuration is included. For Cloudflare Pages, use the production build command and `out` as the output directory; the `_headers` file is included in the export. For other static hosts, apply equivalent response headers and serve directory indexes with `/404.html` for unknown routes.
6. Enable HTTPS and redirect alternate hostnames to the chosen canonical domain using the host's settings. Rebuild when the domain changes.

Run `npm start` after building to preview the exact export at `http://127.0.0.1:3000`. Set `PORT` to use another local port. `next start` does not serve a Next.js static export.

`npm run dev` is marked `noindex`. Builds use the owner's configured domain by default. For a separate non-indexable staging export, set `NEXT_PUBLIC_SITE_URL` to the local staging origin and use `npm run build`; the production command deliberately rejects that configuration.

## Final checks on the live hostname

- Open Home, Dining, Rooms, Facilities, Gallery, Our Story, and Contact directly, including refreshing nested routes.
- Confirm `/robots.txt`, `/sitemap.xml`, `/404.html`, the menu PDF download, phone links, Maps, and WhatsApp links.
- Confirm unknown paths return HTTP 404, not a successful homepage response. Do not configure an SPA catch-all redirect.
- Submit `/sitemap.xml` in the owner's Google Search Console. Validate a public page using Google's [Rich Results Test](https://search.google.com/test/rich-results).
- Local business markup includes the configured contact details, address, social profiles, 1990 founding year, and Google Maps marker coordinates (29.0532083, 77.0656801). The Maps place record supplies postcode 131039 and CID 14834210950443537981. Exact operating hours are not invented. `WebSite`, `WebPage`, breadcrumbs and visible FAQs also have structured data. `llms.txt` provides a concise public page directory for AI retrieval without promising search rankings.

`npm run check:links` checks internal routes, fragments, CSS images/fonts, source media including modal videos, filename case for Linux/Netlify, and phone/email/WhatsApp URL formats. `npm run check:links -- --external` additionally requests third-party HTTPS destinations without opening a messaging app or sending a message.

Netlify setup follows the official [framework build settings](https://docs.netlify.com/build/frameworks/overview/) and [redirect documentation](https://docs.netlify.com/manage/routing/redirects/redirect-options/). A deployment is not published by committing this code; Netlify runs the configured build after the repository is connected.

SEO implementation follows Google's [Local Business structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business). Indexing and search appearance are determined by search engines.

The hero image keeps its existing crop and focal point. Its only editorial copy is “A pause worth taking.” The one-second opening motion starts after loading, never changes the scroll position, cancels on input, and is disabled for reduced motion. Content reveal animations run after loading and keep server-rendered content visible when JavaScript is unavailable.
