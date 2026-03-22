# AoraBridge Landing Page — Claude Code Prompt

## What to build

Build a single-page landing site for **AoraBridge** (AoraBridge.com) — a B2B fintech startup that provides cross-border contractor payment infrastructure via stablecoin rails. The site targets EoR, HRIS, and staffing platform decision-makers (CTOs, Heads of Product, CFOs). The goal is a waitlist/early access signup.

Stack: **Next.js 14+ (App Router) + Tailwind CSS + TypeScript**. Deploy-ready for Vercel.

---

## Design Direction

**Style: Gradient Modern** — inspired by Mercury, Brex, Stripe, and Ramp.

### Color System
- **Background:** Off-white / very light gray (#FAFAFA or #F8FAFC), NOT dark mode
- **Primary gradient:** Deep indigo → electric violet → teal (#4F46E5 → #7C3AED → #06B6D4) — use for hero backgrounds, accent shapes, CTAs
- **Secondary gradient:** Warm amber → coral (#F59E0B → #F97316) — use for highlights, badges, "savings" callouts
- **Text:** Near-black (#0F172A) for headings, slate (#475569) for body
- **Cards:** White (#FFFFFF) with subtle border (#E2E8F0) and soft shadow (shadow-sm)
- **Accent:** Electric green (#22C55E) for "savings" and "speed" metrics

### Typography
- **Headings:** Inter or Plus Jakarta Sans, font-bold/extrabold, tight tracking (-0.02em)
- **Body:** Inter, font-normal, text-base/lg, relaxed leading
- **Hero headline:** text-5xl md:text-6xl lg:text-7xl, max 8 words
- **Section headlines:** text-3xl md:text-4xl

### Layout Principles
- Max-width container: max-w-7xl mx-auto
- Generous whitespace: py-24 md:py-32 between sections
- Cards in 2- or 3-column grid with hover lift (hover:-translate-y-1 transition)
- Rounded corners everywhere: rounded-2xl for cards, rounded-full for badges/pills
- Subtle gradient mesh/blob shapes as background decorations (CSS radial gradients or SVG blobs with blur-3xl opacity-20)

### Visual Effects (CSS only, no heavy JS)
- Gradient text for key headlines: bg-gradient-to-r bg-clip-text text-transparent
- Floating gradient orbs behind hero section (absolute positioned, blur-3xl, opacity-20)
- Subtle hover transitions on cards (transform, shadow)
- Animated counter for metrics (simple CSS or minimal JS)
- Smooth scroll between sections

---

## Page Sections (top to bottom)

### 1. NAVBAR
- Logo: "inzi" in bold + "pay" in gradient text (or SVG placeholder)
- Links: How it Works, For Platforms, Pricing, API Docs (placeholder #)
- CTA button: "Get Early Access" → scrolls to waitlist form
- Sticky on scroll with subtle backdrop-blur-md bg-white/80

### 2. HERO
- **Headline:** "Cross-border payroll. Instant." (gradient text on "Instant.")
- **Subheadline:** "Stablecoin-powered payment API for EoR, HRIS, and staffing platforms. Cut wire costs by 80%. Settle in minutes, not days."
- **Two CTAs:**
  - Primary: "Join the Waitlist" (gradient bg, white text, rounded-full, px-8 py-4)
  - Secondary: "See How It Works" (outlined, rounded-full)
- **Social proof strip below CTAs:** "Trusted by teams building the future of work" + placeholder logos strip (gray silhouettes)
- **Hero visual:** Abstract gradient mesh or stylized payment flow diagram (CSS/SVG, not an image file)
- **Background:** Gradient orbs — one indigo (top-left), one teal (bottom-right), both blur-3xl opacity-20

### 3. PROBLEM / PAIN POINTS
- **Section headline:** "Cross-border payments are broken"
- Three cards in a row, each with:
  - Icon (Lucide or heroicons)
  - Pain metric in large bold (e.g., "$25-50", "3-7 days", "3-5%")
  - Short description
- Cards:
  1. "$25-50 per wire" — "SWIFT fees eat into your margins on every contractor payment"
  2. "3-7 days to settle" — "Contractors wait almost a week. They switch to competitors who pay faster."
  3. "3-5% hidden FX markup" — "Banks bury fees in exchange rates. Your contractors get less."

### 4. SOLUTION / HOW IT WORKS
- **Section headline:** "One API. Instant global payroll."
- Three-step horizontal flow with connecting line/arrows:
  1. "Integrate" — "Add our API to your platform in under 2 weeks. One endpoint, full documentation."
  2. "Pay" — "Trigger payroll via USDC/USDT. We handle conversion to 40+ local currencies in 90+ countries."
  3. "Save" — "0.5-1% fee vs 3-5% with banks. Your contractors get paid in minutes."
- Below the steps: a stylized code snippet card showing a mock API call:
```
POST /v1/payroll/batch
{
  "contractor_ids": ["c_392", "c_847", "c_103"],
  "currency": "USDC",
  "auto_convert": true,
  "settlement": "instant"
}
// Response: 3 payments settled in 47 seconds
```

### 5. METRICS / SOCIAL PROOF
- **Section headline:** "Built for scale"
- Four metric boxes in a row:
  - "80%" — "Cost reduction vs wire"
  - "<5 min" — "Average settlement time"
  - "90+" — "Countries supported"
  - "2 weeks" — "Integration time"
- Each metric: large gradient number + small gray label below
- Optional: animated count-up on scroll into view

### 6. WHO IT'S FOR (ICP Cards)
- **Section headline:** "Built for platforms that pay globally"
- Three cards:
  1. **EoR Platforms** — "White-label our API. Your brand, our rails. Cut wire costs by $7-15K/month per 300 contractors."
  2. **HRIS Systems** — "Add cross-border payroll without building your own engine. New revenue stream in 1 week via Finch."
  3. **Staffing & Marketplaces** — "Batch payroll: 1000 contractors, one API call. Instant settlement, happy talent."
- Each card has: gradient top-border accent, icon, title, description, "Learn more →" link

### 7. WHY NOT DEEL/REMOTE (Differentiation)
- **Section headline:** "Neutral infrastructure, not another EoR"
- Two-column layout:
  - Left: short paragraphs explaining positioning
    - "Deel and Remote build for their own clients. They won't white-label for competitors."
    - "We're the payment layer that makes YOUR platform more competitive."
    - "790+ EoR/HRIS providers need payment infra. We serve them all."
  - Right: comparison mini-table or visual
    - Deel: "Full-stack EoR, in-house only"
    - PayBridge/AoraBridge: "Neutral API for any platform"
    - Wire transfer: "$25-50, 3-7 days"
    - AoraBridge: "0.5-1%, <5 min"

### 8. ROADMAP / COMING SOON (teaser)
- **Section headline:** "What's next"
- Three timeline items:
  1. "Q2 2026 — Stablecoin Payroll API" (badge: "NOW")
  2. "Q3 2026 — Contractor Wallet + Micro-factoring"
  3. "Q4 2026 — Bridge Advance" — "Up to $5K between contracts. Zero competition."
- Clean timeline layout with dots and connecting line

### 9. WAITLIST / CTA
- **Section headline:** "Be first in line"
- **Subheadline:** "We're onboarding launch partners now. Revenue share for the first 3 months — zero risk."
- Email input + company name input + dropdown (EoR / HRIS / Staffing / Other) + submit button
- Form submits to a simple API route that stores to a JSON file or logs to console (placeholder — will connect to real backend later)
- Success state: "You're on the list! We'll reach out within 48 hours."
- Below form: "No spam. No credit card. Just early access."

### 10. FOOTER
- Logo + tagline: "PAY · ADVANCE · BRIDGE"
- Links: About, API Docs, Blog, Careers, Contact (all placeholder #)
- Legal: "AoraBridge is a financial technology company. Banking services provided through licensed partners."
- Social icons: Twitter/X, LinkedIn, GitHub (placeholder #)
- © 2026 AoraBridge. All rights reserved.

---

## Technical Requirements

1. **Next.js App Router** with TypeScript
2. **Tailwind CSS v3+** — no external CSS libraries needed
3. **Lucide React** for icons (or heroicons)
4. **Framer Motion** (optional) for scroll animations — keep it subtle
5. **No external images** — all visuals via CSS gradients, SVG, or Tailwind
6. **Mobile-first responsive** — must look great on phones
7. **SEO:** proper meta tags, og:image placeholder, semantic HTML
8. **Performance:** no heavy bundles, lazy-load below-fold sections
9. **Accessibility:** proper alt texts, keyboard nav, focus states, semantic headings
10. **Form:** simple API route in /app/api/waitlist/route.ts that accepts POST and logs data

---

## File Structure
```
AoraBridge/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Main landing page (imports sections)
│   ├── globals.css         # Tailwind directives + custom gradient utilities
│   └── api/
│       └── waitlist/
│           └── route.ts    # POST handler for waitlist form
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PainPoints.tsx
│   ├── HowItWorks.tsx
│   ├── Metrics.tsx
│   ├── ForPlatforms.tsx    # ICP cards
│   ├── Differentiation.tsx # Why not Deel
│   ├── Roadmap.tsx
│   ├── WaitlistForm.tsx
│   └── Footer.tsx
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## Brand Voice

- **Professional but not corporate** — like talking to a smart CTO over coffee
- **Concise** — every word earns its place
- **Confident** — we know our advantage, state it clearly
- **Technical credibility** — show the API, mention stablecoins naturally
- **No hype** — no "revolutionary", "game-changing", "disruptive". Let the numbers speak.

---

## Key Copy Points

- **Tagline:** "PAY · ADVANCE · BRIDGE"
- **Hero:** "Cross-border payroll. Instant."
- **Value prop:** "One API endpoint. 90+ countries. Minutes, not days."
- **Differentiation:** "We're not another EoR. We're the payment layer that makes YOUR platform competitive."
- **CTA:** "Join the Waitlist" / "Get Early Access"
- **Trust:** "Revenue share for launch partners. Zero setup fee. Zero risk."
