export type Locale = "en" | "vi";

export const LOCALES: Locale[] = ["en", "vi"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "portfolio-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "vi";
}
