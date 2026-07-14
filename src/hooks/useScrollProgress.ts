"use client";

import { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(percentage);
    };

    calculateProgress();

    window.addEventListener("scroll", calculateProgress);

    window.addEventListener("resize", calculateProgress);

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, []);

  return progress;
}