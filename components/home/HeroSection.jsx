"use client";

import { C } from "../../data/constants";

export default function HeroSection( "/headshot.png" ) {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "100px 40px",
      background: C.dark
    }}>
      <div style={{
        maxWidth: 1040,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: 80,
        width: "100%"
      }}>

        <div>
          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "56px",
            lineHeight: 1.05,
            color: C.white,
            letterSpacing: "-0.04em"
          }}>
            Consumer Psychology<br />Applied to Revenue Systems
          </h1>

          <p style={{
            color: C.muted,
            marginTop: 20,
            fontSize: 16,
            lineHeight: 1.7,
            maxWidth: 520
          }}>
            Built across Fortune 100 brands, national retail campaigns, and performance systems.
          </p>

          <div style={{ marginTop: 30 }}>
            <a href="https://theaimarketingstack.com/tools/icp-scorer">
              <button style={{
                background: C.amber,
                border: 0,
                padding: "12px 24px",
                borderRadius: 8,
                color: "#fff",
                fontWeight: 600
              }}>
                Run Free Diagnostic
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={headshotUrl}
            style={{
              width: "100%",
              borderRadius: 16,
              border: `2px solid ${C.amber}`
            }}
          />
        </div>

      </div>
    </section>
  );
}
