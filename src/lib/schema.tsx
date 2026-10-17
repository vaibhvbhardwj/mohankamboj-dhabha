import { business } from "@/data/business";
import { faqs } from "@/data/faqs";
import { canonical, pageSeo, type RoutePath } from "@/data/seo";
import { routes } from "@/data/navigation";

type SchemaProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function baseSchemas(path: RoutePath = "/") {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${business.canonicalBaseUrl}/#website`,
    name: "Mohan Kamboj Dhaba & Hotel",
    url: canonical("/"),
    inLanguage: "en-IN",
    publisher: { "@id": `${business.canonicalBaseUrl}/#localbusiness` }
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "Hotel", "LocalBusiness"],
    "@id": `${business.canonicalBaseUrl}/#localbusiness`,
    name: "Mohan Kamboj Dhaba & Hotel",
    alternateName: "Mohan Kamboj Murthal",
    url: business.canonicalBaseUrl,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: "₹₹",
    servesCuisine: ["North Indian", "Punjabi", "Murthal Paranthas", "Pure Vegetarian"],
    foundingDate: String(business.establishedYear),
    logo: `${business.canonicalBaseUrl}/images/mk-logo.png`,
    founder: {
      "@type": "Person",
      name: "Late Shri Mohan Lal Kamboj Ji"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "NH 44",
      addressLocality: "Murthal, Sonipat",
      addressRegion: "Haryana",
      postalCode: business.postalCode,
      addressCountry: "IN"
    },
    geo: { "@type": "GeoCoordinates", ...business.geo },
    menu: canonical("/menu"),
    currenciesAccepted: "INR",
    hasMap: business.mapUrl,
    sameAs: Object.values(business.social).filter(Boolean),
    image: `${business.canonicalBaseUrl}/images/hero.jpeg`
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical(path)}#webpage`,
    url: canonical(path),
    name: pageSeo[path].title,
    description: pageSeo[path].description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${business.canonicalBaseUrl}/#website` },
    about: { "@id": `${business.canonicalBaseUrl}/#localbusiness` }
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonical("/")
      },
      ...(path === "/"
        ? []
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: routes.find((route) => route.href === path)?.label ?? path.replace("/", "").replaceAll("-", " "),
              item: canonical(path)
            }
          ])
    ]
  };

  return [website, localBusiness, webpage, breadcrumbs];
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
