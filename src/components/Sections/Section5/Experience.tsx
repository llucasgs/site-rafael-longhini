"use client";

import Image from "next/image";
import { Fragment, useId, useState } from "react";
import { CalendarDays, ChevronDown, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

type ExperienceItem = {
  companyKey: string;
  roleKey: string;
  periodKey: string;
  locationKey: string;
  descriptionKey: string;
  logoSrc: string;
  logoAltKey: string;
  accent: string;
  glow: string;
  isCurrent?: boolean;
};

function ExperienceCard({
  company,
  role,
  period,
  location,
  description,
  logoSrc,
  logoAlt,
  accent,
  glow,
  toggleAriaLabel,
  currentLabel,
  isCurrent = false,
}: {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  accent: string;
  glow: string;
  toggleAriaLabel: string;
  currentLabel: string;
  isCurrent?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <article
      className="
        group relative overflow-hidden rounded-[1.5rem]
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
          relative z-10 flex w-full items-start gap-4
          p-5 text-left
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-orange-400/70
        "
      >
        <span
          className={`
            inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full
            border border-white/10 bg-black/20 p-1.5
            transition-all duration-300
            group-hover:scale-105
            ${accent}
          `}
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={1080}
            height={1080}
            className="h-full w-full object-contain"
          />
        </span>

        <span className="flex flex-1 flex-col">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-base font-bold tracking-tight text-white sm:text-lg">
              {company}
            </span>

            {isCurrent && (
              <span
                className="
                  rounded-full border border-orange-400/25
                  bg-orange-400/10 px-2.5 py-1
                  text-[0.65rem] font-bold uppercase tracking-[0.16em]
                  text-orange-300
                "
              >
                {currentLabel}
              </span>
            )}
          </span>

          <span className="mt-1 text-sm font-medium text-slate-300">
            {role}
          </span>

          <span className="mt-3 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} aria-hidden="true" />
              {period}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" />
              {location}
            </span>
          </span>
        </span>

        <ChevronDown
          size={21}
          aria-hidden="true"
          className={`
            mt-1 shrink-0 text-slate-400 transition-transform duration-300
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

export function Experience() {
  const { t } = useLanguage();

  const experiences: ExperienceItem[] = [
    {
      companyKey: "experience.items.longhini.company",
      roleKey: "experience.items.longhini.role",
      periodKey: "experience.items.longhini.period",
      locationKey: "experience.items.longhini.location",
      descriptionKey: "experience.items.longhini.description",
      logoSrc: "/Sections/Section5/logoLonghini.svg",
      logoAltKey: "experience.items.longhini.logoAlt",
      accent: "text-orange-300 group-hover:border-orange-400/30",
      glow: "bg-orange-500/10",
      isCurrent: true,
    },
    {
      companyKey: "experience.items.arteres.company",
      roleKey: "experience.items.arteres.role",
      periodKey: "experience.items.arteres.period",
      locationKey: "experience.items.arteres.location",
      descriptionKey: "experience.items.arteres.description",
      logoSrc: "/Sections/Section5/logoArteres.svg",
      logoAltKey: "experience.items.arteres.logoAlt",
      accent: "text-sky-300 group-hover:border-sky-400/30",
      glow: "bg-sky-500/10",
    },
    {
      companyKey: "experience.items.cardenas.company",
      roleKey: "experience.items.cardenas.role",
      periodKey: "experience.items.cardenas.period",
      locationKey: "experience.items.cardenas.location",
      descriptionKey: "experience.items.cardenas.description",
      logoSrc: "/Sections/Section5/logoCardenas.svg",
      logoAltKey: "experience.items.cardenas.logoAlt",
      accent: "text-orange-300 group-hover:border-orange-400/30",
      glow: "bg-orange-500/10",
    },
    {
      companyKey: "experience.items.amemiya.company",
      roleKey: "experience.items.amemiya.role",
      periodKey: "experience.items.amemiya.period",
      locationKey: "experience.items.amemiya.location",
      descriptionKey: "experience.items.amemiya.description",
      logoSrc: "/Sections/Section5/logoAmemiya.svg",
      logoAltKey: "experience.items.amemiya.logoAlt",
      accent: "text-sky-300 group-hover:border-sky-400/30",
      glow: "bg-sky-500/10",
    },
  ];

  return (
    <section
      id="experience"
      aria-label={t("experience.sectionAriaLabel")}
      className="relative overflow-hidden py-10 md:py-14 lg:py-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-8rem] top-[8rem] h-64 w-64 rounded-full bg-orange-500/7 blur-3xl animate-glow-orange" />
        <div className="absolute bottom-[5rem] right-[-10rem] h-72 w-72 rounded-full bg-sky-500/7 blur-3xl animate-glow-blue" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionTitle
            title={t("experience.title")}
            description={t("experience.description")}
          />
        </ScrollReveal>

        <div className="relative mx-auto max-w-3xl md:hidden">
          <div
            aria-hidden="true"
            className="
              absolute left-6 top-0 h-full w-px
              bg-gradient-to-b from-transparent via-orange-400/30 to-transparent
            "
          />

          <div className="grid gap-4">
            {experiences.map((experience, index) => {
              const company = t(experience.companyKey);
              const delay =
                index % 3 === 0 ? "none" : index % 3 === 1 ? "sm" : "md";

              return (
                <ScrollReveal key={experience.companyKey} delay={delay}>
                  <div className="relative pl-16">
                    <div
                      aria-hidden="true"
                      className="
                        absolute left-[1.15rem] top-7 h-3.5 w-3.5
                        rounded-full border border-orange-400/40
                        bg-[#0b0b0f] shadow-[0_0_24px_rgba(251,146,60,0.35)]
                      "
                    />

                    <ExperienceCard
                      company={company}
                      role={t(experience.roleKey)}
                      period={t(experience.periodKey)}
                      location={t(experience.locationKey)}
                      description={t(experience.descriptionKey)}
                      logoSrc={experience.logoSrc}
                      logoAlt={t(experience.logoAltKey)}
                      accent={experience.accent}
                      glow={experience.glow}
                      isCurrent={experience.isCurrent}
                      currentLabel={t("experience.card.current")}
                      toggleAriaLabel={t("experience.card.toggleAria", {
                        experience: company,
                      })}
                    />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto hidden max-w-6xl md:block">
          <div className="grid grid-cols-[1fr_3rem_1fr] gap-y-8">
            {experiences.map((experience, index) => {
              const company = t(experience.companyKey);
              const isLeft = index % 2 === 0;
              const delay =
                index % 3 === 0 ? "none" : index % 3 === 1 ? "sm" : "md";

              return (
                <Fragment key={experience.companyKey}>
                  <ScrollReveal
                    delay={delay}
                    className="flex items-center pr-4"
                  >
                    {isLeft && (
                      <ExperienceCard
                        company={company}
                        role={t(experience.roleKey)}
                        period={t(experience.periodKey)}
                        location={t(experience.locationKey)}
                        description={t(experience.descriptionKey)}
                        logoSrc={experience.logoSrc}
                        logoAlt={t(experience.logoAltKey)}
                        accent={experience.accent}
                        glow={experience.glow}
                        isCurrent={experience.isCurrent}
                        currentLabel={t("experience.card.current")}
                        toggleAriaLabel={t("experience.card.toggleAria", {
                          experience: company,
                        })}
                      />
                    )}
                  </ScrollReveal>

                  <div className="relative flex flex-col items-center">
                    <div
                      aria-hidden="true"
                      className="
                        w-px flex-1
                        bg-gradient-to-b from-transparent to-orange-400/30
                      "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        z-10 my-1 h-3.5 w-3.5 shrink-0 rounded-full
                        border border-orange-400/40
                        bg-[#0b0b0f]
                        shadow-[0_0_24px_rgba(251,146,60,0.35)]
                      "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        w-px flex-1
                        bg-gradient-to-b from-orange-400/30 to-transparent
                      "
                    />
                  </div>

                  <ScrollReveal
                    delay={delay}
                    className="flex items-center pl-4"
                  >
                    {!isLeft && (
                      <ExperienceCard
                        company={company}
                        role={t(experience.roleKey)}
                        period={t(experience.periodKey)}
                        location={t(experience.locationKey)}
                        description={t(experience.descriptionKey)}
                        logoSrc={experience.logoSrc}
                        logoAlt={t(experience.logoAltKey)}
                        accent={experience.accent}
                        glow={experience.glow}
                        isCurrent={experience.isCurrent}
                        currentLabel={t("experience.card.current")}
                        toggleAriaLabel={t("experience.card.toggleAria", {
                          experience: company,
                        })}
                      />
                    )}
                  </ScrollReveal>
                </Fragment>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
