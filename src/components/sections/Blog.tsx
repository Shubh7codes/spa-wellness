"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { BLOGS } from "@/constants/blogs";

import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-white py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-[#F4EBE3]
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#A44E4B]
            "
          >
            Wellness Journal
          </span>

          <h2
            className="
              mt-8
              font-heading
              text-5xl
              leading-tight
              text-[#2B2623]
              lg:text-6xl
            "
          >
            Latest Insights
            <br />
            From SERANE
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-[#6B625D]
            "
          >
            Discover wellness tips, self-care rituals and expert
            guidance designed to help you feel your best every day.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {BLOGS.map((blog, index) => (
            <BlogCard
              key={blog.title}
              blog={blog}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}