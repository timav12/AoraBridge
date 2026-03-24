const items = [
  {
    quarter: "Q2 2026",
    title: "Stablecoin Payroll API",
    badge: "NOW",
    badgeClass: "bg-[rgba(34,197,94,0.10)] text-[#22c55e]",
    description: "Core payment infrastructure. USDC/USDT payroll in 90+ countries.",
    active: true,
  },
  {
    quarter: "Q3 2026",
    title: "Contractor Wallet + Micro-factoring",
    badge: null,
    badgeClass: "",
    description: "Contractors manage earnings, access early payouts.",
    active: false,
  },
  {
    quarter: "Q4 2026",
    title: "Bridge Advance",
    badge: "COMING",
    badgeClass: "bg-[rgba(245,158,11,0.10)] text-[#f59e0b]",
    description:
      "Contractors lose income between gigs \u2014 no fintech covers this gap. Up to $5K, auto-repaid from next payroll. Scored on payment history.",
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section className="py-24 md:py-28 px-6 bg-[#141414]">
      <div className="max-w-[1120px] mx-auto">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#a855f7] mb-4 text-center">
          Roadmap
        </p>
        <h2 className="font-mono text-[32px] font-bold tracking-tight text-[#f0f0f0] mb-12 text-center leading-[1.2]">
          What&apos;s next
        </h2>

        <div className="max-w-[600px] relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-[#a855f7] to-[#22d3ee]" />

          <div className="space-y-10">
            {items.map((item) => (
              <div key={item.quarter} className="relative">
                {/* Dot */}
                <div
                  className={`absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 border-[#141414] ${
                    item.active ? "bg-[#a855f7]" : "bg-[#1a1a1a]"
                  }`}
                  style={{ boxShadow: "0 0 0 2px #1a1a1a" }}
                />

                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#666]">
                    {item.quarter}
                  </span>
                  {item.badge && (
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-mono text-[15px] font-bold text-[#f0f0f0] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
