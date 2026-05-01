// components/home/UnignoreHome.tsx
'use client'

import { useState } from 'react'
import Navigation from '@/components/home/Navigation'

const HEADSHOT_URL = '/images/stan-jakim.PNG'
const AMS_URL = 'https://theaimarketingstack.com'

const PRODUCTS = [
  {
    name: 'The AI Marketing Stack',
    url: AMS_URL,
    cta: 'Get My Free Score',
    price: 'Free to start',
    description: 'The 10-tool diagnostic suite. Score your ICP, offer, sales page, email, and chatbot. Get your Unignore Blueprint.',
    accent: '#D97706',
    comingSoon: false,
  },
  {
    name: 'ThriveEasyAI',
    url: 'https://thriveeasyai.com',
    cta: 'Build Your Bot',
    price: '$447/yr',
    description: 'AI chatbot platform for course creators. Pre-built templates for sales FAQ, student onboarding, and lead capture.',
    accent: '#16A34A',
    comingSoon: false,
  },
  {
    name: 'ScribeCrafter',
    url: 'https://scribecrafter.com',
    cta: 'Generate My Sequence',
    price: '$447/yr',
    description: 'AI email sequence generator. Built for course creators who need conversion-ready sequences without writing from scratch.',
    accent: '#2563EB',
    comingSoon: true,
  },
  {
    name: 'EasyCopyAI',
    url: 'https://easycopyai.com',
    cta: 'Build My Sales Page',
    price: '$447/yr',
    description: 'AI sales page builder. Input your offer, ICP, and proof. Get a conversion-ready sales page in minutes.',
    accent: '#7C3AED',
    comingSoon: true,
  },
]

const CREDENTIAL_ITEMS = [
  'National Accounts Director -- ActMedia / SmartSource / ActRadio',
  'Turner Sports -- Goodwill Games (pre-Olympic Atlanta 1996)',
  'Olympic Sponsorship -- Atlanta 1996',
  'Agency work -- Young & Rubicam, J. Walter Thompson',
  'CPG clients -- Hunt-Wesson, Mattel, Levis and 50+ major brands',
  'Single 6-week in-store program: $700K--$2M incremental revenue per campaign',
]

export default function UnignoreHome() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', background: '#0A0A0B', minHeight: '100vh' }}>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 60px;
          align-items: center;
        }
        .hero-headshot {
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-headshot {
            margin: 0 auto;
          }
        }
      `}</style>

      <Navigation />

      <section style={{ padding: '80px 40px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="hero-grid">
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 14px',
              background: 'rgba(217,119,6,0.12)',
              border: '1px solid rgba(217,119,6,0.3)',
              borderRadius: 20,
              marginBottom: 28,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706' }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#D97706', letterSpacing: '0.08em' }}>
                Conversion by Design
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(32px, 5vw, 58px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: 16,
            }}>
              Marketing systems that<br />
              <span style={{ color: '#D97706' }}>eliminate the guesswork.</span>
            </h1>

            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              Stan Jakim. I spent 35 years at the intersection of consumer psychology and revenue systems. Now I build AI tools that give course creators the same diagnostic clarity that Fortune 500 brands pay millions for.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={AMS_URL} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '13px 28px',
                background: '#D97706',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 2px 16px rgba(217,119,6,0.35)',
              }}>
                Get My Free Score
              </a>
              <a href="/about" style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '13px 24px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
              }}>
                About Stan
              </a>
            </div>
          </div>

          <div className="hero-headshot">
            <div style={{
              width: 300,
              height: 360,
              borderRadius: 18,
              overflow: 'hidden',
              padding: 2,
              background: 'linear-gradient(135deg, #D97706, #7C3AED)',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: 16,
                overflow: 'hidden',
                background: '#1e293b',
              }}>
                <img
                  src={HEADSHOT_URL}
                  alt="Stan Jakim"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </div>
            </div>
            <p style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: 10,
              color: 'rgba(255,255,255,0.35)',
              textAlign: 'center',
              marginTop: 10,
              lineHeight: 1.5,
            }}>
              Stan Jakim<br />
              Developer, The AI Marketing Stack
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#FAFAF8', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
              THE PRODUCT SUITE
            </p>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: 12 }}>
              Four AI tools. One system.
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', maxWidth: 520 }}>
              Each tool solves a specific problem. Together they cover the entire funnel from ICP clarity to retention.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                onMouseEnter={() => setHoveredProduct(product.name)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 12,
                  padding: '24px',
                  position: 'relative',
                  opacity: product.comingSoon ? 0.7 : 1,
                }}
              >
                {product.comingSoon && (
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    fontFamily: 'DM Mono, monospace', fontSize: 9,
                    padding: '2px 8px', background: '#f1f5f9', borderRadius: 4, color: '#94a3b8',
                  }}>
                    COMING SOON
                  </div>
                )}
                <div style={{ width: 36, height: 36, borderRadius: 8, background: product.accent + '15', border: '1px solid ' + product.accent + '30', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 12, height: 12, borderRadius: 2, background: product.accent }} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{product.name}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, marginBottom: 16 }}>{product.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: product.accent, fontWeight: 500 }}>{product.price}</span>
                  {!product.comingSoon && (
                    <a href={product.url} style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', background: product.accent, padding: '6px 14px', borderRadius: 6, textDecoration: 'none' }}>
                      {product.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#ffffff', padding: '80px 40px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>THE CREDENTIAL</p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.2, marginBottom: 20 }}>
            35 years at the intersection of consumer psychology and revenue.
          </h2>
          <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, marginBottom: 40, maxWidth: 600 }}>
            A single 6-week in-store program with Food Lion routinely generated $700K--$2M in incremental revenue for major CPG brands. Select campaigns exceeded $4M.
          </p>
          <div>
            {CREDENTIAL_ITEMS.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: i < CREDENTIAL_ITEMS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                <div style={{ width: 20, height: 20, borderRadius: 5, background: 'linear-gradient(135deg, #D97706, #7C3AED)', flexShrink: 0, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width={9} height={9} viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span style={{ fontSize: 13, color: '#334155', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#0A0A0B', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#D97706', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>THE UNIGNORE BLUEPRINT</p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 36, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            Complete all 10 tools.<br />Get your complete picture.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32 }}>
            The Unignore Blueprint aggregates all 10 diagnostic scores, surfaces your top wins and gaps, and gives you a prioritized next step.
          </p>
          <a href={AMS_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'linear-gradient(135deg, #D97706, #7C3AED)', borderRadius: 10, fontSize: 15, fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>
            Get My Free Score
          </a>
        </div>
      </section>

      <footer style={{ background: '#0A0A0B', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <a href="/" style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, background: 'linear-gradient(135deg, #D97706, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>Unignore</a>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[{ label: 'Terms', href: '/terms' }, { label: 'Privacy', href: '/privacy' }, { label: 'About', href: '/about' }, { label: 'The AI Marketing Stack', href: AMS_URL }].map((link) => (
            <a key={link.label} href={link.href} style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>{link.label}</a>
          ))}
        </div>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>
          (c) {new Date().getFullYear()} Unignore
        </div>
      </footer>

    </div>
  )
}
