"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-24 bg-white dark:bg-[#0A0D18] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="See it in action"
            title="Watch the OKNexus story"
            description="A quick walkthrough of how $OKN turns every action into real, on-chain value."
            centered
            className="mb-14"
          />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-slate-900/50">
            <div className="relative aspect-video w-full">
              {!isPlaying ? (
                <button
                  type="button"
                  aria-label="Play the OKNexus explainer video"
                  onClick={() => setIsPlaying(true)}
                  className="group absolute inset-0 h-full w-full"
                >
                  <img
                    src="https://i.ytimg.com/vi/aeOaTnLNVIU/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30"></span>
                  <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg shadow-purple-600/40 transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-10 w-10 fill-current" aria-hidden="true" />
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
                ></iframe>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
