"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Cog,
  Cpu,
  Factory,
  FlaskConical,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { site } from "@/constants/site";
import { scrollToSection } from "@/utils/scrollToSection";

function StatPill({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="
        inline-flex items-center gap-2 rounded-full
        border border-white/10 bg-white/[0.04]
        px-3 py-2 text-xs font-medium text-slate-300
        backdrop-blur-sm
      "
    >
      <BadgeCheck size={14} className="shrink-0 text-orange-400" />
      <span>{children}</span>
    </li>
  );
}

function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center rounded-full
        border border-white/10 bg-black/20 px-3 py-1.5
        text-xs font-semibold text-slate-200
      "
    >
      {children}
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-label={t("hero.sectionAriaLabel")}
      className="relative overflow-hidden pb-20 pt-36 md:pb-24 md:pt-40 lg:pb-28 lg:pt-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
      absolute inset-0
      bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
      bg-[size:48px_48px]
      [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]
    "
        />

        <div className="absolute left-[-8rem] top-[8rem] h-56 w-56 rounded-full bg-orange-500/10 blur-3xl md:h-72 md:w-72" />
        <div className="absolute right-[-6rem] top-[10rem] h-56 w-56 rounded-full bg-sky-500/10 blur-3xl md:h-72 md:w-72" />
        <div className="absolute bottom-[2rem] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute inset-x-0 top-[7rem] mx-auto hidden h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <ScrollReveal>
            <div className="flex flex-col items-start">
              <span
                className="
                  mb-5 inline-flex items-center gap-2 rounded-full
                  border border-orange-400/20 bg-orange-400/10
                  px-4 py-2 text-[0.72rem] font-bold uppercase
                  tracking-[0.22em] text-orange-300
                "
              >
                <Factory size={15} aria-hidden="true" />
                {t("hero.badge")}
              </span>

              <h1
                className="
                  max-w-4xl text-balance text-4xl font-black leading-[1.02]
                  tracking-[-0.04em] text-white
                  sm:text-5xl
                  lg:text-6xl
                  xl:text-[4.5rem]
                "
              >
                <span className="block">{t("hero.titleLine1")}</span>
                <span className="block">{t("hero.titleLine2")}</span>
                <span className="mt-2 block bg-gradient-to-r from-orange-400 via-orange-300 to-sky-400 bg-clip-text text-transparent">
                  {t("hero.titleHighlight")}
                </span>
              </h1>

              <p
                className="
                  mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-300
                  sm:text-lg sm:leading-8
                "
              >
                {t("hero.description")}
              </p>

              <ul className="mt-8 flex flex-wrap gap-3" role="list">
                <StatPill>{t("hero.stats.experience")}</StatPill>
                <StatPill>{t("hero.stats.innovation")}</StatPill>
                <StatPill>{t("hero.stats.prototyping")}</StatPill>
              </ul>

              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2 rounded-full
                    bg-orange-500 px-6 py-3.5 text-sm font-bold text-white
                    shadow-[0_10px_30px_rgba(249,115,22,0.28)]
                    transition-all duration-300
                    hover:translate-y-[-2px] hover:bg-orange-400
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-orange-300/70
                  "
                >
                  {t("hero.primaryButton")}
                  <ArrowRight size={16} />
                </Link>

                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className="
                    inline-flex items-center justify-center gap-2 rounded-full
                    border border-white/12 bg-white/[0.04] px-6 py-3.5
                    text-sm font-bold text-slate-100 backdrop-blur-sm
                    transition-all duration-300
                    hover:translate-y-[-2px] hover:border-sky-400/35 hover:bg-sky-400/10
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-sky-300/70
                  "
                >
                  {t("hero.secondaryButton")}
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="md">
            <div className="relative mx-auto w-full max-w-[34rem]">
              <div
                className="
                  absolute inset-0 rounded-[2rem]
                  bg-gradient-to-br from-orange-500/20 via-white/[0.02] to-sky-500/15
                  blur-2xl
                "
                aria-hidden="true"
              />

              <div
                className="
                  relative overflow-hidden rounded-[2rem]
                  border border-white/10 bg-white/[0.04] p-5
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  backdrop-blur-xl
                  sm:p-6
                "
              >
                <div
                  className="
                    absolute inset-x-0 top-0 h-px
                    bg-gradient-to-r from-transparent via-white/25 to-transparent
                  "
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-orange-300">
                      {t("hero.card.eyebrow")}
                    </span>

                    <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-[1.9rem]">
                      {t("hero.card.title")}
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-[0.98rem]">
                      {t("hero.card.subtitle")}
                    </p>
                  </div>

                  <div
                    className="
                      hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl
                      border border-white/10 bg-black/20 text-sky-300
                      sm:flex
                    "
                    aria-hidden="true"
                  >
                    <Cog size={26} />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <TechTag>{t("hero.card.tag1")}</TechTag>
                  <TechTag>{t("hero.card.tag2")}</TechTag>
                  <TechTag>{t("hero.card.tag3")}</TechTag>
                  <TechTag>{t("hero.card.tag4")}</TechTag>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div
                    className="
                      rounded-2xl border border-white/10 bg-black/20 p-4
                      transition-all duration-300 hover:border-orange-400/25
                    "
                  >
                    <Cpu className="mb-3 text-sky-300" size={20} />
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      CAD/CAM
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl border border-white/10 bg-black/20 p-4
                      transition-all duration-300 hover:border-orange-400/25
                    "
                  >
                    <Boxes className="mb-3 text-orange-300" size={20} />
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Moldes
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl border border-white/10 bg-black/20 p-4
                      transition-all duration-300 hover:border-orange-400/25
                    "
                  >
                    <FlaskConical className="mb-3 text-sky-300" size={20} />
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Protótipos
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl border border-white/10 bg-black/20 p-4
                      transition-all duration-300 hover:border-orange-400/25
                    "
                  >
                    <Factory className="mb-3 text-orange-300" size={20} />
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Produção
                    </p>
                  </div>
                </div>

                <div
                  className="
                    mt-6 rounded-[1.4rem] border border-white/10
                    bg-gradient-to-br from-white/[0.04] to-white/[0.02]
                    p-4
                  "
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                        Empresa
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {site.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        {site.location}
                      </p>
                    </div>

                    <div
                      className="
                        flex h-12 w-12 items-center justify-center rounded-full
                        border border-sky-400/20 bg-sky-400/10 text-sky-300
                        shadow-[0_0_30px_rgba(56,189,248,0.16)]
                      "
                      aria-hidden="true"
                    >
                      LD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
