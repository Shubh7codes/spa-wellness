"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3 } from "lucide-react";

interface Props {
  index: number;
  service: {
    title: string;
    duration: string;
    price: string;
    image: string;
  };
}

export default function TreatmentCard({
  service,
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
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
      }}
      className="
        group
        overflow-hidden
        rounded-[34px]
        border
        border-[#ECE3DA]
        bg-[#FCF9F5]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
      "
    >
      <div className="relative h-[340px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        <div
          className="
            absolute
            right-5
            top-5
            rounded-full
            bg-white/80
            px-4
            py-2
            text-sm
            font-semibold
            text-[#2B2623]
            backdrop-blur-xl
          "
        >
          {service.price}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 text-[#8A7D74]">
          <Clock3 size={17} />

          <span className="text-sm">
            {service.duration}
          </span>
        </div>

        <h3
          className="
            mt-4
            font-heading
            text-4xl
            text-[#2B2623]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-4
            leading-7
            text-[#6B625D]
          "
        >
          Experience a luxurious treatment designed to relax your
          body, restore your energy and elevate your wellbeing.
        </p>

        <button
          className="
            mt-8
            flex
            items-center
            gap-3
            font-semibold
            text-[#A44E4B]
            transition-all
            duration-300
            group-hover:gap-5
          "
        >
          Learn More

          <ArrowUpRight size={18} />
        </button>
      </div>
    </motion.article>
  );
}