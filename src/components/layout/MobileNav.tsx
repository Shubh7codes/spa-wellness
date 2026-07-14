"use client";

import {
  CalendarDays,
  CircleDollarSign,
  Home,
  Leaf,
  Menu,
  Phone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileNav() {
  const links = [
    {
      title: "Home",
      href: "#hero",
      icon: Home,
    },
    {
      title: "About",
      href: "#about",
      icon: Leaf,
    },
    {
      title: "Treatments",
      href: "#treatments",
      icon: Sparkles,
    },
    {
      title: "Wellness",
      href: "#wellness",
      icon: Leaf,
    },
    {
      title: "Pricing",
      href: "#pricing",
      icon: CircleDollarSign,
    },
    {
      title: "Contact",
      href: "#contact",
      icon: Phone,
    },
  ];

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
            border-[#E8DDD5]
            bg-white/80
            shadow-sm
            backdrop-blur-xl
            transition
            hover:shadow-md
          "
        >
          <Menu size={20} />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="
            w-full
            max-w-[360px]
            border-l
            border-[#ECE2D8]
            bg-[#F8F3EC]
            px-7
            py-7
          "
        >
          {/* Brand */}

          <div className="mt-3 flex items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#A44E4B]
                text-xl
                font-semibold
                text-white
                shadow-md
              "
            >
              S
            </div>

            <div>
              <h2 className="font-heading text-4xl leading-none">
                SERANE
              </h2>

              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#7D736D]">
                Spa & Wellness
              </p>
            </div>
          </div>

          {/* Divider */}

          <div className="my-8 h-px bg-[#E7DDD5]" />

          {/* Navigation */}

          <nav className="space-y-2">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F2E8E0]
                      text-[#A44E4B]
                      transition-all
                      duration-300
                      group-hover:bg-[#A44E4B]
                      group-hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <span
                    className="
                      text-[17px]
                      font-medium
                      tracking-[0.08em]
                      text-[#2B2623]
                    "
                  >
                    {link.title}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Push Footer */}

          <div className="flex-1" />

          {/* CTA */}

          <a
            href="#booking"
            className="
              mt-10
              flex
              h-14
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#A44E4B]
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#934743]
            "
          >
            <CalendarDays size={18} />

            Book Appointment

            <ArrowUpRight size={18} />
          </a>

          {/* Footer */}

          <div className="mt-8 border-t border-[#E7DDD5] pt-6">
            <div className="flex justify-between">
              <a
                href="#"
                className="text-sm text-[#7D736D] hover:text-[#A44E4B]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-sm text-[#7D736D] hover:text-[#A44E4B]"
              >
                Facebook
              </a>

              <a
                href="#"
                className="text-sm text-[#7D736D] hover:text-[#A44E4B]"
              >
                Pinterest
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}