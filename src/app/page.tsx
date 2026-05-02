import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-32">
        <section id="about" className="min-h-screen" />
        <section id="services" className="min-h-screen" />
        <section id="expertise" className="min-h-screen" />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  );
}
