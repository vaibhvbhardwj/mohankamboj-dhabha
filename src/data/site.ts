import siteConfig from "../../site.config.json";

// The public domain is shared with the production build; hosts may override it.
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || siteConfig.url;
const parsedUrl = new URL(configuredUrl);
if (!["http:", "https:"].includes(parsedUrl.protocol) || parsedUrl.username || parsedUrl.password || parsedUrl.pathname !== "/" || parsedUrl.search || parsedUrl.hash) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, credentials, query, or fragment.");
}

export const siteUrl = parsedUrl.origin;
export const isPublicSite = process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_INDEXABLE !== "false" && parsedUrl.protocol === "https:"
  && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(parsedUrl.hostname)
  && !/(^|\.)(example\.(com|org|net)|example|test|invalid|localhost)$/.test(parsedUrl.hostname);
