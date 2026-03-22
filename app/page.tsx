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

export default function Home() {
  return (
    <>
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
