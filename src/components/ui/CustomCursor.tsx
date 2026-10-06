'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth lerp springs for the outer ring
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest('[data-cursor="view"]');
      const hoverTarget = target.closest('a, button, [data-cursor="hover"], input, textarea');

      if (viewTarget) {
        setCursorType('view');
      } else if (hoverTarget) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[999] rounded-full transition-transform duration-150 ${
          cursorType === 'view'
            ? 'w-0 h-0 opacity-0'
            : cursorType === 'hover'
            ? 'w-1.5 h-1.5 bg-accent'
            : 'w-2 h-2 bg-light'
        }`}
      />

      {/* Outer Follower Ring / Pill */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'view' ? 1 : cursorType === 'hover' ? 1.5 : 1,
          width: cursorType === 'view' ? 84 : 36,
          height: cursorType === 'view' ? 84 : 36,
          backgroundColor:
            cursorType === 'view'
              ? 'rgba(124, 92, 255, 0.9)'
              : cursorType === 'hover'
              ? 'rgba(255, 255, 255, 0.08)'
              : 'transparent',
          borderColor:
            cursorType === 'view'
              ? 'transparent'
              : cursorType === 'hover'
              ? 'rgba(124, 92, 255, 0.5)'
              : 'rgba(255, 255, 255, 0.3)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed top-0 left-0 pointer-events-none z-[998] rounded-full border flex items-center justify-center backdrop-blur-[2px]"
      >
        {cursorType === 'view' && (
          <span className="font-mono text-xs font-bold tracking-wider text-white uppercase select-none">
            View
          </span>
        )}
      </motion.div>
    </>
  );
}
