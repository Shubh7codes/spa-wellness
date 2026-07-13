"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { SERVICES } from "@/constants/services";

import TreatmentCard from "./TreatmentCard";

export default function Treatments() {
  return (
    <section
      id="treatments"
      className="bg-white py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              rounded-full
              bg-[#F5ECE5]
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#A44E4B]
            "
          >
            Our Treatments
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
            Curated Wellness
            <br />
            Experiences
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-[#6B625D]
            "
          >
            Every treatment is thoughtfully designed to help you
            unwind, recharge and reconnect with yourself through
            luxurious wellness rituals.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => (
            <TreatmentCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}