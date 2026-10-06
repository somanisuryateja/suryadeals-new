'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  type?: 'words' | 'chars';
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  type = 'words',
}: TextRevealProps) {
  const items = type === 'words' ? children.split(' ') : children.split('');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'words' ? 0.05 : 0.02,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {items.map((item, idx) => (
        <span key={idx} className="inline-block overflow-hidden py-1">
          <motion.span
            variants={itemVariants}
            className="inline-block"
          >
            {item}
            {type === 'words' && idx < items.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
