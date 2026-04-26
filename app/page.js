import { useState, useEffect } from "react";

const C = {
  amber: "#D97706",
  violet: "#7C3AED",
  dark: "#0A0A0B",
  white: "#FAFAFA",
};

const METRICS = [
  { value: "$700K–$4M", label: "incremental revenue per campaign" },
  { value: "35", label: "years experience" },
  { value: "10", label: "AI tools built" },
];

function Metric({ m }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: 32, fontWeight: 700 }}>{m.value}</p>
      <p style={{ fontSize: 12, opacity: 0.7 }}>{m.label}</p>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ background: C.dark, color: C.white, minHeight: "100vh", padding: 40 }}>
      
      <h1 style={{ fontSize: 42, marginBottom: 20 }}>
        35 Years of Consumer Psychology.
      </h1>

      <p style={{ maxWidth: 500, marginBottom: 40 }}>
        Simple clean deploy version. Once live, you can layer your full design back in safely.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {METRICS.map((m, i) => (
          <Metric key={i} m={m} />
        ))}
      </div>

      <div style={{ marginTop: 40 }}>
        <a href="https://theaimarketingstack.com">
          <button
            style={{
              padding: "12px 24px",
              background: C.amber,
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Visit Site
          </button>
        </a>
      </div>

    </div>
  );
}
