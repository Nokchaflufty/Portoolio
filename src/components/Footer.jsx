import { useTranslation } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        padding: "80px 32px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "#0e0e0e",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        <div
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontWeight: 700,
            fontSize: 24,
            letterSpacing: "-0.02em",
            color: "#e5e2e1",
          }}
        >
          STUDIO_DEVEL
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16 }}>
          <p style={{ fontSize: 16, color: "rgba(203,195,215,0.6)" }}>
            {t("footer.copy")}
          </p>
        </div>
      </div>
    </footer>
  );
}