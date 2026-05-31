import { MARQUEE_ITEMS } from "../data/constants";

export default function TechMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      style={{
        padding: "80px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "marquee 30s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Geist Mono', monospace",
              color: "rgba(203,195,215,0.4)",
              fontSize: 20,
              fontWeight: 700,
              margin: "0 40px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}