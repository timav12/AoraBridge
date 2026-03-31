import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AoraBridge",
  description: "AoraBridge privacy policy. How we collect, use, and protect your data.",
  alternates: { canonical: "https://aorabridge.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#c8c8c8] py-24 px-6">
      <div className="max-w-[720px] mx-auto">
        <Link
          href="/"
          className="font-mono text-[13px] text-[#666] hover:text-[#c8c8c8] transition-colors mb-12 inline-block"
        >
          ← Back to AoraBridge
        </Link>

        <h1 className="font-mono text-[32px] font-bold text-[#f0f0f0] mb-2 tracking-tight">
          Privacy Policy
        </h1>
        <p className="font-mono text-[13px] text-[#666] mb-12">
          Last updated: April 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8 text-[15px] leading-relaxed">
          <section>
            <h2 className="font-mono text-lg font-bold text-[#f0f0f0] mb-3">1. Who We Are</h2>
            <p>
              AoraBridge is a financial technology company providing cross-border contractor payment infrastructure. We are not a bank. Payment services are provided through licensed partners. This policy applies to information collected via <span className="text-[#a855f7]">aorabridge.com</span> and our waitlist form.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#f0f0f0] mb-3">2. Information We Collect</h2>
            <p>We collect only what you provide through our waitlist form:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Work email address</li>
              <li>Company name</li>
              <li>Platform type (EoR / HRIS / Staffing / Other)</li>
            </ul>
            <p className="mt-3">We do not collect payment information, personal financial data, or browsing history.</p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#f0f0f0] mb-3">3. How We Use Your Information</h2>
            <p>Your information is used solely to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Contact you about early access and launch partner opportunities</li>
              <li>Send relevant product updates (you may opt out at any time)</li>
              <li>Understand which platform types are most interested in our API</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#f0f0f0] mb-3">4. Data Storage and Security</h2>
            <p>
              Waitlist submissions are stored securely and transmitted via encrypted connections (HTTPS). We use industry-standard security practices to protect your information from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#f0f0f0] mb-3">5. Your Rights (GDPR / CCPA)</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Request that we stop processing your data</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@aorabridge.com" className="text-[#a855f7] hover:underline">
                privacy@aorabridge.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#f0f0f0] mb-3">6. Cookies</h2>
            <p>
              This website does not use tracking cookies or third-party analytics. We may use session cookies required for the website to function correctly.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#f0f0f0] mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this policy as our product evolves. Changes will be posted on this page with an updated date. Continued use of the site constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-lg font-bold text-[#f0f0f0] mb-3">8. Contact</h2>
            <p>
              Questions about this policy?{" "}
              <a href="mailto:privacy@aorabridge.com" className="text-[#a855f7] hover:underline">
                privacy@aorabridge.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
