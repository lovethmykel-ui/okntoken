"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/siteContent";
import {
  TelegramIcon,
  TwitterXIcon,
  DiscordIcon,
  YouTubeIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { ArrowUpRight, Globe2, Users, ShieldCheck, Sparkles, Activity } from "lucide-react";

export function Community() {
  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Telegram":
        return <TelegramIcon className="w-5 h-5 text-cyan-400" />;
      case "X (Twitter)":
        return <TwitterXIcon className="w-5 h-5 text-white" />;
      case "Discord":
        return <DiscordIcon className="w-5 h-5 text-indigo-400" />;
      case "YouTube":
        return <YouTubeIcon className="w-5 h-5 text-red-400" />;
      case "Instagram":
        return <InstagramIcon className="w-5 h-5 text-pink-400" />;
      default:
        return <TelegramIcon className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#06070B] relative overflow-hidden transition-colors duration-500">
      {/* Background Refraction Mesh */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 dark:bg-purple-600/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Community Highlight Banner */}
          <div className="lg:col-span-6 flex flex-col">
            <SectionHeading
              eyebrow={siteContent.community.eyebrow}
              title={siteContent.community.headline}
              description={siteContent.community.description}
              className="mb-8"
            />

            {/* 3 Metrics Block with Apple Liquid Glass OS */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {siteContent.community.stats.map((st) => (
                <div
                  key={st.label}
                  className="p-5 rounded-3xl glass-light text-center shadow-lg hover:-translate-y-0.5 transition-transform"
                >
                  <span className="font-mono text-2xl sm:text-3xl font-black text-slate-950 dark:text-white block mb-1">
                    {st.value}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Trusted and supported by leading crypto KOLs, liquidity providers, and community champions worldwide.
            </p>

            <Button
              href="https://t.me/OkNexusExchange"
              variant="primary"
              size="lg"
              className="self-start font-bold shadow-xl shadow-purple-600/30 border-t border-white/25"
            >
              Join the Community
            </Button>
          </div>

          {/* Right: Dynamic Interactive Network Canvas & Social Grid */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Dynamic Visual Network Panel with Liquid Glass */}
            <div className="relative w-full min-h-[300px] rounded-3xl glass-light overflow-hidden flex flex-col items-center justify-center p-8 shadow-2xl text-center">
              <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                {/* 3D Coin Graphic */}
                <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                  <Image
                    src="/brand/OKN_coin_transparent.png"
                    alt="OKNexus Community Node"
                    width={120}
                    height={120}
                    className="object-contain drop-shadow-[0_0_35px_rgba(124,58,237,0.75)] animate-float-subtle"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/15 dark:bg-purple-500/25 text-purple-700 dark:text-cyan-300 text-xs font-mono font-bold border border-purple-500/30 mb-3 backdrop-blur-md">
                  <Activity className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 animate-pulse" />
                  <span>Global Validator &amp; Community Mesh</span>
                </div>

                <h4 className="text-xl font-heading font-black text-slate-950 dark:text-white">
                  100,000+ Active Network Champions
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mt-1 leading-relaxed">
                  Decentralized governance, community liquidity vaults, and early ecosystem grant rounds on BNB Smart Chain.
                </p>
              </div>
            </div>

            {/* Social Channels Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {siteContent.community.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-light hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-xl transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-600/10 dark:bg-white/10 flex items-center justify-center border border-purple-500/20">
                      {getSocialIcon(soc.name)}
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{soc.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
