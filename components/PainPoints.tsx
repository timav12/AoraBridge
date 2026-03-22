import { DollarSign, Clock, TrendingDown } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    metric: "$25–50",
    label: "per wire",
    description:
      "SWIFT fees eat into your margins on every contractor payment.",
  },
  {
    icon: Clock,
    metric: "3–7 days",
    label: "to settle",
    description:
      "Contractors wait almost a week. They switch to competitors who pay faster.",
  },
  {
    icon: TrendingDown,
    metric: "3–5%",
    label: "hidden FX markup",
    description:
      "Banks bury fees in exchange rates. Your contractors get less.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-[#0F172A] mb-16">
          Cross-border payments are broken
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.metric}
              className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-[#EF4444]" />
              </div>
              <div className="mb-3">
                <span className="text-4xl font-extrabold text-[#0F172A]">
                  {card.metric}
                </span>
                <span className="ml-2 text-sm font-medium text-[#475569]">
                  {card.label}
                </span>
              </div>
              <p className="text-[#475569] leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
