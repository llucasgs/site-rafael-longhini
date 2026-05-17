"use client";

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/constants/site";
import { useLanguage } from "@/contexts/LanguageContext";

type ContactAction = {
  labelKey: string;
  descriptionKey: string;
  ariaLabelKey: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
};

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.02h4.36V23H.32V8.02ZM8.2 8.02h4.18v2.05h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.23 2.9 5.23 6.67V23h-4.36v-7.56c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.9 1.97-2.9 4V23H8.2V8.02Z" />
    </svg>
  );
}

function ContactActionCard({
  label,
  description,
  ariaLabel,
  href,
  icon,
  accent,
}: {
  label: string;
  description: string;
  ariaLabel: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="
        group relative isolate block overflow-hidden rounded-[1.5rem]
         p-5
        backdrop-blur-xl transition-all duration-300
        hover:-translate-y-1 hover:border-orange-400/25
        hover:bg-white/[0.055]
        hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-orange-400/70
      "
    >
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute inset-0 -z-10
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          ${accent}
        `}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 h-px
          bg-gradient-to-r from-transparent via-white/18 to-transparent
        "
      />

      <div className="relative z-10 flex items-start gap-4">
        <span
          className="
            inline-flex h-12 w-12 shrink-0 items-center justify-center
            rounded-2xl border border-white/10 bg-black/25
            text-orange-300 transition-all duration-300
            group-hover:scale-105 group-hover:border-orange-400/25
          "
        >
          {icon}
        </span>

        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-base font-bold tracking-tight text-white">
            {label}
          </span>

          <span className="mt-2 text-sm leading-6 text-slate-300">
            {description}
          </span>
        </span>

        <ArrowRight
          size={18}
          aria-hidden="true"
          className="
            mt-1 shrink-0 text-slate-500 transition-all duration-300
            group-hover:translate-x-1 group-hover:text-orange-300
          "
        />
      </div>
    </a>
  );
}

function InfoPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-2xl border border-white/10 bg-black/20 p-4
        backdrop-blur-sm
      "
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-orange-300">{icon}</span>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            {label}
          </p>

          <p className="mt-2 text-sm font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const { t } = useLanguage();

  const contactActions: ContactAction[] = [
    {
      labelKey: "contact.actions.whatsapp.label",
      descriptionKey: "contact.actions.whatsapp.description",
      ariaLabelKey: "contact.actions.whatsapp.ariaLabel",
      href: site.links.whatsapp,
      icon: <MessageCircle size={22} aria-hidden="true" />,
      accent: "bg-orange-500/10",
    },
    {
      labelKey: "contact.actions.email.label",
      descriptionKey: "contact.actions.email.description",
      ariaLabelKey: "contact.actions.email.ariaLabel",
      href: site.links.email,
      icon: <Mail size={22} aria-hidden="true" />,
      accent: "bg-sky-500/10",
    },
    {
      labelKey: "contact.actions.linkedin.label",
      descriptionKey: "contact.actions.linkedin.description",
      ariaLabelKey: "contact.actions.linkedin.ariaLabel",
      href: site.links.linkedin,
      icon: <LinkedInIcon size={22} />,
      accent: "bg-orange-500/10",
    },
  ];

  return (
    <section
      id="contact"
      aria-label={t("contact.sectionAriaLabel")}
      className="relative overflow-hidden py-10 md:py-14 lg:py-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-8rem] top-[7rem] h-64 w-64 rounded-full bg-orange-500/7 blur-3xl animate-glow-orange" />
        <div className="absolute bottom-[4rem] right-[-10rem] h-72 w-72 rounded-full bg-sky-500/7 blur-3xl animate-glow-blue" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionTitle
            title={t("contact.title")}
            description={t("contact.description")}
          />
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <div
              className="
                relative overflow-hidden rounded-[2rem]
                border border-white/10 bg-white/[0.035] p-6
                shadow-[0_24px_90px_rgba(0,0,0,0.42)]
                backdrop-blur-xl md:p-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)]
                  bg-[size:42px_42px]
                  opacity-60
                  [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]
                "
              />

              <div className="relative z-10">
                <span
                  className="
    relative inline-flex items-center gap-2 overflow-hidden rounded-full
    border border-orange-400/30 px-4 py-2
    text-xs font-bold uppercase tracking-[0.22em]
    text-orange-200
  "
                >
                  <span
                    aria-hidden="true"
                    className="
      absolute inset-0 rounded-full
      bg-orange-500/10 animate-pulse
    "
                  />

                  <span
                    aria-hidden="true"
                    className="
      relative z-10 h-1.5 w-1.5 rounded-full
      bg-orange-400 animate-pulse
      shadow-[0_0_14px_rgba(251,146,60,0.75)]
    "
                  />

                  <span className="relative z-10">{t("contact.ctaBadge")}</span>
                </span>

                <h3
                  className="
                    mt-5 max-w-2xl text-2xl font-black tracking-[-0.035em]
                    text-white md:text-3xl
                  "
                >
                  {t("contact.ctaTitle")}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  {t("contact.ctaDescription")}
                </p>

                <div className="mt-7 grid gap-4">
                  {contactActions.map((action, index) => {
                    const delay =
                      index === 0 ? "none" : index === 1 ? "sm" : "md";

                    return (
                      <ScrollReveal key={action.labelKey} delay={delay}>
                        <ContactActionCard
                          label={t(action.labelKey)}
                          description={t(action.descriptionKey)}
                          ariaLabel={t(action.ariaLabelKey)}
                          href={action.href}
                          icon={action.icon}
                          accent={action.accent}
                        />
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="sm">
            <aside
              className="
                relative h-full overflow-hidden rounded-[2rem]
                border border-white/10 bg-white/[0.035] p-6
                shadow-[0_24px_90px_rgba(0,0,0,0.42)]
                backdrop-blur-xl md:p-8
              "
            >
              <div
                aria-hidden="true"
                className="absolute right-[-6rem] top-[-6rem] h-56 w-56 rounded-full bg-sky-500/10 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-[-6rem] left-[-6rem] h-56 w-56 rounded-full bg-orange-500/10 blur-3xl"
              />

              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
                    {t("contact.company.eyebrow")}
                  </p>

                  <h3 className="mt-4 text-2xl font-black tracking-tight text-white">
                    {t("contact.company.name")}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {t("contact.company.description")}
                  </p>

                  <div
                    className="
                      relative mt-6 aspect-[1400/349] w-full overflow-hidden
                      rounded-[1.35rem] border border-white/10 bg-black/20
                    "
                  >
                    <Image
                      src="/Sections/Section7/longhiniSpace.webp"
                      alt={t("contact.company.imageAlt")}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <InfoPill
                      icon={<Mail size={18} aria-hidden="true" />}
                      label={t("contact.info.email.label")}
                      value={site.contact.email}
                    />
                  </div>

                  <InfoPill
                    icon={<MapPin size={18} aria-hidden="true" />}
                    label={t("contact.info.location.label")}
                    value={t("contact.info.location.value")}
                  />

                  <InfoPill
                    icon={<MonitorSmartphone size={18} aria-hidden="true" />}
                    label={t("contact.info.serviceMode.label")}
                    value={t("contact.info.serviceMode.value")}
                  />

                  <div className="sm:col-span-2">
                    <InfoPill
                      icon={<Building2 size={18} aria-hidden="true" />}
                      label={t("contact.info.focus.label")}
                      value={t("contact.info.focus.value")}
                    />
                  </div>
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
