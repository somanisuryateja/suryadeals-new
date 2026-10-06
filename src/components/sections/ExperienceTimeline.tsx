'use client';

import React, { useRef, useEffect } from 'react';
import { experienceData } from '@/data/content';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { ShieldCheck, Calendar, MapPin } from 'lucide-react';

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline laser line that draws itself on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
        }
      );

      // Stagger in experience bullets
      const bullets = gsap.utils.toArray('.exp-bullet');
      bullets.forEach((bullet: any) => {
        gsap.fromTo(
          bullet,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bullet,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-24 bg-[#0a0a0a] border-b border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
        <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
          05 // Career Record & Relieving Proof
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-light tracking-tight mb-16">
          Production Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative pl-8 sm:pl-12">
          {/* Laser Line that draws itself */}
          <div
            ref={lineRef}
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-cyan-400 to-emerald-400 origin-top"
          />

          {experienceData.map((exp, idx) => (
            <div key={idx} className="space-y-6">
              {/* Checkpoint Dot */}
              <div className="absolute -left-[7px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-accent flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              {/* Header Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0d111a] border border-white/[0.08] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-light">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-mono text-accent mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-xs text-left sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5 text-light">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5 text-muted">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Relieved Status Banner */}
                {exp.status && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-xs font-mono text-emerald-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{exp.status}</span>
                  </div>
                )}

                {/* Highlights */}
                <div className="pt-2 space-y-3">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider block">
                    Engineering Impact & Deliverables:
                  </span>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="exp-bullet text-xs sm:text-sm text-slate-300 flex items-start gap-3"
                      >
                        <span className="text-accent mt-1 font-mono text-xs">0{hIdx + 1}.</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
