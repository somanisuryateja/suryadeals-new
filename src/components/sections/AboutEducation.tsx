'use client';

import React from 'react';
import { personalData, educationData } from '@/data/content';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function AboutEducation() {
  return (
    <section id="about" className="relative py-24 bg-[#070707] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Heading & Short Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-accent uppercase tracking-widest block">
              06 // About & Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-light tracking-tight leading-tight">
              Engineer who owns <br />
              <span className="text-accent">the outcome.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              <p>
                Based in Hyderabad, India. I am an engineer who takes complete ownership from database schema architecture and WebSocket state synchronization to fluid frontend design and Linux production deployments.
              </p>
              <p>
                My work centers around high-throughput SaaS platforms, applied voice AI systems with sub-second response times, and bulletproof payment workflows. I write rigorous unit tests with Vitest, maintain SonarQube quality gates, and build systems meant to scale with zero downtime.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6 font-mono text-xs text-muted">
              <div>
                <span className="text-light block font-bold text-sm">Dec 2024 – Sep 2026</span>
                <span>Codegnan IT Solutions</span>
              </div>
              <div>
                <span className="text-light block font-bold text-sm">246 PRs / 963 Commits</span>
                <span>Proven Production Delivery</span>
              </div>
            </div>
          </div>

          {/* Right: Education & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-muted uppercase tracking-widest block">
              Academic & Certification Foundation
            </span>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c101a] border border-white/[0.08] hover:border-accent/40 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-accent">
                    <span className="flex items-center gap-1.5">
                      {idx === 2 ? <Award className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                      <span>{edu.period}</span>
                    </span>
                    <span className="text-muted">Verified</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-light">
                    {edu.degree}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-mono">
                    {edu.institution}
                  </p>

                  {edu.details && (
                    <p className="text-xs text-muted pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
