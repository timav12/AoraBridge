"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("eor");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, type }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="py-24 md:py-28 px-6 relative overflow-hidden text-center">
      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(168,85,247,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1120px] mx-auto">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#a855f7] mb-4">
          Early Access
        </p>
        <h2 className="font-mono text-[32px] font-bold tracking-tight text-[#f0f0f0] mb-4 leading-[1.2]">
          Be first in line
        </h2>
        <p className="text-base text-[#666] max-w-[560px] mx-auto mb-10 leading-relaxed">
          We&apos;re onboarding launch partners now. You earn revenue share for 3 months &mdash; zero setup fee, zero risk.
        </p>

        {status === "success" ? (
          <div className="max-w-[440px] mx-auto bg-[#141414] border border-[#1a1a1a] rounded-xl p-10">
            <CheckCircle className="w-10 h-10 text-[#22c55e] mx-auto mb-4" />
            <h3 className="font-mono text-lg font-bold text-[#f0f0f0] mb-2">
              You&apos;re on the list!
            </h3>
            <p className="text-sm text-[#666]">We&apos;ll reach out within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-[440px] mx-auto flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#141414] border border-[#1a1a1a] rounded-lg px-4 py-3 font-mono text-[13px] text-[#c8c8c8] placeholder:text-[#666] outline-none focus:border-[#a855f7] transition-colors"
            />
            <input
              type="text"
              required
              placeholder="Company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full bg-[#141414] border border-[#1a1a1a] rounded-lg px-4 py-3 font-mono text-[13px] text-[#c8c8c8] placeholder:text-[#666] outline-none focus:border-[#a855f7] transition-colors"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-[#141414] border border-[#1a1a1a] rounded-lg px-4 py-3 font-mono text-[13px] text-[#c8c8c8] outline-none focus:border-[#a855f7] transition-colors cursor-pointer"
            >
              <option value="eor">EoR Platform</option>
              <option value="hris">HRIS System</option>
              <option value="staffing">Staffing / Marketplace</option>
              <option value="other">Other</option>
            </select>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#a855f7] text-white font-mono font-semibold text-sm py-3.5 rounded-lg hover:opacity-85 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Join the Waitlist"
              )}
            </button>

            {status === "error" && (
              <p className="text-sm text-[#ef4444]">Something went wrong. Please try again.</p>
            )}

            <p className="font-mono text-[11px] text-[#666] mt-2">
              No spam. No credit card. Just early access.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
