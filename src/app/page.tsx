import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Sections/Section1/Hero";
import { Services } from "@/components/Sections/Section2/Services";
import { IndustrialShowcase } from "@/components/Sections/Section3/IndustrialShowcase";
import { Expertise } from "@/components/Sections/Section4/Expertise";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <IndustrialShowcase />
        <Expertise />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  );
}
