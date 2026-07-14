"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import useScroll from "@/hooks/useScroll";

import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  const scrolled = useScroll();

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500
        ${scrolled ? "py-4" : "py-6"}
      `}
    >
      <Container>
        <div
          className={`
            flex
            h-20
            items-center
            justify-between
            rounded-full
            border
            px-8
            transition-all
            duration-500

            ${
              scrolled
                ? "border-white/40 bg-white/80 shadow-xl backdrop-blur-2xl"
                : "border-white/60 bg-white/65 backdrop-blur-xl"
            }
          `}
        >
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-3">
            <Button
              size="icon"
              className="
                hidden
                h-12
                w-12
                rounded-full
                bg-[#A44E4B]
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#8D403D]
                lg:flex
              "
            >
              <ArrowUpRight className="h-5 w-5" />
            </Button>

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}