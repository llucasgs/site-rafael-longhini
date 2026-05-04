"use client";

import {
  Bot,
  Boxes,
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
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  glow: string;
}) {
  return (
    <article
      className="
        group relative h-full overflow-hidden rounded-[1.75rem]
        border border-white/10 bg-white/[0.035] p-6
        backdrop-blur-xl transition-all duration-300
        hover:-translate-y-1.5 hover:border-white/16
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

      <div className="relative z-10">
        <div
          className={`
            mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl
            border border-white/10 bg-black/20
            transition-all duration-300
            group-hover:scale-105
            ${accent}
          `}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[0.96rem]">
          {description}
        </p>
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
      icon: <Boxes size={24} />,
      accent: "text-orange-300 group-hover:border-orange-400/30",
      glow: "bg-orange-500/10",
    },
    {
      titleKey: "services.items.reverseEngineering.title",
      descriptionKey: "services.items.reverseEngineering.description",
      icon: <Settings size={24} />,
      accent: "text-sky-300 group-hover:border-sky-400/30",
      glow: "bg-sky-500/10",
    },
    {
      titleKey: "services.items.prototyping.title",
      descriptionKey: "services.items.prototyping.description",
      icon: <FlaskConical size={24} />,
      accent: "text-orange-300 group-hover:border-orange-400/30",
      glow: "bg-orange-500/10",
    },
    {
      titleKey: "services.items.tooling.title",
      descriptionKey: "services.items.tooling.description",
      icon: <Wrench size={24} />,
      accent: "text-sky-300 group-hover:border-sky-400/30",
      glow: "bg-sky-500/10",
    },
    {
      titleKey: "services.items.automation.title",
      descriptionKey: "services.items.automation.description",
      icon: <Bot size={24} />,
      accent: "text-orange-300 group-hover:border-orange-400/30",
      glow: "bg-orange-500/10",
    },
    {
      titleKey: "services.items.industrialManagement.title",
      descriptionKey: "services.items.industrialManagement.description",
      icon: <Factory size={24} />,
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
          <SectionTitle eyebrow={t("services.eyebrow")}>
            {t("services.title")}
          </SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay="sm">
          <p
            className="
              mx-auto mb-12 max-w-3xl text-center text-base leading-8
              text-slate-300 md:mb-14
            "
          >
            {t("services.description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const delay =
              index % 3 === 0 ? "none" : index % 3 === 1 ? "sm" : "md";

            return (
              <ScrollReveal key={service.titleKey} delay={delay}>
                <ServiceItem
                  title={t(service.titleKey)}
                  description={t(service.descriptionKey)}
                  icon={service.icon}
                  accent={service.accent}
                  glow={service.glow}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
