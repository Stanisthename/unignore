"use client";

import { C } from "../../data/constants";

const PRODUCTS = [
  {
    id: "stack",
    featured: true,
    name: "The AI Marketing Stack",
    tagline: "10 AI-Powered Marketing Diagnostics",
    desc:
      "The only system that identifies exactly what is broken in your marketing, in what order to fix it, and generates the assets to do it before you spend on traffic.",
    primary: {
      label: "Start Free — Tool 1",
      href: "https://theaimarketingstack.com/tools/icp-scorer",
    },
    secondary: {
      label: "Complete System — $497",
      href: "https://theaimarketingstack.com/checkout/complete-system",
    },
    accent: C.amber,
    features: [
      "10 sequential diagnostic tools",
      "Each tool feeds the next system step",
      "Generates your Unignore Blueprint",
      "Free entry — no account required",
    ],
  },
  {
    id: "thrive",
    name: "ThriveEasyAI",
    tagline: "Custom AI Chatbot Platform",
    desc:
      "Build and deploy a trained AI chatbot for sales, onboarding, and lead capture using your own API key.",
    price: "$447/yr",
    accent: C.green,
  },
  {
    id: "scribe",
    name: "ScribeCrafter",
    tagline: "AI Email Copy Platform",
    desc:
      "Generate full email sequences calibrated to your ICP — from welcome to launch to re-engagement.",
    price: "$447/yr",
    accent: C.amber,
    comingSoon: true,
  },
  {
    id: "easycopy",
    name: "EasyCopyAI",
    tagline: "AI Sales Page Platform",
    desc:
      "Create a complete sales page aligned to your exact buyer — not generic AI output.",
    price: "$447/yr",
    accent: C.violet,
    comingSoon: true,
  },
];

export default function ProductsSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "90px 40px",
        borderTop: `1px solid ${C.borderLight}`,
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ marginBottom: 50 }}>
          <div
            style={{
              fontSize: 11,
              fontFamily: "'DM Mono', monospace",
              color: C.bodyMuted,
              letterSpacing: "0.1em",
              marginBottom: 10,
            }}
          >
            PRODUCTS
          </div>

          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 40,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: C.bodyDark,
            }}
          >
            The system.
            <br />
            The tools behind it.
          </h2>
        </div>

        {/* FEATURED PRODUCT */}
        {PRODUCTS.filter(p => p.featured).map(p => (
          <div
            key={p.id}
            style={{
              padding: 36,
              borderRadius: 16,
              background: "#fff",
              border: `1px solid ${C.borderLight}`,
              marginBottom: 30,
            }}
          >
            <h3
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: C.bodyDark,
                marginBottom: 6,
              }}
            >
              {p.name}
            </h3>

            <div
              style={{
                fontSize: 12,
                fontFamily: "'DM Mono', monospace",
                color: p.accent,
                marginBottom: 16,
              }}
            >
              {p.tagline}
            </div>

            <p
              style={{
                fontSize: 15,
                color: C.bodyText,
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 600,
              }}
            >
              {p.desc}
            </p>

            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <a href={p.primary.href}>
                <button
                  style={{
                    background: p.accent,
                    border: 0,
                    padding: "12px 22px",
                    borderRadius: 8,
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {p.primary.label}
                </button>
              </a>

              <a href={p.secondary.href}>
                <button
                  style={{
                    background: "transparent",
                    border: `1px solid ${C.borderLight}`,
                    padding: "12px 20px",
                    borderRadius: 8,
                    color: C.bodyMuted,
                    cursor: "pointer",
                  }}
                >
                  {p.secondary.label}
                </button>
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {p.features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 13,
                    color: C.bodyText,
                  }}
                >
                  • {f}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* SECONDARY PRODUCTS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {PRODUCTS.filter(p => !p.featured).map(p => (
            <div
              key={p.id}
              style={{
                padding: 22,
                borderRadius: 12,
                border: `1px solid ${C.borderLight}`,
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 700 }}>
                {p.name}
              </h4>

              <div
                style={{
                  fontSize: 11,
                  color: p.accent,
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: 10,
                }}
              >
                {p.tagline}
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: C.bodyMuted,
                  marginBottom: 16,
                }}
              >
                {p.desc}
              </p>

              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.bodyDark,
                }}
              >
                {p.comingSoon ? "Coming soon" : p.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
