"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationController() {
  const pathname = usePathname();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: "0px 0px -10px 0px" }
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(".rv:not(.in)").forEach((el, idx) => {
        el.style.transitionDelay = `${Math.min((idx % 6) * 45, 225)}ms`;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 80) {
          el.classList.add("in");
        } else {
          obs.observe(el);
        }
      });
    };

    scan();
    window.addEventListener("scroll", scan, { passive: true });

    const mo = new MutationObserver(() => {
      requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", scan);
      mo.disconnect();
      obs.disconnect();
    };
  }, [pathname]);

  return null;
}
