"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed
            bottom-8
            right-8
            z-[999]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-[#A44E4B]
            text-white
            shadow-[0_20px_45px_rgba(164,78,75,0.35)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:bg-[#8F423F]
          "
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}