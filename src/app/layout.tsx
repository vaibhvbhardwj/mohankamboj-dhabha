import type { Metadata, Viewport } from "next";
import "./globals.css";
import { business } from "@/data/business";
import { isPublicSite } from "@/data/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyActionBar } from "@/components/StickyActionBar";
import { SiteChrome } from "@/components/SiteChrome";
import { LoadingContent, PageLoadingProvider } from "@/components/PageLoading";
import { ScrollProgressBar, ScrollRevealProvider } from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  metadataBase: new URL(business.canonicalBaseUrl),
  title: {
    default: "Mohan Kamboj Dhaba & Hotel",
    template: "%s"
  },
  description: "Pure-vegetarian Murthal dining, rooms, parking and EV charging on NH-44.",
  applicationName: business.name,
  category: "travel",
  creator: business.name,
  icons: { icon: "/images/mk-logo.png", apple: "/images/mk-logo.png" },
  robots: {
    index: isPublicSite,
    follow: true,
    googleBot: { index: isPublicSite, follow: true, "max-image-preview": "large" }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBF7EF"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body>
        <ScrollProgressBar />
        <PageLoadingProvider>
          <SiteChrome>
            <SiteHeader />
            <main id="main" tabIndex={-1}>
              <LoadingContent>
                <ScrollRevealProvider>
                  {children}
                </ScrollRevealProvider>
              </LoadingContent>
            </main>
            <SiteFooter />
            <StickyActionBar />
          </SiteChrome>
        </PageLoadingProvider>
        <noscript><style>{`.page-loading-screen { display: none !important; }`}</style></noscript>
      </body>
    </html>
  );
}

