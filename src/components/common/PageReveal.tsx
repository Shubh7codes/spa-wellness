"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface PageRevealProps {
  children: ReactNode;
}

export default function PageReveal({
  children,
}: PageRevealProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}