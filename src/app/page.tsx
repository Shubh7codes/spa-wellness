import Header from "@/components/layout/Header";

import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import BookingCTA from "@/components/sections/BookingCTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Treatments from "@/components/sections/Treatments";
import WhyChoose from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Treatments />

        <WhyChoose />

        <Testimonials />

        <BookingCTA />

        <Blog />
      </main>

      <Footer />
    </>
  );
}