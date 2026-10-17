import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { isPublicSite } from "@/data/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isPublicSite ? { allow: "/" } : { disallow: "/" })
    },
    ...(isPublicSite ? { sitemap: `${business.canonicalBaseUrl}/sitemap.xml` } : {})
  };
}

