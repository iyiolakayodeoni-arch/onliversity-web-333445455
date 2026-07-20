"use client";

import { useEffect, useRef } from "react";

/**
 * Intersection Observer hook for scroll-triggered fade-up animations.
 * Adds the 'visible' class when elements scroll into view.
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe the element and all .fade-up children
    const fadeEls = el.querySelectorAll(".fade-up");
    fadeEls.forEach((child) => observer.observe(child));
    if (el.classList.contains("fade-up")) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
