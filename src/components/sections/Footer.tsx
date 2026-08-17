"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { siteContent } from "@/data/siteContent";
import {
  TelegramIcon,
  TwitterXIcon,
  DiscordIcon,
  YouTubeIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { Copy, Check, ExternalLink, ShieldCheck } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Telegram":
        return <TelegramIcon className="w-4 h-4" />;
      case "X (Twitter)":
        return <TwitterXIcon className="w-4 h-4" />;
      case "Discord":
        return <DiscordIcon className="w-4 h-4" />;
      case "YouTube":
        return <YouTubeIcon className="w-4 h-4" />;
      case "Instagram":
        return <InstagramIcon className="w-4 h-4" />;
      default:
        return <TelegramIcon className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-[#05060A] text-white border-t border-white/10 pt-16 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info & Contract Address */}
          <div className="md:col-span-5 flex flex-col items-start">
            <BrandLockup size="lg" dark className="mb-4" />
            <p className="text-sm text-slate-300 max-w-sm mb-5 leading-relaxed">
              The native utility and community token of the OKNexus Ecosystem. Powered by BNB Smart Chain.
            </p>

            {/* Copyable Contract Address Box with Liquid Glass */}
            <div className="w-full max-w-sm p-3.5 rounded-2xl glass-dark border border-white/15 mb-6 backdrop-blur-2xl">
              <div className="flex items-center justify-between text-[10px] uppercase font-mono font-bold text-slate-400 mb-1.5">
                <span>Contract Address (BSC)</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Live
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <code className="text-xs font-mono text-purple-300 truncate">
                  {contractAddress}
                </code>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-purple-600 text-white transition-colors shrink-0"
                  aria-label="Copy contract address"
                  title="Copy address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Official Assure DeFi Badge with Liquid Glass */}
            <div className="flex items-center gap-3 p-3 px-4 rounded-2xl glass-dark border border-amber-500/30 mb-6 backdrop-blur-2xl shadow-md">
              <Image
                src="/brand/assure_defi_badge.webp"
                alt="Verified by Assure DeFi"
                width={34}
                height={34}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  KYC Verified by AssureDeFi
                </span>
                <a
                  href="https://assuredefi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-amber-400 hover:underline font-bold"
                >
                  @AssureDeFi
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              {siteContent.community.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-600 transition-all shadow-md"
                >
                  {getSocialIcon(soc.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* App Column */}
            <div className="flex flex-col gap-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Ecosystem &amp; App
              </h4>
              <a
                href="https://t.me/okntoken_bot?start=login"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-300 hover:text-purple-400 transition-colors flex items-center gap-1 font-medium"
              >
                <span>Telegram Mini-App</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href="https://oknexusexchange.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-300 hover:text-purple-400 transition-colors flex items-center gap-1 font-medium"
              >
                <span>OKNexus Exchange</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <Link href="/how-to-claim" className="text-sm text-slate-300 hover:text-purple-400 transition-colors font-medium">
                How to Claim
              </Link>
              <Link href="/#presale" className="text-sm text-slate-300 hover:text-purple-400 transition-colors font-medium">
                Presale Stage
              </Link>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Resources
              </h4>
              <Link href="/documents" className="text-sm text-slate-300 hover:text-purple-400 transition-colors font-medium">
                Documents &amp; Papers
              </Link>
              <Link href="/tokenomics" className="text-sm text-slate-300 hover:text-purple-400 transition-colors font-medium">
                Tokenomics (5B Cap)
              </Link>
              <a href="/whitepaper.pdf" download className="text-sm text-slate-300 hover:text-purple-400 transition-colors font-medium">
                Whitepaper (PDF)
              </a>
              <a href="/roadmap.pdf" download className="text-sm text-slate-300 hover:text-purple-400 transition-colors font-medium">
                Roadmap (PDF)
              </a>
            </div>

            {/* Protocol Column */}
            <div className="flex flex-col gap-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Protocol
              </h4>
              <Link href="/#about" className="text-sm text-slate-300 hover:text-purple-400 transition-colors font-medium">
                AI Architecture
              </Link>
              <Link href="/#comparison" className="text-sm text-slate-300 hover:text-purple-400 transition-colors font-medium">
                Benchmark vs NEAR
              </Link>
              <Link href="/#faq" className="text-sm text-slate-300 hover:text-purple-400 transition-colors font-medium">
                FAQ
              </Link>
              <a
                href="https://bscscan.com/token/0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-300 hover:text-purple-400 transition-colors flex items-center gap-1 font-medium"
              >
                <span>BscScan Contract</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <span>© 2026 OKN Token. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="#terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#cookies" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
