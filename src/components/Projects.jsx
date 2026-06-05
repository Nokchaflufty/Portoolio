import { useState } from "react";
import Reveal from "./Reveal";
import { PROJECTS } from "../data/constants";
import { useTranslation } from "../context/LanguageContext";

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const gridSpan = Number.parseInt(project.span?.split("-")[1] || "12", 10);

  const aspectPadding =
    project.aspect === "aspect-video" ? "56.25%" :
    project.aspect === "aspect-45"    ? "125%"   : "100%";

  return (
    <div
      style={{ gridColumn: `span ${gridSpan}`, cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)"}`,
          boxShadow: hovered ? "0 0 20px rgba(139,92,246,0.1)" : "none",
          padding: 16,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
          borderRadius: 4,
        }}
      >
        <div style={{ position: "relative", paddingBottom: aspectPadding, overflow: "hidden", marginBottom: 32 }}>
          <img
            src={project.src}
            alt={t(project.titleKey)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: hovered ? "grayscale(0)" : "grayscale(100%)",
              transform: hovered ? "scale(1)" : "scale(1.05)",
              transition: "all 0.7s ease",
            }}
          />
          {project.showCTA && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ padding: "8px 24px", background: "white", color: "black", fontFamily: "'Geist Mono', monospace", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {t("projects.cta")}
              </span>
            </div>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "auto" }}>
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.01em", color: "#e5e2e1", marginBottom: 8 }}>
              {t(project.titleKey)}
            </h3>
            <div style={{ display: "flex", gap: 12 }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "#cbc3d7", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#d0bcff",
                transform: hovered ? "translateX(8px)" : "translateX(0)",
                transition: "transform 0.3s",
                display: "flex",
              }}
            >
              <span className="material-symbols-outlined">north_east</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="work" style={{ padding: "160px 32px", maxWidth: 1200, margin: "0 auto" }}>
      <Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, gap: 24, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 576 }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "#d0bcff", display: "block", marginBottom: 16, textTransform: "uppercase" }}>
              {t("projects.eyebrow")}
            </span>
            <h2 style={{ fontSize: 40, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#e5e2e1" }}>
              {t("projects.title")}
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#cbc3d7", maxWidth: 288 }}>
            {t("projects.desc")}
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 32 }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}