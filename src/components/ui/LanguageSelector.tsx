"use client";

import React, { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          elementId: string
        ) => void;
      };
    };
  }
}

function ensureGoogleTranslateLoaded() {
  if (typeof window === "undefined") return;
  if (document.getElementById("okn-gt-script")) return;

  window.googleTranslateElementInit = () => {
    if (window.google?.translate?.TranslateElement) {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
    }
  };

  const script = document.createElement("script");
  script.id = "okn-gt-script";
  script.async = true;
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
}

function applyLanguage(code: string, retries = 8) {
  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
  if (select) {
    select.value = code;
    select.dispatchEvent(new Event("change"));
  } else if (retries > 0) {
    setTimeout(() => applyLanguage(code, retries - 1), 250);
  }
}

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "zh-CN", label: "中文" },
  ];

  const handleToggle = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      ensureGoogleTranslateLoaded();
    }
  };

  const handleLanguageChange = (code: string) => {
    setSelectedLang(code);
    setIsOpen(false);
    ensureGoogleTranslateLoaded();
    applyLanguage(code);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Select Language"
        className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all hover:bg-slate-100 dark:hover:bg-white/10 active:scale-[0.97] backdrop-blur-md"
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="uppercase">{selectedLang === "zh-CN" ? "zh" : selectedLang}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 bottom-full mb-2 w-32 z-50 rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0D101C] shadow-xl overflow-hidden"
            >
              <div className="flex flex-col py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`px-4 py-2 text-left text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors ${
                      selectedLang === lang.code
                        ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
                        : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
