'use client';

import React from 'react';
import ProjectsList from './ProjectsList';
import ProjectsHorizontal from './ProjectsHorizontal';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-[#0a0a0a] border-b border-white/[0.08]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 pt-24 pb-8">
        <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
          03 // Production Systems & Architectures
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-light tracking-tight">
          Selected Works
        </h2>
        <p className="text-sm sm:text-base font-mono text-muted mt-3 max-w-xl">
          Enterprise EdTech and real-time voice screening platforms shipped to live production users.
        </p>
      </div>

      {/* Part A: Dennis Snellenberg Row List with Floating Velocity Card */}
      <div className="px-6 sm:px-12 md:px-16 pb-12">
        <ProjectsList />
      </div>

      {/* Part B: Horizontal Pinned Showcase */}
      <ProjectsHorizontal />
    </section>
  );
}
