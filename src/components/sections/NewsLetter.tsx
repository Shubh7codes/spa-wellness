"use client";

import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-white/10
        p-8
        backdrop-blur-xl
      "
    >
      <span
        className="
          text-xs
          uppercase
          tracking-[0.3em]
          text-white/70
        "
      >
        Newsletter
      </span>

      <h3
        className="
          mt-5
          font-heading
          text-4xl
          leading-tight
          text-white
        "
      >
        Join Our
        <br />
        Wellness Journal
      </h3>

      <p
        className="
          mt-5
          leading-7
          text-white/75
        "
      >
        Receive exclusive spa offers, wellness tips and
        seasonal treatment updates directly in your inbox.
      </p>

      <form className="mt-8 space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          className="
            h-14
            w-full
            rounded-full
            border
            border-white/20
            bg-white/10
            px-6
            text-white
            outline-none
            placeholder:text-white/50
          "
        />

        <button
          className="
            flex
            h-14
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            bg-white
            font-semibold
            text-[#A44E4B]
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          Subscribe

          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}