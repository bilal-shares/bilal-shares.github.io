"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals `[data-reveal]` elements as they enter the viewport.
 *
 * The hidden starting state is applied by CSS before first paint (see
 * theme-script.tsx), so nothing flashes in and back out the way a
 * JS-driven fromTo animation does.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-reveal-ready", "");

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)"),
    );
    if (nodes.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Reveal on entry, and also for anything already scrolled past —
          // otherwise deep links and restored scroll positions leave blank
          // sections above the fold.
          const alreadyPassed = entry.boundingClientRect.bottom < 0;
          if (!entry.isIntersecting && !alreadyPassed) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
