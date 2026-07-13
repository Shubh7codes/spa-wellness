"use client";

import { Award, Leaf, Sparkles } from "lucide-react";

export default function ExperienceCard() {
  return (
    <div
      className="
        w-[300px]
        rounded-[28px]
        border
        border-white/40
        bg-white/80
        p-6
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        backdrop-blur-xl
      "
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#A44E4B]">
            Experience
          </p>

          <h3 className="mt-2 font-heading text-5xl text-[#2B2623]">
            15+
          </h3>
        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#A44E4B]
            text-white
          "
        >
          <Award size={24} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles
            className="text-[#A44E4B]"
            size={18}
          />

          <span className="text-[#2B2623]">
            Luxury Spa Rituals
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Leaf
            className="text-[#A44E4B]"
            size={18}
          />

          <span className="text-[#2B2623]">
            Organic Treatments
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Award
            className="text-[#A44E4B]"
            size={18}
          />

          <span className="text-[#2B2623]">
            Certified Therapists
          </span>
        </div>
      </div>

      <div className="mt-6 border-t border-[#E9DED3] pt-5">
        <p className="text-sm leading-7 text-[#6B625D]">
          Trusted by thousands of guests seeking relaxation,
          rejuvenation and holistic wellness since 2008.
        </p>
      </div>
    </div>
  );
}