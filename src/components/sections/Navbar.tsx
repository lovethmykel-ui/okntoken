"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#about" },
    { name: "Ecosystem", href: "/#ecosystem" },
    { name: "Tokenomics", href: "/tokenomics" },
    { name: "Roadmap", href: "/#roadmap" },
    { name: "Documents", href: "/documents" },
  ];

  const mobileLinks = [
    ...navLinks,
    { name: "How to Claim", href: "/how-to-claim" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#06070B]/95 backdrop-blur-md border-b border-[#EAE7F4] dark:border-white/10"
          : "bg-white dark:bg-[#06070B] border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[70px] grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* Left: Brand Lockup */}
        <div className="flex items-center justify-start">
          <BrandLockup size="md" />
        </div>

        {/* Center: Clean Minimalist 5-Link Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-1.5 text-[15px] font-normal tracking-[-0.025em] text-[#334155] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Theme Toggle + Single Primary CTA + Mobile Menu */}
        <div className="flex items-center justify-end gap-2.5">
          <ThemeToggle />

          <Link
            href="/#presale"
            className="hidden md:inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] text-[15px] font-medium tracking-[-0.025em] hover:bg-purple-700 dark:hover:bg-purple-100 transition-colors whitespace-nowrap shrink-0 group"
          >
            <span>Join Presale</span>
            <span className="w-8 h-8 rounded-full bg-white dark:bg-[#0F172A] text-[#0F172A] dark:text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-[#EAE7F4] dark:border-white/15 text-[#0F172A] dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-[#EAE7F4] dark:border-white/10 bg-white dark:bg-[#06070B] px-4 py-5"
          >
            <div className="flex flex-col gap-1">
              {mobileLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[15px] font-normal tracking-[-0.025em] py-2.5 px-3 rounded-xl text-[#0F172A] dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-[#E8E8E8] dark:border-white/10 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://oknexusexchange.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-2.5 px-3 rounded-full border border-[#E6E3F1] dark:border-white/15 text-sm font-medium text-[#0F172A] dark:text-white"
                  >
                    Exchange
                  </a>
                  <a
                    href="https://t.me/okntoken_bot?start=login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-2.5 px-3 rounded-full bg-[#F4F0FF] dark:bg-purple-500/15 text-sm font-medium text-purple-700 dark:text-purple-200"
                  >
                    Open App
                  </a>
                </div>
                <Link
                  href="/#presale"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-between pl-5 pr-2 py-2 rounded-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] font-medium text-[15px]"
                >
                  <span>Join Presale</span>
                  <span className="w-8 h-8 rounded-full bg-white dark:bg-[#0F172A] text-[#0F172A] dark:text-white flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
