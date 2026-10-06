'use client';

import React, { useRef, useEffect } from 'react';
import { skillsData } from '@/data/content';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Row 1 moves left
      gsap.to(row1Ref.current, {
        x: '-25%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Row 2 moves right
      gsap.to(row2Ref.current, {
        x: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const marquee1 = [
    'TYPESCRIPT',
    'NODE.JS',
    'EXPRESS',
    'FASTAPI',
    'PYTHON',
    'MONGODB',
    'REACT',
    'NEXT.JS',
    'DOCKER',
    'AWS S3',
  ];

  const marquee2 = [
    'LIVEKIT WEBRTC',
    'VOICE AI',
    'WHISPER',
    'WEBSOCKETS',
    'REDIS',
    'VITEST',
    'SONARQUBE',
    'RBAC SECURITY',
    'NGINX',
    'CI/CD',
  ];

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-24 bg-[#070707] overflow-hidden border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 mb-12">
        <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
          04 // Technical Matrix
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-light tracking-tight">
          Capabilities & Tooling
        </h2>
      </div>

      {/* Kinetic Marquee Row 1 */}
      <div className="py-2 overflow-hidden whitespace-nowrap select-none opacity-85">
        <div
          ref={row1Ref}
          className="flex gap-8 text-[7vw] sm:text-[5vw] font-display font-black tracking-tighter text-white/[0.12] hover:text-white/30 transition-colors"
        >
          {[...marquee1, ...marquee1].map((skill, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{skill}</span>
              <span className="text-accent text-[0.4em]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Kinetic Marquee Row 2 (Opposite direction) */}
      <div className="py-2 overflow-hidden whitespace-nowrap select-none opacity-85">
        <div
          ref={row2Ref}
          className="flex gap-8 text-[7vw] sm:text-[5vw] font-display font-black tracking-tighter text-accent/20 hover:text-accent/40 transition-colors"
        >
          {[...marquee2, ...marquee2].map((skill, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{skill}</span>
              <span className="text-light/40 text-[0.4em]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Grouped Categorized Skill Chips */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0b0f18] border border-white/[0.08] hover:border-accent/40 transition-colors space-y-4"
          >
            <h3 className="font-display font-bold text-light text-base flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span>{cat.title}</span>
              <span className="font-mono text-[10px] text-accent">0{idx + 1}</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-accent/50 text-xs font-mono text-muted hover:text-light transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
