'use client';

import React, { useRef, useEffect, useState } from 'react';
import { statsData } from '@/data/content';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function NumbersPinned() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stat-slide');

      // Create master pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${statsData.length * 100}%`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              statsData.length - 1,
              Math.floor(progress * statsData.length)
            );
            setActiveIndex(newIndex);
          },
        },
      });

      // Animate each stat in and out sequentially
      cards.forEach((card, i) => {
        if (i === 0) {
          tl.fromTo(
            card,
            { opacity: 1, scale: 1 },
            { opacity: 0, scale: 0.85, y: -40, duration: 1 },
            '+=0.5'
          );
        } else if (i === cards.length - 1) {
          tl.fromTo(
            card,
            { opacity: 0, scale: 1.15, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 1 }
          );
        } else {
          tl.fromTo(
            card,
            { opacity: 0, scale: 1.15, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 1 }
          ).to(card, {
            opacity: 0,
            scale: 0.85,
            y: -40,
            duration: 1,
          }, '+=0.5');
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="numbers"
      className="relative h-screen flex items-center justify-center bg-[#070707] px-6 sm:px-12 md:px-20 overflow-hidden border-b border-white/[0.08]"
    >
      {/* Side Progress Dots (iPhone style) */}
      <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20 font-mono text-[10px]">
        {statsData.map((_, idx) => (
          <button
            key={idx}
            className={`transition-all duration-300 rounded-full flex items-center gap-2 ${
              activeIndex === idx
                ? 'w-8 h-2 bg-accent'
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Stat ${idx + 1}`}
          />
        ))}
      </div>

      {/* Chapter Indicator */}
      <div className="absolute top-12 left-6 sm:left-12 font-mono text-xs text-muted uppercase tracking-widest">
        <span>02 // Production Outcomes & Verified Telemetry</span>
      </div>

      {/* Main Slide Stack Container */}
      <div className="relative w-full max-w-4xl h-[420px] flex items-center justify-center text-center">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className={`stat-slide absolute inset-0 flex flex-col items-center justify-center ${
              idx === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            {/* Big Count Number (iPhone Style Display) */}
            <div className="text-[18vw] sm:text-[14vw] md:text-[12vw] font-display font-black tracking-tighter leading-none text-light flex items-baseline justify-center select-none">
              {stat.prefix && (
                <span className="text-[0.6em] text-accent mr-1 font-mono">
                  {stat.prefix}
                </span>
              )}
              <span>{stat.value}</span>
              <span className="text-[0.55em] text-accent ml-1 font-display">
                {stat.suffix}
              </span>
            </div>

            {/* Label below */}
            <div className="mt-4 sm:mt-6 space-y-2">
              <h3 className="text-xl sm:text-3xl font-display font-bold text-light">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-base font-mono text-muted max-w-lg mx-auto">
                {stat.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-12 left-6 sm:left-12 font-mono text-xs text-muted">
        <span>Scrub down to reveal projects ➔</span>
      </div>
    </section>
  );
}
