"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { BENEFITS } from "@/constants/benefits";

import WhyCard from "./WhyCard";

export default function WhyChoose() {
  return (
    <section
      id="wellness"
      className="bg-[#F8F3EC] py-32"
    >
      <Container>
        <div className="grid gap-20 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="
                rounded-full
                bg-[#F1E6DD]
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#A44E4B]
              "
            >
              Why Choose Us
            </span>

            <h2
              className="
                mt-8
                font-heading
                text-5xl
                leading-tight
                text-[#2B2623]
                lg:text-6xl
              "
            >
              Every Visit Is
              <br />
              Designed Around
              <br />
              Your Wellbeing.
            </h2>

            <p
              className="
                mt-8
                max-w-lg
                text-lg
                leading-8
                text-[#6B625D]
              "
            >
              At SERANE, wellness isn&apos;t simply a treatment—
              it&apos;s a carefully crafted journey. Every detail,
              from the atmosphere to the therapies, is designed
              to help you reconnect with yourself.
            </p>

            <div className="mt-16 flex gap-12">
              <div>
                <h3 className="font-heading text-5xl text-[#A44E4B]">
                  15+
                </h3>

                <p className="mt-2 text-[#6B625D]">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="font-heading text-5xl text-[#A44E4B]">
                  5K+
                </h3>

                <p className="mt-2 text-[#6B625D]">
                  Happy Guests
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2">
            {BENEFITS.map((benefit, index) => (
              <WhyCard
                key={benefit.title}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}