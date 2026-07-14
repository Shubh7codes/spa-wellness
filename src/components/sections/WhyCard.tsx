"use client";

import { motion } from "framer-motion";
import {
  Award,
  Leaf,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

const icons = [
  Award,
  Leaf,
  Sparkles,
  HeartHandshake,
];

interface Props {
  index: number;
  benefit: {
    title: string;
    description: string;
  };
}

export default function WhyCard({
  benefit,
  index,
}: Props) {
  const Icon = icons[index % icons.length];

  return (
    <motion.div
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
        rounded-[32px]
        border
        border-[#E8DED4]
        bg-white/70
        p-8
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#A44E4B]
          text-white
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <Icon size={28} />
      </div>

      <h3
        className="
          mt-8
          font-heading
          text-4xl
          text-[#2B2623]
        "
      >
        {benefit.title}
      </h3>

      <p
        className="
          mt-5
          leading-8
          text-[#6B625D]
        "
      >
        {benefit.description}
      </p>
    </motion.div>
  );
}