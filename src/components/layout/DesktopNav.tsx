"use client";

import { NAV_LINKS } from "@/constants/navigation";
import useActiveSection from "@/hooks/useActiveSection";

export default function DesktopNav() {
  const activeSection = useActiveSection();

  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {NAV_LINKS.map((link) => {
        const sectionId = link.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <a
            key={link.href}
            href={link.href}
            className={`
              group
              relative
              text-sm
              font-medium
              uppercase
              tracking-[0.18em]
              transition-all
              duration-300
              ${
                isActive
                  ? "text-[#A44E4B]"
                  : "text-[#403A37] hover:text-[#A44E4B]"
              }
            `}
          >
            {link.label}

            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-[2px]
                rounded-full
                bg-[#A44E4B]
                transition-all
                duration-300
                ${
                  isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }
              `}
            />
          </a>
        );
      })}
    </nav>
  );
}