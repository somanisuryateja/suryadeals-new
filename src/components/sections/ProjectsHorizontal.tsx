'use client';

import React, { useRef, useEffect } from 'react';
import { projectsData } from '@/data/content';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function ProjectsHorizontal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable horizontal pinning on desktop (lg and above)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      if (!containerRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const totalWidth = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-16 lg:py-0 lg:h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-16 mb-8 lg:mb-12 flex items-center justify-between">
        <div>
          <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-1">
            03B // Deep-Dive Showcase
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-light">
            Architected Platforms
          </h2>
        </div>
        <span className="hidden lg:inline-block font-mono text-xs text-muted">
          Scrub to pan horizontal ➔
        </span>
      </div>

      {/* Horizontal Track (Scrubbed on desktop, vertical stack on mobile) */}
      <div
        ref={trackRef}
        className="flex flex-col lg:flex-row gap-8 px-6 sm:px-12 md:px-16 lg:pl-16 w-full lg:w-max"
      >
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="w-full lg:w-[620px] rounded-3xl bg-[#0c101a] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shrink-0 shadow-2xl relative overflow-hidden group hover:border-accent/50 transition-colors"
          >
            {/* Visual Top Preview */}
            <div className="space-y-6">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#060810] border border-white/[0.06]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.1] font-mono text-[11px] text-accent">
                  {project.stats}
                </div>
              </div>

              {/* Title & Role */}
              <div className="space-y-2">
                <div className="font-mono text-xs text-muted uppercase tracking-wider">
                  {project.role}
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-light group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Detail bullet points */}
              <ul className="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs text-muted">
                {project.details.map((d, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">◆</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Chips & Action Buttons */}
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between gap-4 flex-wrap">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-[#080B14] border border-white/[0.06] text-[10px] font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-full border border-white/[0.1] hover:border-white text-xs font-mono text-light flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 rounded-full bg-accent hover:bg-accentHover text-xs font-mono font-semibold text-white flex items-center gap-1.5 transition-colors shadow-md shadow-accent/20"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
