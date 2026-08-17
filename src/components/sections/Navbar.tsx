"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { Menu, X, ExternalLink, Send } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "How to Claim", href: "/how-to-claim" },
    { name: "Tokenomics", href: "/tokenomics" },
    { name: "Roadmap", href: "/#roadmap" },
    { name: "Ecosystem", href: "/#ecosystem" },
    { name: "Documents", href: "/documents" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 pt-3 pb-2 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          isScrolled
            ? "glass-light shadow-xl shadow-purple-950/5 dark:shadow-black/60 border border-white/80 dark:border-white/15"
            : "bg-white/70 dark:bg-[#0D101C]/70 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-md"
        }`}
      >
        {/* Brand Logo */}
        <BrandLockup size="md" />

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1 rounded-full bg-slate-100/60 dark:bg-white/5 border border-slate-200/50 dark:border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-semibold px-3 py-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-white dark:hover:bg-white/10 transition-all duration-200"
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Action CTAs & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2.5">
          <LanguageSelector />
          <ThemeToggle />

          <a
            href="https://oknexusexchange.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-white/5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-purple-300 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-all shadow-2xs backdrop-blur-md"
          >
            <span>Exchange</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href="https://t.me/okntoken_bot?start=login"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-xs shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 transition-all hover:scale-[1.02] border-t border-white/25"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open App</span>
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2 max-w-7xl mx-auto rounded-3xl glass-light border border-white/80 dark:border-white/15 px-6 py-6 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold py-2 px-3 rounded-xl text-slate-800 dark:text-slate-100 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex flex-col gap-3">
                <a
                  href="https://oknexusexchange.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-2xl border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/5 text-xs font-bold text-slate-800 dark:text-slate-100"
                >
                  <span>OKNexus Exchange</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://t.me/okntoken_bot?start=login"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-xs shadow-lg shadow-purple-600/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Telegram App</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
