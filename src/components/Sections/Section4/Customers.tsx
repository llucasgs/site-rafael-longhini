"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

type CustomerLogo = {
  src: string;
  altKey: string;
};

const customers: CustomerLogo[] = [
  {
    src: "/Sections/Section4/logo01Colgate.svg",
    altKey: "customers.logos.colgate",
  },
  {
    src: "/Sections/Section4/logo02Tramontina.svg",
    altKey: "customers.logos.tramontina",
  },
  {
    src: "/Sections/Section4/logo03Bridgestone.svg",
    altKey: "customers.logos.bridgestone",
  },
  {
    src: "/Sections/Section4/logo04VigorAlimentos.svg",
    altKey: "customers.logos.vigor",
  },
  {
    src: "/Sections/Section4/logo05Valeo.svg",
    altKey: "customers.logos.valeo",
  },
  {
    src: "/Sections/Section4/logo06DormerPramet.svg",
    altKey: "customers.logos.dormerPramet",
  },
  {
    src: "/Sections/Section4/logo07Wheaton.svg",
    altKey: "customers.logos.wheaton",
  },
  {
    src: "/Sections/Section4/logo08Noar.svg",
    altKey: "customers.logos.noar",
  },
  {
    src: "/Sections/Section4/logo09Farmacap.svg",
    altKey: "customers.logos.farmacap",
  },
  {
    src: "/Sections/Section4/logo010Arteres-Estojos.svg",
    altKey: "customers.logos.arteresEstojos",
  },
];

export function Customers() {
  const { t } = useLanguage();

  return (
    <section
      id="customers"
      aria-label={t("customers.sectionAriaLabel")}
      className="relative overflow-hidden py-10 md:py-14 lg:py-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10rem] top-[7rem] h-64 w-64 rounded-full bg-orange-500/7 blur-3xl animate-glow-orange" />
        <div className="absolute bottom-[4rem] right-[-10rem] h-72 w-72 rounded-full bg-sky-500/7 blur-3xl animate-glow-blue" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionTitle
            title={t("customers.title")}
            description={t("customers.description")}
          />
        </ScrollReveal>

        <ul
          role="list"
          className="
            grid grid-cols-2 gap-4
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {customers.map((customer, index) => {
            const delay =
              index % 3 === 0 ? "none" : index % 3 === 1 ? "sm" : "md";

            return (
              <ScrollReveal key={customer.src} delay={delay}>
                <li
                  className="
                    group relative flex min-h-32 items-center justify-center
                    overflow-hidden rounded-[1.5rem]
                    border border-white/10 bg-white/[0.035]
                    p-5 backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-orange-400/25
                    hover:bg-white/[0.055]
                    hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]
                    sm:min-h-36
                    md:min-h-40
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-0 opacity-0 blur-2xl
                      transition-opacity duration-300
                      group-hover:opacity-100
                      bg-orange-500/10
                    "
                  />

                  <Image
                    src={customer.src}
                    alt={t(customer.altKey)}
                    width={180}
                    height={80}
                    unoptimized
                    className="
                      relative z-10 w-full
                      object-contain
                      transition-all duration-300
                      group-hover:scale-105
                    "
                  />
                </li>
              </ScrollReveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
