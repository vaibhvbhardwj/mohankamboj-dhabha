"use client";

import { useEffect, useRef } from "react";
import { usePageLoading } from "@/components/PageLoading";

export function HeroOpening({ children, className }: { children: React.ReactNode; className: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const { loading } = usePageLoading();

  useEffect(() => {
    const hero = heroRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (loading || !hero || motion.matches || window.scrollY > 10) return;

    // Start after the loading screen leaves, without changing the scroll position
    // or the photograph's existing size and focal point.
    let animation: Animation | undefined;
    const frame = requestAnimationFrame(() => {
      animation = hero.animate([
        { transform: "translateY(0)" },
        { transform: "translateY(-24px)" },
        { transform: "translateY(0)" }
      ], { duration: 1000, easing: "linear", iterations: 1 });
    });
    const cancel = () => { cancelAnimationFrame(frame); animation?.cancel(); };
    window.addEventListener("wheel", cancel, { passive: true, once: true });
    window.addEventListener("touchstart", cancel, { passive: true, once: true });
    window.addEventListener("keydown", cancel, { once: true });
    window.addEventListener("scroll", cancel, { passive: true, once: true });
    motion.addEventListener("change", cancel);
    return () => {
      cancel();
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancel);
      window.removeEventListener("scroll", cancel);
      motion.removeEventListener("change", cancel);
    };
  }, [loading]);

  return <section ref={heroRef} id="home-hero" className={className} aria-label="Welcome to Mohan Kamboj Dhaba & Hotel">{children}</section>;
}
