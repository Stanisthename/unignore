"use client";

import { C } from "../../data/constants";

const METRICS = [
  {
    value: "$700K–$4M",
    label: "incremental revenue per 6-week campaign",
    sub: "Food Lion × top CPG brands",
  },
  {
    value: "35",
    label: "years of consumer psychology & marketing",
    sub: "National → online → AI",
  },
  {
    value: "10",
    label: "AI diagnostic tools in the stack",
    sub: "The AI Marketing Stack",
  },
  {
    value: "3",
    label: "AI platforms owned and licensed",
    sub: "ScribeCrafter · EasyCopyAI · ThriveEasyAI",
  },
];

export default function MetricsBar() {
  return (
    <section
      style={{
        background: C.darkCard2,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
      >
        {METRICS.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              padding: "10px 16px",
            }}
          >
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 40,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: i === 0 ? C.amber : C.white,
                lineHeight: 1,
              }}
            >
              {m.value}
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 12,
                color: C.muted,
                lineHeight: 1.5,
              }}
            >
              {m.label}
            </div>

            <div
              style={{
                marginTop: 6,
                fontSize: 10,
                fontFamily: "'DM Mono', monospace",
                color: C.dim,
                letterSpacing: "0.04em",
              }}
            >
              {m.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
