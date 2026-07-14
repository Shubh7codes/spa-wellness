"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { TESTIMONIALS } from "@/constants/testimonials";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            Testimonials
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
            Loved By
            <br />
            Every Guest
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
            Thousands of guests have trusted SERANE to help them
            relax, recharge and reconnect through premium wellness
            experiences.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}