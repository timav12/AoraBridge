const steps = [
  { number: "01", title: "Integrate", description: "Add our API to your platform in under 2 weeks. One endpoint, full documentation." },
  { number: "02", title: "Pay", description: "Trigger payroll via USDC/USDT. We handle conversion to 40+ local currencies in 90+ countries." },
  { number: "03", title: "Save", description: "0.5–1% fee vs 3–5% with banks. Your contractors get paid in minutes." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-28 px-6 bg-[#141414]">
      <div className="max-w-[1120px] mx-auto">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#a855f7] mb-4 text-center">
          How It Works
        </p>
        <h2 className="font-mono text-[32px] font-bold tracking-tight text-[#f0f0f0] mb-4 text-center leading-[1.2]">
          One API. Instant global payroll.
        </h2>
        <p className="text-base text-[#666] max-w-[560px] mx-auto mb-12 leading-relaxed text-center">
          Three steps. No SWIFT. No waiting.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-7">
              <span className="inline-block font-mono text-[11px] font-bold text-[#a855f7] bg-[rgba(168,85,247,0.12)] px-2.5 py-1 rounded-md mb-4">
                {step.number}
              </span>
              <h3 className="font-mono text-base font-bold text-[#f0f0f0] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Code block */}
        <div className="max-w-[640px] mx-auto bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-xl border border-[#1a1a1a] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
            <span className="ml-2 font-mono text-[11px] text-[#666]">api-request.sh</span>
          </div>
          <pre className="p-5 font-mono text-xs leading-[1.8] text-[#e2e8f0] overflow-x-auto">
            <code>
              <span className="text-[#a855f7]">POST</span>{" "}
              <span className="text-[#22d3ee]">/v1/payroll/batch</span>
              {"\n"}
              {`{`}
              {"\n"}
              {"  "}<span className="text-[#f59e0b]">&quot;contractor_ids&quot;</span>: [<span className="text-[#64748b]">&quot;c_392&quot;</span>, <span className="text-[#64748b]">&quot;c_847&quot;</span>, <span className="text-[#64748b]">&quot;c_103&quot;</span>],
              {"\n"}
              {"  "}<span className="text-[#f59e0b]">&quot;currency&quot;</span>: <span className="text-[#64748b]">&quot;USDC&quot;</span>,
              {"\n"}
              {"  "}<span className="text-[#f59e0b]">&quot;auto_convert&quot;</span>: <span className="text-[#22d3ee]">true</span>,
              {"\n"}
              {"  "}<span className="text-[#f59e0b]">&quot;settlement&quot;</span>: <span className="text-[#64748b]">&quot;instant&quot;</span>
              {"\n"}
              {`}`}
              {"\n"}
              <span className="text-[#22c55e]">{"// Response: 3 payments settled in 47 seconds"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
