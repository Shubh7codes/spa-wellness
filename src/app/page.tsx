import Header from "@/components/layout/Header";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Treatments from "@/components/sections/Treatments";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Treatments />
      </main>
    </>
  );
}