import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import ForPlatforms from "@/components/ForPlatforms";
import Differentiation from "@/components/Differentiation";
import Roadmap from "@/components/Roadmap";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AoraBridge Payment API",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://aorabridge.com",
  "description": "White-label cross-border payroll API. Settle contractor payments in under 5 minutes across 90+ countries. 0.5–1% flat fee vs $25–50 per SWIFT wire. Integrates in under 2 weeks.",
  "featureList": [
    "Batch payroll via single API call",
    "USDC/USDT input with auto-conversion to 40+ local currencies",
    "Sub-5-minute settlement",
    "90+ countries supported",
    "White-label ready",
    "2-week integration time"
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact for pricing. Launch partner program available with zero setup fee.",
    "url": "https://aorabridge.com#waitlist"
  },
  "provider": {
    "@type": "Organization",
    "name": "AoraBridge",
    "url": "https://aorabridge.com"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "B2B SaaS platforms, EoR providers, HRIS systems, staffing agencies, contractor marketplaces"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Metrics />
        <ForPlatforms />
        <Differentiation />
        <Roadmap />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
