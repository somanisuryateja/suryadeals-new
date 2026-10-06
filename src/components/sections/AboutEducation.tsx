'use client';

import React from 'react';
import Image from 'next/image';
import { personalData, educationData } from '@/data/content';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function AboutEducation() {
  return (
    <section id="about" className="relative py-28 bg-[#06070a] border-b border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-12">
          <span>06 // Identity, Craft & Background</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Towering Full-Length Architectural Standing Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[9/15] sm:aspect-[9/14] rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c101a] shadow-2xl group">
              <Image
                src="/images/portrait-full-length.jpg"
                alt="Somani Abdulla Surya Teja - Full Length Architectural Shot"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Status Badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.15] text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>IMMEDIATE JOINER</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.15] text-[10px] font-mono text-light flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span>Hyderabad, India</span>
                </div>
              </div>

              {/* Bottom Caption Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/[0.1] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-light font-bold">{personalData.name}</span>
                  <span className="text-accent">Full Stack & AI</span>
                </div>
                <p className="text-[11px] font-sans text-slate-300 leading-relaxed">
                  Proven track record at Codegnan IT Solutions. Scaling distributed systems, voice AI agents, and enterprise architectures with zero compromise.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story, Principles & Education */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* The Story */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-light tracking-tight leading-tight">
                An engineer who owns <br />
                <span className="text-accent">the complete outcome.</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  I am a Full Stack & Applied AI Engineer who takes complete ownership: from database schema architecture and real-time WebSocket state synchronization, to fluid micro-interactions and Linux production deployment.
                </p>
                <p>
                  At <strong className="text-white">Codegnan IT Solutions</strong> (Dec 2024 – Sep 2026), I architected and maintained core multi-tenant microservices serving over 15,000+ daily production requests. By optimizing MongoDB compound indexing and query execution paths, we eliminated blocking bottlenecks and accelerated read latency by 68%.
                </p>
                <p>
                  In the Applied AI domain, I developed real-time low-latency voice synthesis pipelines with LiveKit WebRTC, streaming DeepSeek R1 / OpenAI responses at sub-500ms response windows for seamless conversational intelligence.
                </p>
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="font-display font-bold text-xl sm:text-2xl text-light block">1.9+ Years</span>
                  <span className="font-mono text-[11px] text-muted">Production Exp.</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="font-display font-bold text-xl sm:text-2xl text-accent block">246 PRs</span>
                  <span className="font-mono text-[11px] text-muted">963 Commits</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] col-span-2 sm:col-span-1">
                  <span className="font-display font-bold text-xl sm:text-2xl text-emerald-400 block">0 Days</span>
                  <span className="font-mono text-[11px] text-muted">Immediate Notice</span>
                </div>
              </div>
            </div>

            {/* Academic & Certification Credentials */}
            <div className="space-y-6 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted uppercase tracking-widest block">
                  Academic & Certified Foundation
                </span>
                <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credentials</span>
                </span>
              </div>

              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#0b0e17] border border-white/[0.08] hover:border-accent/40 transition-colors space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-accent">
                      <span className="flex items-center gap-1.5">
                        {idx === 2 ? <Award className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                        <span>{edu.period}</span>
                      </span>
                      <span className="text-muted group-hover:text-light transition-colors">Credential</span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-light group-hover:text-accent transition-colors">
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
      </div>
    </section>
  );
}
