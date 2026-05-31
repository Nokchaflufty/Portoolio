import { useTranslation } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "id" ? "en" : "id")}
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.04)",
        color: "#e5e2e1",
        borderRadius: 999,
        padding: "8px 12px",
        cursor: "pointer",
        fontFamily: "'Geist Mono', monospace",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
      aria-label="Toggle language"
    >
      {lang === "id" ? "EN" : "ID"}
    </button>
  );
}
