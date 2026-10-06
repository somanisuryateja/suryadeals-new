'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { ArrowDown, Sparkles, Terminal, Cpu, Radio, ShieldCheck } from 'lucide-react';
import { personalData } from '@/data/content';

export default function EditorialCover() {
  const coverRef = useRef<HTMLDivElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const leftCalloutRef = useRef<HTMLDivElement | null>(null);
  const rightCalloutRef = useRef<HTMLDivElement | null>(null);
  const bottomBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!coverRef.current || !bgImageRef.current) return;

    const ctx = gsap.context(() => {
      // Background subtle scale and parallax scrub
      gsap.fromTo(
        bgImageRef.current,
        { scale: 1, y: 0 },
        {
          scale: 1.12,
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: coverRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Headline and callouts parallax entrance and floating scrub
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 40, opacity: 0.9 },
          {
            y: -30,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: coverRef.current,
              start: 'top center',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      if (leftCalloutRef.current && rightCalloutRef.current) {
        gsap.fromTo(
          [leftCalloutRef.current, rightCalloutRef.current],
          { y: 30 },
          {
            y: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: coverRef.current,
              start: 'top 70%',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, coverRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={coverRef}
      className="relative min-h-screen w-full flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden bg-black text-light select-none border-t border-b border-white/[0.08]"
    >
      {/* ──────────────────────────────────────────────────────────
          1. FULL-BLEED CINEMATIC BACKGROUND IMAGE (WITH PARALLAX)
         ────────────────────────────────────────────────────────── */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none will-change-transform"
      >
        <Image
          src="/images/environment-cinematic-wide.jpg"
          alt="Somani Abdulla Surya Teja - Cinematic Cover"
          fill
          priority
          className="object-cover object-center filter brightness-[0.78] contrast-[1.08]"
        />

        {/* Cinematic Vignette, Duotone Gradient & Anamorphic Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-black/40 to-[#06070a]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px] bg-accent/15 blur-[160px] rounded-full pointer-events-none" />
      </div>

      {/* ──────────────────────────────────────────────────────────
          2. TOP HEADER HUD / EDITORIAL ISSUE BAR
         ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-300 uppercase">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-light font-bold">COVER STORY // VOL. 01</span>
          <span className="hidden sm:inline text-muted">·</span>
          <span className="hidden sm:inline text-muted">APPLIED AI & PRODUCTION ENGINEERING</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-muted hidden md:inline">CODEGNAN IT SOLUTIONS · 2024–2026</span>
          <div className="px-3 py-1 rounded-full border border-white/[0.15] bg-black/60 backdrop-blur-md text-[10px] text-accent font-semibold">
            HYDERABAD · 17.3850° N
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          3. CENTERPIECE: HUGE EDITORIAL HEADLINE & COVER STORY
         ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-14 flex flex-col justify-center">
        
        {/* Subtle Background Watermark Typography */}
        <div className="absolute -top-12 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.06] select-none">
          <span className="font-display font-extrabold text-[18vw] leading-none tracking-tighter whitespace-nowrap text-white">
            SURYA TEJA
          </span>
        </div>

        {/* Category Pill */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="px-3 sm:px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md text-[11px] sm:text-xs font-mono text-accent font-semibold flex items-center gap-2">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span>FULL STACK & APPLIED AI ARCHITECT</span>
          </span>
        </div>

        {/* Main Cover Title */}
        <h2
          ref={headlineRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-light leading-[1.04] sm:leading-[0.98] max-w-5xl"
        >
          Scaling systems at the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-accent">
            edge of intelligence
          </span> <br className="hidden sm:inline" />
          and cloud resilience.
        </h2>

        {/* Editorial Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-slate-300 font-sans max-w-3xl leading-relaxed">
          Specializing in low-latency voice synthesis pipelines with LiveKit WebRTC, high-throughput MongoDB multi-tenant microservices, and end-to-end production ownership.
        </p>

        {/* ────────────────────────────────────────────────────────
            EDITORIAL CALLOUT TILES (MAGAZINE COVER STYLE)
           ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.12]">
          
          {/* Callout 1: Cloud Scale */}
          <div
            ref={leftCalloutRef}
            className="p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/[0.1] hover:border-accent/40 transition-all space-y-2 group shadow-xl"
          >
            <div className="flex items-center justify-between text-xs font-mono text-accent">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>FEATURE 01 // SCALE</span>
              </span>
              <span className="text-muted">15,000+ OPS</span>
            </div>
            <h3 className="text-lg font-display font-bold text-light group-hover:text-accent transition-colors">
              High-Throughput Microservices
            </h3>
            <p className="text-xs font-sans text-slate-400 leading-relaxed">
              Eliminated MongoDB query bottlenecks with compound indexing, driving down query latency by 68% across high-concurrency workloads.
            </p>
          </div>

          {/* Callout 2: Voice AI */}
          <div
            ref={rightCalloutRef}
            className="p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/[0.1] hover:border-cyan-400/40 transition-all space-y-2 group shadow-xl"
          >
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5" />
                <span>FEATURE 02 // REALTIME</span>
              </span>
              <span className="text-muted">&lt;500MS AUDIO</span>
            </div>
            <h3 className="text-lg font-display font-bold text-light group-hover:text-cyan-400 transition-colors">
              Applied Voice AI Pipelines
            </h3>
            <p className="text-xs font-sans text-slate-400 leading-relaxed">
              Full-duplex conversational agents with DeepSeek R1 and OpenAI streaming through LiveKit WebRTC for human-parity responsiveness.
            </p>
          </div>

          {/* Callout 3: Track Record */}
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/[0.1] hover:border-emerald-400/40 transition-all space-y-2 group shadow-xl col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FEATURE 03 // RELIABILITY</span>
              </span>
              <span className="text-muted">246 PRs</span>
            </div>
            <h3 className="text-lg font-display font-bold text-light group-hover:text-emerald-400 transition-colors">
              End-to-End Ownership
            </h3>
            <p className="text-xs font-sans text-slate-400 leading-relaxed">
              From database schema to production Linux Nginx reverse proxies with automated zero-downtime CI/CD workflows.
            </p>
          </div>

        </div>

      </div>

      {/* ──────────────────────────────────────────────────────────
          4. BOTTOM STATUS BAR & SCROLL DOWN PROMPT
         ────────────────────────────────────────────────────────── */}
      <div
        ref={bottomBarRef}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-muted pt-6 border-t border-white/[0.08]"
      >
        <div className="flex items-center gap-3">
          <span className="text-light font-semibold">{personalData.name}</span>
          <span className="text-muted">·</span>
          <span className="text-emerald-400">{personalData.availability}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 animate-bounce">
          <span>SCROLL TO DIVE DEEPER</span>
          <ArrowDown className="w-3.5 h-3.5 text-accent" />
        </div>
      </div>

    </section>
  );
}
