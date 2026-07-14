"use client";

import {
  Award,
  HeartHandshake,
  Leaf,
  Star,
} from "lucide-react";

export default function GlassCard() {
  return (
    <div
      className="
        w-[320px]
        rounded-[30px]
        border
        border-white/30
        bg-white/20
        p-7
        shadow-[0_25px_70px_rgba(0,0,0,0.18)]
        backdrop-blur-3xl
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#6B625D]">
            Guest Rating
          </p>

          <h2 className="mt-2 text-6xl font-bold text-[#2B2623]">
            4.9
          </h2>

          <p className="text-[#6B625D]">
            Trusted by 5,000+ guests
          </p>
        </div>

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
          "
        >
          <Star fill="white" size={24} />
        </div>
      </div>

      <div className="my-6 h-px bg-white/30" />

      <div className="space-y-5">
        <div className="flex gap-4">
          <Award className="mt-1 text-[#A44E4B]" />

          <div>
            <h4 className="font-semibold text-[#2B2623]">
              Award Winning Spa
            </h4>

            <p className="mt-1 text-sm leading-6 text-[#6B625D]">
              Premium wellness experiences crafted with
              exceptional care.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <HeartHandshake className="mt-1 text-[#A44E4B]" />

          <div>
            <h4 className="font-semibold text-[#2B2623]">
              Personalized Rituals
            </h4>

            <p className="mt-1 text-sm leading-6 text-[#6B625D]">
              Every treatment is tailored for your body
              and wellbeing.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Leaf className="mt-1 text-[#A44E4B]" />

          <div>
            <h4 className="font-semibold text-[#2B2623]">
              Natural Therapies
            </h4>

            <p className="mt-1 text-sm leading-6 text-[#6B625D]">
              Organic ingredients inspired by nature&apos;s
              healing touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}