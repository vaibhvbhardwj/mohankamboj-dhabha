import type { Metadata } from "next";
import { business } from "@/data/business";
import { canonical, pageSeo, type RoutePath } from "@/data/seo";

export function routeMetadata(path: RoutePath): Metadata {
  const seo = pageSeo[path];
  const socialImageSrc = "/images/hero.jpeg";
  const socialImageAlt = "Mohan Kamboj Dhaba & Hotel Murthal";

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: canonical(path) },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical(path),
      siteName: business.name,
      images: [{ url: socialImageSrc, width: 1024, height: 576, alt: socialImageAlt }],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [socialImageSrc]
    }
  };
}

