'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  Code2,
  Sparkles,
  Play,
  Activity,
  Radio,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function CinematicPortfolio() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'backend' | 'frontend' | 'realtime' | 'database'>('all');
  const [activeBenchmark, setActiveBenchmark] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isSimulatingLatency, setIsSimulatingLatency] = useState(false);
  const [simulatedTime, setSimulatedTime] = useState(40);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Copy email handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('surya76755416@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Run interactive benchmark test
  const triggerBenchmarkSimulation = () => {
    setIsSimulatingLatency(true);
    setSimulatedTime(1024);
    setTimeout(() => setSimulatedTime(480), 300);
    setTimeout(() => setSimulatedTime(120), 600);
    setTimeout(() => {
      setSimulatedTime(40);
      setIsSimulatingLatency(false);
    }, 900);
  };

  // Track mouse coordinates for cinematic spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cinematic Particle Constellation Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '#00F2FE' : '#8A2BE2'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(138, 43, 226, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const benchmarks = [
    {
      id: 'db',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: '40ms MongoDB Query Optimization',
      tag: '96% Latency Slash',
      badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
      headline: 'From 1,000ms+ Collection Scans to 40ms Targeted Execution',
      summary: 'Student analytics queries timed out during peak morning traffic across 500+ active learners. Profiled execution stats, rebuilt schemas with compound indexes matching multi-tenant query filters, and tuned aggregation pipeline projections.',
      beforeMetric: '1,000ms+',
      beforeLabel: 'Unindexed Document Scan',
      afterMetric: '40ms',
      afterLabel: 'Targeted Index Seek',
      improvement: '-96% Latency',
      codeSnippet: `// Execution plan transformation:
db.student_progress.createIndex({ 
  tenant_id: 1, 
  course_id: 1, 
  last_activity: -1 
}, { background: true });

// Multi-stage pipeline projection optimization:
$project: { _id: 1, user_id: 1, completion_pct: 1 }`,
      bulletPoints: [
        'Isolated full-collection scans using explain("executionStats") profiler',
        'Engineered compound index ordering based on equality, sort, and range rules',
        'Cut event loop blockage to zero, eliminating dashboard gateway timeouts'
      ]
    },
    {
      id: 'webrtc',
      icon: <Video className="w-5 h-5 text-[#00F2FE]" />,
      title: 'Sub-650ms LiveKit WebRTC Pipeline',
      tag: 'Glass-to-Glass',
      badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
      headline: 'Ultra-Low Latency Interactive Screening Rooms',
      summary: 'Conversational delays (>1.8s) in candidate video screening felt artificial and broke interview rhythm. Replaced standard streaming architectures with LiveKit WebRTC peer topologies, dynamic bitrates, and sub-second participant handshakes.',
      beforeMetric: '~1,800ms',
      beforeLabel: 'Standard HTTP Video Delay',
      afterMetric: '~650ms',
      afterLabel: 'Sub-Second WebRTC Stream',
      improvement: '-64% Delay',
      codeSnippet: `// LiveKit adaptive stream room handshake:
const room = new Room({
  adaptiveStream: true,
  dynacast: true,
  videoCaptureDefaults: { resolution: VideoPresets.h720 }
});
await room.connect(wsUrl, token);`,
      bulletPoints: [
        'Dynacast multi-bitrate simulcast delivering smooth 60fps video on 4G networks',
        'Sub-second participant token authorization via Node JWT room gates',
        'Zero-packet-drop audio channel prioritization during candidate speech'
      ]
    },
    {
      id: 's3',
      icon: <Cloud className="w-5 h-5 text-indigo-400" />,
      title: 'Direct S3 Presigned URL Architecture',
      tag: 'Zero Server RAM Lock',
      badgeColor: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10',
      headline: 'Decoupling File Ingestion from the Node.js Event Loop',
      summary: 'Student assignment submissions passed binary payloads through the Node API, locking 80%+ memory and creating thread blockage. Re-architected ingestion so backend authorizes uploads in 12ms and clients stream directly to S3 buckets.',
      beforeMetric: '20.0s',
      beforeLabel: 'Server Multipart Buffering',
      afterMetric: '< 0.8s',
      afterLabel: 'Direct Cloud Authorization',
      improvement: '100% RAM Freed',
      codeSnippet: `// Millisecond presigned authorization:
const command = new PutObjectCommand({
  Bucket: process.env.AWS_S3_BUCKET,
  Key: \`submissions/\${tenantId}/\${submissionId}.pdf\`,
  ContentType: 'application/pdf'
});
const presignedUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 });`,
      bulletPoints: [
        'Node memory utilization normalized under concurrent 100+ student uploads',
        'Eliminated server timeout vulnerabilities on high-latency client connections',
        'Automated S3 bucket lifecycle policies for immutable assignment storage'
      ]
    },
    {
      id: 'microservices',
      icon: <Layers className="w-5 h-5 text-[#8A2BE2]" />,
      title: '156+ Distributed Microservices',
      tag: '99.9% Production Uptime',
      badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
      headline: 'Architecting Scalable Microservices Across 5 Platforms',
      summary: 'Designed, integrated, and maintained 156+ RESTful and WebSocket endpoints handling auth, course tracking, student placement eligibility, payment webhooks, and analytics across 5 enterprise SaaS applications.',
      beforeMetric: 'Monolithic',
      beforeLabel: 'Coupled Deployment Vectors',
      afterMetric: '156+ Services',
      afterLabel: 'Decoupled Domain APIs',
      improvement: '99.9% Uptime',
      codeSnippet: `// Centralized middleware security & caching layer:
router.use(verifyJWT);
router.use(enforceRBAC(['admin', 'recruiter']));
router.use(rateLimiter({ windowMs: 60000, max: 200 }));
router.get('/analytics', redisCache(300), getPipelineMetrics);`,
      bulletPoints: [
        'Idempotent webhook reconciliation processing Razorpay learner transactions',
        'Unified JWT token authentication with httpOnly refresh token cycling',
        'Structured logging and error metrics via centralized Winston log streams'
      ]
    }
  ];

  const projects = [
    {
      title: 'Corporate Relations & AI Candidate Screening Platform',
      url: 'https://corporaterelations.codegnan.ai/',
      badge: 'Live Production',
      role: 'Core Backend & Real-time Architect',
      description: 'End-to-end recruitment management engine connecting 500+ corporate recruiters with job-ready tech graduates. Features live WebRTC candidate screening, dynamic eligibility scoring, and role-based placement tracking.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'LiveKit WebRTC', 'WebSockets', 'JWT'],
      highlights: [
        'Built WebRTC audio/video screening rooms running with ~650ms latency',
        'Engineered dynamic candidate eligibility reach-meter calculating match scores in real-time',
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
      skills: [
        { name: 'Node.js & Express.js', level: 'Production Lead', highlight: 'High-concurrency microservices' },
        { name: 'TypeScript', level: 'Advanced', highlight: 'End-to-end type safety' },
        { name: 'REST & WebSocket APIs', level: '156+ Endpoints', highlight: 'Real-time bi-directional events' },
        { name: 'Event Loop Optimization', level: 'Architecture', highlight: 'Zero thread blockage' },
        { name: 'JWT & RBAC Security', level: 'Enterprise', highlight: 'Role guards & refresh cookies' },
        { name: 'Python & Scripting', level: 'Advanced', highlight: 'Automation & NLP parsers' }
      ]
    },
    {
      id: 'frontend',
      label: 'Frontend Architecture',
      skills: [
        { name: 'React.js & Next.js (App Router)', level: 'Production Lead', highlight: 'Modern component systems' },
        { name: 'Tailwind CSS & Glassmorphism', level: 'Expert', highlight: 'Aesthetic design systems' },
        { name: 'State Management (Zustand/Redux)', level: 'Advanced', highlight: 'Predictable state stores' },
        { name: 'Web Performance & Vitals', level: 'Optimization', highlight: 'Sub-second LCP & FID' },
        { name: 'Responsive Layouts', level: 'Pixel-Perfect', highlight: 'Mobile-first fluid interfaces' }
      ]
    },
    {
      id: 'realtime',
      label: 'Real-Time & Cloud DevOps',
      skills: [
        { name: 'LiveKit WebRTC', level: 'Sub-650ms', highlight: 'Adaptive media streaming' },
        { name: 'AWS S3 (Presigned URLs)', level: 'Cloud Architect', highlight: 'Zero RAM ingestion pipeline' },
        { name: 'AWS EC2 & Linux Admin', level: 'Production', highlight: 'Ubuntu server operations' },
        { name: 'Nginx Reverse Proxy & SSL', level: 'Production', highlight: 'Custom routing & Let\'s Encrypt' },
        { name: 'GitHub Actions CI/CD', level: 'Automated', highlight: 'Zero-downtime SSH deployments' }
      ]
    },
    {
      id: 'database',
      label: 'Databases & Performance',
      skills: [
        { name: 'MongoDB Aggregations', level: '40ms Execution', highlight: 'explain("executionStats") profiling' },
        { name: 'Compound Indexing', level: 'Mastery', highlight: 'Multi-tenant query optimization' },
        { name: 'Redis In-Memory Caching', level: 'Sub-millisecond', highlight: 'High-frequency telemetry' },
        { name: 'PostgreSQL', level: 'Solid', highlight: 'Relational schemas & joins' },
        { name: 'Mongoose ODM', level: 'Advanced', highlight: 'Schema hooks & validation' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#05070E] text-slate-100 antialiased selection:bg-purple-600 selection:text-white relative overflow-hidden">
      
      {/* Interactive Background Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-0 opacity-45"
      />

      {/* Cyber Grid Background Overlays */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-30" />
      
      {/* Animated Aurora Glow Orbs */}
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none aurora-orb-1 z-0" />
      <div className="fixed top-1/2 -right-40 w-[650px] h-[650px] bg-cyan-500/12 rounded-full blur-[150px] pointer-events-none aurora-orb-2 z-0" />
      <div className="fixed -bottom-40 left-1/3 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="pointer-events-none fixed z-10 w-[450px] h-[450px] rounded-full blur-[100px] opacity-20 transition-transform duration-75 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(0,242,254,0.3) 0%, rgba(138,43,226,0.2) 50%, transparent 70%)',
          transform: `translate(${mousePos.x - 225}px, ${mousePos.y - 225}px)`
        }}
      />

      {/* TOP NOTIFICATION BAR: IMMEDIATE JOINER HUD */}
      <div className="relative z-50 bg-gradient-to-r from-emerald-950/90 via-[#0A1612]/95 to-emerald-950/90 border-b border-emerald-500/40 py-2.5 px-4 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap text-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-sm shadow-emerald-400"></span>
            </span>
            <span className="font-semibold text-emerald-300 tracking-wide uppercase font-mono">
              Officially Relieved on Sep 26, 2026
            </span>
            <span className="text-emerald-500/60 hidden sm:inline">•</span>
            <span className="text-slate-200 font-medium hidden sm:inline">
              0 Days Notice Period · Immediate Joiner
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
              Available Worldwide
            </span>
            <span className="text-slate-400 hidden md:inline">
              Remote / In-Office (Hyderabad)
            </span>
          </div>
        </div>
      </div>

      {/* STICKY GLASS NAVIGATION BAR */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#05070E]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo with Animated Ambient Shimmer */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-600 to-emerald-400 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
                <div className="w-full h-full bg-[#090C16] rounded-xl flex items-center justify-center font-black text-sm tracking-wider text-white">
                  ST
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#090C16] animate-pulse" />
            </div>

            <div>
              <div className="font-bold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                Surya Teja
              </div>
              <div className="text-[11px] font-mono text-cyan-400/90 tracking-wider flex items-center gap-1">
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>suryadeals.com</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono uppercase tracking-wider text-slate-400">
            <a href="#benchmarks" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Architecture</span>
            </a>
            <a href="#production" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span>Live Systems</span>
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tech Matrix</span>
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>Career Record</span>
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Radio className="w-3.5 h-3.5 text-pink-400" />
              <span>Hire Surya</span>
            </a>
          </nav>

          {/* Direct CTA Buttons */}
          <div className="flex items-center gap-3">
            <a 
              href="/Somani_Abdulla_Surya_Teja_Resume.pdf" 
              download
              className="px-3.5 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-400/60 bg-white/[0.04] backdrop-blur-md transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Resume</span>
            </a>

            <a 
              href="#contact" 
              className="relative group overflow-hidden px-4 py-1.5 rounded-lg text-xs font-semibold text-white shadow-lg shadow-purple-600/30 transition-all duration-300"
            >
              <span className="absolute inset-0 shimmer-border rounded-lg" />
              <span className="absolute inset-[1px] bg-[#090C16] group-hover:bg-[#101424] rounded-lg transition-colors" />
              <span className="relative flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Immediate Hire</span>
              </span>
            </a>
          </div>

        </div>
      </header>

      {/* CINEMATIC HERO SECTION */}
      <section className="relative z-10 pt-20 pb-24 md:pt-28 md:pb-36 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-7 text-center lg:text-left">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-wide backdrop-blur-md shadow-inner">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>1.9+ Years High-Scale Production Engineering @ Codegnan</span>
              </div>

              {/* Cinematic Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                  Somani Abdulla <br />
                  <span className="gradient-text-cyan">Surya Teja</span>
                </h1>
                <div className="text-xl sm:text-2xl font-mono text-purple-300/90 font-medium flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-cyan-400">❯</span>
                  <span>Full Stack Systems & Applied AI Engineer</span>
                </div>
              </div>

              {/* Pitch Statement */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                I build production systems that don’t flinch under load. Specializing in high-concurrency Node.js architectures, sub-650ms LiveKit WebRTC streaming pipelines, and deep MongoDB query profiling that slashed database latency by 96%.
              </p>

              {/* Interactive CTAs Row */}
              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-2">
                <a 
                  href="#production" 
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-300 text-slate-950 font-bold text-sm hover:opacity-95 transition-all flex items-center gap-2 shadow-xl shadow-cyan-500/20"
                >
                  <span>Explore Live Platforms</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </a>

                <button 
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 rounded-xl border border-white/10 bg-[#0E1220]/80 hover:border-cyan-400/50 hover:bg-[#141A2D] text-slate-200 font-mono text-xs transition-all flex items-center gap-2 backdrop-blur-md shadow-md"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">surya76755416@gmail.com Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Direct Email</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <a 
                    href="https://github.com/somanisuryateja" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3.5 rounded-xl border border-white/10 bg-[#0E1220]/80 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all backdrop-blur-md"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/somanisuryateja" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3.5 rounded-xl border border-white/10 bg-[#0E1220]/80 text-slate-300 hover:text-white hover:border-purple-400/50 transition-all backdrop-blur-md"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Telemetry Column (HUD Console) */}
            <div className="lg:col-span-4">
              <div className="glass-panel p-6 sm:p-7 rounded-2xl space-y-4 shadow-2xl relative border border-white/[0.1] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                    <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="uppercase tracking-wider">Live System Metrics</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-bold">
                    PRODUCTION
                  </span>
                </div>

                <div className="space-y-3 font-mono">
                  
                  {/* Metric 1 */}
                  <div className="p-3.5 rounded-xl bg-[#070A14]/80 border border-white/[0.06] hover:border-amber-400/40 transition-colors">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Database Query Latency</span>
                      <span className="text-amber-400 font-semibold">-96% Slashed</span>
                    </div>
                    <div className="text-2xl font-black text-amber-400">
                      40ms <span className="text-xs font-normal text-slate-400 font-sans">(down from 1,000ms+)</span>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3.5 rounded-xl bg-[#070A14]/80 border border-white/[0.06] hover:border-cyan-400/40 transition-colors">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>LiveKit WebRTC Stream</span>
                      <span className="text-cyan-400 font-semibold">Sub-Second</span>
                    </div>
                    <div className="text-2xl font-black text-[#00F2FE]">
                      ~650ms <span className="text-xs font-normal text-slate-400 font-sans">(Glass-to-Glass)</span>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-3.5 rounded-xl bg-[#070A14]/80 border border-white/[0.06] hover:border-purple-400/40 transition-colors">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Microservices Shipped</span>
                      <span className="text-purple-400 font-semibold">5 Platforms</span>
                    </div>
                    <div className="text-2xl font-black text-purple-400">
                      156+ <span className="text-xs font-normal text-slate-400 font-sans">Active Endpoints</span>
                    </div>
                  </div>

                  {/* Metric 4 */}
                  <div className="p-3.5 rounded-xl bg-[#070A14]/80 border border-white/[0.06] hover:border-emerald-400/40 transition-colors">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Concurrent Daily Learners</span>
                      <span className="text-emerald-400 font-semibold">Codegnan Edge</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-400">
                      500+ DAU <span className="text-xs font-normal text-slate-400 font-sans">Peak Concurrency</span>
                    </div>
                  </div>

                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-400 text-center flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Telemetry Verified on Live Production Servers</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE SYSTEM ARCHITECTURE BENCHMARK HUD */}
      <section id="benchmarks" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Engineering Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            System Architecture Benchmarks
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Click through each benchmark to inspect before-and-after production telemetry and technical execution steps.
          </p>
        </div>

        {/* Benchmark Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {benchmarks.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setActiveBenchmark(idx)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden ${
                activeBenchmark === idx 
                  ? 'bg-[#101426] border-cyan-400/80 shadow-xl shadow-cyan-500/10' 
                  : 'bg-[#080B16]/80 border-white/[0.07] hover:border-white/20 hover:bg-[#0D1120]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-white/[0.04]">
                  {b.icon}
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${b.badgeColor}`}>
                  {b.tag}
                </span>
              </div>
              <div className="font-bold text-slate-100 text-sm leading-snug">{b.title}</div>
              <div className="text-xs font-mono text-cyan-400 mt-1 flex items-center justify-between">
                <span>{b.improvement}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeBenchmark === idx ? 'rotate-90 text-cyan-400' : 'text-slate-600'}`} />
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Benchmark Deep-Dive Console */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl relative border border-white/[0.1] shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                <span>Production Deep-Dive #0{activeBenchmark + 1}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {benchmarks[activeBenchmark].headline}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                {benchmarks[activeBenchmark].summary}
              </p>
            </div>

            {/* Interactive Benchmark Runner Button */}
            <div className="flex flex-col items-end gap-2 shrink-0">
              <button
                onClick={triggerBenchmarkSimulation}
                className="px-4 py-2 rounded-xl bg-cyan-500/15 border border-cyan-500/40 hover:bg-cyan-500/25 text-cyan-300 text-xs font-mono flex items-center gap-2 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                <span>{isSimulatingLatency ? 'Profiling Pipeline...' : 'Run Simulation'}</span>
              </button>
              <div className="text-right font-mono text-xs text-slate-400">
                Current response: <span className="font-bold text-emerald-400">{simulatedTime}ms</span>
              </div>
            </div>
          </div>

          {/* Visual Latency & Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            
            {/* Left Comparison Visualizer */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-rose-400 font-semibold tracking-wider">
                    Initial Production Bottleneck
                  </span>
                  <span className="text-rose-400 font-mono font-bold text-sm">
                    {benchmarks[activeBenchmark].beforeMetric}
                  </span>
                </div>
                <div className="text-sm text-slate-300">
                  {benchmarks[activeBenchmark].beforeLabel}
                </div>
                {/* Visual Latency Bar */}
                <div className="w-full bg-rose-950/60 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[95%] rounded-full animate-pulse" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/25 border border-emerald-500/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                    Architected Production Resolution
                  </span>
                  <span className="text-emerald-400 font-mono font-bold text-sm">
                    {benchmarks[activeBenchmark].afterMetric}
                  </span>
                </div>
                <div className="text-sm text-slate-300">
                  {benchmarks[activeBenchmark].afterLabel}
                </div>
                {/* Visual Latency Bar */}
                <div className="w-full bg-emerald-950/60 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[8%] rounded-full" />
                </div>
              </div>

              {/* Implementation Bullet Points */}
              <div className="p-5 rounded-2xl bg-[#070A14] border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Execution Deliverables</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {benchmarks[activeBenchmark].bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1 font-mono text-xs">❯</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Terminal Code Implementation */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#04060C] border border-white/[0.1] overflow-hidden shadow-2xl h-full flex flex-col">
                <div className="px-4 py-3 bg-[#080C18] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/70 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2">architecture-spec.ts</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">Production Tested</span>
                </div>

                <div className="p-5 font-mono text-xs text-slate-300 overflow-x-auto flex-1 flex items-center">
                  <pre className="text-cyan-300/90 leading-relaxed w-full">
                    <code>{benchmarks[activeBenchmark].codeSnippet}</code>
                  </pre>
                </div>

                <div className="p-3 bg-[#080C18]/60 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Engineered by Surya Teja</span>
                  <span className="text-emerald-400">Zero Degradation</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: LIVE PRODUCTION PLATFORMS SHOWCASE */}
      <section id="production" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs font-mono mb-3">
            <Globe className="w-3.5 h-3.5 text-purple-400" />
            <span>Deployed Web Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Live Production Platforms
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Verified enterprise applications actively serving hundreds of real students, corporate recruiters, and developers daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, pIdx) => (
            <div 
              key={pIdx} 
              className="glass-panel p-7 sm:p-9 rounded-3xl flex flex-col justify-between glass-panel-hover group relative overflow-hidden"
            >
              <div className="space-y-5">
                
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-semibold">
                    {proj.badge}
                  </span>

                  <a 
                    href={proj.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] transition-all group-hover:border-cyan-400/50"
                  >
                    <span>Inspect Live</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-purple-400 font-medium">{proj.role}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Engineering Milestones:</div>
                  <ul className="space-y-2">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <span className="text-cyan-400 mt-1 font-mono text-xs">◆</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Stack tags */}
              <div className="pt-6 mt-6 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#070A14] border border-white/[0.08] text-slate-300 group-hover:border-cyan-500/30 transition-colors"
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

      {/* SECTION 3: SKILLS MATRIX & TECH RADAR */}
      <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-mono mb-3">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>Proven Technical Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Production Engineering Matrix
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Disciplines and tools tested in heavy production over 1.9+ years of shipping enterprise systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all border ${
              activeCategory === 'all' 
                ? 'bg-purple-600 border-purple-400 text-white font-bold shadow-lg shadow-purple-600/30' 
                : 'bg-[#080B16] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all border ${
                activeCategory === cat.id 
                  ? 'bg-purple-600 border-purple-400 text-white font-bold shadow-lg shadow-purple-600/30' 
                  : 'bg-[#080B16] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20'
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
              <div key={cIdx} className="glass-panel p-6 sm:p-7 rounded-3xl space-y-5 border border-white/[0.08]">
                <h3 className="font-bold text-white text-base flex items-center gap-2.5 pb-3 border-b border-white/[0.08]">
                  <Server className="w-4 h-4 text-cyan-400" />
                  <span>{cat.label}</span>
                </h3>

                <div className="space-y-3">
                  {cat.skills.map((s, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="p-3 rounded-xl bg-[#070A14] border border-white/[0.06] hover:border-cyan-400/40 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs font-medium text-slate-200">
                        <span>{s.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-cyan-300">
                          {s.level}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {s.highlight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* SECTION 4: PRODUCTION EXPERIENCE & VERIFIED RELIEVING */}
      <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Verifiable Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            1 Year 9 Months of intensive production engineering with official relieving credentials.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl relative border border-white/[0.1] shadow-2xl">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-purple-400 font-semibold tracking-wider uppercase">
                  Production Engineering Role
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Full Stack Software Development Engineer
                </h3>
                <div className="text-cyan-400 font-mono text-sm mt-1">
                  Codegnan IT Solutions · Hyderabad, India
                </div>
              </div>

              <div className="text-left sm:text-right font-mono space-y-1">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  Dec 2024 – Sep 2026 (1.9+ Years)
                </span>
                <div className="text-xs text-slate-400">
                  Officially Relieved: <strong className="text-emerald-400">Sep 26, 2026</strong>
                </div>
                <div className="text-[11px] text-cyan-400">Notice Period: 0 Days (Immediate Joiner)</div>
              </div>
            </div>

            <div className="space-y-5 mt-8 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Spearheaded full-lifecycle software engineering across flagship EdTech platforms and AI candidate screening SaaS used by 500+ daily concurrent learners and leading corporate placement partners.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#070A14] border border-white/[0.06] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Database Performance & Optimization</strong>
                    <span className="text-slate-300 text-xs sm:text-sm">
                      Profiled and restructured heavy MongoDB aggregation pipelines, slashing learner dashboard query response from 1,000ms+ down to 40ms (-96% latency reduction).
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#070A14] border border-white/[0.06] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Real-Time WebRTC Media Screening</strong>
                    <span className="text-slate-300 text-xs sm:text-sm">
                      Architected LiveKit WebRTC screening rooms for AI-assisted interviews, achieving sub-650ms glass-to-glass latency with adaptive bitrate fallbacks.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#070A14] border border-white/[0.06] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Cloud File Ingestion Architecture</strong>
                    <span className="text-slate-300 text-xs sm:text-sm">
                      Replaced server multipart file streams with AWS S3 Presigned URLs, slashing wait times from 20s to sub-second authorization and eliminating 100% of Node server memory locking.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#070A14] border border-white/[0.06] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">156+ Microservices & Distributed APIs</strong>
                    <span className="text-slate-300 text-xs sm:text-sm">
                      Architected 156+ secure RESTful endpoints and WebSocket listeners across 5 production web systems with role-based JWT authentication, Redis caching, and rate limiting.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CINEMATIC CONTACT & HIRE COMMAND CENTER */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl relative overflow-hidden border border-purple-500/40 text-center shadow-2xl">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/15 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-2xl mx-auto space-y-7 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Officially Relieved · Immediate Joiner (0 Days Notice)</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Accelerate Your <br />
              <span className="gradient-text-cyan">Engineering Velocity?</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Available immediately for Full-Stack / SDE roles (₹12L–₹35L+ LPA) worldwide remote or in Hyderabad. Let’s build scalable, high-throughput software together.
            </p>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left font-mono">
              
              <a 
                href="mailto:surya76755416@gmail.com" 
                className="p-4 rounded-2xl bg-[#070A14] border border-white/[0.08] hover:border-cyan-400/60 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Direct Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    surya76755416@gmail.com
                  </div>
                </div>
              </a>

              <a 
                href="tel:+917675050247" 
                className="p-4 rounded-2xl bg-[#070A14] border border-white/[0.08] hover:border-purple-400/60 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Direct Phone</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    +91 7675050247
                  </div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/somanisuryateja" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 rounded-2xl bg-[#070A14] border border-white/[0.08] hover:border-blue-400/60 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">LinkedIn Profile</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    in/somanisuryateja
                  </div>
                </div>
              </a>

              <a 
                href="https://github.com/somanisuryateja" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 rounded-2xl bg-[#070A14] border border-white/[0.08] hover:border-white/40 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-white/[0.05] text-slate-300 group-hover:bg-white/[0.1] transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">GitHub Profile</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-slate-200 transition-colors">
                    somanisuryateja
                  </div>
                </div>
              </a>

            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/Somani_Abdulla_Surya_Teja_Resume.pdf" 
                download
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-400 text-slate-950 font-black text-sm transition-all shadow-xl shadow-purple-600/30 hover:opacity-95 flex items-center justify-center gap-2.5"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Verified Resume (PDF)</span>
              </a>

              <button 
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl border border-white/[0.1] bg-[#070A14] hover:bg-[#101424] text-slate-300 text-sm font-mono transition-all flex items-center justify-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] py-10 text-xs text-slate-500 font-mono relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Somani Abdulla Surya Teja. Hosted on Oracle Cloud at</span>
            <span className="text-cyan-400 font-semibold">suryadeals.com</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400">All Systems Operational · 99.9% Uptime</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
