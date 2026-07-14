"use client";

import { RefObject, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  scrub?: boolean;
}

export default function useReveal(
  ref: RefObject<HTMLElement | null>,
  options: RevealOptions = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: options.y ?? 60,
        x: options.x ?? 0,
        opacity: options.opacity ?? 0,
        duration: options.duration ?? 1,
        delay: options.delay ?? 0,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
          scrub: options.scrub ?? false,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, options]);
}