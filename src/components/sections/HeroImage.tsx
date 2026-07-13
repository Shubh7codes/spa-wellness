"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import GlassCard from "@/components/ui/GlassCard";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-[42px]
          shadow-[0_40px_100px_rgba(0,0,0,0.18)]
        "
      >
        <Image
          src="/images/hero/hero-1.jpg"
          alt="SERANE Spa & Wellness"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      </div>

      {/* Floating Card */}

      <div className="absolute -left-16 bottom-10 hidden xl:block">
        <GlassCard />
      </div>

      {/* Floating Circle */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          -right-8
          top-8
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-full
          border
          border-white/40
          bg-white/20
          text-center
          text-sm
          font-medium
          text-white
          backdrop-blur-2xl
        "
      >
        Since
        <br />
        2008
      </motion.div>
    </motion.div>
  );
}