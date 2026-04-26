import { C } from "../data/constants";

export default function Footer() {
  return (
    <footer style={{
      padding: "60px 40px",
      borderTop: `1px solid ${C.border}`,
      marginTop: 40
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 20
      }}>

        <div>
          <div style={{ fontWeight: 700 }}>unignore</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 6 }}>
            AI Marketing Systems
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/about" style={{ color: C.muted, textDecoration: "none" }}>
            About
          </a>
          <a href="https://theaimarketingstack.com" style={{ color: C.muted, textDecoration: "none" }}>
            Tools
          </a>
        </div>

      </div>
    </footer>
  );
}
