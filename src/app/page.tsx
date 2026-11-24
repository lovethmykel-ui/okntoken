import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Features } from "@/components/sections/Features";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Utility } from "@/components/sections/Utility";
import { VideoSection } from "@/components/sections/VideoSection";
import { Tokenomics } from "@/components/sections/Tokenomics";
import { Roadmap } from "@/components/sections/Roadmap";
import { Community } from "@/components/sections/Community";
import { MediaStrip } from "@/components/sections/MediaStrip";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-slate-100 font-sans selection:bg-purple-500/20 selection:text-purple-900 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <TrustStrip />
        <Features />
        <ComparisonTable />
        <Ecosystem />
        <Utility />
        <VideoSection />
        <Tokenomics />
        <Roadmap />
        <Community />
        <MediaStrip />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
