import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getPreferredLanguage, getTranslationValue, translations } from "../i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    return saved === "id" || saved === "en" ? saved : getPreferredLanguage();
  });

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key) => getTranslationValue(translations[lang], key) || getTranslationValue(translations.en, key) || key,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  return useContext(LanguageContext);
}
