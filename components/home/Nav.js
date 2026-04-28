"use client";

import { useEffect, useState } from "react";
import { C } from "../../data/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: 56,
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? `${C.dark}EE` : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all .3s ease",
      }}
    >
      {/* LOGO */}
      <a
        href="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: C.white,
          }}
        >
          un
          <span
            style={{
              background: `linear-gradient(135deg,${C.amber},${C.violet})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ignore
          </span>
        </span>
      </a>

      {/* LINKS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
        }}
      >
        {[
          { label: "Tools", href: "https://theaimarketingstack.com/tools" },
          { label: "About", href: "#about" },
          { label: "ThriveEasyAI", href: "https://thriveeasyai.com" },
          { label: "ScribeCrafter", href: "https://scribecrafter.com" },
          { label: "EasyCopyAI", href: "https://easycopyai.com" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              fontSize: 13,
              color: C.muted,
              textDecoration: "none",
              fontFamily: "'DM Mono', monospace",
              transition: "color .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="https://theaimarketingstack.com/tools/icp-scorer"
        style={{ textDecoration: "none" }}
      >
        <button
          style={{
            padding: "8px 18px",
            background: C.amber,
            borderRadius: 7,
            color: "#fff",
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.04em",
            border: "none",
            cursor: "pointer",
          }}
        >
          Start Free →
        </button>
      </a>
    </nav>
  );
}
