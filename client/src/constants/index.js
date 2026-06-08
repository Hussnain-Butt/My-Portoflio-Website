export const PERSONAL_INFO = {
  name: 'Muhammad Hussain',
  role: 'Full Stack Developer',
  intro: 'I build products that ship',
  heroStatement:
    'I design and deliver scalable web products, AI workflows, and production systems that turn business requirements into working software.',
  description:
    'Full Stack Developer with a strong focus on advanced MERN stack architecture and AI/ML integration. Experienced in architecting and building scalable, cloud-native applications using TypeScript, React, and Node.js, with an emphasis on performance, maintainability, and real-world business impact.',
  email: 'muhammadhussaininfo1@gmail.com',
  phone: '+92 328 4842596',
  bookingUrl: '',
}

export const NAV_LINKS = [
  { title: 'Home', href: '#home' },
  { title: 'Work', href: '#projects' },
  { title: 'Process', href: '#workflow' },
  { title: 'About', href: '#about' },
  { title: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammadhussain-dev/', handle: '@muhammadhussain' },
  { name: 'GitHub', url: 'https://github.com/Hussnain-Butt', handle: '@muhammadhussain' },
]

export const SERVICES = [
  {
    id: '01',
    title: 'Enterprise Web Applications',
    desc: 'I architect and deliver production-grade web applications using React, Next.js 15, and TypeScript. From complex SaaS dashboards to customer portals, I build systems optimized for scale, security, and user experience that drive business growth.',
  },
  {
    id: '02',
    title: 'AI-Powered Solutions',
    desc: 'I build custom AI integrations using OpenAI, Claude, Google Gemini, and LangChain - from RAG-powered assistants and chatbots to AI-driven analytics, workflow automation, and decision support tools.',
  },
  {
    id: '03',
    title: 'Full-Stack Development',
    desc: 'End-to-end development across the modern stack. Node.js, Express, FastAPI, PostgreSQL, and MongoDB - with secure authentication, scalable APIs, and maintainable architecture.',
  },
  {
    id: '04',
    title: 'Cloud Architecture & DevOps',
    desc: 'I deploy and manage cloud-native applications on AWS, DigitalOcean, Railway, and Vercel using Docker, CI/CD, and infrastructure patterns built for reliability and scale.',
  },
  {
    id: '05',
    title: 'API Development & Integrations',
    desc: 'I design REST and GraphQL APIs, integrate payments, CRMs, and third-party services, and keep contracts clean through documentation, versioning, and security best practices.',
  },
  {
    id: '06',
    title: 'Performance & Optimization',
    desc: 'I improve Core Web Vitals, caching, database queries, and loading behavior so products feel faster and hold up better under real usage.',
  },
]

export const WORKFLOW = [
  {
    id: 1,
    title: 'Discovery',
    description:
      'I align on business goals, user needs, constraints, and technical requirements before implementation begins.',
  },
  {
    id: 2,
    title: 'Strategy & Design',
    description:
      'I define the architecture and shape interfaces that support the workflow, not just the screen.',
  },
  {
    id: 3,
    title: 'Development',
    description:
      'I build clean, scalable software with careful attention to performance, maintainability, and delivery risk.',
  },
  {
    id: 4,
    title: 'Launch & Scale',
    description:
      'I handle deployment, testing, and iteration so the product is ready for real users and future growth.',
  },
]

// `icon` maps to a Lucide icon in TechStack.jsx. `highlight: true` gives the
// card the glowing AI/ML treatment.
export const SKILLS = [
  {
    category: 'Frontend',
    icon: 'Layout',
    items: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Microservices', 'REST & GraphQL', 'Redis'],
  },
  {
    category: 'Database',
    icon: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Vector DBs'],
  },
  {
    category: 'AI / ML Integration',
    icon: 'Sparkles',
    highlight: true,
    items: [
      'LLM APIs (OpenAI · Claude · Gemini)',
      'LangChain & RAG',
      'Custom ML Pipelines',
      'Autonomous Agents (Hermes)',
      'Automated Content Generation',
      'Vector Search',
    ],
  },
  {
    category: 'DevOps & Deployment',
    icon: 'Rocket',
    items: ['Docker', 'CI/CD Pipelines', 'Digital Ocean', 'Railway', 'Dedicated VPS', 'Nginx', 'Vercel'],
  },
]

export const ABOUT_TEXT = {
  title: 'Behind the Code',
  description:
    'I am a self-taught Full-Stack Developer focused on scalable, logic-driven, high-performance applications. What started as curiosity about how the web works became a disciplined approach to solving complex problems through clean code and thoughtful architecture.',
  focus:
    'I am most interested in SaaS products, AI-enabled workflows, and operational tools where the work is not just visual polish, but better decisions, faster execution, and software that holds up in production.',
  stats: [
    { label: 'Years of Experience', value: '4+' },
    { label: 'Production Applications', value: 'Built' },
    { label: 'Happy Clients', value: '10+' },
  ],
}

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Studio Cog',
    period: 'Jan 2025 - Present',
    description:
      'Architecting and building scalable, cloud-native web applications using TypeScript, React, and Node.js. Designing efficient PostgreSQL schemas and secure API architectures.',
  },
  {
    id: 2,
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: 'Jan 2024 - Dec 2024',
    description:
      'Delivered custom web applications for direct clients, including AI-integrated solutions, SaaS dashboards, and real-time products.',
  },
  {
    id: 3,
    role: 'Senior Frontend Developer',
    company: 'PIFD',
    period: 'Mar 2023 - Jan 2024',
    description:
      'Led frontend development of responsive platforms, built complex React interfaces, and helped establish coding standards.',
  },
  {
    id: 4,
    role: 'Frontend Developer',
    company: 'Intellisoft Solutions',
    period: 'Dec 2022 - Mar 2023',
    description:
      'Developed dynamic interfaces with React and Redux while modernizing legacy JavaScript codebases.',
  },
  {
    id: 5,
    role: 'Junior Frontend Developer',
    company: 'Aresync IT Consultant',
    period: 'Sep 2021 - Dec 2022',
    description:
      'Built responsive web interfaces, collaborated with senior developers, and optimized website performance.',
  },
]

export const FAQ_DATA = [
  {
    id: 1,
    question: 'How many projects have you completed?',
    answer: 'I have delivered over 10 production-ready web applications for clients across several industries.',
  },
  {
    id: 2,
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in React, Node.js, TypeScript, Python/FastAPI, databases, and AI-enabled product workflows.',
  },
  {
    id: 3,
    question: 'Are you a self-taught developer?',
    answer: 'Yes. My experience has been built through hands-on delivery, production work, and continuous learning.',
  },
  {
    id: 4,
    question: 'Can you work on scalable and complex applications?',
    answer: 'Yes. I work on modular architectures, cloud deployments, and systems that need to remain maintainable as they grow.',
  },
  {
    id: 5,
    question: 'Do you handle deployment and DevOps?',
    answer: 'Yes. I handle deployments, containerization, and cloud setup when the project needs end-to-end delivery.',
  },
  {
    id: 6,
    question: 'How do you approach problem-solving in projects?',
    answer: 'I clarify requirements, identify constraints, design the architecture, build iteratively, and verify before launch.',
  },
]
