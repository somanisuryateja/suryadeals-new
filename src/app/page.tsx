'use client';

import React from 'react';
import Preloader from '@/components/ui/Preloader';
import CustomCursor from '@/components/ui/CustomCursor';
import Hero from '@/components/sections/Hero';
import IntroStatement from '@/components/sections/IntroStatement';
import NumbersPinned from '@/components/sections/NumbersPinned';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import AboutEducation from '@/components/sections/AboutEducation';
import ContactFooter from '@/components/sections/ContactFooter';

export default function Home() {
  return (
    <>
      {/* Dennis Snellenberg Multilingual Preloader */}
      <Preloader />

      {/* Smooth Magnetic Cursor */}
      <CustomCursor />

      {/* 1. Hero with Apple iPhone scale-scrub and circular badge */}
      <Hero />

      {/* 2. Intro Statement with word-by-word scroll-scrubbed highlight */}
      <IntroStatement />

      {/* 3. Numbers full-screen pinned count-up slides */}
      <NumbersPinned />

      {/* 4. Projects (Part A: List with floating velocity card + Part B: Horizontal showcase) */}
      <ProjectsSection />

      {/* 5. Skills kinetic bi-directional marquees */}
      <SkillsSection />

      {/* 6. Experience vertical timeline with drawing laser line */}
      <ExperienceTimeline />

      {/* 7. About and Education credentials */}
      <AboutEducation />

      {/* 8. Contact + Parallax Footer with live Hyderabad IST clock */}
      <ContactFooter />
    </>
  );
}
