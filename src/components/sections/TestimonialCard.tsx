"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Props {
  index: number;
  testimonial: {
    name: string;
    role: string;
    review: string;
    image: string;
  };
}

export default function TestimonialCard({
  testimonial,
  index,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
      }}
      className="
        group
        rounded-[34px]
        border
        border-[#ECE3DA]
        bg-[#FCF9F5]
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold text-[#2B2623]">
              {testimonial.name}
            </h3>

            <p className="mt-1 text-sm text-[#7A706A]">
              {testimonial.role}
            </p>
          </div>
        </div>

        <Quote
          className="text-[#A44E4B]/20"
          size={42}
        />
      </div>

      <div className="mt-8 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="#F5B942"
            color="#F5B942"
          />
        ))}
      </div>

      <p
        className="
          mt-6
          leading-8
          text-[#6B625D]
        "
      >
        &quot;{testimonial.review}&quot;
      </p>
    </motion.article>
  );
}