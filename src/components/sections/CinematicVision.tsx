'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

export default function CinematicVision() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitPinRef = useRef<HTMLDivElement | null>(null);
  const imgContemplationRef = useRef<HTMLDivElement | null>(null);
  const imgVisionaryRef = useRef<HTMLDivElement | null>(null);
  const textContemplationRef = useRef<HTMLDivElement | null>(null);
  const textVisionaryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Large Tablets: Full Pinned Scroll Scrub
      mm.add('(min-width: 1024px)', () => {
        if (splitPinRef.current && imgContemplationRef.current && imgVisionaryRef.current) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitPinRef.current,
              start: 'top top',
              end: '+=200%',
              pin: true,
              scrub: 1,
            },
          });

          tl.to(imgContemplationRef.current, { opacity: 0, scale: 1.05, duration: 1 })
            .to(imgVisionaryRef.current, { opacity: 1, scale: 1, duration: 1 }, '<')
            .to(textContemplationRef.current, { opacity: 0, y: -20, duration: 0.6 }, '<')
            .to(textVisionaryRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
        }
      });

      // Mobile & Small Tablets: Fluid Unpinned Scroll Scrub (Never locks or stutters touch scroll)
      mm.add('(max-width: 1023px)', () => {
        if (splitPinRef.current && imgContemplationRef.current && imgVisionaryRef.current) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitPinRef.current,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: true,
            },
          });

          tl.to(imgContemplationRef.current, { opacity: 0, duration: 1 })
            .to(imgVisionaryRef.current, { opacity: 1, duration: 1 }, '<')
            .to(textContemplationRef.current, { opacity: 0, duration: 0.6 }, '<')
            .to(textVisionaryRef.current, { opacity: 1, duration: 0.8 }, '-=0.3');
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#050608] text-light overflow-hidden">
      
      {/* ──────────────────────────────────────────────────────────
          PINNED SIDE-PROFILE CONTEMPLATION TO VISION MORPH
         ────────────────────────────────────────────────────────── */}
      <section
        ref={splitPinRef}
        className="relative min-h-screen lg:h-screen w-full flex items-center justify-center px-6 sm:px-12 md:px-16 py-16 lg:py-0 border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Side-Profile Cross-Fade Image Showcase */}
          <div className="lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl bg-black">
            
            {/* Image 1: Golden Hour Sunset Contemplation (Eyes Closed / Breathing / Stillness) */}
            <div
              ref={imgContemplationRef}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/images/profile-contemplation-sunset.jpg"
                alt="Surya Teja - Deep Contemplation at Sunset"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/[0.15] text-[11px] sm:text-xs font-mono text-amber-300 flex items-center gap-2">
                <Compass className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                <span>01 // Stillness &amp; First Principles</span>
              </div>
            </div>

            {/* Image 2: Visionary Skyline Profile (Eyes Open / Focused into Future) */}
            <div
              ref={imgVisionaryRef}
              className="absolute inset-0 w-full h-full opacity-0 scale-95"
            >
              <Image
                src="/images/profile-visionary-skyline.jpg"
                alt="Surya Teja - Looking at Future Skyline"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/[0.15] text-[11px] sm:text-xs font-mono text-accent flex items-center gap-2">
                <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                <span>02 // Relentless Execution at Scale</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story Scroll Scrub */}
          <div className="lg:col-span-5 relative flex flex-col justify-center min-h-[280px] sm:min-h-[320px]">
            
            {/* Text State 1: Stillness & Architecture */}
            <div
              ref={textContemplationRef}
              className="space-y-4 sm:space-y-6"
            >
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>The Engineering Philosophy</span>
              </span>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-light tracking-tight leading-snug">
                Every breakthrough begins in <br />
                <span className="text-amber-300">absolute stillness.</span>
              </h3>

              <p className="text-slate-300 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
                Before writing a single line of code, I break complex distributed challenges down to first principles. Whether optimizing MongoDB index cardinality or architecting full-duplex WebRTC pipelines, clarity precedes speed.
              </p>

              <div className="pt-2 text-[11px] sm:text-xs font-mono text-muted flex items-center gap-2">
                <span>↓ Scroll to trigger execution phase</span>
              </div>
            </div>

            {/* Text State 2: Vision & Production Delivery (reveals on scroll) */}
            <div
              ref={textVisionaryRef}
              className="absolute inset-0 flex flex-col justify-center space-y-4 sm:space-y-6 opacity-0 translate-y-6 pointer-events-none"
            >
              <span className="font-mono text-xs text-accent uppercase tracking-widest block flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>From Vision to Production</span>
              </span>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-light tracking-tight leading-snug">
                Building systems that scale <br />
                <span className="text-accent">without breaking.</span>
              </h3>

              <p className="text-slate-300 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
                Proven track record across 1.9+ years at Codegnan IT Solutions: managing 246 PRs, 963 commits, and deploying multi-tenant production architectures that reliably serve thousands daily.
              </p>

              <div className="pt-2 text-[11px] sm:text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available to join immediately (0 Days Notice)</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
