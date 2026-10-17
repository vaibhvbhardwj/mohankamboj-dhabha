import type { MetadataRoute } from "next";
import { routes } from "@/data/navigation";
import { canonical } from "@/data/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: canonical(route.href),
    changeFrequency: route.href === "/" ? "weekly" : "monthly",
    priority: route.href === "/" ? 1 : 0.7
  }));
}

