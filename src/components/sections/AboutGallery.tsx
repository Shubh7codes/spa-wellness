"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ExperienceCard from "./ExperienceCard";

export default function AboutGallery() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mx-auto w-full max-w-[620px]"
    >
      <div className="grid grid-cols-2 gap-6">
        {/* Large Image */}

        <div className="relative h-[520px] overflow-hidden rounded-[36px]">
          <Image
            src="/images/about/about-1.jpg"
            alt="Spa Massage"
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Image */}

          <div className="relative h-[245px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/about/about-2.jpg"
              alt="Facial Treatment"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Bottom Image */}

          <div className="relative h-[245px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/about/about-3.jpg"
              alt="Essential Oils"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Floating Experience Card */}

      <div className="absolute -bottom-12 left-8">
        <ExperienceCard />
      </div>
    </motion.div>
  );
}