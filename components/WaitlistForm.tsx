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

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#4F46E5] rounded-full blur-[128px] opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[128px] opacity-10 translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-4">
          Be first in line
        </h2>
        <p className="text-lg text-[#475569] mb-12 max-w-lg mx-auto">
          We&apos;re onboarding launch partners now. You earn revenue share for 3
          months — zero setup fee, zero risk.
        </p>

        {status === "success" ? (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-10">
            <CheckCircle className="w-12 h-12 text-[#22C55E] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              You&apos;re on the list!
            </h3>
            <p className="text-[#475569]">
              We&apos;ll reach out within 48 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8 md:p-10"
          >
            <div className="space-y-4 mb-6">
              <input
                type="email"
                required
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition"
              />
              <input
                type="text"
                required
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition"
              />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition bg-white"
              >
                <option value="eor">EoR Platform</option>
                <option value="hris">HRIS System</option>
                <option value="staffing">Staffing / Marketplace</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full gradient-bg text-white font-semibold py-4 rounded-full text-lg hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Join the Waitlist"
              )}
            </button>

            {status === "error" && (
              <p className="mt-4 text-sm text-[#EF4444]">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="mt-4 text-xs text-[#94A3B8]">
              No spam. No credit card. Just early access.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
