import { useEffect } from "react";
import Reveal from "./Reveal";
import { useTranslation } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouse = (e) => {
      const glows = document.querySelectorAll(".glow-spot");
      const x = (e.clientX - window.innerWidth / 2) * 0.05;
      const y = (e.clientY - window.innerHeight / 2) * 0.05;
      glows.forEach((g) => {
        g.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "80px 32px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="glow-spot" style={{ position: "absolute", width: 600, height: 600, top: "-10%", left: "-10%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0, transition: "transform 1s ease" }} />
      <div className="glow-spot" style={{ position: "absolute", width: 600, height: 600, bottom: "-10%", right: "-10%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0, transition: "transform 1s ease" }} />

      <div style={{ position: "absolute", inset: 0, opacity: 0.03, fontFamily: "monospace", fontSize: 10, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 80, left: 40, transform: "rotate(-12deg)", lineHeight: 1.8 }}>
          const animate = (el) =&gt; {"{"}<br />
          &nbsp;&nbsp;return gsap.to(el, {"{"}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;opacity: 1,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;duration: 0.8<br />
          &nbsp;&nbsp;{"}"})<br />
          {"}"}
        </div>
        <div style={{ position: "absolute", bottom: 160, right: 40, transform: "rotate(6deg)", lineHeight: 1.8 }}>
          &lt;div class="glass"&gt;<br />
          &nbsp;&nbsp;&lt;slot /&gt;<br />
          &lt;/div&gt;
        </div>
      </div>

      <div style={{ maxWidth: 896, position: "relative", zIndex: 10 }}>
        <Reveal delay={0}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", color: "#d0bcff", display: "block", marginBottom: 24, opacity: 0.8, textTransform: "uppercase" }}>
            {t("hero.eyebrow")}
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 80px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.04em", color: "#e5e2e1", marginBottom: 32 }}>
            {t("hero.title")}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#cbc3d7", maxWidth: 672, margin: "0 auto 48px" }}>
            {t("hero.desc")}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#work"
              style={{ padding: "16px 40px", background: "white", color: "black", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, border: "1px solid white", borderRadius: 2, transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "black"; }}
            >
              {t("hero.primary")}
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </a>
            <a
              href="mailto:hello@example.com"
              style={{ padding: "16px 40px", color: "white", fontWeight: 600, textDecoration: "none", borderRadius: 2, background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", transition: "background 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
            >
              {t("hero.secondary")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}