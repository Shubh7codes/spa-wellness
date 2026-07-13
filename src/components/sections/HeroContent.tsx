"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import PrimaryButton from "@/components/ui/PrimaryButton";

export default function HeroContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          className="
            mt-6
            font-heading
            text-5xl
            font-semibold
            leading-[0.95]
            text-[#2B2623]
            sm:text-6xl
            lg:text-7xl
          "
        >
          Escape Into
          <br />
          Complete
          <br />
          Serenity
        </h1>

        <p
          className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-[#6B625D]
          "
        >
          Discover restorative spa rituals, holistic wellness
          therapies and luxurious treatments designed to renew
          your body, calm your mind and elevate your everyday
          wellbeing.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.7,
        }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <PrimaryButton>
          Reserve Your Escape
          <ArrowRight size={18} />
        </PrimaryButton>

        <button
          className="
            group
            flex
            items-center
            gap-4
            rounded-full
            border
            border-[#D9CEC2]
            bg-white/60
            px-6
            py-4
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-white
            hover:shadow-lg
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#A44E4B]
              text-white
              transition-transform
              group-hover:scale-105
            "
          >
            <Play
              size={16}
              fill="white"
            />
          </div>

          <span className="font-medium text-[#2B2623]">
            Watch Story
          </span>
        </button>
      </motion.div>
    </>
  );
}