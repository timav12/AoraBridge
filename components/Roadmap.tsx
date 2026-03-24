const items = [
  {
    quarter: "Q2 2026",
    title: "Stablecoin Payroll API",
    badge: "NOW",
    badgeColor: "bg-[#22C55E] text-white",
    description: "Core payment infrastructure. USDC/USDT payroll in 90+ countries.",
  },
  {
    quarter: "Q3 2026",
    title: "Contractor Wallet + Micro-factoring",
    badge: null,
    badgeColor: "",
    description: "Contractors manage earnings, access early payouts.",
  },
  {
    quarter: "Q4 2026",
    title: "Bridge Advance",
    badge: "COMING",
    badgeColor: "bg-[#F59E0B] text-white",
    description: "Contractors lose income between gigs — no fintech covers this gap. Up to $5K, auto-repaid from next payroll. Scored on payment history.",
  },
];

export default function Roadmap() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-[#0F172A] mb-16">
          What&apos;s next
        </h2>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#4F46E5] via-[#7C3AED] to-[#06B6D4]" />

          <div className="space-y-12">
            {items.map((item, i) => (
              <div key={item.quarter} className="relative pl-16">
                {/* Dot */}
                <div
                  className={`absolute left-4 top-1 w-5 h-5 rounded-full border-4 border-white ${
                    i === 0 ? "gradient-bg" : "bg-[#E2E8F0]"
                  }`}
                  style={{ boxShadow: "0 0 0 2px #E2E8F0" }}
                />

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-[#475569]">
                    {item.quarter}
                  </span>
                  {item.badge && (
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">
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
