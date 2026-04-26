import { C } from "../data/constants";

export default function Hero() {
  return (
    <section style={{ padding: "140px 40px 60px", maxWidth: 1100, margin: "0 auto" }}>

      <h1 style={{
        fontSize: "clamp(36px, 6vw, 64px)",
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: "-0.03em"
      }}>
        Consumer Psychology<br />
        Applied to Revenue Systems
      </h1>

      <p style={{
        color: C.muted,
        maxWidth: 560,
        marginTop: 16,
        fontSize: 16,
        lineHeight: 1.6
      }}>
        Built across Fortune 100 brands, national retail campaigns, and performance-driven marketing systems.
      </p>

      {/* PRIMARY CTA */}
      <div style={{ marginTop: 28 }}>
        <a href="https://theaimarketingstack.com/tools/icp-scorer">
          <button style={{
            padding: "14px 28px",
            background: C.amber,
            border: "none",
            borderRadius: 6,
            color: "#fff",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer"
          }}>
            Run Free Diagnostic
          </button>
        </a>
      </div>

      {/* SECONDARY TRUST LINK */}
      <div style={{ marginTop: 14 }}>
        <a href="/about" style={{
          color: C.muted,
          textDecoration: "none",
          fontSize: 13
        }}>
          Why this works →
        </a>
      </div>

    </section>
  );
}
