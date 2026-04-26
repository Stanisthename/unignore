import { OFFERS } from "../data/offers";
import { C } from "../data/constants";

export default function OfferStack() {
  return (
    <section style={{ padding: "80px 40px", maxWidth: 1100, margin: "0 auto" }}>

      <h2 style={{
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 24
      }}>
        Recommended starting point
      </h2>

      <div style={{ display: "grid", gap: 16 }}>
        {OFFERS.map(o => (
          <div
            key={o.id}
            style={{
              padding: 20,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              background: o.primary ? "#151518" : "transparent"
            }}
          >
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>
              {o.name}
            </h3>

            <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.6 }}>
              {o.description}
            </p>

            {o.primary && (
              <div style={{ marginTop: 14 }}>
                <a href="https://theaimarketingstack.com/tools/icp-scorer">
                  <button style={{
                    padding: "10px 16px",
                    background: C.amber,
                    border: "none",
                    borderRadius: 6,
                    color: "#fff",
                    fontWeight: 700,
                    cursor: "pointer"
                  }}>
                    Start Here
                  </button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
