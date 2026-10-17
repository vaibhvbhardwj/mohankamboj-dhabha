"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { usePageLoading } from "@/components/PageLoading";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const height = document.documentElement.scrollHeight - innerHeight;
      const progress = height > 0 ? Math.min(1, Math.max(0, scrollY / height)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return <div className="scroll-progress-container" aria-hidden="true"><div ref={barRef} className="scroll-progress-bar" /></div>;
}

const revealSelector = [
  ".page-hero > .container", ".section-header", ".story-grid > *",
  ".atmosphere-grid > *", ".stay-grid > *", ".food-card", ".facility-card",
  ".room-card", ".route-strip article", ".founder-tribute-copy", ".founder-frame-wrapper",
  ".heritage-copy", ".heritage-photo-stage", ".reel-card", ".location-grid > *",
  ".menu-card", ".gallery-tile", ".brochure-preview-card", ".faq-list > details",
  ".gallery-marquee-copy", ".reels-heading", ".final-grid > *", ".legal-panel"
].join(", ");

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { loading } = usePageLoading();

  useEffect(() => {
    if (loading) return;
    const main = document.getElementById("main");
    if (!main) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pending = new Set<HTMLElement>();
    const observed = new WeakSet<HTMLElement>();
    const reveal = (target: HTMLElement) => {
      target.classList.add("is-revealed");
      pending.delete(target);
      observer.unobserve(target);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) reveal(entry.target as HTMLElement); });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

    function register() {
      main!.querySelectorAll<HTMLElement>(revealSelector).forEach((target) => {
        if (observed.has(target)) return;
        observed.add(target);
        // Avoid nested transforms, especially around fixed controls and dialogs.
        if (target.parentElement?.closest(revealSelector)) return;
        if (motion.matches || target.getBoundingClientRect().bottom <= 0) return;
        target.classList.add("reveal-init");
        pending.add(target);
        observer.observe(target);
      });
    }
    const showAll = () => { if (motion.matches) pending.forEach(reveal); };
    // Filtered menu and gallery results are registered as they arrive.
    const updates = new MutationObserver(register);
    updates.observe(main, { childList: true, subtree: true });
    motion.addEventListener("change", showAll);
    register();
    return () => {
      observer.disconnect();
      updates.disconnect();
      motion.removeEventListener("change", showAll);
      pending.forEach((target) => target.classList.add("is-revealed"));
    };
  }, [pathname, loading]);

  return <>{children}</>;
}
