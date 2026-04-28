"use client";

import { C } from "../../data/constants";

const HEADSHOT_URL = "/headshot.jpg"; // safe placeholder (optional asset)

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 40px",
        background: C.dark,
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* LEFT COLUMN — PRIMARY MESSAGE */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
              padding: "6px 14px",
              borderRadius: 999,
              border: `1px solid ${C.border}`,
              color: C.muted,
              fontSize: 11,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.08em",
            }}
          >
            UNIGNORE SYSTEM · AI MARKETING STACK
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "56px",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: C.white,
              marginBottom: 24,
            }}
          >
            Consumer Psychology
            <br />
            Applied to Revenue Systems
          </h1>

          <p
            style={{
              color: C.muted,
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 520,
              marginBottom: 32,
            }}
          >
            Built across Fortune 100 brands, national retail campaigns, and performance systems that consistently drive measurable revenue outcomes.
          </p>

          {/* PRIMARY CTA ONLY */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://theaimarketingstack.com/tools/icp-scorer">
              <button
                style={{
                  background: C.amber,
                  border: 0,
                  padding: "13px 24px",
                  borderRadius: 8,
                  color: "#fff",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Start Free — Tool 1
              </button>
            </a>

            <a href="https://theaimarketingstack.com/checkout/complete-system">
              <button
                style={{
                  background: "transparent",
                  border: `1px solid ${C.border}`,
                  padding: "13px 22px",
                  borderRadius: 8,
                  color: C.muted,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Complete System — $497
              </button>
            </a>
          </div>

          {/* TRUST MICRO-INDICATORS */}
          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              color: C.dim,
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            <span>Free entry point</span>
            <span>•</span>
            <span>No account required</span>
            <span>•</span>
            <span>Results in ~60 seconds</span>
          </div>
        </div>

        {/* RIGHT COLUMN — CONTEXTUAL AUTHORITY */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              width: 320,
              height: 380,
            }}
          >
            {/* subtle brand ring */}
            <div
              style={{
                position: "absolute",
                inset: -2,
                borderRadius: 18,
                background: `linear-gradient(135deg, ${C.amber}, ${C.violet})`,
                opacity: 0.6,
              }}
            />

            {/* image container */}
            <img
              src={HEADSHOT_URL}
              alt="Founder"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 16,
                zIndex: 1,
              }}
            />

            {/* subtle fade bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 90,
                background:
                  "linear-gradient(to bottom, transparent, rgba(10,10,11,0.85))",
                zIndex: 2,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
