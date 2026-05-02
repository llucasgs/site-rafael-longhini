export type Language =
  | "pt-BR"
  | "en-US"
  | "es-ES"
  | "fr-FR"
  | "it-IT"
  | "de-DE"
  | "ru-RU"
  | "ar-SA"
  | "he-IL"
  | "hi-IN"
  | "ja-JP"
  | "ko-KR"
  | "zh-CN";

export type Translations = typeof import("@/i18n/pt-BR.json");
