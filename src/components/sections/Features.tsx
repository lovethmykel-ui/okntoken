"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { siteContent, FeatureItem } from "@/data/siteContent";
import {
  Brain,
  Zap,
  Code2,
  Activity,
  TrendingUp,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function Features() {
  const getIcon = (name: FeatureItem["iconName"]) => {
    switch (name) {
      case "brain":
        return <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case "zap":
        return <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case "code":
        return <Code2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case "activity":
        return <Activity className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />;
      case "trending":
        return <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "layers":
        return <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#F8F9FE] dark:bg-[#06070B] relative overflow-hidden scroll-mt-24 transition-colors duration-500">
      {/* Dynamic Ambient Backlight Mesh for Glass Refraction */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/15 dark:bg-purple-600/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/15 dark:bg-cyan-500/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: 6 Capability Cards with ReactBits / Inspora Interactive Spotlight Refraction */}
          <div className="lg:col-span-7 flex flex-col">
            <SectionHeading
              eyebrow={siteContent.about.eyebrow}
              title={siteContent.about.headline}
              description={siteContent.about.description}
              className="mb-12"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {siteContent.about.features.map((feat, idx) => (
                <SpotlightCard
                  key={feat.id}
                  spotlightColor="rgba(124, 58, 237, 0.22)"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-7 hover:-translate-y-1 hover:shadow-2xl hover:border-purple-400/80 dark:hover:border-purple-400/60 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-white/10 border border-purple-200 dark:border-white/20 shadow-md flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    {getIcon(feat.iconName)}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-950 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Right: Stage Urgency Card with Spotlight Glass */}
          <div className="lg:col-span-5 flex flex-col sticky top-28">
            <SpotlightCard
              spotlightColor="rgba(236, 72, 153, 0.25)"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 sm:p-8 border border-purple-300/60 dark:border-white/20 shadow-2xl relative overflow-hidden backdrop-blur-3xl"
            >
              {/* Visual Refractive Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/25 dark:bg-purple-600/35 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col">
                {/* Card Title */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 dark:bg-purple-500/25 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 self-start border border-purple-500/30 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
                  Limited Entry Window
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mb-2 leading-tight">
                  {siteContent.about.stageCard.headline}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {siteContent.about.stageCard.subhead}
                </p>

                {/* Dynamic HTML/SVG Stage Price Growth Visual */}
                <div className="relative w-full rounded-2xl bg-white/70 dark:bg-black/40 border border-purple-100 dark:border-white/10 p-5 mb-6 overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-slate-600 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      Price Stage Ladder
                    </span>
                    <span className="text-xs font-mono font-bold text-purple-700 dark:text-cyan-400 px-2 py-0.5 rounded-md bg-purple-500/10 dark:bg-cyan-500/10 border border-purple-500/20 dark:border-cyan-500/20">
                      +500% Delta
                    </span>
                  </div>

                  {/* Step Bars */}
                  <div className="space-y-3">
                    {/* Current Stage */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Stage 1 (Current Entry)
                        </span>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">$0.05</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "33%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Next Stage */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-500 dark:text-slate-400">Stage 2 (Next Round)</span>
                        <span className="font-mono font-bold text-slate-600 dark:text-slate-300">$0.08</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "66%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Listing Stage */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          TGE Public Listing
                        </span>
                        <span className="font-mono font-bold text-purple-700 dark:text-purple-300">$0.30</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="mb-6">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mb-2">
                    Offer Ends In
                  </span>
                  <CountdownTimer
                    initialDays={2}
                    initialHours={13}
                    initialMinutes={53}
                    initialSeconds={58}
                    theme="light"
                  />
                </div>

                {/* Price comparison row */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-medium block">
                      Effective Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-mono font-bold text-slate-900 dark:text-white">
                        {siteContent.about.stageCard.effectivePrice}
                      </span>
                      <span className="text-xs text-purple-600 dark:text-purple-400 font-bold">
                        {siteContent.about.stageCard.bonusLabel}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 line-through">
                      {siteContent.about.stageCard.originalPrice}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-medium block">
                      Listing Price
                    </span>
                    <span className="text-2xl font-mono font-bold text-cyan-600 dark:text-cyan-400">
                      {siteContent.about.stageCard.listingPrice}
                    </span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 block font-semibold">
                      +500% at Launch
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <Button
                  href="#presale"
                  variant="primary"
                  size="lg"
                  className="w-full mb-4 font-bold shadow-lg shadow-purple-600/30 border-t border-white/25"
                >
                  {siteContent.about.stageCard.cta}
                </Button>

                {/* Audited Pill Badges */}
                <div className="flex items-center justify-center gap-6 pt-3 border-t border-slate-200/60 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>SolidProof Audited</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>CertiK Verified</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
}
