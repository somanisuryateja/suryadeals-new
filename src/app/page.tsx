'use client';

import React, { useState } from 'react';
import { 
  Terminal, 
  Zap, 
  Video, 
  Cloud, 
  Layers, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  Copy, 
  Check, 
  Server, 
  Database, 
  Cpu, 
  Globe, 
  ArrowUpRight,
  ShieldCheck,
  Code2
} from 'lucide-react';

export default function PortfolioPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'backend' | 'frontend' | 'realtime' | 'database'>('all');
  const [activeBenchmark, setActiveBenchmark] = useState<number>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('surya76755416@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const benchmarks = [
    {
      id: 'db',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: '40ms MongoDB Optimization',
      tag: '96% Latency Slash',
      stat: '1,000ms ➔ 40ms',
      badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
      summary: 'Eliminated peak-hour learner dashboard API timeouts by transforming unindexed collection scans into compound index queries.',
      before: '1,000ms+ full-collection scan during peak hours causing Node event loop stalls and timeouts.',
      after: '40ms execution time, query response normalized across 500+ daily concurrent learners.',
      implementation: [
        'Profiled queries using MongoDB explain("executionStats") to pinpoint document-scanning bottlenecks',
        'Constructed targeted compound indexes aligning precisely with multi-tenant filter patterns',
        'Streamlined multi-stage aggregation pipelines and projected only essential projection keys'
      ]
    },
    {
      id: 'webrtc',
      icon: <Video className="w-5 h-5 text-[#00F2FE]" />,
      title: 'Sub-650ms WebRTC Media Pipeline',
      tag: 'Ultra-Low Latency',
      stat: '~650ms Glass-to-Glass',
      badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
      summary: 'Designed low-latency real-time video screening rooms for AI candidate evaluation with zero conversational lag.',
      before: 'Laggy screening sessions (>1.8s latency) causing unnatural applicant interview flow.',
      after: '~650ms glass-to-glass latency with smooth sub-second peer handshakes.',
      implementation: [
        'Implemented LiveKit WebRTC client-server topologies with dynamic room participant state',
        'Engineered adaptive bitrate streaming with graceful degradation on low-bandwidth networks',
        'Decoupled session signals using real-time WebSockets to ensure resilient media reconnections'
      ]
    },
    {
      id: 's3',
      icon: <Cloud className="w-5 h-5 text-indigo-400" />,
      title: 'AWS S3 Presigned URL Architecture',
      tag: 'Zero-RAM Lock',
      stat: '20s ➔ <1s Wait Time',
      badgeColor: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10',
      summary: 'Bypassed Node API servers for multimedia uploads, liberating 100% of event loop memory under heavy traffic.',
      before: 'Multipart payloads passing through Node.js API consumed 80%+ RAM and choked concurrent endpoints.',
      after: 'Instantaneous pre-signed authorization; clients stream directly to AWS S3 buckets.',
      implementation: [
        'Re-architected upload lifecycle using AWS SDK v3 short-lived presigned PUT URLs',
        'Delegated checksum validation and storage directly to Amazon S3 bucket policies',
        'Eliminated memory leak vectors and eliminated multipart buffer allocations on the backend'
      ]
    },
    {
      id: 'microservices',
      icon: <Layers className="w-5 h-5 text-[#8A2BE2]" />,
      title: '156+ Distributed Microservices',
      tag: 'High Concurrency',
      stat: '5 Live Systems · 500+ DAU',
      badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
      summary: 'Architected and shipped modular RESTful & WebSocket microservices across 5 enterprise production platforms.',
      before: 'Fragmented monorepos with cross-domain coupling and difficult deployment synchronizations.',
      after: 'Decoupled services serving role-based workflows, payments, and analytics at 99.9% uptime.',
      implementation: [
        'Standardized JWT authentication, role guards, and Redis caching layers across all microservices',
        'Designed idempotent webhook handlers for Razorpay payment gateways and automated licensing',
        'Implemented centralized Winston logger streams and error handling middlewares'
      ]
    }
  ];

  const projects = [
    {
      title: 'Corporate Relations & AI Candidate Screening Platform',
      url: 'https://corporaterelations.codegnan.ai/',
      badge: 'Live Production',
      role: 'Core Backend & Real-time Architect',
      description: 'End-to-end recruitment management system connecting 500+ corporate recruiters with qualified candidates. Features live candidate screening, eligibility scoring, and real-time interview workflows.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'LiveKit WebRTC', 'WebSockets', 'JWT'],
      highlights: [
        'Built WebRTC audio/video screening rooms running with ~650ms latency',
        'Engineered dynamic candidate eligibility meter calculating matching scores in real-time',
        'Designed role-based access control (RBAC) handling Admins, Corporate Recruiters, and Candidates'
      ]
    },
    {
      title: 'Codegnan Edge LMS & Learning Ecosystem',
      url: 'https://codegnanedge.com/',
      badge: 'Live Production',
      role: 'Full Stack Systems Engineer',
      description: 'Flagship learning ecosystem serving 500+ daily concurrent learners with interactive coursework, cohort progress tracking, and payment processing.',
      stack: ['Next.js', 'Express', 'MongoDB', 'Redis', 'AWS EC2', 'Razorpay'],
      highlights: [
        'Optimized MongoDB analytics aggregation pipelines from 1,000ms+ down to 40ms',
        'Built automated Razorpay checkout workflows with robust webhook reconciliation',
        'Integrated Redis caching for high-frequency learner dashboard metrics'
      ]
    },
    {
      title: 'Enterprise Learning Academy',
      url: 'https://academy.codegnanedge.com/',
      badge: 'Live Production',
      role: 'Full Stack Engineer',
      description: 'Scalable educational academy with protected video distribution, cohort performance tracking, and automated certification issuance.',
      stack: ['React', 'Node.js', 'AWS S3', 'REST APIs', 'PDF Engine'],
      highlights: [
        'Designed direct AWS S3 presigned URL architecture for seamless assignment submission',
        'Automated verifiable student graduation certificates with unique cryptographic verification IDs',
        'Implemented continuous engagement metrics tracking student lecture completion rates'
      ]
    },
    {
      title: 'Open-Source NLP Job Match & ATS Engine',
      url: 'https://github.com/somanisuryateja',
      badge: 'Open Source',
      role: 'Author & Lead Maintainer',
      description: 'Specialized modular Python automation engine reverse-engineering enterprise ATS schemas (Workday, SuccessFactors, Oracle CX) using the Adapter Pattern.',
      stack: ['Python', 'Playwright', 'BeautifulSoup4', 'NLP', 'Adapter Pattern'],
      highlights: [
        'Engineered dynamic schema adapters mapping unstructured resumes against ATS field trees',
        'Built resilient automated verification passes bypassing dynamic DOM layout changes',
        'Open-source repository providing reusable parsers for enterprise job applications'
      ]
    }
  ];

  const skillCategories = [
    {
      id: 'backend',
      label: 'Backend & Systems',
      skills: ['Node.js', 'Express.js', 'TypeScript', 'RESTful Microservices', 'Event Loop Optimization', 'JWT & RBAC Security', 'Winston Logging', 'Python']
    },
    {
      id: 'frontend',
      label: 'Frontend Architecture',
      skills: ['React.js', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'State Management (Zustand/Redux)', 'Responsive Design', 'Web Performance & Vitals']
    },
    {
      id: 'realtime',
      label: 'Real-Time & Cloud',
      skills: ['LiveKit WebRTC', 'WebSockets', 'AWS S3 (Presigned URLs)', 'AWS EC2', 'Nginx Reverse Proxy', 'Docker Basics', 'Linux Server Administration']
    },
    {
      id: 'database',
      label: 'Databases & Performance',
      skills: ['MongoDB (Aggregation & Profiling)', 'PostgreSQL', 'Redis In-Memory Caching', 'Compound Indexing', 'Schema Design', 'Mongoose ORM']
    }
  ];

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 antialiased selection:bg-purple-600 selection:text-white">
      {/* Top Notification Bar: Status Notice */}
      <div className="bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-emerald-950/90 border-b border-emerald-500/30 py-2.5 px-4 text-center text-xs md:text-sm sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-emerald-300">Officially Relieved on Sep 26, 2026</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-200 font-medium">0 Days Notice Period — Immediate Joiner</span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-emerald-400/90 font-mono text-xs hidden sm:inline">Open to Global Remote & In-Office (Hyderabad)</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-[#1E2235]/60 bg-[#090A0F]/80 backdrop-blur-xl sticky top-9 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
              ST
            </div>
            <div>
              <span className="font-bold text-slate-100 tracking-tight text-base block leading-tight">Surya Teja</span>
              <span className="text-[11px] font-mono text-[#00F2FE] tracking-wide">suryadeals.com</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-wider font-medium text-slate-400">
            <a href="#benchmarks" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#production" className="hover:text-cyan-400 transition-colors">Live Systems</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Tech Matrix</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="/Somani_Abdulla_Surya_Teja_Resume.pdf" 
              download
              className="px-3.5 py-1.5 rounded-lg border border-[#1E2235] text-xs font-medium text-slate-300 hover:text-white hover:border-slate-500 bg-[#0F111A] transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            <a 
              href="#contact" 
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-xs font-semibold text-white shadow-md shadow-purple-600/20 transition-all"
            >
              Hire Surya
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-[#1E2235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>1.9+ Years High-Scale Production Engineering @ Codegnan</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Full Stack Systems & <br className="hidden sm:inline" />
                <span className="gradient-text-cyan">Applied AI Engineer</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
                Hi, I’m <strong className="text-slate-100 font-semibold">Somani Abdulla Surya Teja</strong>. I architect resilient backend microservices, sub-second WebRTC streaming pipelines, and high-performance database infrastructures that drive verified production platforms.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start pt-2">
                <a 
                  href="#production" 
                  className="px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
                >
                  <span>Explore Live Platforms</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button 
                  onClick={handleCopyEmail}
                  className="px-5 py-3 rounded-xl border border-[#1E2235] bg-[#0F111A] hover:border-purple-500/50 hover:bg-[#141724] text-slate-300 font-medium text-sm transition-all flex items-center gap-2"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <a 
                    href="https://github.com/somanisuryateja" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 rounded-xl border border-[#1E2235] bg-[#0F111A] text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/somanisuryateja" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 rounded-xl border border-[#1E2235] bg-[#0F111A] text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Metrics Quick Highlights Card */}
            <div className="lg:col-span-4">
              <div className="glass-panel p-6 rounded-2xl space-y-4 text-left shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-[#1E2235]">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Production Telemetry</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono font-medium">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-3.5 font-mono">
                  <div className="bg-[#090A0F]/60 p-3 rounded-lg border border-[#1E2235]/60">
                    <div className="text-[11px] text-slate-400">Database Optimization</div>
                    <div className="text-lg font-bold text-amber-400">40ms <span className="text-xs font-normal text-slate-400">(-96% latency)</span></div>
                  </div>

                  <div className="bg-[#090A0F]/60 p-3 rounded-lg border border-[#1E2235]/60">
                    <div className="text-[11px] text-slate-400">LiveKit WebRTC Glass-to-Glass</div>
                    <div className="text-lg font-bold text-[#00F2FE]">~650ms <span className="text-xs font-normal text-slate-400">(streaming latency)</span></div>
                  </div>

                  <div className="bg-[#090A0F]/60 p-3 rounded-lg border border-[#1E2235]/60">
                    <div className="text-[11px] text-slate-400">Microservices Shipped</div>
                    <div className="text-lg font-bold text-purple-400">156+ Endpoints <span className="text-xs font-normal text-slate-400">(5 platforms)</span></div>
                  </div>

                  <div className="bg-[#090A0F]/60 p-3 rounded-lg border border-[#1E2235]/60">
                    <div className="text-[11px] text-slate-400">Concurrent Daily Learners</div>
                    <div className="text-lg font-bold text-emerald-400">500+ DAU <span className="text-xs font-normal text-slate-400">(Codegnan Edge)</span></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: SYSTEM ARCHITECTURE BENCHMARKS */}
      <section id="benchmarks" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1E2235]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Real Production Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            System Architecture Benchmarks
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Quantifiable engineering outcomes achieved in production environments with heavy concurrent traffic.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {benchmarks.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setActiveBenchmark(idx)}
              className={`p-4 rounded-xl text-left transition-all border ${
                activeBenchmark === idx 
                  ? 'bg-[#141724] border-purple-500/80 shadow-lg shadow-purple-500/10' 
                  : 'bg-[#0F111A] border-[#1E2235] hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                {b.icon}
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${b.badgeColor}`}>
                  {b.tag}
                </span>
              </div>
              <div className="font-semibold text-slate-200 text-sm">{b.title}</div>
              <div className="text-xs font-mono text-cyan-400 mt-1">{b.stat}</div>
            </button>
          ))}
        </div>

        {/* Detailed Benchmark Deep-Dive Panel */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1E2235]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Case Study #{activeBenchmark + 1}
              </span>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                {benchmarks[activeBenchmark].title}
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl">
                {benchmarks[activeBenchmark].summary}
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#090A0F] border border-[#1E2235] text-right font-mono">
              <div className="text-xs text-slate-400">Benchmark Result</div>
              <div className="text-lg font-bold text-emerald-400">{benchmarks[activeBenchmark].stat}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20">
                <span className="text-xs font-semibold uppercase text-rose-400 tracking-wider block mb-1">
                  The Production Bottleneck
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {benchmarks[activeBenchmark].before}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <span className="text-xs font-semibold uppercase text-emerald-400 tracking-wider block mb-1">
                  The Architected Resolution
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {benchmarks[activeBenchmark].after}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#090A0F] border border-[#1E2235] space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                Technical Implementation Steps
              </span>
              <ul className="space-y-2.5">
                {benchmarks[activeBenchmark].implementation.map((step, sIdx) => (
                  <li key={sIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1 font-mono text-xs">0{sIdx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LIVE PRODUCTION PLATFORMS */}
      <section id="production" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1E2235]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Deployed Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Production Platforms
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Verified enterprise applications in daily production serving hundreds of enterprise students and recruiters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, pIdx) => (
            <div 
              key={pIdx} 
              className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    {proj.badge}
                  </span>
                  <a 
                    href={proj.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Key Deliverables:</div>
                  <ul className="space-y-1.5">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1E2235]">
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#090A0F] border border-[#1E2235] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SKILLS MATRIX */}
      <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1E2235]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-3">
            <Database className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Skills Matrix
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Categorized production technologies mastered over 1.9+ years of shipping enterprise systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
              activeCategory === 'all' 
                ? 'bg-purple-600 border-purple-500 text-white font-semibold' 
                : 'bg-[#0F111A] border-[#1E2235] text-slate-400 hover:text-white'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                activeCategory === cat.id 
                  ? 'bg-purple-600 border-purple-500 text-white font-semibold' 
                  : 'bg-[#0F111A] border-[#1E2235] text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories
            .filter((cat) => activeCategory === 'all' || activeCategory === cat.id)
            .map((cat, cIdx) => (
              <div key={cIdx} className="glass-panel p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-white text-base flex items-center gap-2 pb-2 border-b border-[#1E2235]">
                  <Server className="w-4 h-4 text-cyan-400" />
                  <span>{cat.label}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#090A0F] border border-[#1E2235] text-slate-300 font-medium hover:border-purple-500/50 hover:text-white transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* SECTION 4: PRODUCTION EXPERIENCE */}
      <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1E2235]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            1 Year 9 Months of intensive production engineering with verifiable relieving credentials.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 rounded-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#1E2235]">
              <div>
                <h3 className="text-2xl font-bold text-white">Full Stack Software Development Engineer</h3>
                <div className="text-cyan-400 font-mono text-sm mt-0.5">Codegnan IT Solutions · Hyderabad, India</div>
              </div>
              <div className="text-left sm:text-right font-mono">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  Dec 2024 – Sep 2026 (1.9+ Years)
                </span>
                <div className="text-xs text-slate-400 mt-1">Officially Relieved: Sep 26, 2026</div>
              </div>
            </div>

            <div className="space-y-4 mt-6 text-sm text-slate-300">
              <p className="leading-relaxed">
                Spearheaded the development and maintenance of high-scale EdTech and recruitment SaaS platforms serving over 500+ daily concurrent learners and enterprise corporate partners.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                  <span><strong>Microservices & APIs:</strong> Built and shipped 156+ secure RESTful endpoints and WebSocket listeners across 5 production web systems with role-based JWT authentication and rate limiting.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></div>
                  <span><strong>Database Optimization:</strong> Profiled and optimized heavy MongoDB aggregation pipelines, slashing learner dashboard query response from 1,000ms+ to 40ms (-96% latency reduction).</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                  <span><strong>Real-Time WebRTC Media:</strong> Implemented LiveKit WebRTC screening rooms for AI-assisted interviews, achieving sub-650ms glass-to-glass latency with adaptive bitrate fallbacks.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                  <span><strong>Cloud File Pipelines:</strong> Re-architected multimedia submission pipelines utilizing AWS S3 Presigned URLs, slashing server upload overhead from 20 seconds to sub-second authorization.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT & HIRE CTA */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-purple-500/40 text-center">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium">
              🟢 Ready For Immediate Onboarding (0 Days Notice)
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Engineering Velocity?
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Available immediately for Full-Stack / SDE roles (₹12L–₹35L+ LPA) worldwide remote or in Hyderabad. Let’s talk systems, scale, and high-impact shipping.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              <a 
                href="mailto:surya76755416@gmail.com" 
                className="p-4 rounded-xl bg-[#090A0F] border border-[#1E2235] hover:border-cyan-500/50 transition-all flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Email</div>
                  <div className="text-sm font-semibold text-white">surya76755416@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+917675050247" 
                className="p-4 rounded-xl bg-[#090A0F] border border-[#1E2235] hover:border-purple-500/50 transition-all flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Phone</div>
                  <div className="text-sm font-semibold text-white">+91 7675050247</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/somanisuryateja" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 rounded-xl bg-[#090A0F] border border-[#1E2235] hover:border-blue-500/50 transition-all flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-white">in/somanisuryateja</div>
                </div>
              </a>

              <a 
                href="https://github.com/somanisuryateja" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 rounded-xl bg-[#090A0F] border border-[#1E2235] hover:border-slate-500 transition-all flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-slate-500/10 text-slate-300">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">GitHub Profile</div>
                  <div className="text-sm font-semibold text-white">somanisuryateja</div>
                </div>
              </a>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/Somani_Abdulla_Surya_Teja_Resume.pdf" 
                download
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Verified Resume</span>
              </a>

              <button 
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#1E2235] bg-[#090A0F] hover:bg-[#141724] text-slate-300 text-sm font-medium transition-all flex items-center justify-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1E2235] py-8 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Somani Abdulla Surya Teja. Hosted on Oracle Cloud Nginx at <span className="text-cyan-400">suryadeals.com</span>.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-slate-400">All Systems Operational · 99.9% Uptime</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
