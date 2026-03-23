export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#4F46E5] rounded-full blur-[128px] opacity-15 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#06B6D4] rounded-full blur-[128px] opacity-15 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] mb-6">
          Cross-border payroll.{" "}
          <span className="gradient-text">Instant.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#475569] leading-relaxed mb-10">
          Stablecoin-powered payment API for EoR, HRIS, and staffing platforms.
          Cut wire costs by 80%. Settle in minutes, not days.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#waitlist"
            className="gradient-bg text-white font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-[#E2E8F0] text-[#0F172A] font-semibold px-8 py-4 rounded-full text-lg hover:border-[#4F46E5] hover:text-[#4F46E5] transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Hero visual — abstract payment flow */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Source */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-[#475569]">Your Platform</span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center gap-2 flex-1">
                <div className="h-px flex-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4]" />
                <span className="text-xs font-semibold text-[#4F46E5] whitespace-nowrap px-3 py-1 bg-[#EEF2FF] rounded-full">
                  USDC/USDT
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#06B6D4] to-[#22C55E]" />
              </div>
              <div className="md:hidden w-px h-8 bg-gradient-to-b from-[#4F46E5] to-[#06B6D4]" />

              {/* AoraBridge */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-[#0F172A] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AB</span>
                </div>
                <span className="text-xs font-medium text-[#475569]">AoraBridge</span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center gap-2 flex-1">
                <div className="h-px flex-1 bg-gradient-to-r from-[#06B6D4] to-[#22C55E]" />
                <span className="text-xs font-semibold text-[#22C55E] whitespace-nowrap px-3 py-1 bg-[#F0FDF4] rounded-full">
                  Local currency
                </span>
                <div className="h-px flex-1 bg-[#22C55E]" />
              </div>
              <div className="md:hidden w-px h-8 bg-gradient-to-b from-[#06B6D4] to-[#22C55E]" />

              {/* Destination */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-[#22C55E] flex items-center justify-center">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-[#475569]">Contractors</span>
              </div>
            </div>

            {/* Speed badge */}
            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#22C55E] bg-[#F0FDF4] px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                Settled in under 5 minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
