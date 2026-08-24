export interface EducationItem {
  institution: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  gpa?: string;
  highlights: string[];
  coursework: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full-Stack Web App' | 'Systems & Hardware' | 'Docs Engineering';
  summary: string;
  description: string;
  techStack: string[];
  features: string[];
  metrics: string;
  githubUrl?: string;
  demoUrl?: string;
  codeSnippet?: string;
}

export interface FormulaTenet {
  id: string;
  title: string;
  quote: string;
  candidateAlignment: string;
  practicalExample: string;
  iconName: string;
}

export interface ApiEndpoint {
  id: string;
  method: 'GET' | 'POST';
  path: string;
  description: string;
  params?: { name: string; type: string; required: boolean; description: string }[];
  requestBody?: Record<string, any>;
  responseExample: Record<string, any>;
}

export interface CandidateProfile {
  name: string;
  title: string;
  targetRole: string;
  targetTeam: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bio: string;
  summaryMetrics: { label: string; value: string; detail: string }[];
  skills: {
    category: string;
    items: { name: string; proficiency: number; badge?: string }[];
  }[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  adyenFormula: FormulaTenet[];
  apiEndpoints: ApiEndpoint[];
}

export const candidateData: CandidateProfile = {
  name: "Cristian Ocampo-Padilla",
  title: "Full-Stack Developer & QA Engineer",
  targetRole: "Full-Stack Developer (Junior)",
  targetTeam: "Docs Excellence Engineering Team",
  location: "Chicago, IL",
  email: "cocampopadilla@gmail.com",
  phone: "312-479-3886",
  github: "github.com/cocampo-pad",
  linkedin: "linkedin.com/in/cocampo-padilla",
  bio: "Master of Computer Science (UIUC, 4.0 GPA) and QA Engineer at Motorola Mobility. Experienced in React, Python, C++, JavaScript, FastAPI, and software test automation. Driven by continuous learning and building high-reliability, developer-centric documentation platforms for Adyen.",
  
  summaryMetrics: [
    { label: "Master's Degree", value: "M.C.S.", detail: "UIUC (GPA 4.00 / 4.00)" },
    { label: "Bachelor's Degree", value: "B.S. CS", detail: "UIUC (GPA 3.67 / 4.00)" },
    { label: "Current Role", value: "QA Engineer", detail: "Motorola Mobility (Apr 2026+)" },
    { label: "Work Auth", value: "US Authorized", detail: "Zero Sponsorship Needed" }
  ],

  skills: [
    {
      category: "Languages & Frameworks",
      items: [
        { name: "Python", proficiency: 94, badge: "Primary" },
        { name: "React / JavaScript / TypeScript", proficiency: 92, badge: "Primary" },
        { name: "FastAPI / Node.js", proficiency: 88 },
        { name: "C++ / C", proficiency: 85 },
        { name: "SQL (MySQL)", proficiency: 88 }
      ]
    },
    {
      category: "Testing, QA & Automation",
      items: [
        { name: "Manual Feature Testing", proficiency: 95, badge: "Motorola QA" },
        { name: "Test Automation & HTML Reporting", proficiency: 88, badge: "Side Project" },
        { name: "Android Testing Tools & Libraries", proficiency: 85, badge: "Quick Learner" },
        { name: "API & System Endpoint Validation", proficiency: 90 },
        { name: "Agile / Scrum Collaboration", proficiency: 92 }
      ]
    },
    {
      category: "Tools, Cloud & Systems",
      items: [
        { name: "Git / GitHub CI/CD", proficiency: 92 },
        { name: "GCP (Google Cloud) & AWS", proficiency: 84 },
        { name: "Ansible & Linux Systems", proficiency: 86 },
        { name: "Firebase & MySQL Databases", proficiency: 85 }
      ]
    }
  ],

  education: [
    {
      institution: "University of Illinois Urbana-Champaign (UIUC)",
      degree: "Professional Master of Computer Science (MCS)",
      major: "Computer Science",
      period: "Aug 2025 – Aug 2026",
      location: "Chicago, IL",
      gpa: "4.00 / 4.00",
      highlights: [
        "Perfect 4.00/4.00 GPA in advanced graduate computer science curriculum",
        "Focused on Cloud Computing, Machine Learning for Software Engineering, Computer Security, and IoT Systems"
      ],
      coursework: [
        "Cloud Computing",
        "Machine Learning for Software Engineering",
        "Computer Security",
        "IoT Systems"
      ]
    },
    {
      institution: "University of Illinois Urbana-Champaign (UIUC)",
      degree: "Bachelor of Science in Computer Science",
      major: "Computer Science",
      period: "Graduated May 2024",
      location: "Urbana-Champaign, IL",
      gpa: "3.67 / 4.00",
      highlights: [
        "Strong foundation in systems programming, data structures, algorithms, and software engineering",
        "Coursework spanning parallel programming, databases, and high-frequency trading technology"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Systems Programming",
        "Databases & Database Systems",
        "Software Engineering",
        "Parallel Programming",
        "High-Frequency Trading Technology"
      ]
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "QA Engineer",
      company: "Motorola Mobility",
      period: "Late April 2026 – Present",
      location: "Chicago, IL",
      type: "Full-Time",
      description: [
        "Perform manual testing across a variety of mobile features and software components to ensure device reliability and high quality user experience.",
        "Developing a side project to automate key test cases and generate structured HTML execution reports.",
        "Quickly learning and integrating new Android developer tools and testing libraries to expand automation capabilities."
      ],
      technologies: ["Manual Testing", "Test Automation", "HTML Reporting", "Android Tools & Libraries", "Agile"]
    },
    {
      id: "exp-2",
      role: "Software Engineer Co-Op",
      company: "International Motors (Navistar)",
      period: "Aug 2023 – Dec 2023",
      location: "Lisle, IL",
      type: "Co-Op Internship",
      description: [
        "Gathered and reviewed detailed system requirements to design test scenarios and validate software outputs.",
        "Executed and validated Python scripts to ensure accurate data transfer and correct outputs across integrated systems.",
        "Implemented error handling and logging mechanisms to diagnose failures and support rapid debugging.",
        "Collaborated with engineers in an Agile environment to identify issues and improve internal tool reliability.",
        "Documented technical findings and reported issues to teammates for timely resolution."
      ],
      technologies: ["Python", "Scripting", "System Validation", "Error Handling & Logging", "Agile", "Technical Documentation"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Inventory & Reservation Management Web App",
      category: "Full-Stack Web App",
      summary: "Full-stack web application for managing inventory and reservations of shared resources with robust API testing.",
      description: "Developed a full-stack platform using React, FastAPI, MySQL, and GCP. Designed and executed test cases to validate API endpoints, database operations, and user workflows. Engineered MySQL database schema ensuring data integrity and edge-case handling.",
      techStack: ["React", "FastAPI", "MySQL", "GCP", "Python", "API Testing"],
      features: [
        "Full-stack resource reservation & inventory tracking",
        "FastAPI REST endpoints with automated test case validation",
        "Normalized MySQL relational schema design with edge-case protection",
        "Collaborative Agile development & peer code reviews"
      ],
      metrics: "100% validated API endpoint reliability & edge-case data integrity",
      codeSnippet: `// React + FastAPI Inventory Reservation Endpoint Validation
export const createReservation = async (reservationData: ReservationPayload) => {
  const response = await fetch('/api/v1/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reservationData)
  });
  
  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(\`[Reservation Error \${response.status}]: \${errorBody.detail}\`);
  }
  
  return await response.json();
};`
    },
    {
      id: "proj-2",
      title: "Enhanced GPS Grandmaster on Raspberry Pi 3",
      category: "Systems & Hardware",
      summary: "System-level timing optimization reaching ~100 nanosecond precision using Linux kernel CPU isolation and interrupt steering.",
      description: "Tested and optimized time synchronization performance on Raspberry Pi 3 using CPU isolation, Ansible, and Linux kernel tuning. Collected and analyzed timing data, validated PPS signals, achieving ~100ns precision while tuning thermal & CPU settings for stability.",
      techStack: ["Ansible", "Bash", "Linux Kernel", "C / C++", "Raspberry Pi"],
      features: [
        "CPU isolation and interrupt steering for low-latency timing",
        "PPS (Pulse Per Second) signal validation achieving ~100ns precision",
        "Automated deployment & configuration with Ansible playbooks",
        "Comprehensive reproducibility documentation & thermal tuning"
      ],
      metrics: "~100 nanosecond timing precision achieved on embedded hardware"
    },
    {
      id: "proj-3",
      title: "Adyen Developer Docs & Interactive API Explorer",
      category: "Docs Engineering",
      summary: "Interactive developer documentation platform built for Adyen Docs Excellence Team featuring real-time API execution & AI assistant.",
      description: "Custom-built React 18 + TypeScript documentation hub designed specifically for Adyen's Chicago Docs Excellence Engineering position. Includes live REST request console, keyboard search (Cmd+K), and AI candidate assistant.",
      techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "REST APIs"],
      features: [
        "Interactive API execution console for candidate data endpoints",
        "Cmd+K global search palette with instant section jumping",
        "AI Docs Assistant drawer with grounded Q&A and source citations",
        "Adyen Docs design system with dark/light mode toggle"
      ],
      metrics: "< 50ms render response & 100% Adyen Formula alignment"
    }
  ],

  adyenFormula: [
    {
      id: "formula-1",
      title: "We build to benefit all customers",
      quote: "Creating financial products and developer tools that serve global scale and diverse engineering teams.",
      candidateAlignment: "Combining manual testing thoroughness with automated HTML reports ensures developer tools, APIs, and docs are intuitive, accessible, and bug-free for all users.",
      practicalExample: "Designed FastAPI endpoints and manual test cases covering edge cases to deliver seamless user and developer workflows.",
      iconName: "Users"
    },
    {
      id: "formula-2",
      title: "We make good choices for the long term",
      quote: "Prioritizing clean architecture, technical debt reduction, and robust foundations over quick hacks.",
      candidateAlignment: "With two CS degrees from UIUC (4.0 MCS GPA) and hands-on QA experience, I write clean, maintainable code and invest in test automation for long-term reliability.",
      practicalExample: "Building a test automation project to generate HTML reports and adopting new Android tools to scale testing infrastructure.",
      iconName: "ShieldCheck"
    },
    {
      id: "formula-3",
      title: "We launch fast and iterate",
      quote: "Shipping working solutions rapidly and refining based on continuous real-world developer feedback.",
      candidateAlignment: "I pick up new tools and libraries quickly, launching test automation scripts and iterating rapidly based on practical testing needs.",
      practicalExample: "Rapidly learning Android tools on the job to build test automation and HTML reporting scripts.",
      iconName: "Zap"
    },
    {
      id: "formula-4",
      title: "We work as a team",
      quote: "Across disciplines and cultures, we win together with open collaboration.",
      candidateAlignment: "Fluent in English & Spanish, with strong cross-functional communication skills when collaborating with developers and reporting findings.",
      practicalExample: "Collaborated in Agile sprints at Motorola Mobility and Navistar to review requirements, document issues, and share clear findings.",
      iconName: "HeartHandshake"
    }
  ],

  apiEndpoints: [
    {
      id: "ep-1",
      method: "GET",
      path: "/v1/candidate/profile",
      description: "Fetch complete profile summary for Cristian Ocampo-Padilla.",
      responseExample: {
        status: 200,
        message: "Candidate ready for Adyen Docs Excellence Team",
        data: {
          name: "Cristian Ocampo-Padilla",
          currentRole: "QA Engineer at Motorola Mobility",
          education: "Master of Computer Science (UIUC, 4.0 GPA) & BS CS (UIUC)",
          location: "Chicago, IL",
          gradDate: "Aug 2026 (MCS Completed)",
          sponsorshipRequired: false,
          languages: ["English (Fluent)", "Spanish (Fluent)"],
          fitScore: "100%"
        }
      }
    },
    {
      id: "ep-2",
      method: "GET",
      path: "/v1/education",
      description: "Retrieve UIUC Master of Computer Science & Bachelor of CS degree details.",
      responseExample: {
        status: 200,
        university: "University of Illinois Urbana-Champaign (UIUC)",
        degrees: [
          {
            degree: "Professional Master of Computer Science (MCS)",
            period: "Aug 2025 – Aug 2026",
            gpa: "4.00 / 4.00",
            courses: ["Cloud Computing", "Machine Learning for SWE", "Computer Security", "IoT Systems"]
          },
          {
            degree: "Bachelor of Science in Computer Science",
            period: "Graduated May 2024",
            gpa: "3.67 / 4.00",
            courses: ["Data Structures & Algorithms", "Systems Programming", "Databases", "Software Engineering"]
          }
        ]
      }
    },
    {
      id: "ep-3",
      method: "GET",
      path: "/v1/experience",
      description: "Get recent engineering roles at Motorola Mobility and Navistar.",
      responseExample: {
        status: 200,
        experience: [
          {
            company: "Motorola Mobility",
            role: "QA Engineer",
            period: "Late April 2026 – Present",
            description: "Manual feature testing, side project automating tests & HTML reporting with new Android tools.",
            location: "Chicago, IL"
          },
          {
            company: "International Motors (Navistar)",
            role: "Software Engineer Co-Op",
            period: "Aug 2023 – Dec 2023",
            location: "Lisle, IL"
          }
        ]
      }
    },
    {
      id: "ep-4",
      method: "POST",
      path: "/v1/interview/schedule",
      description: "Trigger an interview request for Cristian Ocampo-Padilla with Adyen Chicago.",
      requestBody: {
        interviewerName: "Adyen Engineering Manager",
        team: "Docs Excellence Engineering (Chicago)",
        proposedDate: "2026-08-12T14:00:00Z",
        notes: "Excited to discuss Cristian's UIUC CS background, Motorola QA experience, and React/TS skills."
      },
      responseExample: {
        status: 201,
        bookingId: "ADYEN-INT-CRISTIAN-2026",
        candidate: "Cristian Ocampo-Padilla",
        statusMessage: "Interview request confirmed!",
        candidateNotificationSent: true,
        responseExpectation: "< 1 hour"
      }
    }
  ]
};
