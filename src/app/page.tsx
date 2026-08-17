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
    <div className="flex flex-col min-h-screen bg-[#F8F9FE] dark:bg-[#06070B] text-slate-900 dark:text-slate-100 font-sans selection:bg-purple-500/20 selection:text-purple-900 transition-colors duration-500">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1 w-full flex flex-col">
        {/* 01. Hero with 3D Coin & Stage Entry Presale Card */}
        <Hero />

        {/* 02. Trust & Security Infrastructure Strip */}
        <TrustStrip />

        {/* 03. Core Architectural Pillars & Stage Urgency Card */}
        <Features />

        {/* 04. AI Blockchain Comparison Matrix */}
        <ComparisonTable />

        {/* 05. Ecosystem Capabilities Grid */}
        <Ecosystem />

        {/* 06. Token Utility Dark Transition Section */}
        <Utility />

        {/* Video Explainer Section */}
        <VideoSection />

        {/* 07. Transparent Tokenomics & Allocation Graphic */}
        <Tokenomics />

        {/* 08. Phased Execution Roadmap */}
        <Roadmap />

        {/* 09. Global Community & Investor Growth */}
        <Community />

        {/* 10. Tier-1 Media Showcase */}
        <MediaStrip />

        {/* 11. Interactive FAQ Accordion */}
        <FAQ />

        {/* 12. Final Presale Finale CTA */}
        <FinalCTA />
      </main>

      {/* 13. Minimal Brand Footer */}
      <Footer />
    </div>
  );
}
