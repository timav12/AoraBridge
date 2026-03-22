import { Building2, Users, Briefcase } from "lucide-react";

const cards = [
  {
    icon: Building2,
    title: "EoR Platforms",
    description:
      "White-label our API. Your brand, our rails. Cut wire costs by $7–15K/month per 300 contractors.",
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    icon: Users,
    title: "HRIS Systems",
    description:
      "Add cross-border payroll without building your own engine. New revenue stream in 1 week via Finch.",
    gradient: "from-[#7C3AED] to-[#06B6D4]",
  },
  {
    icon: Briefcase,
    title: "Staffing & Marketplaces",
    description:
      "Batch payroll: 1000 contractors, one API call. Instant settlement, happy talent.",
    gradient: "from-[#06B6D4] to-[#22C55E]",
  },
];

export default function ForPlatforms() {
  return (
    <section id="for-platforms" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-[#0F172A] mb-16">
          Built for platforms that pay globally
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden hover:-translate-y-1 transition-transform duration-200"
            >
              {/* Gradient top border */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${card.gradient}`}
              />
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-[#4F46E5]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#475569] leading-relaxed mb-6">
                  {card.description}
                </p>
                <a
                  href="#waitlist"
                  className="text-sm font-semibold text-[#4F46E5] hover:text-[#7C3AED] transition-colors"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
