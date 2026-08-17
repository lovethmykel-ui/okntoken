"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent, RoadmapMilestone } from "@/data/siteContent";
import { CheckCircle2, Circle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export function Roadmap() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/30 backdrop-blur-md">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse" />
            In Progress
          </span>
        );
      case "Upcoming":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-500/20 backdrop-blur-md">
            <Circle className="w-3.5 h-3.5" />
            Upcoming
          </span>
        );
    }
  };

  return (
    <section
      id="roadmap"
      className="py-24 bg-white dark:bg-[#06070B] relative overflow-hidden scroll-mt-24 transition-colors duration-500"
    >
      {/* Background ambient lighting mesh for refraction */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 dark:bg-purple-600/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow={siteContent.roadmap.eyebrow}
            title={siteContent.roadmap.headline}
            description={siteContent.roadmap.description}
          />

          {/* Liquid Glass Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll roadmap left"
              className="w-12 h-12 rounded-full glass-light flex items-center justify-center text-slate-700 dark:text-slate-200 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300 hover:scale-105 transition-all shadow-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll roadmap right"
              className="w-12 h-12 rounded-full glass-light flex items-center justify-center text-slate-700 dark:text-slate-200 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300 hover:scale-105 transition-all shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Timeline Rail */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {siteContent.roadmap.milestones.map((milestone: RoadmapMilestone, idx: number) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[320px] sm:w-[360px] p-8 rounded-3xl glass-light hover:-translate-y-1 hover:shadow-2xl hover:border-purple-400/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {milestone.quarter} • {milestone.year}
                  </span>
                  {getStatusBadge(milestone.status)}
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {milestone.title}
                </h3>

                <ul className="space-y-3.5 mb-6">
                  {milestone.points.map((pt: string, pIdx: number) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          milestone.status === "Completed"
                            ? "text-emerald-500"
                            : milestone.status === "In Progress"
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-slate-400 dark:text-slate-600"
                        }`}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 text-xs font-mono font-semibold text-purple-700 dark:text-purple-400">
                Milestone Target: {milestone.quarter} {milestone.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
