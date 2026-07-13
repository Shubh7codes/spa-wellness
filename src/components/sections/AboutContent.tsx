"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";

const features = [
  "Luxury Spa Treatments",
  "Certified Wellness Therapists",
  "Organic Essential Oils",
  "Personalized Wellness Programs",
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <span
        className="
          inline-flex
          rounded-full
          bg-[#F4EBE3]
          px-5
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#A44E4B]
        "
      >
        About SERANE
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
        A Sanctuary Designed
        <br />
        For Complete Wellness.
      </h2>

      <p
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-[#6B625D]
        "
      >
        At SERANE, every experience is thoughtfully crafted to
        restore harmony between body and mind. Our therapies
        combine traditional healing rituals with modern luxury,
        creating moments of deep relaxation you'll remember long
        after your visit.
      </p>

      <div className="mt-10 grid gap-5">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-4"
          >
            <CheckCircle2
              className="text-[#A44E4B]"
              size={22}
            />

            <span
              className="
                text-lg
                font-medium
                text-[#2B2623]
              "
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <PrimaryButton>
          Discover Our Story

          <ArrowRight size={18} />
        </PrimaryButton>
      </div>
    </motion.div>
  );
}