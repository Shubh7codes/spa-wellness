import Container from "@/components/ui/Container";

import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FCF8F3] py-28"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutContent />

          <AboutGallery />
        </div>
      </Container>
    </section>
  );
}