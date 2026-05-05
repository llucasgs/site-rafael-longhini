"use client";

import Image from "next/image";
import { useId, useState } from "react";
import {
  Bot,
  Boxes,
  ChevronDown,
  Factory,
  FlaskConical,
  Settings,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

type ServiceCard = {
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  accent: string;
  glow: string;
};

function ServiceItem({
  title,
  description,
  icon,
  accent,
  glow,
  toggleAriaLabel,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  glow: string;
  toggleAriaLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <article
      className="
        group relative h-full overflow-hidden rounded-[1.5rem]
        border border-white/10 bg-white/[0.035]
        backdrop-blur-xl transition-all duration-300
        hover:border-white/16
        hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]
      "
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${glow}`}
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 h-px
          bg-gradient-to-r from-transparent via-white/20 to-transparent
        "
      />

      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        aria-label={toggleAriaLabel}
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          relative z-10 flex w-full items-center gap-4
          p-5 text-left
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-orange-400/70
        "
      >
        <span
          className={`
            inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl
            border border-white/10 bg-black/20
            transition-all duration-300
            group-hover:scale-105
            ${accent}
          `}
        >
          {icon}
        </span>

        <h3 className="flex-1 text-base font-bold tracking-tight text-white sm:text-lg">
          {title}
        </h3>

        <ChevronDown
          size={21}
          aria-hidden="true"
          className={`
            shrink-0 text-slate-400 transition-transform duration-300
            ${isOpen ? "rotate-180 text-orange-300" : ""}
          `}
        />
      </button>

      <div
        id={contentId}
        className={`
          relative z-10 grid transition-all duration-300 ease-out
          ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-7 text-slate-300 sm:text-[0.96rem]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const { t } = useLanguage();

  const services: ServiceCard[] = [
    {
      titleKey: "services.items.productDevelopment.title",
      descriptionKey: "services.items.productDevelopment.description",
      icon: <Boxes size={24} aria-hidden="true" />,
      accent: "text-orange-300 group-hover:border-orange-400/30",
      glow: "bg-orange-500/10",
    },
    {
      titleKey: "services.items.reverseEngineering.title",
      descriptionKey: "services.items.reverseEngineering.description",
      icon: <Settings size={24} aria-hidden="true" />,
      accent: "text-sky-300 group-hover:border-sky-400/30",
      glow: "bg-sky-500/10",
    },
    {
      titleKey: "services.items.prototyping.title",
      descriptionKey: "services.items.prototyping.description",
      icon: <FlaskConical size={24} aria-hidden="true" />,
      accent: "text-orange-300 group-hover:border-orange-400/30",
      glow: "bg-orange-500/10",
    },
    {
      titleKey: "services.items.tooling.title",
      descriptionKey: "services.items.tooling.description",
      icon: <Wrench size={24} aria-hidden="true" />,
      accent: "text-sky-300 group-hover:border-sky-400/30",
      glow: "bg-sky-500/10",
    },
    {
      titleKey: "services.items.automation.title",
      descriptionKey: "services.items.automation.description",
      icon: <Bot size={24} aria-hidden="true" />,
      accent: "text-orange-300 group-hover:border-orange-400/30",
      glow: "bg-orange-500/10",
    },
    {
      titleKey: "services.items.industrialManagement.title",
      descriptionKey: "services.items.industrialManagement.description",
      icon: <Factory size={24} aria-hidden="true" />,
      accent: "text-sky-300 group-hover:border-sky-400/30",
      glow: "bg-sky-500/10",
    },
  ];

  return (
    <section
      id="services"
      aria-label={t("services.sectionAriaLabel")}
      className="relative overflow-hidden py-10 md:py-14 lg:py-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-8rem] top-[6rem] h-56 w-56 rounded-full bg-orange-500/8 blur-3xl" />
        <div className="absolute right-[-8rem] bottom-[4rem] h-64 w-64 rounded-full bg-sky-500/8 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionTitle
            title={t("services.title")}
            description={t("services.description")}
          />
        </ScrollReveal>

        <div
          className="
    grid items-stretch gap-6
    md:grid-cols-[0.9fr_1.1fr]
    xl:grid-cols-[0.85fr_1.15fr]
  "
        >
          <ScrollReveal>
            <div
              className="
    relative aspect-square w-full overflow-hidden rounded-[2rem]
    border border-white/10 bg-white/[0.035]
    shadow-[0_24px_90px_rgba(0,0,0,0.42)]
    backdrop-blur-xl
    md:aspect-auto md:h-full md:min-h-0
  "
            >
              <Image
                src="/Sections/Section2/3Dprinter.png"
                alt={t("services.imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-gradient-to-t from-[#0b0b0f]/70 via-transparent to-[#0b0b0f]/20
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute inset-x-0 top-0 h-px
                  bg-gradient-to-r from-transparent via-orange-400/45 to-transparent
                "
              />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {services.map((service, index) => {
              const title = t(service.titleKey);
              const delay =
                index % 3 === 0 ? "none" : index % 3 === 1 ? "sm" : "md";

              return (
                <ScrollReveal key={service.titleKey} delay={delay}>
                  <ServiceItem
                    title={title}
                    description={t(service.descriptionKey)}
                    icon={service.icon}
                    accent={service.accent}
                    glow={service.glow}
                    toggleAriaLabel={t("services.card.toggleAria", {
                      service: title,
                    })}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
