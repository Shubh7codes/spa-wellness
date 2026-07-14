"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Phone,
} from "lucide-react";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function BookingCTA() {
  return (
    <section
      id="booking"
      className="bg-[#F8F3EC] py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            overflow-hidden
            rounded-[40px]
            bg-[#A44E4B]
            px-8
            py-12
            text-white
            lg:px-16
            lg:py-16
          "
        >
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.3em]
                "
              >
                Book Appointment
              </span>

              <h2
                className="
                  mt-8
                  font-heading
                  text-5xl
                  leading-tight
                  lg:text-6xl
                "
              >
                Your Wellness
                <br />
                Journey Starts
                <br />
                Today.
              </h2>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  leading-8
                  text-white/80
                "
              >
                Reserve your personalized spa experience and
                discover treatments designed to relax, restore
                and rejuvenate your body and mind.
              </p>

              <div className="mt-10">
                <button
  className="
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-white
    px-8
    py-4
    font-semibold
    text-[#A44E4B]
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-[#F7EFE8]
    hover:shadow-xl
  "
>
  Book Appointment
  <ArrowRight size={18} />
</button>
              </div>
            </div>

            {/* RIGHT */}

            <div
              className="
                rounded-[32px]
                border
                border-white/15
                bg-white/10
                p-8
                backdrop-blur-xl
              "
            >
              <h3 className="font-heading text-4xl">
                Opening Hours
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CalendarDays size={20} />

                    <span>Monday - Friday</span>
                  </div>

                  <span>09:00 - 20:00</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock3 size={20} />

                    <span>Saturday</span>
                  </div>

                  <span>10:00 - 18:00</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone size={20} />

                    <span>Reservations</span>
                  </div>

                  <span>+1 (800) 555-0198</span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                  Today's Availability
                </p>

                <h4 className="mt-2 text-3xl font-heading">
                  6 Slots Remaining
                </h4>

                <p className="mt-3 text-white/75">
                  Reserve now to secure your preferred
                  appointment time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}