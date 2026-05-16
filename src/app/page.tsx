import { FloatingButtons } from "@/components/FloatingButtons/FloatingButtons";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Sections/Section1/Hero";
import { Services } from "@/components/Sections/Section2/Services";
import { Expertise } from "@/components/Sections/Section3/Expertise";
import { Customers } from "@/components/Sections/Section4/Customers";
import { Experience } from "@/components/Sections/Section5/Experience";
import { IndustrialModels } from "@/components/Sections/Section6/IndustrialModels";
import { Contact } from "@/components/Sections/Section7/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Expertise />
        <Customers />
        <Experience />
        <IndustrialModels />
        <Contact />{" "}
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
