"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAV_LINKS } from "@/constants/navigation";

export default function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#E7DED5]
            bg-white/80
            shadow-sm
            backdrop-blur-xl
          "
        >
          <Menu size={20} />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[320px] border-l-[#ECE2D8] bg-[#F8F3EC]"
        >
          <div className="mt-16 flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-lg
                  uppercase
                  tracking-[0.15em]
                  text-[#2B2623]
                  transition-colors
                  hover:text-[#A44E4B]
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-[#A44E4B] p-6 text-white">
            <p className="text-sm uppercase tracking-[0.25em] opacity-80">
              SERANE
            </p>

            <h3 className="mt-3 font-heading text-4xl">
              Relax.
            </h3>

            <p className="mt-4 leading-7 text-white/80">
              Restore your mind, body and soul with handcrafted wellness
              experiences.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}