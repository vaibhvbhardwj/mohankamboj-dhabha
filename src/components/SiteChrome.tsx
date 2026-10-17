"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { usePageLoading } from "@/components/PageLoading";

const HeroVisibilityContext = createContext(false);

export function useHeroVisibility() {
  return useContext(HeroVisibilityContext);
}

function HeroVisibilityBoundary({ children, isHome, ready }: { children: React.ReactNode; isHome: boolean; ready: boolean }) {
  // Match the initial server render so the regular header never flashes over the hero.
  const [heroInView, setHeroInView] = useState(isHome);

  useEffect(() => {
    if (!isHome || !ready) return;
    const hero = document.getElementById("home-hero");
    if (!hero) return;

    // A positive threshold also reports the exact edge at zero visible area.
    const observer = new IntersectionObserver(([entry]) => {
      setHeroInView(entry.isIntersecting && entry.boundingClientRect.bottom > 0);
    }, { threshold: [0, Number.EPSILON] });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome, ready]);

  return (
    <HeroVisibilityContext.Provider value={heroInView}>
      <div className={`site-chrome${isHome ? " site-chrome-home" : ""}${heroInView ? " site-chrome-hero" : ""}`}>
        {children}
      </div>
    </HeroVisibilityContext.Provider>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { loading, timedOut, routeError } = usePageLoading();
  const isHome = pathname === "/" && !timedOut && !routeError;
  return (
    <HeroVisibilityBoundary key={`${pathname}:${isHome}`} isHome={isHome} ready={!loading}>
      {children}
    </HeroVisibilityBoundary>
  );
}
