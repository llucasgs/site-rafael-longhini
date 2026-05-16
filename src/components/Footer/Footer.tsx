"use client";

import Image from "next/image";
import { ChevronDown, ExternalLink, Globe } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { site } from "@/constants/site";
import { useLanguage } from "@/contexts/LanguageContext";

function LinkedInIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.02h4.36V23H.32V8.02ZM8.2 8.02h4.18v2.05h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.23 2.9 5.23 6.67V23h-4.36v-7.56c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.9 1.97-2.9 4V23H8.2V8.02Z" />
    </svg>
  );
}

function InstagramIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.91.12 5.79.06 7.06.01 8.34 0 8.75 0 12s.01 3.66.07 4.94c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.34 23.99 8.75 24 12 24s3.66-.01 4.94-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.94s-.01-3.66-.07-4.94c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13C21.31 1.35 20.64.94 19.85.63c-.76-.3-1.64-.5-2.91-.56C15.66.01 15.25 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  );
}

function ModelCredits() {
  const { t } = useLanguage();

  return (
    <details
      className="
        group overflow-hidden rounded-[1.75rem]
        border border-white/10 bg-white/[0.028]
        shadow-[0_8px_40px_rgba(0,0,0,0.28)]
        backdrop-blur-xl
        transition-all duration-300
        open:bg-white/[0.038]
      "
    >
      <summary
        className="
          flex w-full cursor-pointer list-none items-center
          justify-between gap-4 px-6 py-4
          text-[0.68rem] font-bold uppercase tracking-[0.22em]
          text-orange-300 transition-colors duration-300
          hover:text-orange-200
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-orange-400/70
          [&::-webkit-details-marker]:hidden
        "
      >
        <span>{t("footer.modelCredits.title")}</span>

        <ChevronDown
          size={15}
          aria-hidden="true"
          className="shrink-0 text-orange-300/70 transition-transform duration-300 group-open:rotate-180"
        />
      </summary>

      {/* Divisor interno */}
      <div
        aria-hidden="true"
        className="mx-6 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"
      />

      <div className="grid gap-2.5 p-4">
        {site.modelCredits.map((credit) => (
          <div
            key={credit.source}
            className="
              relative overflow-hidden rounded-2xl
              border border-white/8 bg-black/20 p-4
            "
          >
            {/* Linha de brilho superior — detalhe premium */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-x-0 top-0 h-px
                bg-gradient-to-r from-transparent via-white/10 to-transparent
              "
            />

            <p className="text-sm font-bold text-slate-200">{credit.title}</p>

            <p className="mt-1.5 text-xs leading-5 text-slate-400">
              {t("footer.modelCredits.by")}{" "}
              <a
                href={credit.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-orange-300 underline-offset-4 transition-colors
                  duration-300 hover:text-orange-200 hover:underline
                "
              >
                {credit.author}
              </a>
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              {t("footer.modelCredits.license")}{" "}
              <a
                href={credit.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sky-300 underline-offset-4 transition-colors
                  duration-300 hover:text-sky-200 hover:underline
                "
              >
                {credit.license}
              </a>
            </p>

            <a
              href={credit.source}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-3 inline-flex items-center gap-1.5 text-[10px]
                font-bold uppercase tracking-[0.16em] text-slate-500
                transition-colors duration-300 hover:text-orange-300
              "
            >
              {t("footer.modelCredits.source")}
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </details>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label={t("footer.sectionAriaLabel")}
      className="relative overflow-hidden"
    >
      {/* Separador decorativo topo — laranja fade in/out */}
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
      />

      {/* Blobs decorativos de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-8rem] top-[-4rem] h-64 w-64 rounded-full bg-orange-500/6 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-8rem] h-64 w-64 rounded-full bg-sky-500/6 blur-3xl" />
      </div>

      <Container className="relative z-10 py-10 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:items-start">
          {/* ── COLUNA ESQUERDA — Identidade da marca ── */}
          <div
            className="
              relative overflow-hidden rounded-[1.75rem]
              border border-white/10 bg-white/[0.028] p-6
              shadow-[0_8px_40px_rgba(0,0,0,0.28)]
              backdrop-blur-xl
            "
          >
            {/* Linha de brilho superior */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-x-0 top-0 h-px
                bg-gradient-to-r from-transparent via-white/10 to-transparent
              "
            />

            <a
              href="#about"
              aria-label={t("footer.logoAriaLabel")}
              className="
                inline-flex items-center gap-3 rounded-full
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-orange-400/70
              "
            >
              <Image
                src="/Header/longhiniLogo.svg"
                alt={t("footer.logoAlt")}
                width={42}
                height={42}
                className="h-10 w-auto object-contain"
              />

              <span className="flex flex-col leading-none">
                <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                  {site.brandName}
                </span>

                <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {t("footer.brandSubtitle")}
                </span>
              </span>
            </a>

            {/* Divisor interno */}
            <div
              aria-hidden="true"
              className="my-5 h-px bg-gradient-to-r from-white/8 to-transparent"
            />

            <p className="text-xs leading-6 text-slate-500">
              © {currentYear} {t("footer.copyright.company")}
            </p>

            <p className="mt-0.5 text-xs text-slate-600">
              {t("footer.copyright.rights")}
            </p>
          </div>

          {/* ── COLUNA CENTRAL — Créditos dos modelos 3D ── */}
          <ModelCredits />

          {/* ── COLUNA DIREITA — Desenvolvedor ── */}
          <div
            className="
              relative overflow-hidden rounded-[1.75rem]
              border border-white/10 bg-white/[0.028] p-6
              shadow-[0_8px_40px_rgba(0,0,0,0.28)]
              backdrop-blur-xl
            "
          >
            {/* Linha de brilho superior */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-x-0 top-0 h-px
                bg-gradient-to-r from-transparent via-white/10 to-transparent
              "
            />

            {/* Blob interno sky */}
            <span
              aria-hidden="true"
              className="absolute right-[-4rem] top-[-4rem] h-36 w-36 rounded-full bg-sky-500/8 blur-3xl"
            />

            <div className="relative z-10">
              {/* Cabeçalho: assinatura + identidade — espelha logo + nome do card Longhini */}
              <a
                href={site.developer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.developer.signatureAriaLabel")}
                className="
                  inline-flex items-center gap-3 rounded-full
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-orange-400/70
                "
              >
                <Image
                  src="/Footer/devSignature.svg"
                  alt={t("footer.developer.signatureAlt")}
                  width={42}
                  height={42}
                  className="h-10 w-10 object-contain"
                />

                <span className="flex flex-col leading-none">
                  <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                    {t("footer.developer.label")}
                  </span>

                  <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {site.developer.name}
                  </span>
                </span>
              </a>

              {/* Divisor interno — idêntico ao do card Longhini */}
              <div
                aria-hidden="true"
                className="my-5 h-px bg-gradient-to-r from-white/8 to-transparent"
              />

              {/* Links do desenvolvedor */}
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href={site.developer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("footer.developer.badgeAriaLabel")}
                    className="
                      group inline-flex items-center gap-2
                      text-xs text-slate-500 transition-colors duration-300
                      hover:text-orange-300
                      focus:outline-none focus-visible:ring-2
                      focus-visible:ring-orange-400/70
                    "
                  >
                    <Globe size={13} aria-hidden="true" className="shrink-0" />
                    devllucasgs.com.br
                  </a>
                </li>

                <li>
                  <a
                    href={site.developer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("footer.developer.signatureAriaLabel")}
                    className="
                      group inline-flex items-center gap-2
                      text-xs text-slate-600 transition-colors duration-300
                      hover:text-orange-300
                      focus:outline-none focus-visible:ring-2
                      focus-visible:ring-orange-400/70
                    "
                  >
                    <InstagramIcon size={13} />
                    instagram.com/devllucas_gs
                  </a>
                </li>

                <li>
                  <a
                    href={site.developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("footer.developer.linkedinAriaLabel")}
                    className="
                      group inline-flex items-center gap-2
                      text-xs text-slate-600 transition-colors duration-300
                      hover:text-orange-300
                      focus:outline-none focus-visible:ring-2
                      focus-visible:ring-orange-400/70
                    "
                  >
                    <LinkedInIcon size={13} />
                    linkedin.com/in/lucasgarciaesilva
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
