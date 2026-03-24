import { Check, X } from "lucide-react";

const comparison = [
  {
    feature: "Model",
    deel: "Full-stack EoR, in-house only",
    aorabridge: "Neutral API for any platform",
  },
  {
    feature: "White-label",
    deel: "No",
    aorabridge: "Yes",
    deelBool: false,
    aoraBool: true,
  },
  {
    feature: "Cost per payment",
    deel: "$25–50 wire fee",
    aorabridge: "0.5–1% flat",
  },
  {
    feature: "Settlement",
    deel: "3–7 days",
    aorabridge: "< 5 minutes",
  },
];

export default function Differentiation() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-[#0F172A] mb-16">
          Neutral infrastructure, not another EoR
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — positioning */}
          <div className="space-y-6">
            <p className="text-lg text-[#475569] leading-relaxed">
              Deel and Remote build for their own clients. They won&apos;t white-label
              for competitors.
            </p>
            <p className="text-lg text-[#0F172A] font-semibold leading-relaxed">
              We&apos;re the payment layer that makes YOUR platform more competitive.
            </p>
            <p className="text-lg text-[#475569] leading-relaxed">
              The EoR market has 800+ providers. Deel and Remote serve only their
              own clients. The other 790+ need neutral payment infrastructure.
              That&apos;s us.
            </p>
            <a
              href="#waitlist"
              className="inline-block gradient-bg text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity mt-4"
            >
              Become a partner
            </a>
          </div>

          {/* Right — comparison table */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-[#E2E8F0]">
              <div className="p-4 text-[#475569]">Feature</div>
              <div className="p-4 text-[#475569] text-center">Traditional</div>
              <div className="p-4 text-center gradient-text">AoraBridge</div>
            </div>
            {comparison.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 text-sm border-b border-[#E2E8F0] last:border-b-0"
              >
                <div className="p-4 font-medium text-[#0F172A]">
                  {row.feature}
                </div>
                <div className="p-4 text-center text-[#475569]">
                  {row.deelBool !== undefined ? (
                    row.deelBool ? (
                      <Check className="w-5 h-5 text-[#22C55E] mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-[#EF4444] mx-auto" />
                    )
                  ) : (
                    row.deel
                  )}
                </div>
                <div className="p-4 text-center font-medium text-[#0F172A] bg-[#F8FAFC]">
                  {row.aoraBool !== undefined ? (
                    row.aoraBool ? (
                      <Check className="w-5 h-5 text-[#22C55E] mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-[#EF4444] mx-auto" />
                    )
                  ) : (
                    row.aorabridge
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
