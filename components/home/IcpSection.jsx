"use client";

import { C } from "../../data/constants";

const PROBLEMS = [
  "Conversions are inconsistent — warm traffic buys, cold doesn't",
  "Email list exists but produces little revenue",
  "Sales page works for launches but fails on evergreen",
  "You repeatedly answer the same customer questions",
  "Paid traffic is unpredictable or unprofitable",
  "Customer value stops at first purchase",
];

export default function IcpSection() {
  return (
    <section
      style={{
        background: C.dark,
        padding: "90px 40px",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontFamily: "'DM Mono', monospace",
            color: C.muted,
            letterSpacing: "0.1em",
            marginBottom: 20,
          }}
        >
          WHO THIS IS FOR
        </div>

        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 40,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: C.white,
            marginBottom: 24,
          }}
        >
          You have a proven offer.
          <br />
          Your system is the constraint.
        </h2>

        <p
          style={{
            fontSize: 16,
            color: C.muted,
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          Businesses doing $100K–$2M annually with real customers and real demand — but a system that is underperforming relative to its potential.
        </p>

        {/* PROBLEM GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 40,
            textAlign: "left",
          }}
        >
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "12px 14px",
                background: C.darkCard,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                fontSize: 13,
                color: C.muted,
                lineHeight: 1.5,
              }}
            >
              {p}
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <a href="https://theaimarketingstack.com/tools/icp-scorer">
          <button
            style={{
              padding: "14px 30px",
              background: `linear-gradient(135deg, ${C.amber}, ${C.violet})`,
              border: "none",
              borderRadius: 10,
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Run Your Free Diagnostic →
          </button>
        </a>

        <div
          style={{
            marginTop: 12,
            fontSize: 11,
            color: C.dim,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          Free · No account · Takes ~60 seconds
        </div>
      </div>
    </section>
  );
}
