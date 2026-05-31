import { useState } from "react";
import Reveal from "./Reveal";
import { PROCESS } from "../data/constants";
import { useTranslation } from "../context/LanguageContext";

function ProcessStep({ step, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        style={{ textAlign: "center" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            width: 48,
            height: 48,
            background: hovered ? "white" : "rgba(255,255,255,0.02)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            color: hovered ? "black" : "#e5e2e1",
            fontFamily: "'Geist Mono', monospace",
            fontSize: 13,
            fontWeight: 600,
            transition: "all 0.3s",
          }}
        >
          {step.num}
        </div>
        <h4 style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, fontWeight: 700, color: "#e5e2e1", marginBottom: 8, letterSpacing: "0.05em" }}>
          {step.title}
        </h4>
        <p style={{ fontSize: 12, color: "#cbc3d7", lineHeight: 1.5 }}>
          {step.desc}
        </p>
      </div>
    </Reveal>
  );
}

export default function Process() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: "160px 32px", maxWidth: 1200, margin: "0 auto", overflow: "hidden" }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "#d0bcff", display: "block", marginBottom: 16, textTransform: "uppercase" }}>
            {t("process.eyebrow")}
          </span>
          <h2 style={{ fontSize: 40, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#e5e2e1" }}>
            {t("process.title")}
          </h2>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div style={{ position: "relative" }}>
          <div
            className="process-line"
            style={{
              position: "absolute",
              top: "24px",
              left: 0,
              width: "100%",
              height: 1,
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 48, position: "relative", zIndex: 10 }}>
            {PROCESS.map((step, i) => (
              <ProcessStep key={step.num} step={step} delay={i * 80} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}