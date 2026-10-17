import nextEnv from "@next/env";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import siteConfig from "../site.config.json" with { type: "json" };

nextEnv.loadEnvConfig(process.cwd(), false);
const require = createRequire(import.meta.url);
try {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() || siteConfig.url;
  if (!value) throw new Error("Set NEXT_PUBLIC_SITE_URL to the final public HTTPS domain in .env.production.local or your hosting environment.");
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash
    || /^(localhost|127\.0\.0\.1|\[::1\])$/.test(url.hostname)
    || /(^|\.)(example\.(com|org|net)|example|test|invalid|localhost)$/.test(url.hostname)) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be the real public HTTPS origin, without a path or placeholder domain.");
  }
  const result = spawnSync(process.execPath, [require.resolve("next/dist/bin/next"), "build"], { stdio: "inherit", env: { ...process.env, NEXT_PUBLIC_SITE_URL: value } });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
  if (process.exitCode === 0) {
    const check = spawnSync(process.execPath, ["scripts/check-export.mjs"], { stdio: "inherit" });
    if (check.error) throw check.error;
    process.exitCode = check.status ?? 1;
  }
  if (process.exitCode === 0) {
    const links = spawnSync(process.execPath, ["scripts/check-links.mjs"], { stdio: "inherit", env: { ...process.env, NEXT_PUBLIC_SITE_URL: value } });
    if (links.error) throw links.error;
    process.exitCode = links.status ?? 1;
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
