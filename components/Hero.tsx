export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-28 text-center overflow-hidden">
      {/* Purple glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(168,85,247,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1120px] mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#22c55e] bg-[rgba(34,197,94,0.10)] px-3.5 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-[pulse-dot_2s_infinite]" />
          Accepting launch partners
        </div>

        {/* Headline */}
        <h1 className="font-mono font-bold text-4xl md:text-5xl lg:text-[48px] tracking-tight text-[#f0f0f0] max-w-[700px] mx-auto mb-4 leading-[1.2]">
          Cross-border payroll.<br />
          Instant.
        </h1>

        {/* Sub */}
        <p className="text-base text-[#666] max-w-[520px] mx-auto mb-10 leading-relaxed">
          Payment API for EoR, HRIS, and staffing platforms. Cut wire costs by 80%. Settle in minutes, not days.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="#waitlist"
            className="bg-[#a855f7] text-white font-mono font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="border border-[#333] text-[#c8c8c8] font-mono font-medium text-[13px] px-5 py-2.5 rounded-lg hover:border-[#555] hover:text-white transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Flow diagram */}
        <div className="flex items-center justify-center gap-0 flex-wrap">
          {/* Your Platform */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-xl bg-[rgba(168,85,247,0.12)] flex items-center justify-center font-mono font-bold text-sm text-[#a855f7]">
              API
            </div>
            <span className="font-mono text-[11px] text-[#666]">Your Platform</span>
          </div>

          {/* Arrow 1 */}
          <div className="relative w-20 mx-1" style={{ marginTop: "-16px" }}>
            <div className="h-px bg-gradient-to-r from-[#a855f7] to-[#22d3ee]" />
            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 font-mono text-[10px] bg-[rgba(168,85,247,0.12)] text-[#a855f7] px-2 py-0.5 rounded-full whitespace-nowrap">
              USDC
            </span>
          </div>

          {/* AoraBridge */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center font-mono font-bold text-xs text-black">
              AB
            </div>
            <span className="font-mono text-[11px] text-[#666]">AoraBridge</span>
          </div>

          {/* Arrow 2 */}
          <div className="relative w-20 mx-1" style={{ marginTop: "-16px" }}>
            <div className="h-px bg-gradient-to-r from-[#22d3ee] to-[#22c55e]" />
            <span className="absolute -top-[22px] left-1/2 -translate-x-1/2 font-mono text-[10px] bg-[rgba(34,197,94,0.10)] text-[#22c55e] px-2 py-0.5 rounded-full whitespace-nowrap">
              Local FX
            </span>
          </div>

          {/* Contractors */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-xl bg-[rgba(34,197,94,0.10)] flex items-center justify-center font-mono font-bold text-sm text-[#22c55e]">
              $$
            </div>
            <span className="font-mono text-[11px] text-[#666]">Contractors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
