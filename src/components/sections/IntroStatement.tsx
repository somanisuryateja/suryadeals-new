'use client';

import React, { useRef, useEffect } from 'react';
import { personalData } from '@/data/content';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function IntroStatement() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.scrub-word');
      if (!words || words.length === 0) return;

      // Pinned ScrollTrigger scrub animation
      gsap.fromTo(
        words,
        { opacity: 0.18, color: '#8a8a8a' },
        {
          opacity: 1,
          color: '#f5f5f5',
          stagger: 0.1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=150%',
            pin: true,
            scrub: 0.75,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const words = personalData.summary.split(' ');

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 py-24 bg-[#0a0a0a] border-t border-b border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest">
          <span>01 // Core Philosophy & Engineering Breadth</span>
        </div>

        {/* Word-by-Word Scroll Scrubbed Paragraph */}
        <p
          ref={textRef}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.2] tracking-tight select-none"
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block scrub-word mr-[0.28em] transition-colors">
              {word}
            </span>
          ))}
        </p>

        {/* Immediate Joiner Status Line */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-light font-semibold">{personalData.availability}</span>
            <span className="text-muted">({personalData.noticePeriod})</span>
          </div>

          <div className="text-muted">
            10 Production Repositories · 246 PRs · 963 Commits Pass
          </div>
        </div>
      </div>
    </section>
  );
}
