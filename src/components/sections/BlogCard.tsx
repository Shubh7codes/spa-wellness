"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

interface Blog {
  title: string;
  image: string;
  category: string;
  date: string;
}

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export default function BlogCard({
  blog,
  index,
}: BlogCardProps) {
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
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.1,
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
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
      "
    >
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
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
            left-5
            top-5
            rounded-full
            bg-white/80
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#A44E4B]
            backdrop-blur-xl
          "
        >
          {blog.category}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-3 text-[#8A7D74]">
          <CalendarDays size={16} />

          <span className="text-sm">
            {blog.date}
          </span>
        </div>

        <h3
          className="
            mt-5
            font-heading
            text-4xl
            leading-tight
            text-[#2B2623]
            transition-colors
            duration-300
            group-hover:text-[#A44E4B]
          "
        >
          {blog.title}
        </h3>

        <p
          className="
            mt-5
            leading-7
            text-[#6B625D]
          "
        >
          Explore expert wellness advice and practical self-care
          techniques to bring more balance, relaxation and vitality
          into your everyday life.
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
          Read Article

          <ArrowUpRight size={18} />
        </button>
      </div>
    </motion.article>
  );
}