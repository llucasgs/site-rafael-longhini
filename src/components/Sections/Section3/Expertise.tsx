"use client";

import dynamic from "next/dynamic";
import { useEffect, useId, useRef, useState } from "react";
import {
  BadgeCheck,
  Boxes,
  ChevronDown,
  ClipboardCheck,
  Factory,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const PrinterCanvas = dynamic(
  () =>
    import("@/components/Three/PrinterCanvas").then((mod) => mod.PrinterCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border border-white/15 border-t-orange-400" />
      </div>
    ),
  },
);

type AccordionCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  toggleAriaLabel: string;
  accentClass: string;
  glowClass: string;
  children?: React.ReactNode;
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="
        inline-flex items-center rounded-full
        border border-white/10 bg-white/[0.04]
        px-3 py-2 text-sm font-medium text-slate-300
        backdrop-blur-sm transition-colors duration-300
        hover:border-white/18 hover:text-white
      "
    >
      {children}
    </li>
  );
}

function AccordionCard({
  title,
  description,
  icon,
  toggleAriaLabel,
  accentClass,
  glowClass,
  children,
}: AccordionCardProps) {
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
        className={`absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${glowClass}`}
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
            ${accentClass}
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
          <div className="px-5 pb-5">
            <p className="text-sm leading-7 text-slate-300 sm:text-[0.96rem]">
              {description}
            </p>

            {children && <div className="mt-5">{children}</div>}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Expertise() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderCanvas(true);
          observer.unobserve(section);
        }
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const methods = [
    t("expertise.methods.kaizen"),
    t("expertise.methods.5s"),
    t("expertise.methods.pdca"),
    t("expertise.methods.lean"),
    t("expertise.methods.4m"),
    t("expertise.methods.ishikawa"),
    t("expertise.methods.5w2h"),
    t("expertise.methods.swot"),
  ];

  const standards = [
    t("expertise.standards.iso9001"),
    t("expertise.standards.iso14000"),
    t("expertise.standards.ohsas18000"),
    t("expertise.standards.nr08"),
    t("expertise.standards.nr10"),
    t("expertise.standards.nr12"),
    t("expertise.standards.nr17"),
  ];

  const technical = [
    t("expertise.technical.cadcam"),
    t("expertise.technical.solidworks"),
    t("expertise.technical.autocad"),
    t("expertise.technical.tooling"),
    t("expertise.technical.specialMachines"),
    t("expertise.technical.industrialAutomation"),
    t("expertise.technical.reverseEngineering"),
    t("expertise.technical.teamTraining"),
  ];

  return (
    <section
      ref={sectionRef}
      id="expertise"
      aria-label={t("expertise.sectionAriaLabel")}
      className="relative overflow-hidden py-10 md:py-14 lg:py-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[10%] h-64 w-64 rounded-full bg-orange-500/6 blur-3xl animate-glow-orange" />
        <div className="absolute right-[8%] top-[25%] h-72 w-72 rounded-full bg-sky-500/6 blur-3xl animate-glow-blue" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionTitle
            title={t("expertise.title")}
            description={t("expertise.description")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ScrollReveal>
            <AccordionCard
              title={t("expertise.groups.methods.title")}
              description={t("expertise.groups.methods.description")}
              icon={<Sparkles size={24} aria-hidden="true" />}
              toggleAriaLabel={t("expertise.card.toggleAria", {
                item: t("expertise.groups.methods.title"),
              })}
              accentClass="text-orange-300 group-hover:border-orange-400/30"
              glowClass="bg-orange-500/10"
            >
              <ul className="flex flex-wrap gap-2.5" role="list">
                {methods.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </ul>
            </AccordionCard>
          </ScrollReveal>

          <ScrollReveal delay="sm">
            <AccordionCard
              title={t("expertise.groups.standards.title")}
              description={t("expertise.groups.standards.description")}
              icon={<ShieldCheck size={24} aria-hidden="true" />}
              toggleAriaLabel={t("expertise.card.toggleAria", {
                item: t("expertise.groups.standards.title"),
              })}
              accentClass="text-sky-300 group-hover:border-sky-400/30"
              glowClass="bg-sky-500/10"
            >
              <ul className="flex flex-wrap gap-2.5" role="list">
                {standards.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </ul>
            </AccordionCard>
          </ScrollReveal>

          <ScrollReveal delay="md">
            <AccordionCard
              title={t("expertise.groups.technical.title")}
              description={t("expertise.groups.technical.description")}
              icon={<Factory size={24} aria-hidden="true" />}
              toggleAriaLabel={t("expertise.card.toggleAria", {
                item: t("expertise.groups.technical.title"),
              })}
              accentClass="text-orange-300 group-hover:border-orange-400/30"
              glowClass="bg-orange-500/10"
            >
              <ul className="flex flex-wrap gap-2.5" role="list">
                {technical.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </ul>
            </AccordionCard>
          </ScrollReveal>
        </div>

        <ScrollReveal delay="sm">
          <div
            aria-label={t("expertise.modelAriaLabel")}
            className="
              relative mt-6 overflow-hidden rounded-[2rem]
              border border-white/10 bg-white/[0.035]
              shadow-[0_24px_90px_rgba(0,0,0,0.42)]
              backdrop-blur-xl
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute inset-0
                bg-[linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)]
                bg-[size:44px_44px]
                [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]
              "
            />

            <div
              aria-hidden="true"
              className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-orange-500/12 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[-8rem] right-[-8rem] h-72 w-72 rounded-full bg-sky-500/12 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="
                absolute inset-x-0 top-0 h-px
                bg-gradient-to-r from-transparent via-white/25 to-transparent
              "
            />

            <div
              className="
                relative z-10 mx-auto h-[22rem] w-full touch-none
                md:h-[30rem]
                lg:h-[36rem]
              "
            >
              {shouldRenderCanvas && <PrinterCanvas />}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ScrollReveal>
            <AccordionCard
              title={t("expertise.summaryCards.continuousImprovement.title")}
              description={t(
                "expertise.summaryCards.continuousImprovement.description",
              )}
              icon={<ClipboardCheck size={22} aria-hidden="true" />}
              toggleAriaLabel={t("expertise.card.toggleAria", {
                item: t("expertise.summaryCards.continuousImprovement.title"),
              })}
              accentClass="text-sky-300 group-hover:border-sky-400/30"
              glowClass="bg-sky-500/10"
            />
          </ScrollReveal>

          <ScrollReveal delay="sm">
            <AccordionCard
              title={t("expertise.summaryCards.technicalExecution.title")}
              description={t(
                "expertise.summaryCards.technicalExecution.description",
              )}
              icon={<Boxes size={22} aria-hidden="true" />}
              toggleAriaLabel={t("expertise.card.toggleAria", {
                item: t("expertise.summaryCards.technicalExecution.title"),
              })}
              accentClass="text-orange-300 group-hover:border-orange-400/30"
              glowClass="bg-orange-500/10"
            />
          </ScrollReveal>

          <ScrollReveal delay="md">
            <AccordionCard
              title={t("expertise.summaryCards.factoryVision.title")}
              description={t(
                "expertise.summaryCards.factoryVision.description",
              )}
              icon={<BadgeCheck size={22} aria-hidden="true" />}
              toggleAriaLabel={t("expertise.card.toggleAria", {
                item: t("expertise.summaryCards.factoryVision.title"),
              })}
              accentClass="text-sky-300 group-hover:border-sky-400/30"
              glowClass="bg-sky-500/10"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
