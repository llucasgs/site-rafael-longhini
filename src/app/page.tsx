import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Sections/Section1/Hero";
import { IndustrialShowcase } from "@/components/Sections/Section2/IndustrialShowcase";
import { Services } from "@/components/Sections/Section3/Services";
import { Expertise } from "@/components/Sections/Section4/Expertise";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <IndustrialShowcase />
        <Services />
        <Expertise />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  );
}
