import Container from "@/components/ui/Container";

import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#F8F3EC] pt-36 pb-20"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div className="max-w-xl">
            <HeroBadge />

            <HeroContent />

            <HeroStats />
          </div>

          {/* RIGHT */}

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}