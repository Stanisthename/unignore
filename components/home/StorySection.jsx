"use client";

import { C } from "../../data/constants";

const STORY_GRAFS = [
  {
    lead: true,
    text:
      "Before email sequences, funnels, and AI automation — I was sitting across the table from category managers at Kroger, Food Lion, and Toys R Us as a National Accounts Director at ActMedia / SmartSource, building in-store shopper marketing programs for brands including Coca-Cola, Nestlé, Dial, Del Monte, Hunt-Wesson, Mattel, and Levi's.",
  },
  {
    text:
      "A single 6-week in-store program with Food Lion routinely generated $700K to $2M in incremental revenue for major CPG brands — with select campaigns exceeding $4M depending on SKU velocity and brand strength.",
  },
  {
    text:
      "That question — what moves a buyer — has driven every chapter since. Director of Marketing in professional baseball, responsible for sponsorship revenue and converting casual fans into season ticket holders.",
  },
  {
    text:
      "Director of Sports Marketing with NewCity / ClearChannel, managing revenue systems across Division I university athletics, professional baseball, and hockey franchises simultaneously.",
  },
  {
    text:
      "As Director of Marketing and Sponsorships within a U.S. Olympic Winter Sports National Governing Body, I worked directly with the USOC, NBC, Turner Sports, and 8-figure national sponsors including Verizon.",
  },
  {
    text:
      "After the Olympics, I built a custom VIP loyalty and rewards program for a major Division I university athletics department — designing the full consumer journey across in-game, digital, print, and email systems.",
  },
  {
    text:
      "For the last 15 years I have applied everything learned to the online world — e-commerce, funnels, email marketing, affiliate systems, and conversion optimization.",
  },
];

export default function StorySection() {
  return (
    <section
      style={{
        background: C.cream,
        padding: "90px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 60,
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ position: "sticky", top: 90, alignSelf: "start" }}>
          <div
            style={{
              fontSize: 11,
              fontFamily: "'DM Mono', monospace",
              color: C.bodyMuted,
              letterSpacing: "0.1em",
              marginBottom: 14,
            }}
          >
            THE STORY
          </div>

          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 38,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: C.bodyDark,
            }}
          >
            I learned it
            <br />
            in the field.
          </h2>

          <p
            style={{
              marginTop: 16,
              fontSize: 13,
              color: C.bodyMuted,
              lineHeight: 1.7,
            }}
          >
            Before funnels and AI — 20+ years working directly inside retail, sports, and national brand systems.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {STORY_GRAFS.map((g, i) => (
            <p
              key={i}
              style={{
                fontSize: g.lead ? 16 : 15,
                lineHeight: 1.85,
                color: g.lead ? C.bodyDark : C.bodyText,
                marginBottom: 18,
                fontWeight: g.lead ? 500 : 400,
              }}
            >
              {g.text}
            </p>
          ))}

          {/* KEY STAT BLOCK */}
          <div
            style={{
              marginTop: 36,
              padding: "24px 28px",
              background: "#fff",
              borderRadius: 12,
              border: `1px solid ${C.borderLight}`,
              borderLeft: `4px solid ${C.amber}`,
            }}
          >
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 26,
                lineHeight: 1.2,
                fontWeight: 700,
                color: C.bodyDark,
              }}
            >
              $700K to $2M incremental revenue
              <br />
              <span style={{ fontWeight: 300, color: C.bodyMuted }}>
                from a single 6-week campaign
              </span>
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 11,
                fontFamily: "'DM Mono', monospace",
                color: C.bodyMuted,
              }}
            >
              Food Lion × Top CPG Brands · ActMedia / SmartSource
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
