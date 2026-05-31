import { useState } from "react";
import Reveal from "./Reveal";
import { SKILLS_TAGS } from "../data/constants";
import { useTranslation } from "../context/LanguageContext";

function SkillTag({ children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "8px 16px",
        background: hovered ? "white" : "rgba(255,255,255,0.02)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: hovered ? "black" : "#d0bcff",
        fontFamily: "'Geist Mono', monospace",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.1em",
        cursor: "default",
        transition: "all 0.3s",
        borderRadius: 2,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

export default function About() {
  const [imgHovered, setImgHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <section
      id="about"
      style={{ padding: "160px 32px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 80,
          alignItems: "center",
        }}
      >
        <Reveal>
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          >
            <div
              style={{
                position: "absolute",
                inset: -16,
                background: "rgba(208,188,255,0.1)",
                filter: "blur(48px)",
                borderRadius: "50%",
                opacity: imgHovered ? 1 : 0,
                transition: "opacity 0.7s",
              }}
            />
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden",
                filter: imgHovered ? "grayscale(0)" : "grayscale(100%)",
                transition: "filter 0.7s ease",
              }}
            >
              <img
                src={require("../fotoku.jpeg")}
                alt="Designer Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#d0bcff",
                display: "block",
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              {t("about.eyebrow")}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#e5e2e1",
                marginBottom: 32,
              }}
            >
              {t("about.title")}
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#cbc3d7", marginBottom: 24 }}>
              {t("about.p1")}
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#cbc3d7", marginBottom: 40 }}>
              {t("about.p2")}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {SKILLS_TAGS.map((tag) => (
                <SkillTag key={tag}>{tag}</SkillTag>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}