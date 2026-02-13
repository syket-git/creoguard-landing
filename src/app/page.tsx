import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { TerminalDemo } from "@/components/terminal-demo";
import { Providers } from "@/components/providers";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TerminalDemo />
      <Providers />
      <CTA />
      <Footer />
    </div>
  );
}
