"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Languages } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/types/i18n";

const languages: { code: Language; sigla: string }[] = [
  { code: "pt-BR", sigla: "PT" },
  { code: "en-US", sigla: "EN" },
  { code: "es-ES", sigla: "ES" },
  { code: "de-DE", sigla: "DE" },
  { code: "fr-FR", sigla: "FR" },
  { code: "it-IT", sigla: "IT" },
  { code: "ja-JP", sigla: "JA" },
  { code: "ko-KR", sigla: "KO" },
  { code: "ru-RU", sigla: "RU" },
  { code: "zh-CN", sigla: "ZH" },
  { code: "ar-SA", sigla: "AR" },
  { code: "he-IL", sigla: "HE" },
  { code: "hi-IN", sigla: "HI" },
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
              <span className="w-7 text-xs font-bold">{item.sigla}</span>
              <span className="flex-1">
                {t(`header.languages.${item.code}`)}
              </span>
              {active && <Check size={16} aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
