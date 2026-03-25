const rows = [
  { feature: "Model", traditional: "Closed ecosystem", aorabridge: "Open neutral API" },
  { feature: "White-label", traditional: "\u2715", aorabridge: "\u2713" },
  { feature: "Cost", traditional: "$25\u201350 wire", aorabridge: "0.5\u20131% flat" },
  { feature: "Settlement", traditional: "3\u20137 days", aorabridge: "< 5 min" },
  { feature: "Integration", traditional: "Weeks to months", aorabridge: "< 2 weeks" },
];

export default function Differentiation() {
  return (
    <section className="py-24 md:py-28 px-6">
      <div className="max-w-[1120px] mx-auto">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#a855f7] mb-4 text-center">
          Why AoraBridge
        </p>
        <h2 className="font-mono text-[32px] font-bold tracking-tight text-[#f0f0f0] mb-12 text-center leading-[1.2]">
          Your payment layer, not someone else&apos;s platform
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — positioning */}
          <div className="space-y-4">
            <p className="text-base text-[#666] leading-relaxed">
              Most payment solutions lock you into their ecosystem. Your brand disappears. Your margins shrink. Your roadmap depends on theirs.
            </p>
            <p className="text-base text-[#f0f0f0] font-semibold leading-relaxed">
              AoraBridge is neutral infrastructure — your brand, your clients, your margins. We power the payments, you own the relationship.
            </p>
            <p className="text-base text-[#666] leading-relaxed">
              800+ EoR and HRIS platforms need cross-border payment rails they can white-label and control. We built exactly that.
            </p>
            <a
              href="#waitlist"
              className="inline-block mt-4 bg-[#a855f7] text-white font-mono font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity"
            >
              Become a partner
            </a>
          </div>

          {/* Right — comparison table */}
          <div className="border border-[#1a1a1a] rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#1a1a1a] font-mono text-[11px] font-semibold uppercase tracking-wide text-[#666]">
              <div className="p-3.5">Feature</div>
              <div className="p-3.5 text-center">Traditional</div>
              <div className="p-3.5 text-center text-[#a855f7]">AoraBridge</div>
            </div>
            {/* Rows */}
            {rows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 font-mono text-[13px] border-b border-[#1a1a1a] last:border-b-0"
              >
                <div className="p-3.5 text-[#c8c8c8] font-medium">{row.feature}</div>
                <div className="p-3.5 text-center text-[#666]">{row.traditional}</div>
                <div className="p-3.5 text-center text-[#a855f7] font-semibold bg-[rgba(168,85,247,0.04)]">
                  {row.aorabridge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
