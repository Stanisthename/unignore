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
  <div style={{ padding: 100 }}>
    DEPLOY TEST — IF YOU SEE THIS, PIPELINE WORKS
  </div>
);
  
  

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
