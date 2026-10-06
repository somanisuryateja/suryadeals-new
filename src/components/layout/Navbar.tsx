'use client';

import React, { useState } from 'react';
import { personalData } from '@/data/content';
import Image from 'next/image';
import MenuOverlay from './MenuOverlay';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 md:px-16 py-6 flex items-center justify-between pointer-events-auto">
        {/* Name / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/[0.2] ring-2 ring-white/[0.05] group-hover:border-accent transition-all shrink-0">
            <Image
              src="/images/portrait-editorial.jpg"
              alt={personalData.shortName}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-light group-hover:text-accent transition-colors">
              {personalData.shortName}
            </span>
            <span className="font-mono text-[10px] text-muted">
              suryadeals.com
            </span>
          </div>
        </a>

        {/* Center pill: Relieved / Immediate status */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-[#121212]/80 backdrop-blur-md text-[11px] font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-light">{personalData.availability}</span>
          <span className="text-muted">·</span>
          <span className="text-muted">{personalData.location}</span>
        </div>

        {/* Right: Menu trigger button (magnetic styled) */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 rounded-full border border-white/[0.1] hover:border-accent bg-[#121212]/60 backdrop-blur-md text-xs font-mono text-light transition-colors"
          >
            Get in touch
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-light text-dark font-mono text-xs font-semibold hover:bg-accent hover:text-white transition-colors shadow-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-dark" />
            <span>Menu</span>
          </button>
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
