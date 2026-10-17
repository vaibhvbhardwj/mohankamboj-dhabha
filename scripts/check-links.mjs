import { readdir, readFile, stat } from "node:fs/promises";
import { resolve, relative, sep } from "node:path";
import siteConfig from "../site.config.json" with { type: "json" };

const root = resolve("out");
const origin = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
const failures = [];
const localFiles = new Set();
const external = new Set();
const checkedDirs = new Map();
let links = 0;

async function filesIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const lists = await Promise.all(entries.map((entry) => entry.isDirectory() ? filesIn(resolve(dir, entry.name)) : [resolve(dir, entry.name)]));
  return lists.flat();
}

async function exactFile(pathname) {
  let file = resolve(root, `.${decodeURIComponent(pathname)}`);
  if (file !== root && !file.startsWith(`${root}${sep}`)) throw Error("Path escapes export");
  if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
  await stat(file);
  // Netlify runs on a case-sensitive filesystem; Windows alone can miss this.
  let parent = root;
  for (const part of relative(root, file).split(sep)) {
    if (!checkedDirs.has(parent)) checkedDirs.set(parent, await readdir(parent));
    if (!checkedDirs.get(parent).includes(part)) throw Error("Filename case differs from exported file");
    parent = resolve(parent, part);
  }
  localFiles.add(file);
  return file;
}

async function check(value, page, label) {
  links++;
  try {
    const url = new URL(value.replaceAll("&amp;", "&"), page);
    if (["data:", "blob:"].includes(url.protocol)) return;
    if (url.protocol === "tel:") {
      if (!/^\+[1-9]\d{7,14}$/.test(url.pathname)) throw Error("Invalid international phone link");
      return;
    }
    if (url.protocol === "mailto:") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(decodeURIComponent(url.pathname))) throw Error("Invalid email link");
      return;
    }
    if (!["https:", "http:"].includes(url.protocol)) throw Error(`Unexpected protocol ${url.protocol}`);
    if (url.origin !== new URL(origin).origin) {
      if (url.protocol !== "https:") throw Error("External URL must use HTTPS");
      if (url.hostname === "wa.me" && !/^\/[1-9]\d{7,14}$/.test(url.pathname)) throw Error("Invalid WhatsApp number");
      // Test the WhatsApp destination without submitting any prefilled text.
      if (url.hostname === "wa.me") url.search = "";
      url.hash = "";
      external.add(url.href);
      return;
    }
    const file = await exactFile(url.pathname);
    if (url.hash && file.endsWith(".html")) {
      const html = await readFile(file, "utf8");
      const id = decodeURIComponent(url.hash.slice(1));
      if (!html.includes(`id="${id}"`) && !html.includes(`name="${id}"`)) throw Error(`Missing anchor #${id}`);
    }
  } catch (error) { failures.push(`${label}: ${value} — ${error.message}`); }
}

for (const file of await filesIn(root)) {
  const path = relative(root, file).split(sep).join("/");
  const page = new URL(path.replace(/index\.html$/, ""), `${origin}/`).href;
  if (file.endsWith(".html")) {
    const html = await readFile(file, "utf8");
    for (const [, value] of html.matchAll(/(?:href|src|poster)="([^"]+)"/g)) await check(value, page, path);
    for (const [, value] of html.matchAll(/<meta (?:property="og:image"|name="twitter:image") content="([^"]+)"/g)) await check(value, page, path);
  } else if (file.endsWith(".css")) {
    const css = await readFile(file, "utf8");
    for (const [, value] of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) await check(value, page, path);
  }
}
// Includes video URLs that only appear after opening a modal.
for (const file of await filesIn(resolve("src"))) {
  if (!/\.(ts|tsx)$/.test(file)) continue;
  const source = await readFile(file, "utf8");
  for (const [, value] of source.matchAll(/["'`]((?:\/images|\/reels|\/downloads|\/placeholders|\/videos)\/[^"'`{}]+)["'`]/g)) {
    if (!value.endsWith("/")) await check(value, `${origin}/`, relative(process.cwd(), file));
  }
}

console.log(`Links checked: ${links} references; ${localFiles.size} unique local pages/assets; ${external.size} HTTPS destinations.`);
if (process.argv.includes("--external")) {
  const urls = [...external];
  const results = [];
  let index = 0;
  await Promise.all(Array.from({ length: 3 }, async () => {
    while (index < urls.length) {
      const url = urls[index++];
      try {
        const response = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15000), headers: { "User-Agent": "MohanKamboj-LinkCheck/1.0" } });
        await response.body?.cancel();
        results.push({ url, status: response.status, finalUrl: response.url });
        if ([404, 410].includes(response.status)) failures.push(`External page is missing: ${url}`);
      } catch (error) { results.push({ url, status: "unverified", reason: error.cause?.code || error.message }); }
    }
  }));
  for (const result of results.sort((a, b) => a.url.localeCompare(b.url))) console.log(JSON.stringify(result));
  const limited = results.filter((item) => typeof item.status !== "number" || [401, 403, 429].includes(item.status) || item.status >= 500);
  if (limited.length) console.log(`${limited.length} external destinations limit or prevent automated verification; inspect these after publishing.`);
}
if (failures.length) { console.error(failures.join("\n")); process.exitCode = 1; }
else console.log("No missing local assets, broken internal links, missing anchors, filename-case errors, or malformed contact links.");
