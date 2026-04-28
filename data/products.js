// /data/products.js

import { C } from "./constants";

export const PRODUCTS = [
  {
    id: "stack",
    featured: true,

    name: "The AI Marketing Stack",
    tagline: "10 AI-Powered Marketing Diagnostics",

    desc:
      "Diagnostic system that identifies breakdowns in your marketing and generates fixes before you spend on traffic.",

    url: "https://theaimarketingstack.com",

    ctaPrimary: {
      label: "Start Free — Tool 1",
      href: "https://theaimarketingstack.com/tools/icp-scorer",
    },

    ctaSecondary: {
      label: "Complete System — $497",
      href: "https://theaimarketingstack.com/checkout/complete-system",
    },

    accent: C.amber,

    features: [
      "10 sequential diagnostic tools",
      "Auto-pull architecture between tools",
      "Unignore Blueprint generated automatically",
      "Free entry — no account required",
    ],

    badge: "Primary Offer",
  },

  {
    id: "thrive",
    featured: false,

    name: "ThriveEasyAI",
    tagline: "Custom AI Chatbot Platform",

    desc:
      "Build, train, and deploy a custom AI chatbot for your business. Pre-built templates for sales FAQ, onboarding, and lead capture.",

    url: "https://thriveeasyai.com",

    ctaPrimary: {
      label: "Build Your Bot →",
      href: "https://thriveeasyai.com/get-started",
    },

    ctaSecondary: null,

    accent: C.green,

    price: "$447/yr",

    features: [
      "Pre-built bot templates for course creators",
      "Sales FAQ · onboarding · lead capture",
      "Bring your own API key",
      "Training + swipe files included",
    ],

    comingSoon: false,
  },

  {
    id: "scribe",
    featured: false,

    name: "ScribeCrafter",
    tagline: "AI Email Copy Platform",

    desc:
      "Create email sequences built for your exact ICP — from welcome to re-engagement to launch.",

    url: "https://scribecrafter.com",

    ctaPrimary: {
      label: "Generate My Sequence →",
      href: "https://scribecrafter.com/get-started",
    },

    ctaSecondary: null,

    accent: C.amber,

    price: "$447/yr",

    features: [
      "ICP-calibrated email sequences",
      "Welcome · nurture · launch · re-engagement",
      "Swipe files + training system",
      "Annual plan access",
    ],

    comingSoon: true,
  },

  {
    id: "easycopy",
    featured: false,

    name: "EasyCopyAI",
    tagline: "AI Sales Page Copy Platform",

    desc:
      "Generate conversion-focused sales pages built for your exact ICP in minutes.",

    url: "https://easycopyai.com",

    ctaPrimary: {
      label: "Build My Sales Page →",
      href: "https://easycopyai.com/get-started",
    },

    ctaSecondary: null,

    accent: C.violet,

    price: "$447/yr",

    features: [
      "ICP-calibrated sales page copy",
      "Headline · body · proof · CTA frameworks",
      "Swipe files + training system",
      "Annual plan access",
    ],

    comingSoon: true,
  },
];
