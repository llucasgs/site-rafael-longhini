import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Sections/Section1/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="services" className="min-h-screen" />
        <section id="expertise" className="min-h-screen" />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  );
}
