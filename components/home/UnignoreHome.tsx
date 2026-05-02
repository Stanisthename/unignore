'use client'

import { useState } from 'react'
import Navigation from '@/components/home/Navigation'

const HEADSHOT_URL = '/images/stan-jakim.PNG'
const AMS_URL = 'https://theaimarketingstack.com'

const PRODUCTS = [
  {
    name: 'The AI Marketing Stack',
    url: AMS_URL,
    cta: 'Find My #1 Marketing Leak',
    price: 'Free to start',
    description: 'Your funnel has a specific weak point holding everything back. 10 diagnostic tools find it -- and tell you exactly what to fix first.',
    accent: '#D97706',
    comingSoon: false,
  },
  {
    name: 'ThriveEasyAI',
    url: 'https://thriveeasyai.com',
    cta: 'Build Your Bot',
    price: '$447/yr',
    description: 'Every question your team answers manually is revenue they are too busy to generate. Pre-built AI chatbot templates for course creators.',
    accent: '#16A34A',
    comingSoon: false,
  },
  {
    name: 'ScribeCrafter',
    url: 'https://scribecrafter.com',
    cta: 'Generate My Sequence',
    price: '$447/yr',
    description: 'Most email sequences educate instead of convert. AI-generated sequences built around your offer, your ICP, and your proof.',
    accent: '#2563EB',
    comingSoon: true,
  },
  {
    name: 'EasyCopyAI',
    url: 'https://easycopyai.com',
    cta: 'Build My Sales Page',
    price: '$447/yr',
    description: 'A sales page that describes your offer is not the same as one that converts it. AI-built pages optimized for your buyer, not your biography.',
    accent: '#7C3AED',
    comingSoon: true,
  },
]

const CREDENTIALS = [
  'National Accounts Director -- ActMedia / SmartSource / ActRadio',
  'Turner Sports -- Goodwill Games pre-Olympic Atlanta 1996',
  'Olympic Sponsorship -- Atlanta 1996',
  'Agency work -- Young and Rubicam, J. Walter Thompson',
  'CPG clients -- Hunt-Wesson, Mattel, Levis and 50+ major brands',
  'Single 6-week program: $700K--$2M incremental revenue per campaign',
]

export default function UnignoreHome() {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', background: '#0A0A0B', minHeight: '100vh' }}>

      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; }
        .hero-shot { flex-shrink: 0; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-shot { margin: 0 auto; }
        }
      `}</style>

      <Navigation />

      {/* HERO */}
      <section style={{ padding: '80px 40px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <div className='hero-grid'>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', borderRadius: 20, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706' }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#D97706', letterSpacing: '0.08em' }}>35-YEAR MARKETING VETERAN</span>
            </div>
            <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(32px, 5vw, 58px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#ffffff', marginBottom: 16 }}>
              Marketing systems that<br />
              <span style={{ color: '#D97706' }}>eliminate the guesswork.</span>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 520, marginBottom: 20 }}>
              Stan Jakim. 35 years at the intersection of consumer psychology and revenue systems. Now I build AI tools that give course creators the same diagnostic clarity that Fortune 500 brands pay millions for.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 520, marginBottom: 12, fontStyle: 'italic' }}>
              Most course creators are marketing to an average of their audience -- not their actual buyer. That single gap is responsible for more lost revenue than any ad budget, funnel hack, or launch strategy.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 480, marginBottom: 32 }}>
              The AI Marketing Stack finds your specific leak in under 3 minutes. Free to start.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
              <a href={AMS_URL} style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: '#D97706', borderRadius: 10, fontSize: 15, fontWeight: 700, color: '#ffffff', textDecoration: 'none', boxShadow: '0 2px 16px rgba(217,119,6,0.35)' }}>
                Find My #1 Marketing Leak
              </a>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
                Free to start -- No credit card -- 3 minutes
              </span>
            </div>
          </div>
          <div className='hero-shot'>
            <div style={{ width: 300, height: 360, borderRadius: 18, overflow: 'hidden', padding: 2, background: 'linear-gradient(135deg, #D97706, #7C3AED)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: 16, overflow: 'hidden', background: '#1e293b' }}>
                <img src={HEADSHOT_URL} alt='Stan Jakim' style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              </div>
            </div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: 10, lineHeight: 1.5 }}>
              Stan Jakim<br />Developer, The AI Marketing Stack
            </p>
            <div style={{ textAlign: 'center', marginTop: 14 }}>
              <a href='/about' style={{ display: 'inline-flex', alignItems: 'center', padding: '9px 20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                About Stan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ background: '#FAFAF8', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>THE TOOLS</p>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: 16 }}>
              Your funnel has a leak. These tools find it.
            </h2>
            <p style={{ fontSize: 16, color: '#334155', lineHeight: 1.75, maxWidth: 600, marginBottom: 12 }}>
              Most course creators optimize what is visible -- their ads, their landing page, their launch sequence. The leak is almost always upstream: a blurry ICP, a misaligned offer, a sequence that educates instead of converts.
            </p>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, maxWidth: 560 }}>
              Each tool below targets a specific layer of that problem. Start free. No account required.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {PRODUCTS.map((p) => (
              <div key={p.name} onMouseEnter={() => setHovered(p.name)} onMouseLeave={() => setHovered(null)}
                style={{ background: '#ffffff', border: hovered === p.name ? '1px solid ' + p.accent + '60' : '1px solid #e2e8f0', borderRadius: 12, padding: '24px', position: 'relative', opacity: p.comingSoon ? 0.65 : 1, transition: 'border-color 0.2s ease' }}>
                {p.comingSoon && <div style={{ position: 'absolute', top: 14, right: 14, fontFamily: 'DM Mono, monospace', fontSize: 9, padding: '2px 8px', background: '#f1f5f9', borderRadius: 4, color: '#94a3b8' }}>COMING SOON</div>}
                <div style={{ width: 36, height: 36, borderRadius: 8, background: p.accent + '15', border: '1px solid ' + p.accent + '30', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 12, height: 12, borderRadius: 2, background: p.accent }} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, marginBottom: 16 }}>{p.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: p.accent, fontWeight: 500 }}>{p.price}</span>
                  {!p.comingSoon && <a href={p.url} style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', background: p.accent, padding: '6px 14px', borderRadius: 6, textDecoration: 'none' }}>{p.cta}</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ background: '#ffffff', padding: '80px 40px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>WHY THIS IS DIFFERENT</p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.2, marginBottom: 16 }}>
            These frameworks generated millions for Fortune 500 brands.
          </h2>
          <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.75, marginBottom: 16, maxWidth: 620 }}>
            The diagnostic principles behind the AI Marketing Stack were not built for course creators. They were built for national CPG campaigns where a single misjudged ICP or misaligned offer meant millions in wasted spend.
          </p>
          <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, marginBottom: 40, maxWidth: 600 }}>
            A single 6-week in-store program with Food Lion routinely generated $700K--$2M in incremental revenue. The difference between those results and average results was always diagnostic precision -- knowing exactly who the buyer was, what triggered them, and what message landed. That precision is now in these tools.
          </p>
          <div>
            {CREDENTIALS.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: i < CREDENTIALS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                <div style={{ width: 20, height: 20, borderRadius: 5, background: 'linear-gradient(135deg, #D97706, #7C3AED)', flexShrink: 0, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width={9} height={9} viewBox='0 0 9 9' fill='none'><path d='M1.5 4.5l2 2 4-4' stroke='#fff' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' /></svg>
                </div>
                <span style={{ fontSize: 13, color: '#334155', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLUEPRINT CTA */}
      <section style={{ background: '#0A0A0B', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#D97706', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>THE UNIGNORE BLUEPRINT</p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 36, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            Most course creators never see the complete picture.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 12 }}>
            They fix what they can see -- the landing page, the email, the ad. The leak continues because the real problem is upstream and invisible without a diagnostic.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 32 }}>
            Complete all 10 tools and receive your Unignore Blueprint -- aggregated scores, your top 3 wins, your top 3 gaps, and a single prioritized next step. The complete picture, for the first time.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <a href={AMS_URL} style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: 'linear-gradient(135deg, #D97706, #7C3AED)', borderRadius: 10, fontSize: 15, fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>
              Find My #1 Marketing Leak
            </a>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em' }}>
              Free to start -- No credit card -- 3 minutes
            </span>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0A0A0B', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <a href='/' style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, background: 'linear-gradient(135deg, #D97706, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>Unignore</a>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <a href='/terms' style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Terms</a>
          <a href='/privacy' style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Privacy</a>
          <a href='/about' style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>About</a>
          <a href={AMS_URL} style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>The AI Marketing Stack</a>
        </div>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>
          (c) {new Date().getFullYear()} Unignore
        </div>
      </footer>

    </div>
  )
}
