"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "about",
  "treatments",
  "wellness",
  "pricing",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTION_IDS.map((id) =>
        document.getElementById(id)
      ).filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 180;

      let current = "hero";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}