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
      <div style={{ padding: 100 }}>TEST: HERO + TRUST</div>
      <Hero />
      <TrustStrip />
    </div>
  );
}
