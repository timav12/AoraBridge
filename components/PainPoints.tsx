const cards = [
  {
    icon: "$",
    iconBg: "bg-[rgba(245,158,11,0.10)]",
    iconColor: "text-[#f59e0b]",
    metric: "$25–50",
    label: "per wire",
    description: "SWIFT fees eat into your margins on every contractor payment.",
  },
  {
    icon: "\u23F1",
    iconBg: "bg-[rgba(168,85,247,0.12)]",
    iconColor: "text-[#a855f7]",
    metric: "3–7 days",
    label: "to settle",
    description: "Contractors wait almost a week. They switch to competitors who pay faster.",
  },
  {
    icon: "%",
    iconBg: "bg-[rgba(34,211,238,0.10)]",
    iconColor: "text-[#22d3ee]",
    metric: "3–5%",
    label: "hidden FX markup",
    description: "Banks bury fees in exchange rates. Your contractors get less.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 md:py-28 px-6">
      <div className="max-w-[1120px] mx-auto">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#a855f7] mb-4 text-center">
          The Problem
        </p>
        <h2 className="font-mono text-[32px] font-bold tracking-tight text-[#f0f0f0] mb-4 text-center leading-[1.2]">
          Cross-border payments are broken
        </h2>
        <p className="text-base text-[#666] max-w-[560px] mx-auto mb-12 leading-relaxed text-center">
          SWIFT wires are slow, expensive, and opaque. Your margins and contractor retention suffer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.metric}
              className="bg-[#141414] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#333] transition-colors"
            >
              <div className={`w-11 h-11 rounded-[10px] ${card.iconBg} flex items-center justify-center text-lg mb-5`}>
                <span className={card.iconColor}>{card.icon}</span>
              </div>
              <div className="font-mono text-4xl font-bold text-[#f0f0f0] mb-1">
                {card.metric}
              </div>
              <div className="font-mono text-xs text-[#666] mb-3">
                {card.label}
              </div>
              <p className="text-sm text-[#666] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
