"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Check, Languages } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/types/i18n";

const languages: {
  code: Language;
  sigla: string;
  flag: string;
}[] = [
  {
    code: "pt-BR",
    sigla: "PT",
    flag: "/Header/Flags/pt-BR-flag.webp",
  },
  {
    code: "en-US",
    sigla: "EN",
    flag: "/Header/Flags/en-US-flag.webp",
  },
  {
    code: "es-ES",
    sigla: "ES",
    flag: "/Header/Flags/es-ES-flag.webp",
  },
  {
    code: "de-DE",
    sigla: "DE",
    flag: "/Header/Flags/de-DE-flag.webp",
  },
  {
    code: "fr-FR",
    sigla: "FR",
    flag: "/Header/Flags/fr-FR-flag.webp",
  },
  {
    code: "it-IT",
    sigla: "IT",
    flag: "/Header/Flags/it-IT-flag.webp",
  },
  {
    code: "ja-JP",
    sigla: "JA",
    flag: "/Header/Flags/ja-JP-flag.webp",
  },
  {
    code: "ko-KR",
    sigla: "KO",
    flag: "/Header/Flags/ko-KR-flag.webp",
  },
  {
    code: "ru-RU",
    sigla: "RU",
    flag: "/Header/Flags/ru-RU-flag.webp",
  },
  {
    code: "zh-CN",
    sigla: "ZH",
    flag: "/Header/Flags/zh-CN-flag.webp",
  },
  {
    code: "ar-SA",
    sigla: "AR",
    flag: "/Header/Flags/ar-SA-flag.webp",
  },
  {
    code: "he-IL",
    sigla: "HE",
    flag: "/Header/Flags/he-IL-flag.webp",
  },
  {
    code: "hi-IN",
    sigla: "HI",
    flag: "/Header/Flags/hi-IN-flag.webp",
  },
];

export function LanguageSelector() {
  const { language, changeLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const current = languages.find((item) => item.code === language);

  const sortedLanguages = [
    ...languages.filter((item) => item.code === language),
    ...languages.filter((item) => item.code !== language),
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t("header.chooseLanguage")}
        aria-expanded={open}
        className="
          inline-flex h-10 items-center gap-2 rounded-full
          border border-white/10 bg-white/5 px-3
          text-sm font-semibold text-slate-200
          backdrop-blur-md transition-all duration-300
          hover:border-orange-400/40 hover:bg-orange-400/10
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-orange-400/70
        "
      >
        <Languages size={17} aria-hidden="true" />

        <span>{current?.sigla ?? "PT"}</span>
      </button>

      <div
        className={`
          absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl
          border border-white/10 bg-[#111217]/95 shadow-2xl
          shadow-black/40 backdrop-blur-xl transition-all duration-200
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
      >
        {sortedLanguages.map((item) => {
          const active = item.code === language;
          const languageName = t(`header.languages.${item.code}`);

          return (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                changeLanguage(item.code);
                setOpen(false);
              }}
              className={`
                flex w-full items-center gap-3 px-4 py-3 text-left text-sm
                transition-colors duration-200
                ${
                  active
                    ? "bg-orange-400/10 text-orange-300"
                    : "text-slate-300 hover:bg-white/8 hover:text-white"
                }
              `}
            >
              <Image
                src={item.flag}
                alt={t("header.flags.alt", { language: languageName })}
                width={24}
                height={16}
                className="
                  h-4 w-4 shrink-0 rounded
                  object-cover
                "
              />

              <span className="flex-1">{languageName}</span>

              {active && <Check size={16} aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
