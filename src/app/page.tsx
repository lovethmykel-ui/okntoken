import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { DEFAULT_TGE_TARGET_ISO } from "@/lib/countdown";
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
        <Hero
          tgeCountdown={
            <CountdownTimer
              theme="light"
              targetDate={DEFAULT_TGE_TARGET_ISO}
              label="TGE Launch Countdown"
              sublabel="Stage 1 · $0.05 before $0.30 TGE"
            />
          }
        />
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
