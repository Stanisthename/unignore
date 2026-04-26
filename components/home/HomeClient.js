"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import OfferStack from "./OfferStack";
import Footer from "./Footer";
import { C } from "../data/constants";

export default function HomeClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh" }}>
      {/* NAV */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "16px 24px",
          background: scrolled ? "#0A0A0BEE" : "transparent",
          borderBottom: scrolled ? `1px solid ${C.border}` : "none",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 1000,
        }}
      >
        <div style={{ fontWeight: 700 }}>unignore</div>
        <a href="/about" style={{ color: C.muted, textDecoration: "none" }}>
          About
        </a>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ paddingTop: 80 }}>
        <Hero />
        <TrustStrip />
        <OfferStack />
        <Footer />
      </div>
    </div>
  );
}
