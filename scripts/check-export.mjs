import { readFile, stat } from "node:fs/promises";
import { resolve, sep } from "node:path";

const root = resolve("out");
const routes = ["/", "/menu/", "/dining/", "/rooms/", "/facilities/", "/gallery/", "/about/", "/contact/", "/privacy/", "/terms/"];
const failures = [];
const assets = new Set();
let base;
for (const route of routes) {
  const file = resolve(root, `.${route}`, "index.html");
  const html = await readFile(file, "utf8");
  const fail = (message) => failures.push(`${route}: ${message}`);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) fail("Expected exactly one h1");
  if (!/<title>[^<]+<\/title>/.test(html)) fail("Missing page title");
  if (!/<meta name="description" content="[^"]+"/.test(html)) fail("Missing description");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) fail("Missing canonical URL");
  else {
    base ??= new URL(canonical).origin;
    const expected = new URL(route === "/dining/" ? "/menu/" : route, base).href;
    if (canonical !== expected) fail(`Canonical must be ${expected}, got ${canonical}`);
  }
  if (!/<meta property="og:image" content="[^"]+"/.test(html)) fail("Missing sharing image");
  if (!html.includes('type="application/ld+json"')) fail("Missing structured data");
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch { fail("Invalid JSON-LD"); }
  }
  if (route === "/") {
    const hero = html.match(/<section[^>]+id="home-hero"[\s\S]*?<\/section>/)?.[0] || "";
    if (!hero.includes("A pause worth taking.")) fail("Hero phrase missing");
    if (/hero-eyebrow|hero-tagline|hero-swipe|Swipe Down/.test(hero)) fail("Extra hero copy found");
  }
  for (const [, value] of html.matchAll(/(?:href|src|poster)="([^"]+)"/g)) {
    if (!value.startsWith("/") || value.startsWith("//")) continue;
    const pathname = decodeURIComponent(new URL(value.replaceAll("&amp;", "&"), "http://local").pathname);
    assets.add(pathname);
  }
}
for (const path of assets) {
  const file = resolve(root, `.${path}`);
  if (!file.startsWith(`${root}${sep}`) && file !== root) { failures.push(`Unsafe local URL: ${path}`); continue; }
  try {
    if ((await stat(file)).isDirectory()) await stat(resolve(file, "index.html"));
  } catch { failures.push(`Missing linked page or asset: ${path}`); }
}
const sitemap = await readFile(resolve(root, "sitemap.xml"), "utf8");
for (const route of routes.filter((route) => route !== "/dining/")) {
  if (!sitemap.includes(`<loc>${new URL(route, base).href}</loc>`)) failures.push(`Sitemap missing ${route}`);
}
if (sitemap.includes(`${base}/dining/`)) failures.push("Duplicate Dining alias in sitemap");
const notFound = await readFile(resolve(root, "404.html"), "utf8");
if (!/name="robots" content="noindex/.test(notFound)) failures.push("404 page must be noindex");
const robots = await readFile(resolve(root, "robots.txt"), "utf8");
const home = await readFile(resolve(root, "index.html"), "utf8");
const indexable = process.env.NEXT_PUBLIC_INDEXABLE !== "false";
if (indexable) {
  if (!/name="robots" content="index, follow"/.test(home)) failures.push("Production homepage must be indexable");
  if (!robots.includes("Allow: /") || !robots.includes(`${base}/sitemap.xml`)) failures.push("Production robots must allow crawling and link the sitemap");
} else {
  if (!/name="robots" content="noindex/.test(home) || !robots.includes("Disallow: /")) failures.push("Preview must prevent indexing");
}
await stat(resolve(root, "_headers"));
await stat(resolve(root, "llms.txt"));
if (failures.length) { console.error(failures.join("\n")); process.exitCode = 1; }
else console.log(`Export verified: ${routes.length} routes, ${assets.size} local links/assets, canonical URLs, metadata, JSON-LD, hero, sitemap, robots, and 404.`);
