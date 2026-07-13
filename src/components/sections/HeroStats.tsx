"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Happy Guests",
  },
  {
    value: 4.9,
    suffix: "",
    label: "Average Rating",
    decimal: 1,
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.35,
        duration: 0.7,
      }}
      className="
        mt-16
        grid
        grid-cols-3
        gap-8
      "
    >
      {stats.map((item) => (
        <div key={item.label}>
          <h3
            className="
              font-heading
              text-5xl
              font-semibold
              text-[#2B2623]
            "
          >
            <CountUp
              end={item.value}
              decimals={item.decimal ?? 0}
              duration={2}
            />
            {item.suffix}
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-[#7A706A]
            "
          >
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}