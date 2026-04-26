import { PROOF } from "../data/proof";
import { C } from "../data/constants";

export default function TrustStrip() {
  return (
    <section style={{
      padding: "40px",
      borderTop: `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 24
      }}>
        {PROOF.map((p, i) => (
          <div key={i}>
            <div style={{
              fontSize: 22,
              fontWeight: 700,
              marginBottom: 6
            }}>
              {p.metric}
            </div>
            <div style={{
              color: C.muted,
              fontSize: 13,
              lineHeight: 1.4
            }}>
              {p.context}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
