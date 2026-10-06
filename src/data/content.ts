export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  role: string;
  tech: string[];
  details: string[];
  link?: string;
  github?: string;
  image: string;
  stats?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  status?: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  detail: string;
}

export const personalData = {
  name: "Somani Abdulla Surya Teja",
  shortName: "Surya Teja",
  role: "Full Stack & Applied AI Engineer",
  location: "Hyderabad, Telangana, India",
  email: "surya76755416@gmail.com",
  phone: "+91 7675050247",
  linkedin: "https://linkedin.com/in/somanisuryateja",
  github: "https://github.com/somanisuryateja",
  website: "suryadeals.com",
  availability: "Available to join immediately",
  noticePeriod: "0 Days (Officially Relieved Sep 26, 2026)",
  summary: "Full Stack & Applied AI Engineer shipping enterprise web platforms, scalable APIs, and real-time voice AI. Owned delivery across 10 production repositories serving 5,000+ users (246 PRs, 963 commits). Specialized in TypeScript, Python (FastAPI), Node.js, Next.js, Docker, AWS and Vitest.",
};

export const statsData: StatItem[] = [
  {
    value: 5000,
    suffix: "+",
    label: "Active Production Users",
    detail: "Concurrent students and recruiters across live SaaS platforms",
  },
  {
    value: 200,
    suffix: "x",
    label: "Query Speedup",
    detail: "MongoDB analytics slashed from 20s to 100ms / 40ms",
  },
  {
    value: 650,
    suffix: "ms",
    prefix: "~",
    label: "Voice AI Latency",
    detail: "Glass-to-glass conversational streaming via LiveKit WebRTC",
  },
  {
    value: 246,
    suffix: "",
    label: "Pull Requests Merged",
    detail: "963 production commits across 10 repositories at Codegnan",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Platform Uptime",
    detail: "High-scale LMS serving 500+ daily concurrent learners",
  },
  {
    value: 75,
    suffix: "%+",
    label: "Smaller API Payloads",
    detail: "Optimized mobile REST endpoints with targeted projections",
  },
];

export const projectsData: Project[] = [
  {
    id: "enterprise-lms",
    number: "01",
    title: "Enterprise LMS Platform",
    tagline: "Microservices learning ecosystem scaled to 5,000+ active users",
    role: "Full Stack & Systems Lead",
    tech: ["Node.js", "Express", "MongoDB", "React", "Docker", "AWS"],
    details: [
      "Scaled microservices LMS to 5,000+ users across 156 REST endpoints and ~24 data models.",
      "Authored 97% of backend commits, architecting course management and analytics.",
      "Optimized high-traffic dashboards to maintain sub-100ms response times.",
    ],
    link: "https://academy.codegnanedge.com",
    image: "/projects/project-1.svg",
    stats: "156 Endpoints · 5,000+ Users",
  },
  {
    id: "voice-ai-interview",
    number: "02",
    title: "AI Mock Interview with Real-Time Voice",
    tagline: "Ultra-low latency conversational AI screening rooms",
    role: "Applied AI & Real-time Architect",
    tech: ["LiveKit", "FastAPI", "Python", "Whisper", "WebSockets"],
    details: [
      "Achieved ~650ms conversational glass-to-glass latency using LiveKit WebRTC.",
      "Self-hosted STT, LLM and TTS pipelines behind asynchronous FastAPI streaming endpoints.",
      "Engineered adaptive bitrate fallbacks ensuring zero conversational interruptions.",
    ],
    link: "https://corporaterelations.codegnan.ai",
    image: "/projects/project-2.svg",
    stats: "~650ms Latency · Real-Time WebRTC",
  },
  {
    id: "candidate-screening",
    number: "03",
    title: "Placement & Candidate Screening Portal",
    tagline: "High-throughput recruitment workflow and eligibility engine",
    role: "Lead Systems Architect",
    tech: ["Next.js", "Node.js", "MongoDB", "RBAC", "WebSockets"],
    details: [
      "Built placement and screening portal connecting 500+ corporate recruiters.",
      "Implemented dynamic eligibility reach-meter calculating applicant qualification scores.",
      "Secured 40+ endpoints with 5-tier role-based access control and httpOnly JWT tokens.",
    ],
    link: "https://corporaterelations.codegnan.ai",
    image: "/projects/project-3.svg",
    stats: "500+ Recruiters · 5-Tier RBAC",
  },
  {
    id: "payments-billing",
    number: "04",
    title: "Payments & Billing Automation",
    tagline: "Idempotent payment reconciliation with zero duplicate charges",
    role: "Backend & Integration Engineer",
    tech: ["Razorpay", "Node.js", "Express", "SHA-256", "Zoho API"],
    details: [
      "Engineered Razorpay checkout flows (full, token, balance) with SHA-256 signature verification.",
      "Guaranteed idempotent transaction handling with zero duplicate charges over 1,000+ payments.",
      "Automated Zoho invoice generation, saving 15+ manual finance hours weekly.",
    ],
    link: "https://codegnan.com",
    image: "/projects/project-1.svg",
    stats: "0 Duplicate Charges · 15h Saved/wk",
  },
  {
    id: "career-intelligence",
    number: "05",
    title: "Autonomous Career Intelligence Engine",
    tagline: "Modular multi-tier ATS reverse-engineering automation pipeline",
    role: "Open Source Author",
    tech: ["Python", "Playwright", "BeautifulSoup4", "Node.js", "Adapter Pattern"],
    details: [
      "Automated job discovery across 5 enterprise portals using an Adapter Pattern engine.",
      "Categorized opportunities into APPLY, WATCH, NEAR, and SKIP tiers based on ATS schema match.",
      "Integrated two-way Excel sync and real-time HTML analytics dashboard.",
    ],
    github: "https://github.com/somanisuryateja/surya-powerful-job-match-engine",
    image: "/projects/project-2.svg",
    stats: "5 Portals · Adapter Pattern",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: "MERN Stack Developer (Full Stack & AI Engineer)",
    company: "Codegnan IT Solutions Pvt Ltd",
    location: "Hyderabad, India",
    period: "Dec 2024 — Sep 2026",
    status: "Officially Relieved Sep 26, 2026 (0 Days Notice)",
    highlights: [
      "Lead architect across 5 live production platforms, authoring 246 PRs and 963 commits.",
      "Achieved 200x query speedup with targeted compound indexes and aggregation pipeline optimization.",
      "Slashed core API latency from 1,000ms+ down to 40-50ms under peak concurrent learner traffic.",
      "Reduced server CPU by 40% with direct AWS S3 presigned URL uploads and HLS adaptive streaming.",
      "Maintained 80%+ test coverage with Vitest, passing SonarQube quality gates on all releases.",
      "Secured 40+ endpoints with 5-tier RBAC, JWT access tokens, and automatic refresh token rotation.",
    ],
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Architecture",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express", "FastAPI", "REST Microservices", "RBAC", "JWT", "WebSockets", "LiveKit"],
  },
  {
    title: "Applied AI",
    skills: ["Real-time Voice AI (STT/TTS)", "Whisper", "LLM Deployment", "Multi-Agent Workflows", "RAG Pipelines"],
  },
  {
    title: "Data & DevOps",
    skills: ["MongoDB", "MySQL", "AWS (EC2, S3, CloudFront)", "Docker", "Nginx", "PM2", "Linux"],
  },
  {
    title: "Quality & Testing",
    skills: ["Vitest", "SonarQube", "Postman", "GitHub Actions CI/CD"],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "DRK Institute of Science and Technology",
    period: "2020 — 2024",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic Masab Tank",
    period: "2017 — 2020",
  },
  {
    degree: "Cyber Security / VAPT Certification",
    institution: "Berry9 IT Services",
    period: "2023",
    details: "Vulnerability Assessment & Penetration Testing certification",
  },
];

export const greetings = [
  "Hello",
  "నమస్కారం",
  "Namaste",
  "Hola",
  "Bonjour",
  "Ciao",
  "Guten Tag",
  "Konnichiwa",
  "Olà",
];
