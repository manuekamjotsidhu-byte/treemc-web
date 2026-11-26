"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationController() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (!els.length) return;

    els.forEach((el, idx) => {
      el.classList.remove("in");
      el.style.transitionDelay = `${Math.min((idx % 6) * 55, 275)}ms`;
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -20px 0px" }
    );

    els.forEach((el) => obs.observe(el));

    const fallback = setTimeout(() => {
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) el.classList.add("in");
      });
    }, 180);

    return () => {
      clearTimeout(fallback);
      obs.disconnect();
    };
  }, [pathname]);

  return null;
}
