'use client';

import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { personalData } from '@/data/content';
import { ArrowUpRight, X } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { title: 'Work', href: '#projects', number: '01' },
  { title: 'Numbers', href: '#numbers', number: '02' },
  { title: 'Skills', href: '#skills', number: '03' },
  { title: 'Experience', href: '#experience', number: '04' },
  { title: 'About', href: '#about', number: '05' },
  { title: 'Contact', href: '#contact', number: '06' },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const containerVariants: Variants = {
    initial: {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const itemVariants: Variants = {
    initial: { y: '100%', opacity: 0 },
    animate: (i: number) => ({
      y: '0%',
      opacity: 1,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.15 + i * 0.06 },
    }),
    exit: { y: '100%', opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-[#0d0d0d] z-50 flex flex-col justify-between px-6 sm:px-12 md:px-20 py-8 overflow-y-auto"
        >
          {/* Header row in menu */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
            <span className="font-mono text-xs text-muted uppercase tracking-wider">
              Navigation Menu
            </span>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] hover:border-accent text-light text-xs font-mono transition-colors"
            >
              <span>Close</span>
              <X className="w-3.5 h-3.5 text-accent" />
            </button>
          </div>

          {/* Big Nav Links */}
          <div className="py-12 flex flex-col gap-3">
            {navLinks.map((link, i) => (
              <div key={link.title} className="overflow-hidden">
                <motion.a
                  href={link.href}
                  onClick={onClose}
                  custom={i}
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="group flex items-baseline gap-4 sm:gap-8 text-4xl sm:text-6xl md:text-7xl font-display font-bold text-light hover:text-accent transition-colors"
                >
                  <span className="font-mono text-xs sm:text-sm text-muted group-hover:text-accent transition-colors">
                    {link.number}
                  </span>
                  <span>{link.title}</span>
                </motion.a>
              </div>
            ))}
          </div>

          {/* Footer info in menu */}
          <div className="border-t border-white/[0.08] pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-muted">
            <div>
              <span className="text-light block font-semibold mb-1">Availability</span>
              <span className="text-emerald-400">🟢 Available Immediately (0 Days Notice)</span>
            </div>
            <div>
              <span className="text-light block font-semibold mb-1">Direct Contact</span>
              <a href={`mailto:${personalData.email}`} className="hover:text-accent transition-colors">
                {personalData.email}
              </a>
            </div>
            <div className="flex items-center gap-4 md:justify-end">
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-light flex items-center gap-1 transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-light flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
