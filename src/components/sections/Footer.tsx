"use client";

import Container from "@/components/ui/Container";

import Newsletter from "./NewsLetter";

export default function Footer() {
  return (
    <footer className="bg-[#2B2623] pt-28 text-white">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <Newsletter />

          <div className="grid gap-12 sm:grid-cols-3">
            <div>
              <h3 className="font-heading text-4xl">
                SERANE
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                Luxury spa and wellness experiences designed to
                restore harmony between body and mind.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">
                Explore
              </h4>

              <ul className="mt-6 space-y-4 text-white/70">
                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#treatments">Treatments</a>
                </li>

                <li>
                  <a href="#pricing">Pricing</a>
                </li>

                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">
                Contact
              </h4>

              <div className="mt-6 space-y-4 text-white/70">
                <p>+1 (800) 555-0198</p>

                <p>hello@serane.com</p>

                <p>
                  125 Wellness Avenue
                  <br />
                  California, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            mt-20
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-8
            text-sm
            text-white/60
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 SERANE. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#">Instagram</a>

            <a href="#">Facebook</a>

            <a href="#">Pinterest</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}