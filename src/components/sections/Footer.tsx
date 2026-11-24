"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { siteContent } from "@/data/siteContent";
import {
  TelegramIcon,
  TwitterXIcon,
  DiscordIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
  ThreadsIcon,
  BlueskyIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";
import { Copy, Check, X } from "lucide-react";

type PolicyType = "terms" | "privacy" | "cookies" | null;

const LEGAL_POLICIES: Record<Exclude<PolicyType, null>, { title: string; updated: string; body: string[] }> = {
  terms: {
    title: "Terms of Service",
    updated: "Last updated: 2026",
    body: [
      "OKN Token ($OKN) is a BEP-20 utility and governance token deployed on Binance Smart Chain (0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377). Participation in the OKNexus Telegram Mini-App, presale rounds, or OKNexus Exchange is subject to applicable local regulations.",
      "On-chain transactions, including Merkle proof reward claims and presale token purchases, are irreversible once confirmed on Binance Smart Chain. Users are solely responsible for maintaining custody of their Web3 wallets.",
      "Nothing on okntoken.com constitutes financial, legal, or investment advice. Always verify contract addresses directly on BscScan before interacting with any smart contract.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    body: [
      "OKNexus collects only minimal technical identifiers necessary to operate the Telegram Mini-App (@okntoken_bot), compute Merkle claim proofs, and safeguard community reward distributions.",
      "Public wallet addresses and on-chain transactions recorded on Binance Smart Chain are inherently public and immutable.",
      "We never sell personal data or request private keys or seed phrases. For verification records, team KYC is archived independently with AssureDeFi.",
    ],
  },
  cookies: {
    title: "Cookie Policy",
    updated: "Last updated: 2026",
    body: [
      "This site uses lightweight local storage and essential functional cookies solely to remember your theme preference (Light/Dark) and language selection.",
      "We do not deploy intrusive cross-site advertising trackers across our presale or documentation portals.",
    ],
  },
};

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
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
      case "Facebook":
        return <FacebookIcon className="w-4 h-4" />;
      case "Threads":
        return <ThreadsIcon className="w-4 h-4" />;
      case "Bluesky":
        return <BlueskyIcon className="w-4 h-4" />;
      case "TikTok":
        return <TikTokIcon className="w-4 h-4" />;
      case "Instagram":
      default:
        return <InstagramIcon className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-[#06070B] text-white pt-16 sm:pt-24 pb-8 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 mb-12">
          {/* Left: Brand Logo, Tagline, Contract, Circular Outlined Socials */}
          <div className="flex flex-col items-start">
            <BrandLockup size="lg" dark className="mb-6" />

            <p className="max-w-[280px] text-sm leading-[1.45] tracking-[-0.03em] text-slate-200 mb-6">
              The native utility and governance asset of the OKNexus Ecosystem on BNB Smart Chain.
            </p>

            {/* Contract Address Copy */}
            <div className="w-full max-w-[300px] p-3 rounded-lg border border-white/12 bg-white/[0.03] mb-6">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>Contract (BSC)</span>
                <span className="text-purple-400">Verified</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <code className="text-xs font-mono text-slate-200 truncate">
                  {contractAddress}
                </code>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1.5 rounded-md bg-white/10 hover:bg-purple-600 text-white transition-colors shrink-0"
                  aria-label="Copy contract address"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-purple-300" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Outlined 40x40 Circular Social Icons (Nexchain Footer Pattern) */}
            <div className="flex items-center gap-3 flex-wrap mb-6">
              {siteContent.community.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-purple-400 hover:text-purple-300 transition-colors"
                >
                  {getSocialIcon(soc.name)}
                </a>
              ))}
            </div>

            <a
              href="https://assuredefi.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Image
                src="/brand/assure_defi_badge.webp"
                alt="Verified by Assure DeFi"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>KYC Verified by AssureDeFi (@AssureDeFi)</span>
            </a>
          </div>

          {/* Right: 3 Clean Minimalist Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16 lg:justify-self-end">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-normal text-[#989898] mb-5">
                Ecosystem
              </h4>
              <ul className="space-y-3 text-sm sm:text-base tracking-[-0.03em]">
                <li>
                  <a
                    href="https://t.me/okntoken_bot?start=login"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    Telegram Mini-App
                  </a>
                </li>
                <li>
                  <a
                    href="https://oknexusexchange.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    OKNexus Exchange
                  </a>
                </li>
                <li>
                  <Link
                    href="/how-to-claim"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    How to Claim
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#presale"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    Presale Entry
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-normal text-[#989898] mb-5">
                Resources
              </h4>
              <ul className="space-y-3 text-sm sm:text-base tracking-[-0.03em]">
                <li>
                  <Link
                    href="/documents"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    Documents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tokenomics"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <a
                    href="/whitepaper.pdf"
                    download
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    Whitepaper PDF
                  </a>
                </li>
                <li>
                  <a
                    href="/roadmap.pdf"
                    download
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    Roadmap PDF
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-normal text-[#989898] mb-5">
                Protocol
              </h4>
              <ul className="space-y-3 text-sm sm:text-base tracking-[-0.03em]">
                <li>
                  <Link
                    href="/#about"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    AI Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#comparison"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    Benchmark
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="https://bscscan.com/token/0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    BscScan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Risk Note & Legal / Utility Bar */}
        <div className="pt-8 border-t border-white/15">
          <p className="max-w-[760px] text-xs sm:text-sm leading-[1.4] tracking-[-0.02em] text-[#989898] mb-6">
            Digital assets carry market volatility. Always verify official OKNexus smart contract addresses on BscScan and review security audit documentation before interacting with on-chain contracts.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#989898]">
            <span>© 2026 OKNexus Ecosystem. All rights reserved.</span>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => setActivePolicy("terms")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => setActivePolicy("privacy")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActivePolicy("cookies")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Cookie Policy
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {activePolicy && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActivePolicy(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-[#0B0E17] border border-white/15 p-6 sm:p-8 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-xl font-semibold text-white">
                {LEGAL_POLICIES[activePolicy].title}
              </h3>
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                aria-label="Close legal policy modal"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <span className="block text-xs text-purple-300 font-mono mb-5">
              {LEGAL_POLICIES[activePolicy].updated}
            </span>
            <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
              {LEGAL_POLICIES[activePolicy].body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
