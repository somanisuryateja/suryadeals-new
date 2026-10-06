'use client';

import React, { useState, useRef, useEffect } from 'react';
import { projectsData, Project } from '@/data/content';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export default function ProjectsList() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Smooth floating preview position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 180, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-7xl mx-auto py-12"
    >
      {/* Floating Preview Card (Dennis style) */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: activeProject ? 1 : 0,
          opacity: activeProject ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="pointer-events-none absolute z-30 w-72 sm:w-96 rounded-2xl overflow-hidden shadow-2xl border border-white/[0.15] bg-[#0d111a] hidden lg:block"
      >
        {activeProject && (
          <div>
            <div className="relative aspect-video w-full overflow-hidden bg-[#06080F]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-4 bg-[#0a0e18] border-t border-white/[0.08] flex items-center justify-between">
              <span className="font-mono text-xs text-accent font-semibold">
                {activeProject.stats || 'Production Verified'}
              </span>
              <span className="font-mono text-[10px] text-muted uppercase">
                {activeProject.role}
              </span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Project Rows */}
      <div className="divide-y divide-white/[0.08]">
        {projectsData.map((project) => {
          const isHovered = activeProject?.id === project.id;
          const isOtherHovered = activeProject !== null && !isHovered;

          return (
            <div
              key={project.id}
              data-cursor="view"
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
              className={`group py-8 sm:py-12 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer ${
                isOtherHovered ? 'opacity-30' : 'opacity-100'
              }`}
            >
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="font-mono text-sm sm:text-base text-muted group-hover:text-accent transition-colors">
                  {project.number}
                </span>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-light group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-muted max-w-xl">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Right: Tech Tags & Links */}
              <div className="flex flex-wrap md:flex-col lg:flex-row items-start md:items-end lg:items-center gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-muted group-hover:text-light transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2 md:pt-0">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border border-white/[0.1] hover:border-accent hover:text-accent text-light transition-colors"
                      title="Visit Live"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border border-white/[0.1] hover:border-accent hover:text-accent text-light transition-colors"
                      title="View GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
