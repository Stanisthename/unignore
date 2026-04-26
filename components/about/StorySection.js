import { C } from "../data/constants";
import { PROOF } from "../data/proof";

export default function StorySection() {
  return (
    <div>

      <h1 style={{
        fontSize: 42,
        fontWeight: 700,
        letterSpacing: "-0.03em",
        marginBottom: 24
      }}>
        Why this system exists
      </h1>

      <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.7 }}>
        I started in national retail marketing building in-store programs for Fortune 100 brands.
        The core question never changed: what drives purchase at the exact moment of decision?
      </p>

      {/* PROOF BLOCKS */}
      <div style={{ marginTop: 30, display: "grid", gap: 16 }}>
        {PROOF.map((p, i) => (
          <div
            key={i}
            style={{
              padding: 20,
              border: `1px solid ${C.border}`,
              borderRadius: 8
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 700 }}>
              {p.metric}
            </div>
            <div style={{ color: C.muted, fontSize: 13 }}>
              {p.context}
            </div>
            <div style={{ color: "#666", fontSize: 12, marginTop: 6 }}>
              {p.detail}
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 30, color: C.muted, lineHeight: 1.7 }}>
        That same behavioral framework now powers digital funnels, SaaS onboarding systems, and AI-driven conversion architecture.
      </p>

    </div>
  );
}
