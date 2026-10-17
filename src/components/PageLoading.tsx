"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/LoadingScreen";
import { RouteErrorMessage } from "@/components/RouteErrorMessage";

const MINIMUM_LOADING_MS = 2500;
const LOAD_TIMEOUT_MS = 15000;

type Navigation = { id: number; from: string; to: string; href: string };
type LoadingState = {
  loading: boolean;
  startNavigation: (href: string) => void;
  timedOut: boolean;
  routeError: boolean;
  retry: () => void;
};
const LoadingContext = createContext<LoadingState>({ loading: false, startNavigation: () => {}, timedOut: false, routeError: false, retry: () => {} });
export const usePageLoading = () => useContext(LoadingContext);
const normalizePath = (path: string) => path.replace(/\/$/, "") || "/";
const subscribeHydration = () => () => {};

function LoadingBoundary({ children, pathname, navigation, initial, startNavigation, getNavigationStart }: {
  children: React.ReactNode;
  pathname: string;
  navigation: Navigation | null;
  initial: boolean;
  startNavigation: (href: string) => void;
  getNavigationStart: (id: number) => number;
}) {
  const [phase, setPhase] = useState<"loading" | "ready" | "timeout" | "route-error">("loading");
  const shellRef = useRef<HTMLDivElement>(null);
  const hydrated = useSyncExternalStore(subscribeHydration, () => true, () => false);
  const loading = phase === "loading";
  const pendingNavigation = navigation?.from === pathname && navigation.to !== pathname;

  const retry = useCallback(() => {
    window.location.assign(navigation?.href ?? window.location.href);
  }, [navigation]);

  useEffect(() => {
    const firstPaint = performance.getEntriesByName("first-contentful-paint")[0]?.startTime;
    const startedAt = navigation ? getNavigationStart(navigation.id) : (initial ? firstPaint : undefined) ?? performance.now();
    const elapsed = () => performance.now() - startedAt;
    let finished = false;
    let minimumPassed = elapsed() >= MINIMUM_LOADING_MS;
    const imageListeners = new Map<HTMLImageElement, () => void>();
    const main = shellRef.current?.querySelector("#main");

    function finish(next: "ready" | "route-error" | "timeout") {
      if (finished) return;
      finished = true;
      clearTimeout(minimumTimer);
      clearTimeout(timeoutTimer);
      observer?.disconnect();
      imageListeners.forEach((listener, img) => {
        img.removeEventListener("load", listener);
        img.removeEventListener("error", listener);
      });
      setPhase(next);
    }

    function checkReady() {
      if (finished || pendingNavigation || !main) return;
      const routeFailed = Boolean(main.querySelector("[data-route-error]"));
      if (routeFailed) {
        if (minimumPassed) finish("route-error");
        return;
      }
      if (main.querySelector("[data-route-pending]")) return;

      // Wait for the first-view images, while leaving offscreen lazy media alone.
      const images = [...main.querySelectorAll<HTMLImageElement>('img:not([loading="lazy"])')];
      let imagesReady = true;
      images.forEach((img) => {
        if (img.complete && img.naturalWidth > 0) return;
        imagesReady = false;
        if (imageListeners.has(img)) return;
        const listener = () => checkReady();
        imageListeners.set(img, listener);
        img.addEventListener("load", listener);
        img.addEventListener("error", listener);
      });
      if (minimumPassed && imagesReady) finish("ready");
    }

    const minimumTimer = window.setTimeout(() => { minimumPassed = true; checkReady(); }, Math.max(0, MINIMUM_LOADING_MS - elapsed()));
    const timeoutTimer = window.setTimeout(() => finish("timeout"), Math.max(0, LOAD_TIMEOUT_MS - elapsed()));
    const observer = main ? new MutationObserver(checkReady) : null;
    observer?.observe(main!, { childList: true, subtree: true, attributes: true, attributeFilter: ["src", "srcset"] });
    checkReady();

    return () => {
      finished = true;
      clearTimeout(minimumTimer);
      clearTimeout(timeoutTimer);
      observer?.disconnect();
      imageListeners.forEach((listener, img) => {
        img.removeEventListener("load", listener);
        img.removeEventListener("error", listener);
      });
    };
  }, [navigation, pathname, pendingNavigation, initial, getNavigationStart]);

  useEffect(() => {
    if (loading) {
      document.documentElement.dataset.pageLoading = "true";
      return () => { delete document.documentElement.dataset.pageLoading; };
    }
    if (phase === "timeout" || phase === "route-error") window.scrollTo({ top: 0, behavior: "instant" });
    if (!navigation) return;
    const frame = requestAnimationFrame(() => document.getElementById("main")?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(frame);
  }, [loading, navigation, phase]);

  return (
    <LoadingContext.Provider value={{ loading, startNavigation, timedOut: phase === "timeout", routeError: phase === "route-error", retry }}>
      <div ref={shellRef} className="page-loading-shell" aria-busy={loading} inert={hydrated && loading}>
        {children}
      </div>
      {loading ? <LoadingScreen /> : null}
    </LoadingContext.Provider>
  );
}

export function PageLoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = normalizePath(usePathname());
  const [route, setRoute] = useState<{ pathname: string; initial: boolean; navigation: Navigation | null }>({ pathname, initial: true, navigation: null });
  const nextId = useRef(0);
  const navigationClock = useRef<{ id: number; startedAt: number } | null>(null);

  const getNavigationStart = useCallback((id: number) => {
    const existing = navigationClock.current;
    if (existing?.id === id) return existing.startedAt;
    const startedAt = performance.now();
    navigationClock.current = { id, startedAt };
    return startedAt;
  }, []);

  const startNavigation = useCallback((href: string) => {
    const destination = new URL(href, window.location.href);
    if (destination.origin !== window.location.origin || (destination.pathname === window.location.pathname && destination.search === window.location.search)) return;
    const navigation = { id: ++nextId.current, from: normalizePath(window.location.pathname), to: normalizePath(destination.pathname), href: destination.href };
    setRoute((current) => ({ ...current, initial: false, navigation }));
  }, []);

  // Keep the same loading cycle on arrival; history navigation gets a fresh one.
  if (route.pathname !== pathname) {
    setRoute({ pathname, initial: false, navigation: route.navigation?.to === pathname ? route.navigation : null });
  }

  return (
    <LoadingBoundary key={`${pathname}:${route.navigation?.id ?? 0}`} pathname={pathname} navigation={route.navigation} initial={route.initial} startNavigation={startNavigation} getNavigationStart={getNavigationStart}>
      {children}
    </LoadingBoundary>
  );
}

export function LoadingContent({ children }: { children: React.ReactNode }) {
  const { timedOut, retry } = usePageLoading();
  return timedOut ? <RouteErrorMessage onRetry={retry} /> : children;
}
