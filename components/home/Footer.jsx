
"use client";

import { C } from "../../data/constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: C.darkCard,
        borderTop: `1px solid ${C.border}`,
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* BRAND */}
        <div>
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: C.white,
            }}
          >
            unignore
          </div>

          <div
            style={{
              fontSize: 11,
              color: C.dim,
              fontFamily: "'DM Mono', monospace",
              marginTop: 4,
            }}
          >
            Stan Jakim · theaimarketingstack.com
          </div>
        </div>

        {/* LINKS */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "AI Marketing Stack", href: "https://theaimarketingstack.com" },
            { label: "ThriveEasyAI", href: "https://thriveeasyai.com" },
            { label: "ScribeCrafter", href: "https://scribecrafter.com" },
            { label: "EasyCopyAI", href: "https://easycopyai.com" },
          ].map((l, i) => (
            <a
              key={i}
              href={l.href}
              style={{
                fontSize: 11,
                padding: "5px 10px",
                borderRadius: 6,
                background: C.darkCard2,
                border: `1px solid ${C.border}`,
                color: C.muted,
                textDecoration: "none",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* LEGAL */}
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <a
            href="/terms"
            style={{
              fontSize: 11,
              color: C.dim,
              textDecoration: "none",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Terms
          </a>

          <a
            href="/privacy"
            style={{
              fontSize: 11,
              color: C.dim,
              textDecoration: "none",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Privacy
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          maxWidth: 1040,
          margin: "20px auto 0",
          paddingTop: 20,
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: C.dim,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          © {new Date().getFullYear()} unignore.com
        </div>

        <div
          style={{
            fontSize: 11,
            color: C.dim,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          Consumer Psychology → Revenue Systems
        </div>
      </div>
    </footer>
  );
}
