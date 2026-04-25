export default function Home() {
  return (
    <>
  

import { useState, useEffect, useRef } from “react”;

const C = {
amber:       “#D97706”,
amberLight:  “#FEF3C7”,
amberDim:    “#92400E”,
violet:      “#7C3AED”,
violetDim:   “#4C1D95”,
dark:        “#0A0A0B”,
darkCard:    “#111113”,
darkCard2:   “#18181B”,
border:      “#27272A”,
borderLight: “#E5E7EB”,
white:       “#FAFAFA”,
cream:       “#FAFAF8”,
muted:       “#71717A”,
dim:         “#3F3F46”,
bodyDark:    “#1C1C1E”,
bodyText:    “#374151”,
bodyMuted:   “#6B7280”,
green:       “#16A34A”,
};

const HEADSHOT_URL = “/mnt/user-data/uploads/IMG_2271.jpeg”;

const METRICS = [
{ value:”$700K–$4M”,  label:“incremental revenue per 6-week campaign”, sub:“Food Lion × top CPG brands” },
{ value:“35”,          label:“years of consumer psychology & marketing”, sub:“National → online → AI” },
{ value:“10”,          label:“AI diagnostic tools in the stack”,         sub:“The AI Marketing Stack” },
{ value:“3”,           label:“AI platforms owned and licensed”,          sub:“ScribeCrafter · EasyCopyAI · ThriveEasyAI” },
];

const AGENCIES = [“DDB”,“FCB”,“Ogilvy”,“McCann Erickson”,“Young & Rubicam”,“J. Walter Thompson”,“TBWA”,“McGarryBowen”];
const BRANDS   = [“Coca-Cola”,“Nestlé”,“Del Monte”,“Hunt-Wesson”,“Dial”,“Mattel”,“Levi’s”,“Verizon”,“NBC”,“Turner Sports”,“Sony”,“Nike”];

const STORY_GRAFS = [
{ lead:true, text:“Before email sequences, funnels, and AI automation — I was sitting across the table from the category managers at Kroger, Food Lion, and Toys R Us as a National Accounts Director at ActMedia / SmartSource, building in-store shopper marketing programs for top brands including Coca-Cola, Nestlé, Dial, Del Monte, Hunt-Wesson, Mattel, and Levi’s. The entire job was one question: what moves a buyer from consideration to purchase at the exact moment it matters?” },
{ text:“A single 6-week in-store program with Food Lion routinely generated $700K to $2M in incremental revenue for major CPG brands — with select campaigns exceeding $4M depending on SKU velocity and brand strength.” },
{ text:“That question — what moves a buyer — has driven every chapter since. Director of Marketing in professional baseball, responsible for sponsorship revenue and converting casual fans into season ticket holders. Director of Sports Marketing with NewCity / ClearChannel, managing the revenue relationship between a major Division I university and their fan base across football, basketball, and lacrosse — plus a professional baseball team and hockey franchise simultaneously.” },
{ text:“As Director of Marketing and Sponsorships within a U.S. Olympic Winter Sports National Governing Body, I worked directly with the USOC, NBC, Turner Sports, and 8-figure national sponsors including Verizon — coordinating campaigns at the highest level of sports marketing in the country.” },
{ text:“After the Olympics, I built a custom VIP loyalty and rewards program from scratch for a major Division I university athletics department — designing the entire consumer journey from in-game experience to direct mail magazine to website portal to email marketing to sweepstakes and couponing.” },
{ text:“For the last 15 years I have applied everything I learned to the online world — e-commerce, sales funnels, email marketing, affiliate programs, AI automation, and conversion rate optimization.” },
];

const FOCUS_ITEMS = [
“Diagnosing exactly where conversions are breaking down and why”,
“Rebuilding offer positioning around buyer psychology — not guesswork”,
“Designing customer onboarding and nurturing systems that increase LTV”,
“Building or rebuilding the value ladder from first purchase to highest tier”,
“Eliminating founder bottlenecks by automating what does not require a human”,
];

const PRODUCTS = [
{
id:“stack”,
featured:true,
name:“The AI Marketing Stack”,
tagline:“10 AI-Powered Marketing Diagnostics”,
desc:“The only diagnostic system that tells you exactly what is broken in your marketing, in what order to fix it, and hands you the copy and campaigns to do it — before you spend a dollar on traffic.”,
url:“https://theaimarketingstack.com”,
ctaPrimary:{ label:“Start Free — Tool 1”, href:“https://theaimarketingstack.com/tools/icp-scorer” },
ctaSecondary:{ label:“Complete System — $497”, href:“https://theaimarketingstack.com/checkout/complete-system” },
accent:C.amber,
features:[“10 sequential diagnostic tools”,“Auto-pull architecture — each tool feeds the next”,“Unignore Blueprint generated on completion”,“Free T1 entry — no account required”],
badge:“Primary Offer”,
},
{
id:“thrive”,
featured:false,
name:“ThriveEasyAI”,
tagline:“Custom AI Chatbot Platform”,
desc:“Build, train, and deploy a custom AI chatbot for your business. Pre-built templates for sales FAQ, student onboarding, and lead capture. Bring your own API key — no per-query cost.”,
url:“https://thriveeasyai.com”,
ctaPrimary:{ label:“Build Your Bot →”, href:“https://thriveeasyai.com/get-started” },
ctaSecondary:null,
accent:C.green,
price:”$447/yr”,
features:[“Pre-built bot templates for course creators”,“Sales FAQ · onboarding · lead capture”,“Bring your own API key”,“Training + swipe files included”],
comingSoon:false,
},
{
id:“scribe”,
featured:false,
name:“ScribeCrafter”,
tagline:“AI Email Copy Platform”,
desc:“Stop sending generic AI emails. Create sequences built for your exact ICP — from welcome to re-engagement to launch. Turn your ICP into emails that sell, in minutes.”,
url:“https://scribecrafter.com”,
ctaPrimary:{ label:“Generate My Sequence →”, href:“https://scribecrafter.com/get-started” },
ctaSecondary:null,
accent:C.amber,
price:”$447/yr”,
features:[“ICP-calibrated email sequences”,“Welcome · nurture · launch · re-engagement”,“Admin panel with trainings + swipe files”,“Annual plan — instant access”],
comingSoon:true,
},
{
id:“easycopy”,
featured:false,
name:“EasyCopyAI”,
tagline:“AI Sales Page Copy Platform”,
desc:“From ICP to revenue-ready sales page — generate yours in minutes. Stop publishing generic AI pages. Build one that speaks directly to your exact buyer and converts cold traffic.”,
url:“https://easycopyai.com”,
ctaPrimary:{ label:“Build My Sales Page →”, href:“https://easycopyai.com/get-started” },
ctaSecondary:null,
accent:C.violet,
price:”$447/yr”,
features:[“ICP-calibrated sales page copy”,“Headline · body · proof · CTA frameworks”,“Admin panel with trainings + swipe files”,“Annual plan — instant access”],
comingSoon:true,
},
];

// ── ATOMS ─────────────────────────────────────────────────────
function Chk({ c = C.amber, size = 14 }) {
return (
<svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{flexShrink:0}}>
<circle cx={7} cy={7} r={6} stroke={c} strokeWidth={1.4}/>
<path d="M4.5 7l1.8 1.8 3.2-3.2" stroke={c} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);
}

function GradientWord({ children }) {
return (
<span style={{
background:`linear-gradient(135deg,${C.amber} 0%,${C.violet} 100%)`,
WebkitBackgroundClip:“text”,
WebkitTextFillColor:“transparent”,
backgroundClip:“text”,
}}>{children}</span>
);
}

function AmberDot() {
return (
<span style={{position:“relative”,display:“inline-flex”,alignItems:“center”,justifyContent:“center”,width:8,height:8,flexShrink:0}}>
<span style={{position:“absolute”,inset:0,borderRadius:“50%”,background:C.amber,opacity:0.35,
animation:“ping 2s cubic-bezier(0,0,.2,1) infinite”}}/>
<span style={{position:“relative”,width:6,height:6,borderRadius:“50%”,background:C.amber}}/>
</span>
);
}

// ── TICKER (brands/agencies) ──────────────────────────────────
function Ticker({ items, speed = 35 }) {
const doubled = […items, …items];
return (
<div style={{overflow:“hidden”,position:“relative”,maskImage:“linear-gradient(90deg,transparent 0%,#000 8%,#000 92%,transparent 100%)”}}>
<div style={{display:“flex”,gap:40,width:“max-content”,animation:`ticker ${speed}s linear infinite`}}>
{doubled.map((item,i) => (
<span key={i} style={{fontSize:12,fontFamily:”‘DM Mono’,monospace”,color:C.muted,letterSpacing:“0.08em”,whiteSpace:“nowrap”,flexShrink:0}}>
{item}
</span>
))}
</div>
</div>
);
}

// ── PRODUCT CARD ──────────────────────────────────────────────
function ProductCard({ p }) {
if (p.featured) {
return (
<div style={{gridColumn:“1/-1”,padding:2,borderRadius:16,background:`linear-gradient(135deg,${C.amber},${C.violet})`,boxShadow:`0 4px 32px ${C.amber}18`}}>
<div style={{borderRadius:14,background:”#fff”,padding:“36px 40px”,display:“grid”,gridTemplateColumns:“1fr 1fr”,gap:40,alignItems:“start”}}>
<div>
<div style={{display:“inline-flex”,alignItems:“center”,gap:8,marginBottom:16,padding:“4px 12px”,borderRadius:20,background:C.amberLight,border:`1px solid ${C.amber}40`}}>
<AmberDot/>
<span style={{fontSize:11,fontWeight:600,color:C.amberDim,fontFamily:”‘DM Mono’,monospace”,letterSpacing:“0.08em”}}>PRIMARY OFFER · {p.badge.toUpperCase()}</span>
</div>
<h3 style={{fontSize:28,fontWeight:700,letterSpacing:”-0.03em”,color:C.bodyDark,marginBottom:6,lineHeight:1.1}}>{p.name}</h3>
<p style={{fontSize:13,color:C.amber,fontFamily:”‘DM Mono’,monospace”,fontWeight:600,marginBottom:16,letterSpacing:“0.04em”}}>{p.tagline}</p>
<p style={{fontSize:15,color:C.bodyText,lineHeight:1.75,marginBottom:28}}>{p.desc}</p>
<div style={{display:“flex”,gap:10,flexWrap:“wrap”}}>
<a href={p.ctaPrimary.href} style={{textDecoration:“none”}}>
<button className=“btn-primary” style={{padding:“11px 22px”,background:C.amber,border:“none”,borderRadius:8,color:”#fff”,fontSize:13,fontWeight:700,boxShadow:`0 2px 12px ${C.amber}40`}}>
{p.ctaPrimary.label}
</button>
</a>
{p.ctaSecondary && (
<a href={p.ctaSecondary.href} style={{textDecoration:“none”}}>
<button className=“btn-ghost” style={{padding:“11px 20px”,background:“transparent”,border:`1px solid ${C.borderLight}`,borderRadius:8,color:C.bodyMuted,fontSize:13,fontWeight:500}}>
{p.ctaSecondary.label}
</button>
</a>
)}
</div>
<p style={{marginTop:10,fontSize:11,color:C.bodyMuted,fontFamily:”‘DM Mono’,monospace”}}>Free to start · No account required · Results in 60 seconds</p>
</div>
<div>
<p style={{fontSize:11,fontWeight:600,color:C.bodyMuted,fontFamily:”‘DM Mono’,monospace”,letterSpacing:“0.08em”,marginBottom:14}}>WHAT YOU GET</p>
<div style={{display:“flex”,flexDirection:“column”,gap:10}}>
{p.features.map((f,i) => (
<div key={i} style={{display:“flex”,alignItems:“flex-start”,gap:10,padding:“10px 14px”,background:C.cream,borderRadius:8,border:`1px solid ${C.borderLight}`}}>
<Chk c={C.amber}/>
<span style={{fontSize:13,color:C.bodyDark,lineHeight:1.5}}>{f}</span>
</div>
))}
</div>
<a href={p.url} style={{display:“block”,marginTop:16,fontSize:12,color:C.amber,fontFamily:”‘DM Mono’,monospace”,textDecoration:“none”}}
onMouseEnter={e=>e.currentTarget.style.textDecoration=“underline”}
onMouseLeave={e=>e.currentTarget.style.textDecoration=“none”}>
{p.url.replace(“https://”,””)} →
</a>
</div>
</div>
</div>
);
}

return (
<div style={{padding:“28px”,background:”#fff”,border:`1px solid ${C.borderLight}`,borderRadius:14,display:“flex”,flexDirection:“column”,gap:0,position:“relative”,overflow:“hidden”,transition:“box-shadow .2s,border-color .2s”}}
onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 4px 24px ${p.accent}14`;e.currentTarget.style.borderColor=`${p.accent}40`;}}
onMouseLeave={e=>{e.currentTarget.style.boxShadow=“none”;e.currentTarget.style.borderColor=C.borderLight;}}>
{/* top accent line */}
<div style={{position:“absolute”,top:0,left:0,right:0,height:2,background:p.accent}}/>

```
  <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:16,marginTop:8}}>
    <div>
      <h3 style={{fontSize:17,fontWeight:700,letterSpacing:"-0.02em",color:C.bodyDark,marginBottom:3}}>{p.name}</h3>
      <p style={{fontSize:11,color:p.accent,fontFamily:"'DM Mono',monospace",fontWeight:600,letterSpacing:"0.04em"}}>{p.tagline}</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4}}>
      <span style={{fontSize:15,fontWeight:700,color:C.bodyDark,fontFamily:"'DM Mono',monospace"}}>{p.price}</span>
      {p.comingSoon && (
        <span style={{fontSize:9,fontWeight:600,color:p.accent,background:`${p.accent}12`,padding:"2px 8px",borderRadius:10,fontFamily:"'DM Mono',monospace",letterSpacing:"0.06em"}}>COMING SOON</span>
      )}
    </div>
  </div>

  <p style={{fontSize:13,color:C.bodyText,lineHeight:1.7,marginBottom:20,flex:1}}>{p.desc}</p>

  <div style={{marginBottom:20}}>
    {p.features.map((f,i) => (
      <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:7}}>
        <Chk c={p.accent} size={13}/>
        <span style={{fontSize:12,color:C.bodyMuted,lineHeight:1.4}}>{f}</span>
      </div>
    ))}
  </div>

  {p.comingSoon ? (
    <div style={{padding:"11px 18px",background:`${p.accent}10`,border:`1px solid ${p.accent}30`,borderRadius:8,textAlign:"center"}}>
      <p style={{fontSize:12,fontWeight:600,color:p.accent,fontFamily:"'DM Mono',monospace"}}>Launching within 48 hours</p>
      <p style={{fontSize:11,color:C.bodyMuted,marginTop:2}}>Join the waitlist to be first in.</p>
    </div>
  ) : (
    <a href={p.ctaPrimary.href} style={{textDecoration:"none"}}>
      <button className="btn-primary" style={{width:"100%",padding:"11px",background:p.accent,border:"none",borderRadius:8,color:"#fff",fontSize:13,fontWeight:600,boxShadow:`0 1px 6px ${p.accent}30`}}>
        {p.ctaPrimary.label}
      </button>
    </a>
  )}
</div>
```

);
}

// ── MAIN PAGE ─────────────────────────────────────────────────
export default function UnignoreHome() {
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const fn = () => setScrolled(window.scrollY > 40);
window.addEventListener(“scroll”, fn);
return () => window.removeEventListener(“scroll”, fn);
}, []);

return (
<>
<style>{`
@import url(‘https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500;600&display=swap’);

```
    *{box-sizing:border-box;margin:0;padding:0;}
    body{background:${C.dark};color:${C.white};font-family:'DM Sans',system-ui,sans-serif;}
    ::-webkit-scrollbar{width:4px;}
    ::-webkit-scrollbar-thumb{background:${C.border};border-radius:2px;}
    html{scroll-behavior:smooth;}

    @keyframes fadeUp{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}
    @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
    @keyframes ping{75%,100%{transform:scale(2.2);opacity:0;}}
    @keyframes ticker{from{transform:translateX(0);}to{transform:translateX(-50%);}}
    @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}

    .btn-primary{transition:all .18s ease;cursor:pointer;border:none;display:inline-flex;align-items:center;gap:6px;}
    .btn-primary:hover{opacity:.88;transform:translateY(-1px);}
    .btn-ghost{transition:all .18s ease;cursor:pointer;display:inline-flex;align-items:center;gap:6px;}
    .btn-ghost:hover{color:${C.white}!important;border-color:#52525B!important;}

    .section-light{background:${C.cream};}
    .section-white{background:#fff;}

    a{color:inherit;}

    .story-graf{font-family:'DM Sans',sans-serif;font-size:15px;color:${C.bodyText};line-height:1.82;margin-bottom:20px;}
    .story-graf.lead{font-size:17px;color:${C.bodyDark};font-weight:500;line-height:1.75;}

    .metric-value{font-family:'Fraunces',serif;font-weight:700;font-size:clamp(36px,5vw,56px);letter-spacing:-0.04em;line-height:1;color:${C.white};}

    @media(max-width:768px){
      .hero-grid{grid-template-columns:1fr!important;}
      .product-grid{grid-template-columns:1fr!important;}
      .metrics-grid{grid-template-columns:1fr 1fr!important;}
      .hide-mobile{display:none!important;}
    }
  `}</style>

  <div style={{minHeight:"100vh",background:C.dark}}>

    {/* ── NAV ─────────────────────────────────────────── */}
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:200,
      height:56,padding:"0 40px",
      display:"flex",alignItems:"center",justifyContent:"space-between",
      background:scrolled?`${C.dark}EE`:"transparent",
      backdropFilter:scrolled?"blur(16px)":"none",
      borderBottom:scrolled?`1px solid ${C.border}`:"none",
      transition:"all .3s ease"
    }}>
      <a href="/" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:10}}>
        <span style={{fontFamily:"'Fraunces',serif",fontSize:20,fontWeight:700,letterSpacing:"-0.04em",color:C.white}}>
          un<span style={{background:`linear-gradient(135deg,${C.amber},${C.violet})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>ignore</span>
        </span>
      </a>
      <div style={{display:"flex",alignItems:"center",gap:28}} className="hide-mobile">
        {[
          {label:"Tools",href:"https://theaimarketingstack.com/tools"},
          {label:"About",href:"#about"},
          {label:"ThriveEasyAI",href:"https://thriveeasyai.com"},
          {label:"ScribeCrafter",href:"https://scribecrafter.com"},
          {label:"EasyCopyAI",href:"https://easycopyai.com"},
        ].map(l=>(
          <a key={l.label} href={l.href} style={{fontSize:13,color:C.muted,textDecoration:"none",fontFamily:"'DM Mono',monospace",transition:"color .15s"}}
            onMouseEnter={e=>e.currentTarget.style.color=C.white}
            onMouseLeave={e=>e.currentTarget.style.color=C.muted}>
            {l.label}
          </a>
        ))}
      </div>
      <a href="https://theaimarketingstack.com/tools/icp-scorer" style={{textDecoration:"none"}}>
        <button className="btn-primary" style={{padding:"8px 18px",background:C.amber,borderRadius:7,color:"#fff",fontSize:12,fontWeight:600,fontFamily:"'DM Mono',monospace",letterSpacing:"0.04em"}}>
          Start Free →
        </button>
      </a>
    </nav>

    {/* ── HERO ─────────────────────────────────────────── */}
    <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"100px 40px 80px",background:C.dark,position:"relative",overflow:"hidden"}}>

      {/* Subtle ambient glow */}
      <div style={{position:"absolute",top:"20%",left:"5%",width:500,height:500,borderRadius:"50%",background:`radial-gradient(ellipse,${C.amber}0A 0%,transparent 70%)`,pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:"10%",right:"10%",width:400,height:400,borderRadius:"50%",background:`radial-gradient(ellipse,${C.violet}0D 0%,transparent 70%)`,pointerEvents:"none"}}/>

      <div style={{maxWidth:1040,margin:"0 auto",width:"100%",display:"grid",gridTemplateColumns:"1fr 420px",gap:80,alignItems:"center"}} className="hero-grid">

        {/* Left: Text */}
        <div style={{animation:"fadeUp .7s ease both"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:28,padding:"5px 14px",borderRadius:20,border:`1px solid ${C.border}`,background:`${C.darkCard2}`}}>
            <AmberDot/>
            <span style={{fontSize:11,color:C.muted,fontFamily:"'DM Mono',monospace",letterSpacing:"0.08em"}}>
              UNIGNORE.COM · STAN JAKIM
            </span>
          </div>

          <h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(38px,5.5vw,68px)",fontWeight:700,letterSpacing:"-0.04em",lineHeight:1.05,marginBottom:24,color:C.white}}>
            35 Years of Consumer<br/>
            Psychology.{" "}
            <span style={{fontStyle:"italic",fontWeight:300,color:C.muted}}>Now applied</span><br/>
            <span style={{background:`linear-gradient(135deg,${C.amber} 30%,${C.violet} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              to your business.
            </span>
          </h1>

          <p style={{fontSize:17,color:C.muted,lineHeight:1.75,marginBottom:32,maxWidth:480}}>
            Most marketing experts learned their craft online.
            I learned mine in the grocery store — sitting across the table from
            Coca-Cola, Nestlé, and the USOC.
          </p>

          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:36}}>
            <a href="https://theaimarketingstack.com/tools/icp-scorer" style={{textDecoration:"none"}}>
              <button className="btn-primary" style={{padding:"13px 26px",background:`linear-gradient(135deg,${C.amber},${C.violet})`,borderRadius:9,color:"#fff",fontSize:14,fontWeight:600,boxShadow:`0 4px 20px ${C.amber}30`,letterSpacing:"-0.01em"}}>
                Start Free — Tool 1
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </a>
            <a href="https://theaimarketingstack.com/checkout/complete-system" style={{textDecoration:"none"}}>
              <button className="btn-ghost" style={{padding:"13px 22px",background:"transparent",border:`1px solid ${C.border}`,borderRadius:9,color:C.muted,fontSize:14,fontWeight:500}}>
                Complete System — $497
              </button>
            </a>
          </div>

          <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
            {["Free T1 diagnostic","No account required","Results in 60 seconds"].map((t,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:6}}>
                <Chk c={C.amber} size={12}/>
                <span style={{fontSize:12,color:C.dim,fontFamily:"'DM Mono',monospace"}}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Headshot — contained, not obnoxious */}
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:0,animation:"fadeIn 1s ease .3s both"}}>
          {/* The photo container: subtle amber ring, rounded, controlled size */}
          <div style={{
            position:"relative",
            width:320,
            height:360,
          }}>
            {/* Outer amber ring — subtle, 2px */}
            <div style={{
              position:"absolute",
              inset:-2,
              borderRadius:20,
              background:`linear-gradient(145deg,${C.amber}60,${C.violet}40,transparent)`,
              zIndex:0,
            }}/>
            {/* Photo */}
            <img
              src={HEADSHOT_URL}
              alt="Stan Jakim — Founder, The AI Marketing Stack"
              style={{
                position:"relative",
                width:"100%",
                height:"100%",
                objectFit:"cover",
                objectPosition:"center top",
                borderRadius:18,
                zIndex:1,
                display:"block",
              }}
            />
            {/* Subtle bottom fade */}
            <div style={{
              position:"absolute",
              bottom:0,left:0,right:0,
              height:80,
              borderRadius:"0 0 18px 18px",
              background:`linear-gradient(to bottom,transparent,${C.dark}60)`,
              zIndex:2,
            }}/>
          </div>

          {/* Name card below photo — clean, not flashy */}
          <div style={{
            marginTop:16,
            padding:"12px 20px",
            background:C.darkCard,
            border:`1px solid ${C.border}`,
            borderRadius:10,
            textAlign:"center",
            width:300,
          }}>
            <p style={{fontSize:15,fontWeight:600,color:C.white,letterSpacing:"-0.02em",marginBottom:2}}>Stan Jakim</p>
            <p style={{fontSize:11,color:C.muted,fontFamily:"'DM Mono',monospace",letterSpacing:"0.04em"}}>Founder · The AI Marketing Stack</p>
            <p style={{fontSize:10,color:C.dim,fontFamily:"'DM Mono',monospace",marginTop:3}}>Developer · ScribeCrafter · EasyCopyAI · ThriveEasyAI</p>
          </div>
        </div>
      </div>
    </section>

    {/* ── METRICS BAR ─────────────────────────────────── */}
    <section style={{background:C.darkCard2,borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`,padding:"40px"}}>
      <div style={{maxWidth:1040,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}} className="metrics-grid">
        {METRICS.map((m,i)=>(
          <div key={i} style={{padding:"20px 24px",borderRight:i<METRICS.length-1?`1px solid ${C.border}`:"none",textAlign:"center"}}>
            <p className="metric-value" style={{color:i===0?C.amber:C.white}}>{m.value}</p>
            <p style={{fontSize:12,color:C.muted,lineHeight:1.5,marginTop:8}}>{m.label}</p>
            <p style={{fontSize:10,color:C.dim,fontFamily:"'DM Mono',monospace",marginTop:4,letterSpacing:"0.04em"}}>{m.sub}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── BRANDS TICKER ────────────────────────────────── */}
    <section style={{background:C.darkCard,borderBottom:`1px solid ${C.border}`,padding:"20px 0"}}>
      <p style={{textAlign:"center",fontSize:10,color:C.dim,fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em",marginBottom:16}}>
        BRANDS WORKED WITH
      </p>
      <Ticker items={BRANDS} speed={30}/>
      <div style={{marginTop:14}}>
        <p style={{textAlign:"center",fontSize:10,color:C.dim,fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em",marginBottom:10}}>
          AGENCIES COLLABORATED WITH
        </p>
        <Ticker items={AGENCIES} speed={40}/>
      </div>
    </section>

    {/* ── STORY — LIGHT SECTION ────────────────────────── */}
    <section id="about" className="section-light" style={{padding:"80px 40px"}}>
      <div style={{maxWidth:1040,margin:"0 auto"}}>

        <div style={{marginBottom:56,display:"grid",gridTemplateColumns:"1fr 2fr",gap:60,alignItems:"start"}}>
          <div style={{position:"sticky",top:80}}>
            <p style={{fontSize:11,fontWeight:600,color:C.bodyMuted,fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em",marginBottom:14}}>THE STORY</p>
            <h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(28px,4vw,42px)",fontWeight:700,letterSpacing:"-0.04em",lineHeight:1.1,color:C.bodyDark,marginBottom:16}}>
              I learned mine<br/>
              <span style={{fontStyle:"italic",fontWeight:300,color:C.bodyMuted}}>in the grocery store.</span>
            </h2>
            <p style={{fontSize:13,color:C.bodyMuted,lineHeight:1.7,marginBottom:24}}>
              Before funnels and AI — 20 years at the national level asking one question: what moves a buyer at the exact moment it matters?
            </p>
            {/* Mini credential stack */}
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {[
                {dot:C.amber,  label:"ActMedia / SmartSource"},
                {dot:"#2563EB",label:"U.S. Olympic NGB"},
                {dot:"#DC2626",label:"Professional Baseball"},
                {dot:C.violet, label:"ClearChannel Sports"},
                {dot:C.green,  label:"15 Years Online"},
              ].map((c,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:c.dot,flexShrink:0}}/>
                  <span style={{fontSize:12,color:C.bodyMuted,fontFamily:"'DM Mono',monospace"}}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {STORY_GRAFS.map((g,i)=>(
              <p key={i} className={`story-graf${g.lead?" lead":""}`}>{g.text}</p>
            ))}

            {/* Stat callout */}
            <div style={{margin:"32px 0",padding:"24px 28px",background:"#fff",borderRadius:12,border:`1px solid ${C.borderLight}`,borderLeft:`4px solid ${C.amber}`}}>
              <p style={{fontFamily:"'Fraunces',serif",fontSize:28,fontWeight:700,letterSpacing:"-0.03em",color:C.bodyDark,lineHeight:1.2,marginBottom:8}}>
                "$700K to $2M in incremental revenue<br/>
                <span style={{fontStyle:"italic",fontWeight:300,color:C.bodyMuted}}>from a single 6-week campaign."</span>
              </p>
              <p style={{fontSize:12,color:C.bodyMuted,fontFamily:"'DM Mono',monospace"}}>Food Lion × Top CPG Brands · ActMedia / SmartSource</p>
            </div>

            {/* Agencies */}
            <div style={{padding:"20px 24px",background:"#fff",borderRadius:10,border:`1px solid ${C.borderLight}`,marginBottom:0}}>
              <p style={{fontSize:10,fontWeight:600,color:C.bodyMuted,fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em",marginBottom:12}}>COLLABORATED WITH</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {AGENCIES.map((a,i)=>(
                  <span key={i} style={{fontSize:12,padding:"4px 12px",borderRadius:20,background:C.cream,border:`1px solid ${C.borderLight}`,color:C.bodyText,fontFamily:"'DM Mono',monospace"}}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What I Focus On */}
        <div style={{padding:"36px 40px",background:"#fff",borderRadius:14,border:`1px solid ${C.borderLight}`}}>
          <p style={{fontSize:11,fontWeight:600,color:C.bodyMuted,fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em",marginBottom:20}}>WHAT I FOCUS ON WITH CLIENTS</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            {FOCUS_ITEMS.map((f,i)=>(
              <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"12px 16px",background:C.cream,borderRadius:8,border:`1px solid ${C.borderLight}`}}>
                <Chk c={C.amber} size={14}/>
                <span style={{fontSize:13,color:C.bodyDark,lineHeight:1.5}}>{f}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:24,padding:"20px 24px",background:C.cream,borderRadius:10,borderLeft:`3px solid ${C.amber}`}}>
            <p style={{fontSize:15,color:C.bodyDark,lineHeight:1.7,fontWeight:500}}>
              If you have a proven offer, a real customer base, and revenue between $100K and $2M per year — and your marketing is not performing the way it should — the problem is almost certainly not your offer.
            </p>
            <p style={{fontSize:15,color:C.amber,fontWeight:700,marginTop:8,letterSpacing:"-0.01em"}}>It is the system around it. That is what I fix.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ── PRODUCTS ─────────────────────────────────────── */}
    <section className="section-white" style={{padding:"80px 40px",borderTop:`1px solid ${C.borderLight}`}}>
      <div style={{maxWidth:1040,margin:"0 auto"}}>
        <div style={{marginBottom:48,display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
          <div>
            <p style={{fontSize:11,fontWeight:600,color:C.bodyMuted,fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em",marginBottom:10}}>WHAT I BUILT</p>
            <h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(28px,4vw,42px)",fontWeight:700,letterSpacing:"-0.04em",lineHeight:1.1,color:C.bodyDark}}>
              The tools. The platforms.<br/>
              <span style={{fontStyle:"italic",fontWeight:300,color:C.bodyMuted}}>Built for your exact ICP.</span>
            </h2>
          </div>
          <p style={{fontSize:13,color:C.bodyMuted,maxWidth:340,lineHeight:1.65}}>
            Four products. One through-line: consumer psychology applied to your specific buyer — not a generic template.
          </p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20}} className="product-grid">
          {PRODUCTS.map(p => <ProductCard key={p.id} p={p}/>)}
        </div>
      </div>
    </section>

    {/* ── ICP CALLOUT ──────────────────────────────────── */}
    <section style={{background:C.dark,padding:"80px 40px",borderTop:`1px solid ${C.border}`}}>
      <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:11,color:C.muted,fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em",marginBottom:20}}>WHO THIS IS FOR</p>
        <h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(26px,4vw,44px)",fontWeight:700,letterSpacing:"-0.04em",lineHeight:1.1,marginBottom:24,color:C.white}}>
          You have a proven offer.<br/>
          <span style={{fontStyle:"italic",fontWeight:300,color:C.muted}}>Your system is the gap.</span>
        </h2>
        <p style={{fontSize:16,color:C.muted,lineHeight:1.75,marginBottom:40,maxWidth:540,margin:"0 auto 40px"}}>
          Course creators, coaches, and entrepreneurs doing $100K–$2M per year who have real customers, a real list, and a marketing system that is underperforming relative to what it should produce.
        </p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,maxWidth:560,margin:"0 auto 40px",textAlign:"left"}}>
          {[
            "Conversions are inconsistent — warm traffic buys, cold doesn't",
            "Email list is large but engagement and revenue are low",
            "Sales page converts for launches but dies on evergreen",
            "You are answering the same support questions every week",
            "Paid traffic burns budget without predictable returns",
            "LTV is concentrated in the first purchase — nothing after"
          ].map((p,i)=>(
            <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"10px 14px",background:C.darkCard,border:`1px solid ${C.border}`,borderRadius:8}}>
              <svg width={13} height={13} viewBox="0 0 13 13" fill="none" style={{flexShrink:0,marginTop:1}}>
                <circle cx={6.5} cy={6.5} r={5.5} stroke={C.amber} strokeWidth={1.3}/>
                <path d="M4.5 6.5h4M6.5 4.5v4" stroke={C.amber} strokeWidth={1.3} strokeLinecap="round"/>
              </svg>
              <span style={{fontSize:12,color:C.muted,lineHeight:1.5}}>{p}</span>
            </div>
          ))}
        </div>
        <a href="https://theaimarketingstack.com/tools/icp-scorer" style={{textDecoration:"none"}}>
          <button className="btn-primary" style={{padding:"14px 32px",background:`linear-gradient(135deg,${C.amber},${C.violet})`,border:"none",borderRadius:10,color:"#fff",fontSize:15,fontWeight:700,boxShadow:`0 4px 24px ${C.amber}30`,letterSpacing:"-0.01em"}}>
            Run Your Free Diagnostic →
          </button>
        </a>
        <p style={{marginTop:12,fontSize:11,color:C.dim,fontFamily:"'DM Mono',monospace"}}>Free · No account · Start at T1 · Takes 5 minutes</p>
      </div>
    </section>

    {/* ── FOOTER ───────────────────────────────────────── */}
    <footer style={{background:C.darkCard,borderTop:`1px solid ${C.border}`,padding:"40px"}}>
      <div style={{maxWidth:1040,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20}}>
        <div>
          <span style={{fontFamily:"'Fraunces',serif",fontSize:18,fontWeight:700,letterSpacing:"-0.04em",color:C.white}}>
            un<span style={{background:`linear-gradient(135deg,${C.amber},${C.violet})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>ignore</span>
          </span>
          <p style={{fontSize:11,color:C.dim,fontFamily:"'DM Mono',monospace",marginTop:4}}>Stan Jakim · theaimarketingstack.com</p>
        </div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {[
            {label:"AI Marketing Stack",href:"https://theaimarketingstack.com"},
            {label:"ThriveEasyAI",href:"https://thriveeasyai.com"},
            {label:"ScribeCrafter",href:"https://scribecrafter.com"},
            {label:"EasyCopyAI",href:"https://easycopyai.com"},
          ].map(l=>(
            <a key={l.label} href={l.href} style={{fontSize:11,padding:"4px 10px",borderRadius:6,background:C.darkCard2,border:`1px solid ${C.border}`,color:C.muted,textDecoration:"none",fontFamily:"'DM Mono',monospace",transition:"color .15s,border-color .15s"}}
              onMouseEnter={e=>{e.currentTarget.style.color=C.white;e.currentTarget.style.borderColor=C.dim;}}
              onMouseLeave={e=>{e.currentTarget.style.color=C.muted;e.currentTarget.style.borderColor=C.border;}}>
              {l.label}
            </a>
          ))}
        </div>
        <div style={{display:"flex",gap:24}}>
          {[
            {label:"Terms",href:"/terms"},
            {label:"Privacy",href:"/privacy"},
          ].map(l=>(
            <a key={l.label} href={l.href} style={{fontSize:11,color:C.dim,textDecoration:"none",fontFamily:"'DM Mono',monospace",transition:"color .15s"}}
              onMouseEnter={e=>e.currentTarget.style.color=C.muted}
              onMouseLeave={e=>e.currentTarget.style.color=C.dim}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div style={{maxWidth:1040,margin:"20px auto 0",paddingTop:20,borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
        <p style={{fontSize:11,color:C.dim,fontFamily:"'DM Mono',monospace"}}>© {new Date().getFullYear()} Stan Jakim · unignore.com · All rights reserved.</p>
        <p style={{fontSize:11,color:C.dim,fontFamily:"'DM Mono',monospace"}}>Unignore · Your Marketing Diagnostic</p>
      </div>
    </footer>

  </div>
</>
```

);
}
    </>
  );
}
