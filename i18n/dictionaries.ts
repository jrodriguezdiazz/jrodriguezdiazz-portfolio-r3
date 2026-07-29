import { defaultLocale, Locale } from "./locales";

const dictionaries = {
  en: () => import("./translations/en"),
  es: () => import("./translations/es"),
} as const;

export async function getDictionary(locale: Locale) {
  const dictionary = await dictionaries[locale]();
  return dictionary.default;
}

export async function getDefaultDictionary() {
  return getDictionary(defaultLocale);
}
