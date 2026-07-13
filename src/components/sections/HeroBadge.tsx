"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="inline-flex"
    >
      <div
        className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-[#E8DED4]
          bg-white/70
          px-5
          py-3
          shadow-lg
          backdrop-blur-xl
        "
      >
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-[#A44E4B]
            text-white
          "
        >
          <Sparkles size={15} />
        </div>

        <span
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#5F5651]
          "
        >
          Luxury Spa & Wellness
        </span>
      </div>
    </motion.div>
  );
}