"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Language, Translations } from "@/types/i18n";

import pt from "@/i18n/pt-BR.json";
import en from "@/i18n/en-US.json";
import es from "@/i18n/es-ES.json";
import fr from "@/i18n/fr-FR.json";
import it from "@/i18n/it-IT.json";
import de from "@/i18n/de-DE.json";
import ru from "@/i18n/ru-RU.json";
import ar from "@/i18n/ar-SA.json";
import he from "@/i18n/he-IL.json";
import hi from "@/i18n/hi-IN.json";
import ja from "@/i18n/ja-JP.json";
import ko from "@/i18n/ko-KR.json";
import zh from "@/i18n/zh-CN.json";

type LanguageContextData = {
  language: Language;
  t: (key: string, variables?: Record<string, string>) => string;
  changeLanguage: (lang: Language) => void;
};

const translationsMap: Record<Language, Translations> = {
  "pt-BR": pt,
  "en-US": en,
  "es-ES": es,
  "fr-FR": fr,
  "it-IT": it,
  "de-DE": de,
  "ru-RU": ru,
  "ar-SA": ar,
  "he-IL": he,
  "hi-IN": hi,
  "ja-JP": ja,
  "ko-KR": ko,
  "zh-CN": zh,
};

const LanguageContext = createContext<LanguageContextData | null>(null);

function getNestedValue(obj: unknown, path: string): string | undefined {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (typeof acc !== "object" || acc === null) return undefined;
    return (acc as Record<string, unknown>)[part];
  }, obj) as string | undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;

    if (stored && translationsMap[stored]) {
      setLanguage(stored);
      document.documentElement.lang = stored;
      return;
    }

    document.documentElement.lang = "pt-BR";
    localStorage.setItem("language", "pt-BR");
  }, []);

  function changeLanguage(lang: Language) {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  }

  function t(key: string, variables?: Record<string, string>): string {
    const translation =
      getNestedValue(translationsMap[language], key) ??
      getNestedValue(translationsMap["pt-BR"], key) ??
      key;

    if (!variables) return translation;

    return Object.entries(variables).reduce(
      (text, [varKey, value]) =>
        text.replace(new RegExp(`{{\\s*${varKey}\\s*}}`, "g"), value),
      translation,
    );
  }

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
