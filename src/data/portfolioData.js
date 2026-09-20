export const PERSONAL_INFO = {
  name: "Aditya Dhaware",
  shortName: "Aditya",
  initials: "AD.",
  role: "Full-Stack MERN Developer",
  tagline: "Full-Stack MERN Developer (MongoDB, Express.js, React.js, Node.js) architecting scalable web applications, real-time WebRTC systems & resilient APIs.",
  location: "Pune, Maharashtra, India",
  email: "dhawareaditya201@gmail.com",
  phone: "+91 7709301229",
  github: "https://github.com/Aditya-Dhaware",
  linkedin: "https://www.linkedin.com/in/aditya-dhaware-27a663416/",
  availability: "Open to Full-Time MERN & Engineering Roles",
  statusBadge: "Full-Stack MERN Developer • Available for Hire",
  bio: [
    "Full-Stack MERN Developer & Software Engineer specializing in scalable React.js frontends, Node.js/Express.js backends, MongoDB data pipelines, and real-time media streams.",
    "Holds an M.Sc. in Computer Application (8.41 CGPA, A+) from Savitribai Phule Pune University. Passionate about architecting production-grade MERN solutions with clean code, high concurrency, and sub-second response times."
  ],
  stats: [
    { label: "M.Sc. CGPA", value: "8.41", unit: "/10", highlight: "A+ Distinction" },
    { label: "Students Automated", value: "1000+", unit: "", highlight: "ERP Billing Engine" },
    { label: "B.Sc. CGPA", value: "8.83", unit: "/10", highlight: "A+ Grade" },
    { label: "Production Apps", value: "3+", unit: "Deployed", highlight: "Real-World Projects" },
  ]
};

export const EXPERIENCE_DATA = [
  {
    id: "pvg-erp",
    role: "Back-End Developer Intern — ERP Fees & Billing",
    company: "PVG's College of Science & Commerce",
    location: "Pune, India",
    period: "Feb 2026 – Jun 2026",
    type: "Internship",
    skills: ["FastAPI", "PostgreSQL", "React.js", "Razorpay", "JWT", "APScheduler", "Webhooks"],
    summary: "Architected a scalable billing engine automating installments, fee reconciliation, and webhooks for 1,000+ students.",
    achievements: [
      "Automated fee installment tracking for 1,000+ students, cutting manual reconciliation by 30%.",
      "Designed an asynchronous webhook pipeline with database idempotency guards processing 500+ monthly transactions with zero duplicate payments.",
      "Integrated Razorpay SDK with HMAC-SHA256 signature verification and JWT role-based access control (Admin/User).",
      "Engineered concurrent background worker jobs with APScheduler for daily overdue audits, saving 10+ administrative hours/week."
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "xoom-video",
    title: "Xoom — Real-Time Video Conferencing",
    category: "Real-Time WebRTC",
    tagline: "Low-latency peer-to-peer audio/video calling platform with instant signaling & session chat.",
    tags: ["WebRTC", "Socket.IO", "React.js", "Node.js", "Express.js", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/Aditya-Dhaware/VideoCalling-Application",
    liveUrl: "https://github.com/Aditya-Dhaware/VideoCalling-Application",
    featured: true,
    accentColor: "#00f0ff",
    problem: "Commercial video tools are resource-heavy and add server latency for peer meetings.",
    solution: "Engineered browser-native WebRTC peer streams with Socket.IO signaling for SDP/ICE negotiation.",
    impact: "Zero-lag P2P video/audio, screen sharing (getDisplayMedia), and session room messaging.",
    metrics: ["P2P Video Streaming", "Socket.IO Signaling", "Room Chat", "Screen Sharing"]
  },
  {
    id: "wanderlust-hotel",
    title: "Wanderlust — Hotel & Listing Platform",
    category: "MERN Full Stack",
    tagline: "Full-stack vacation rental platform featuring dynamic listings, geolocation maps, and media delivery.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs", "Cloudinary", "Mapbox"],
    githubUrl: "https://github.com/Aditya-Dhaware",
    liveUrl: "https://github.com/Aditya-Dhaware",
    featured: true,
    accentColor: "#10b981",
    problem: "Fragmented accommodation search and sluggish image loading degrade booking experiences.",
    solution: "Built an MVC platform with session auth, Mapbox coordinates, and Cloudinary image pipelines.",
    impact: "Scaled to 50+ rich listings with 25% faster media loading and full review lifecycle management.",
    metrics: ["50+ Listings Scaled", "25% Faster Media Load", "Mapbox Geo-Coordinates", "Full CRUD & Reviews"]
  },
  {
    id: "tradex-platform",
    title: "TradeX — Stock Trading & Analytics",
    category: "Fintech & Analytics",
    tagline: "Interactive portfolio analytics platform with automated order simulation and live charting.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js"],
    githubUrl: "https://github.com/Aditya-Dhaware",
    liveUrl: "https://github.com/Aditya-Dhaware",
    featured: true,
    accentColor: "#8b5cf6",
    problem: "Retail investors face complex, cluttered trading terminals to review asset allocations.",
    solution: "Architected a modular dashboard with JWT auth and simulated order execution across 20+ securities.",
    impact: "Interactive Chart.js visualizations (Doughnut & Bar) for instant portfolio rebalancing and history.",
    metrics: ["20+ Tracked Securities", "Chart.js Visualizations", "Order Simulation", "JWT Auth"]
  },
  {
    id: "erp-billing",
    title: "ERP Automated Fees & Billing Engine",
    category: "Enterprise Backend",
    tagline: "Collegiate billing platform automating installment schedules, webhooks, and ledger auditing.",
    tags: ["FastAPI", "PostgreSQL", "React.js", "Razorpay SDK", "APScheduler", "HMAC-SHA256"],
    githubUrl: "https://github.com/Aditya-Dhaware/ERP-Fees-and-Billing-Project",
    liveUrl: "https://github.com/Aditya-Dhaware/ERP-Fees-and-Billing-Project",
    featured: false,
    accentColor: "#f59e0b",
    problem: "Manual collegiate fee management caused accounting discrepancies and duplicate charges.",
    solution: "Developed an asynchronous FastAPI backend with HMAC-SHA256 signatures and idempotency guards.",
    impact: "Automated billing for 1,000+ students across 500+ monthly webhooks with zero duplicate charges.",
    metrics: ["1,000+ Students", "500+ Monthly Webhooks", "30% Workload Cut", "Zero Duplicate Charges"]
  }
];

export const SKILLS_CATEGORIES = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code2" },
      { name: "Python", level: "Advanced", icon: "Terminal" },
      { name: "SQL", level: "Proficient", icon: "Database" },
      { name: "Java", level: "Proficient", icon: "FileCode" },
      { name: "HTML5 / CSS3", level: "Expert", icon: "Layout" }
    ]
  },
  {
    name: "Backend & APIs",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Cpu" },
      { name: "FastAPI", level: "Advanced", icon: "Zap" },
      { name: "RESTful API Design", level: "Advanced", icon: "Network" },
      { name: "WebSockets & Socket.IO", level: "Advanced", icon: "Radio" },
      { name: "Webhooks & Idempotency", level: "Proficient", icon: "ShieldCheck" }
    ]
  },
  {
    name: "Frontend Engineering",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Layers" },
      { name: "Material UI", level: "Proficient", icon: "Palette" },
      { name: "Responsive Design", level: "Expert", icon: "Smartphone" },
      { name: "Chart.js Visualizations", level: "Proficient", icon: "BarChart3" },
      { name: "State Management", level: "Proficient", icon: "Workflow" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Advanced", icon: "Database" },
      { name: "MongoDB & Mongoose", level: "Advanced", icon: "FolderTree" },
      { name: "Relational Schema Design", level: "Advanced", icon: "GitCommit" },
      { name: "Document Indexing", level: "Proficient", icon: "HardDrive" }
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "WebRTC (Audio/Video)", level: "Advanced", icon: "Video" },
      { name: "AWS (EC2, Lambda)", level: "Working Knowledge", icon: "Cloud" },
      { name: "Git & GitHub", level: "Expert", icon: "GitBranch" },
      { name: "CI/CD & Deployment", level: "Proficient", icon: "Repeat" },
      { name: "Cloudinary Media", level: "Proficient", icon: "Image" }
    ]
  }
];

export const EDUCATION_DATA = [
  {
    degree: "M.Sc. Computer Application",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    duration: "2024 – 2026",
    cgpa: "8.41 / 10.0",
    grade: "Grade A+ (Distinction)",
    highlights: [
      "Specialization in distributed architectures, backend concurrency, and database systems."
    ]
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    duration: "2021 – 2024",
    cgpa: "8.83 / 10.0",
    grade: "Grade A+ (Distinction)",
    highlights: [
      "Rigorous core foundations: Data Structures, Algorithms, OS, DBMS, and Networks."
    ]
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: "Full Stack Web Development (MERN)",
    issuer: "Apna College",
    date: "March 2025",
    description: "Industrial training in React, Node, Express, MongoDB, RESTful APIs, and cloud deployments.",
    skillsCovered: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Deployment"]
  },
  {
    title: "Data Structures & Algorithms (Java)",
    issuer: "Apna College",
    date: "August 2024",
    description: "Comprehensive training in algorithmic complexity, binary trees, dynamic programming, and graphs.",
    skillsCovered: ["Java", "Data Structures", "Algorithms", "Time Complexity", "Recursion"]
  }
];

export const COMMAND_CENTER = {
  os: "Windows 11 / Linux (WSL2)",
  runtime: "Node.js v24.11 / Python 3.12",
  editor: "VS Code / Terminal",
  base: "Pune, Maharashtra, India",
  timezone: "IST (UTC+5:30)",
  typicalResponse: "< 24 Hours",
  githubHandle: "Aditya-Dhaware"
};
