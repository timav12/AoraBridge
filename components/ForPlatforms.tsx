const cards = [
  {
    title: "EoR Platforms",
    description: "White-label our API. Your brand, our rails. Cut wire costs by $7–15K/month per 300 contractors.",
    borderColor: "border-t-[#a855f7]",
  },
  {
    title: "HRIS Systems",
    description: "Your clients leave for Deel because you can\u2019t pay cross-border. Add global payroll in 1 week \u2014 keep clients, earn on every transaction.",
    borderColor: "border-t-[#22d3ee]",
  },
  {
    title: "Staffing & Marketplaces",
    description: "Batch payroll: 1000 contractors, one API call. Platforms that pay same-day report significantly higher contractor retention and repeat engagement.",
    borderColor: "border-t-[#22c55e]",
  },
];

export default function ForPlatforms() {
  return (
    <section id="for-platforms" className="py-24 md:py-28 px-6 bg-[#141414]">
      <div className="max-w-[1120px] mx-auto">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#a855f7] mb-4 text-center">
          Use Cases
        </p>
        <h2 className="font-mono text-[32px] font-bold tracking-tight text-[#f0f0f0] mb-4 text-center leading-[1.2]">
          Built for platforms that pay globally
        </h2>
        <p className="text-base text-[#666] max-w-[560px] mx-auto mb-12 leading-relaxed text-center">
          White-label payment infra for every vertical.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`bg-[#141414] border border-[#1a1a1a] border-t-2 ${card.borderColor} rounded-xl p-8 hover:border-[#333] transition-colors`}
            >
              <h3 className="font-mono text-base font-bold text-[#f0f0f0] mb-2.5">
                {card.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                {card.description}
              </p>
              <a href="#waitlist" className="font-mono text-xs text-[#a855f7] hover:underline">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
