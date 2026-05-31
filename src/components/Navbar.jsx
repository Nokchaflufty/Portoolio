import { useState } from "react";
import { useTranslation } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px 32px",
        }}
      >
        <div
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "-0.04em",
            color: "#e5e2e1",
          }}
        >
          STUDIO_DEVEL
        </div>

        <div className="nav-links-desktop" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["work", "about", "services"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              style={{
                color: "rgba(203,195,215,0.8)",
                fontWeight: 500,
                fontSize: 16,
                textDecoration: "none",
                textTransform: "capitalize",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#d0bcff")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(203,195,215,0.8)")}
            >
              {t(`nav.${link}`)}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LanguageSwitcher />
          <button
          className="nav-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#e5e2e1",
            cursor: "pointer",
            display: "none",
          }}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "rgba(0,0,0,0.95)",
            padding: "16px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {["work", "about", "services"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#e5e2e1",
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 500,
                textTransform: "capitalize",
              }}
            >
              {t(`nav.${link}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}