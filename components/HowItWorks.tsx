import { Plug, Zap, PiggyBank } from "lucide-react";

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "Integrate",
    description:
      "Add our API to your platform in under 2 weeks. One endpoint, full documentation.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Pay",
    description:
      "Trigger payroll via USDC/USDT. We handle conversion to 40+ local currencies in 90+ countries.",
  },
  {
    icon: PiggyBank,
    number: "03",
    title: "Save",
    description:
      "0.5–1% fee vs 3–5% with banks. Your contractors get paid in minutes.",
  },
];

const codeSnippet = `POST /v1/payroll/batch
{
  "contractor_ids": ["c_392", "c_847", "c_103"],
  "currency": "USDC",
  "auto_convert": true,
  "settlement": "instant"
}
// Response: 3 payments settled in 47 seconds`;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-[#0F172A] mb-16">
          One API.{" "}
          <span className="gradient-text">Instant global payroll.</span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4]" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-bg mb-6 relative z-10">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs font-bold text-[#7C3AED] mb-2">
                STEP {step.number}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {step.title}
              </h3>
              <p className="text-[#475569] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Code snippet */}
        <div className="max-w-2xl mx-auto">
          <div className="code-block rounded-2xl p-6 overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <span className="w-3 h-3 rounded-full bg-[#22C55E]" />
              <span className="ml-3 text-xs text-[#64748B]">api-request.sh</span>
            </div>
            <pre className="text-sm leading-relaxed">
              <code>
                {codeSnippet.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line.startsWith("//") ? (
                      <span className="text-[#22C55E]">{line}</span>
                    ) : line.startsWith("POST") ? (
                      <span>
                        <span className="text-[#7C3AED]">POST</span>
                        <span className="text-[#06B6D4]"> /v1/payroll/batch</span>
                      </span>
                    ) : line.includes(":") && !line.includes("[") ? (
                      <span>
                        <span className="text-[#06B6D4]">
                          {line.split(":")[0]}
                        </span>
                        :<span className="text-[#F59E0B]">{line.split(":").slice(1).join(":")}</span>
                      </span>
                    ) : (
                      <span className="text-[#E2E8F0]">{line}</span>
                    )}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
