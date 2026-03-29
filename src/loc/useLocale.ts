import { createContext, useContext } from "react";
import en from "./en.json";
import tw from "./tw.json";

export const locales = { en, tw } as const;
export type Locale = keyof typeof locales;
export type Strings = typeof en;

export const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({ locale: "en", setLocale: () => {} });

export function useLocale(): Strings {
  const { locale } = useContext(LocaleContext);
  return locales[locale];
}
