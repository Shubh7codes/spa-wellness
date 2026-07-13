"use client";

import { NAV_LINKS } from "@/constants/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="
            group
            relative
            text-sm
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#403A37]
            transition-all
            duration-300
            hover:text-[#A44E4B]
          "
        >
          {link.label}

          <span
            className="
              absolute
              -bottom-2
              left-0
              h-[2px]
              w-0
              rounded-full
              bg-[#A44E4B]
              transition-all
              duration-300
              group-hover:w-full
            "
          />
        </a>
      ))}
    </nav>
  );
}