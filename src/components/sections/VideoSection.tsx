"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  return (
    <section
      id="video"
      className="pb-20 lg:pb-28 bg-white dark:bg-[#06070B] transition-colors duration-300"
    >
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="text-center max-w-[540px] mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-normal leading-[1.06] tracking-[-0.045em] text-[#0F172A] dark:text-white mb-3">
            Watch the{" "}
            <span className="text-[#94A3B8] dark:text-slate-500">
              OKNexus story
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 tracking-[-0.02em]">
            A concise walkthrough of how OKN turns network participation into verifiable on-chain value.
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#EAE7F4] dark:border-white/10 bg-[#06070B] shadow-[0_20px_54px_rgba(15,23,42,0.12)] dark:shadow-none">
          <div className="relative aspect-video w-full">
            {!isPlaying ? (
              <button
                type="button"
                aria-label="Play the OKNexus explainer video"
                onClick={() => setIsPlaying(true)}
                className="group absolute inset-0 h-full w-full flex items-center justify-center bg-[#06070B]"
              >
                {!thumbError && (
                  <img
                    src="https://i.ytimg.com/vi/aeOaTnLNVIU/maxresdefault.jpg"
                    alt="OKNexus Explainer Video Thumbnail"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => setThumbError(true)}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/30 transition-colors duration-200 group-hover:bg-black/40"
                />
                <span className="relative z-10 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-[#0F172A] shadow-lg transition-transform duration-200 group-hover:scale-105">
                  <Play className="ml-1 h-6 w-6 sm:h-7 sm:w-7 fill-current" aria-hidden="true" />
                </span>
              </button>
            ) : (
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/aeOaTnLNVIU?autoplay=1"
                title="OKNexus Explainer Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
