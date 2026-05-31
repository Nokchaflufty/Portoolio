import { useState } from "react";
import Reveal from "./Reveal";
import { SERVICES } from "../data/constants";
import { useTranslation } from "../context/LanguageContext";

function ServiceCard({ service, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${hovered ? "rgba(208,188,255,0.5)" : "rgba(255,255,255,0.08)"}`,
          padding: 40,
          transition: "all 0.5s",
          borderRadius: 4,
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: 36, color: "#d0bcff", display: "block", marginBottom: 24 }}
        >
          {service.icon}
        </span>
        <h3 style={{ fontSize: 24, fontWeight: 500, lineHeight: 1.4, color: "#e5e2e1", marginBottom: 16 }}>
          {service.title}
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#cbc3d7" }}>
          {service.desc}
        </p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" style={{ padding: "160px 0", background: "#0e0e0e" }}>
      <div style={{ padding: "0 32px", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "#d0bcff", display: "block", marginBottom: 16, textTransform: "uppercase" }}>
              {t("services.eyebrow")}
            </span>
            <h2 style={{ fontSize: 40, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#e5e2e1" }}>
              {t("services.title")}
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}