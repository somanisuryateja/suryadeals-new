'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { greetings } from '@/data/content';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [index, setIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show once per session
    const hasSeenPreloader = sessionStorage.getItem('seen_preloader');
    if (hasSeenPreloader) {
      setIsLoading(false);
      if (onComplete) onComplete();
      return;
    }

    setDimension({ width: window.innerWidth, height: window.innerHeight });

    // Word cycling
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 180);

    // Percentage counter
    const percentInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(percentInterval);
          clearInterval(wordInterval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('seen_preloader', 'true');
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => {
      clearInterval(wordInterval);
      clearInterval(percentInterval);
    };
  }, [onComplete]);

  // Lock scroll while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curveVariants: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100vh', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070707] text-white"
        >
          {/* Center Greeting Word */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.15 }}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-light"
            >
              {greetings[index]}
            </motion.p>
          </div>

          {/* Bottom Loading Progress */}
          <div className="absolute bottom-12 px-8 w-full max-w-7xl flex items-center justify-between font-mono text-xs text-muted">
            <span className="tracking-widest uppercase">Initializing Portfolio</span>
            <span className="text-light font-bold text-sm">{percent}%</span>
          </div>

          {/* SVG Curved Exit Edge */}
          {dimension.width > 0 && (
            <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#070707] -z-10">
              <motion.path
                variants={curveVariants}
                initial="initial"
                exit="exit"
              />
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
