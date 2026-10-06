'use client';

import React, { useRef, useEffect } from 'react';
import { personalData } from '@/data/content';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowDown, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLHeadingElement | null>(null);
  const line2Ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Letters stagger rise-in animation on mount
      gsap.fromTo(
        '.hero-char',
        { y: '120%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1,
          stagger: 0.025,
          ease: 'power3.out',
          delay: 0.1,
        }
      );

      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.6,
        }
      );

      // iPhone-style scroll scrub: scales down, fades out, moves up
      gsap.to(contentRef.current, {
        scale: 0.88,
        opacity: 0,
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    // Mouse move parallax on subtle ambient glow
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(glowRef.current, { x, y, duration: 1.5, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const nameLine1 = "SOMANI ABDULLA";
  const nameLine2 = "SURYA TEJA";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 md:px-16 overflow-hidden"
    >
      {/* Ambient background volumetric glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-accent/20 via-purple-600/15 to-cyan-500/10 blur-[140px] rounded-full -z-10"
      />

      {/* Top status indicator in hero */}
      <div className="hero-fade max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-muted mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-light uppercase tracking-wider">{personalData.availability}</span>
        </div>
        <div className="hidden sm:block text-muted tracking-wider">
          {personalData.location}
        </div>
      </div>

      {/* Center main hero typography (iPhone scale scrub) */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto w-full my-auto flex flex-col justify-center select-none"
      >
        <div className="overflow-hidden">
          <h1
            ref={line1Ref}
            className="text-[12vw] sm:text-[10vw] font-display font-extrabold tracking-tighter leading-[0.88] text-light"
          >
            {nameLine1.split('').map((char, i) => (
              <span key={i} className="inline-block hero-char">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={line2Ref}
            className="text-[12vw] sm:text-[10vw] font-display font-extrabold tracking-tighter leading-[0.88] text-accent"
          >
            {nameLine2.split('').map((char, i) => (
              <span key={i} className="inline-block hero-char">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle & Role */}
        <div className="hero-fade mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/[0.08] pt-8">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-light">
              {personalData.role}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-muted max-w-xl">
              1.9+ Years High-Scale Production Engineering @ Codegnan · Dec 2024 – Sep 2026.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton href="/Somani_Abdulla_Surya_Teja_Resume.pdf" target="_blank">
              <span className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.15] bg-[#121212]/80 hover:border-accent hover:text-white text-xs font-mono text-light transition-all backdrop-blur-md">
                <Download className="w-3.5 h-3.5 text-accent" />
                <span>Resume (PDF)</span>
              </span>
            </MagneticButton>

            <MagneticButton href="#projects">
              <span className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accentHover text-white text-xs font-mono font-semibold transition-all shadow-lg shadow-accent/25">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Explore Work</span>
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom row: Rotating circular scroll badge */}
      <div className="hero-fade max-w-7xl mx-auto w-full flex items-center justify-between pt-12 text-xs font-mono text-muted">
        <span>SCROLL TO EXPLORE ARCHITECTURE</span>

        {/* Rotating Circular Badge */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fill="#8a8a8a" fontSize="11" letterSpacing="2">
              <textPath href="#circlePath">SCROLL DOWN · SURYA TEJA ·</textPath>
            </text>
          </svg>
          <ArrowDown className="absolute w-4 h-4 text-accent" />
        </div>
      </div>
    </section>
  );
}
