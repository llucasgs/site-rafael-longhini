"use client";

import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

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

function ExpertiseCard({
  icon,
  title,
  items,
  accentClass,
  glowClass,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  accentClass: string;
  glowClass: string;
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
        className={`absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${glowClass}`}
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
            transition-all duration-300 group-hover:scale-105
            ${accentClass}
          `}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>

        <ul className="mt-5 flex flex-wrap gap-2.5" role="list">
          {items.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Expertise() {
  const { t } = useLanguage();

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
      id="expertise"
      aria-label={t("expertise.sectionAriaLabel")}
      className="relative overflow-hidden py-20 md:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[10%] h-64 w-64 rounded-full bg-orange-500/6 blur-3xl" />
        <div className="absolute right-[8%] top-[25%] h-72 w-72 rounded-full bg-sky-500/6 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionTitle eyebrow={t("expertise.eyebrow")}>
            {t("expertise.title")}
          </SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay="sm">
          <p
            className="
              mx-auto mb-12 max-w-3xl text-center text-base leading-8
              text-slate-300 md:mb-14
            "
          >
            {t("expertise.description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          <ScrollReveal>
            <ExpertiseCard
              icon={<Sparkles size={24} />}
              title={t("expertise.groups.methods.title")}
              items={methods}
              accentClass="text-orange-300 group-hover:border-orange-400/30"
              glowClass="bg-orange-500/10"
            />
          </ScrollReveal>

          <ScrollReveal delay="sm">
            <ExpertiseCard
              icon={<ShieldCheck size={24} />}
              title={t("expertise.groups.standards.title")}
              items={standards}
              accentClass="text-sky-300 group-hover:border-sky-400/30"
              glowClass="bg-sky-500/10"
            />
          </ScrollReveal>

          <ScrollReveal delay="md">
            <ExpertiseCard
              icon={<Factory size={24} />}
              title={t("expertise.groups.technical.title")}
              items={technical}
              accentClass="text-orange-300 group-hover:border-orange-400/30"
              glowClass="bg-orange-500/10"
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delay="md">
          <div
            className="
              mt-8 rounded-[1.75rem] border border-white/10
              bg-gradient-to-br from-white/[0.04] to-white/[0.02]
              p-5 backdrop-blur-xl
            "
          >
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <div
                  className="
                    inline-flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-2xl border border-white/10 bg-black/20 text-sky-300
                  "
                >
                  <ClipboardCheck size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                    Melhoria contínua
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Estruturação de processos com foco em produtividade,
                    organização e redução de desperdícios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    inline-flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-2xl border border-white/10 bg-black/20 text-orange-300
                  "
                >
                  <Boxes size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                    Execução técnica
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Integração entre projeto, ferramentaria, prototipagem,
                    dispositivos e produção industrial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    inline-flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-2xl border border-white/10 bg-black/20 text-sky-300
                  "
                >
                  <BadgeCheck size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                    Visão de fábrica
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Experiência prática em chão de fábrica aplicada a decisões
                    técnicas mais viáveis e eficientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
