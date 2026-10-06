'use client';

import React, { useState, useEffect } from 'react';
import { personalData } from '@/data/content';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowUp, ArrowUpRight, Copy, Check, Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [istTime, setIstTime] = useState('');

  // Live Hyderabad IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#05070d] text-light pt-24 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-accent/15 via-purple-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10 space-y-20">
        
        {/* Main CTA Block (Dennis Snellenberg Style) */}
        <div className="space-y-10">
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest">
            <span>07 // Direct Communication</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-light leading-[0.95] max-w-3xl">
              Let&apos;s build <br />
              <span className="text-accent">something</span> together.
            </h2>

            {/* Giant Round Magnetic "Get in touch" Button */}
            <MagneticButton href={`mailto:${personalData.email}`} strength={0.45}>
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-accent hover:bg-accentHover text-white flex flex-col items-center justify-center p-4 text-center font-display font-bold text-base sm:text-lg transition-transform duration-300 shadow-2xl shadow-accent/40 select-none">
                <span>Get in touch</span>
                <span className="text-xs font-mono font-normal opacity-80 mt-1">
                  mailto ↗
                </span>
              </div>
            </MagneticButton>
          </div>
        </div>

        {/* Action Pill Buttons */}
        <div className="flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-12">
          <button
            onClick={handleCopyEmail}
            className="px-6 py-3.5 rounded-full border border-white/[0.12] bg-[#0c101a] hover:border-accent hover:bg-[#121828] text-xs font-mono text-light flex items-center gap-2 transition-all shadow-md"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">{personalData.email} Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-muted" />
                <span>{personalData.email}</span>
              </>
            )}
          </button>

          <a
            href={`tel:${personalData.phone}`}
            className="px-6 py-3.5 rounded-full border border-white/[0.12] bg-[#0c101a] hover:border-accent hover:bg-[#121828] text-xs font-mono text-light flex items-center gap-2 transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>{personalData.phone}</span>
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full border border-white/[0.12] bg-[#0c101a] hover:border-blue-400/50 hover:bg-[#121828] text-xs font-mono text-light flex items-center gap-2 transition-all shadow-md"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-muted" />
          </a>

          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full border border-white/[0.12] bg-[#0c101a] hover:border-white/50 hover:bg-[#121828] text-xs font-mono text-light flex items-center gap-2 transition-all shadow-md"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-muted" />
          </a>
        </div>

        {/* Bottom Bar: Live Time, Back to top, Credits */}
        <div className="border-t border-white/[0.08] pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-muted">
          {/* Live Hyderabad Clock */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Hyderabad (IST):</span>
            <span className="text-light font-bold">{istTime || 'Loading...'}</span>
          </div>

          {/* Credits */}
          <div className="text-center">
            <span>Built with Next.js 14, GSAP, and Lenis · </span>
            <span className="text-light">suryadeals.com</span>
          </div>

          {/* Back to top magnetic button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] hover:border-accent hover:text-light transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>

      </div>
    </footer>
  );
}
