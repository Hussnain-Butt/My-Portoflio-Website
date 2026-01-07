import vybzzImg from '../assets/projects/Vybzz.png';
import vybzzImg2 from '../assets/projects/Vybzz2.png';
import vybzzImg3 from '../assets/projects/Vybzz3.png';
import vybzzImg4 from '../assets/projects/Vybzz4.png';
import vybzzImg5 from '../assets/projects/Vybzz5.png';

import estimaro1 from '../assets/projects/Estimaro1.png';
import estimaro2 from '../assets/projects/Estimaro2.png';
import estimaro3 from '../assets/projects/Estimaro3.png';
import estimaro4 from '../assets/projects/Estimaro4.png';
import estimaro5 from '../assets/projects/Estimaro5.png';

import redline1 from '../assets/projects/Redline1.png';
import redline2 from '../assets/projects/Redline2.png';
import redline3 from '../assets/projects/Redline3.png';
import redline4 from '../assets/projects/Redline4.png';
import redline5 from '../assets/projects/Redline5.png';
import redline6 from '../assets/projects/Redline6.png';
import redline7 from '../assets/projects/Redline7.png';
import redline8 from '../assets/projects/Redline8.png';
import redline9 from '../assets/projects/Redline9.png';
import redline10 from '../assets/projects/Redline10.png';

import study1 from '../assets/projects/Study1.png';
import study2 from '../assets/projects/Study2.png';
import study3 from '../assets/projects/Study3.png';
import study4 from '../assets/projects/Study4.png';
import study5 from '../assets/projects/Study5.png';
import study6 from '../assets/projects/Study6.png';
import study7 from '../assets/projects/Study7.png';
import study8 from '../assets/projects/Study8.png';
import study9 from '../assets/projects/Study9.png';
import study10 from '../assets/projects/Study10.png';








export const PERSONAL_INFO = {
  name: "Muhammad Hussain",
  role: "Full Stack Developer | MERN & AI Integration",
  intro: "I'm",
  description: "Full Stack Developer with a strong focus on advanced MERN stack architecture and AI/ML integration. Experienced in architecting and building scalable, cloud-native applications using TypeScript, React, and Node.js, with an emphasis on performance, maintainability, and real-world business impact.",
  email: "muhammadhussaininfo1@gmail.com",
  phone: "+92 328 4842596",
};

export const NAV_LINKS = [
  { title: 'Home', href: '#home' },
  { title: 'Work', href: '#projects' },
  { title: 'Process', href: '#workflow' }, // Updated to point to new section
  { title: 'About', href: '#about' },
  { title: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammadhussain-dev/', handle: '@muhammadhussain' },
  { name: 'GitHub', url: 'https://github.com/Hussnain-Butt', handle: '@muhammadhussain' },
 
];

export const PROJECTS = [
  {
  id: 1,
  title: 'Vybzz Nation',
  role: 'Full Stack Engineer',
  year: '2025',
  client: 'US-based Client',
  timeline: 'Ongoing (2+ Months)',
  repo: 'https://github.com/Hussnain-Butt/Vybzz',
  liveDemo: '', // Add live demo URL when deployed
  img: vybzzImg,

  description: 
    "Vybzz Nation is a scalable social media platform designed for creators and communities. The platform allows users to engage through posts, likes, and real-time live streaming while providing creators with dedicated tools to grow their audience and manage content.",

  challenge: 
    "The primary challenge was building a scalable and reliable live streaming module alongside core social media features such as posts, likes, and real-time interactions. The system needed to handle concurrent viewers, creator streams, and role-based access (member, creator, admin) while maintaining low latency, performance, and platform stability.",

  solution: 
    "I developed the platform using a microservices-based architecture with Docker for service isolation and scalability. Built secure REST APIs, implemented role-based authentication for members, creators, and admins, and deployed the system on DigitalOcean. The application supports real-time features and is optimized for performance and maintainability.",

  impact: 
    "The system architecture allows seamless scaling, improved performance, and smooth real-time user interactions. The platform is production-ready and supports future feature expansion such as monetization, analytics, and advanced creator tools.",

  tags: [
    'React',
    'Node.js',
    'Microservices',
    'Docker',
    'DigitalOcean',
    'REST APIs',
    'Role-Based Access Control',
    'MUX',
    'Cloudinary'
  ],

  gallery: [
    vybzzImg,
    vybzzImg2,
    vybzzImg3,
    vybzzImg4,
    vybzzImg5
  ]
},

  {
  id: 2,
  title: 'Estimaro AI',
  role: 'Full Stack Engineer',
  year: '2025',
  client: 'US-based Auto Repair Platform',
  timeline: 'Ongoing (2+ Months)',
  repo: 'https://github.com/Hussnain-Butt/Estimaro-AdminDashboard',
  liveDemo: '', // Add live demo URL when deployed
  img: estimaro1,

  description:
    "Estimaro AI is an end-to-end automation platform for auto repair shops that streamlines the entire estimation process—from initial customer call or message to final estimate approval and direct integration with shop management systems.",

  challenge:
    "The biggest challenge was automating a traditionally manual and error-prone estimation workflow involving VIN decoding, labor time lookup, OEM parts matching, multi-vendor pricing, and compliance requirements, while still allowing human advisors to review and override AI decisions when necessary.",

  solution:
    "I built the backend using Python FastAPI to orchestrate complex automation workflows and integrate with third-party APIs such as ALLDATA, PartsLink24, Worldpac, SSF, NHTSA, and Tekmetric. The frontend was developed in React.js, providing an advisor dashboard and a customer approval portal. AI-based job classification, vendor scoring algorithms, caching, and confidence-based human override points were implemented to ensure speed, accuracy, and reliability.",

  impact:
    "Reduced estimate creation time from 10–15 minutes to under 5 minutes, improved estimate accuracy, and increased customer approval speed. The system enables shops to process more repair orders daily with consistent pricing, better compliance, and minimal manual effort.",

  tags: [
    'Python',
    'FastAPI',
    'React.js',
    'AI Automation',
    'Third-Party API Integration',
    'Vendor Scoring Algorithms',
    'Tekmetric Integration',
    'Redis'
  ],

  gallery: [
    estimaro2,
    estimaro3,
    estimaro4,
    estimaro5
  ]
},

{
  id: 3,
  title: 'RedLine CRM',
  role: 'Full Stack Engineer',
  year: '2025',
  client: 'AI-Powered Call Center Solution',
  timeline: 'Ongoing',
  repo: 'https://github.com/Hussnain-Butt/RedLine-CRM',
  liveDemo: '', // Add live demo URL when deployed
  img: redline1,

  description:
    "RedLine CRM is an AI-powered Call Center Customer Relationship Management system designed to automate and optimize calling, emailing, and client management workflows. It leverages AI to record calls, generate intelligent summaries, automate follow-ups, and provide actionable insights for sales and support teams.",

  challenge:
    "The main challenge was building an intelligent CRM that could accurately process real-time call recordings, extract meaningful insights such as customer intent and sentiment, and automatically trigger actions like follow-up emails and reminders—while ensuring performance, scalability, and usability for call center agents.",

  solution:
    "I developed a full-stack web application using React.js with TypeScript and Tailwind CSS for the frontend, and Node.js with TypeScript for the backend. Google Gemini AI was integrated for call transcription, summarization, email generation, and natural language querying. Smart reminder detection, AI-assisted email drafting, and an AI database assistant were implemented to reduce manual effort and improve operational efficiency.",

  impact:
    "RedLine CRM significantly reduces post-call manual work, improves follow-up speed, and enhances customer engagement. Call center agents can handle more calls with better context, while managers gain data-driven insights through AI-powered analytics and reporting.",

  tags: [
    'React.js',
    'TypeScript',
    'Node.js',
    'AI Integration',
    'Google Gemini API',
    'Call Recording',
    'AI Summarization',
    'CRM Automation'
  ],

  gallery: [
    redline2,
    redline3,
    redline4,
    redline5,
    redline6,
    redline7,
    redline8,
    redline9,
    redline10
  ]
}
,
{
  id: 4, // Assuming sequential ID
  title: 'AI Study Companion',
  role: 'Full Stack AI Engineer',
  year: '2025',
  client: 'EdTech Personal Project',
  timeline: 'Ongoing',
  repo: 'https://github.com/yourusername/ai-study-companion', // Replace with your actual repo
  liveDemo: '',
  img: study1,

  
  description:
    "AI Study Companion is a next-generation learning platform that transforms static educational materials into interactive study experiences. It allows students to upload PDF textbooks and documents, engaging with them through AI-powered chat, automated summarization, and self-assessment quizzes. The platform gamifies the learning process with analytics, streaks, and achievements to boost student motivation and retention.",

  challenge:
    "Students today struggle with information overload and passive learning methods when dealing with dense PDF textbooks. The primary challenge was to engineer a high-performance system capable of ingesting large technical documents and retrieving precise, context-aware answers in real-time. Additionally, creating a professional, distraction-free 'Glassmorphism' UI that feels premium while handling complex data flows between a Next.js frontend and Python backend was a key technical hurdle.",

  solution:
    "I engineered a robust full-stack solution using Next.js 15 for a responsive, animated frontend and FastAPI for a high-concurrency backend. I integrated Groq's high-speed inference engine (Llama-3 model) to power the RAG (Retrieval-Augmented Generation) pipeline, enabling instant document Q&A and quiz generation. The UI was crafted with Tailwind CSS and Framer Motion to deliver a sleek, dark-mode aesthetic. Core features include a custom PDF processing service, dynamic progress tracking databases, and a scalable architecture ready for deployment.",

  impact:
    "The application dramatically reduces study planning time by automatically organizing knowledge and generating active recall materials. It shifts students from passive reading to active engagement, providing instant feedback through AI quizzes. The dashboard's productivity metrics help users maintain consistency, effectively bridging the gap between raw study material and deep understanding.",

  tags: [
    'Next.js 15',
    'TypeScript',
    'FastAPI (Python)',
    'Groq & Llama 3',
    'RAG Pipeline',
    'Tailwind CSS',
    'Framer Motion',
    'PostgreSQL',
    'SQLAlchemy',
    'EdTech'
  ],
   gallery: [
    study1,
    study2,
    study3,
    study4,
    study5,
    study6,
    study7,
    study8,
    study9,
    study10
  ]
}
 
];

export const SERVICES = [
  {
    id: '01',
    title: 'Enterprise Web Applications',
    desc: 'I architect and deliver production-grade web applications using React, Next.js 15, and TypeScript. From complex SaaS dashboards to customer portals, I build systems optimized for scale, security, and exceptional user experience that drive business growth.',
  },
  {
    id: '02',
    title: 'AI-Powered Solutions',
    desc: 'Transform your business with intelligent automation. I build custom AI integrations using OpenAI GPT-4, Claude, Google Gemini, and LangChain—from RAG-powered document assistants and chatbots to AI-driven analytics, workflow automation, and smart decision engines.',
  },
  {
    id: '03',
    title: 'Full-Stack Development (MERN/Python)',
    desc: 'End-to-end development expertise across the modern stack. Node.js/Express, FastAPI, PostgreSQL, MongoDB—I design scalable architectures, implement secure authentication (OAuth, JWT), and build robust APIs that handle millions of requests.',
  },
  {
    id: '04',
    title: 'Cloud Architecture & DevOps',
    desc: 'I deploy and manage cloud-native applications on AWS, DigitalOcean, and Railway. Docker containerization, CI/CD pipelines, Kubernetes orchestration, and infrastructure-as-code ensure your applications are reliable, scalable, and cost-efficient.',
  },
  {
    id: '05',
    title: 'API Development & Integrations',
    desc: 'Connect your systems seamlessly. I design RESTful and GraphQL APIs, integrate payment gateways (Stripe), CRMs (HubSpot, Salesforce), and third-party services. Clean documentation, versioning, and security best practices included.',
  },
  {
    id: '06',
    title: 'Performance & Optimization',
    desc: 'Speed matters for conversions. I audit and optimize frontend performance (Core Web Vitals), implement caching strategies (Redis), database query optimization, and lazy loading patterns to deliver lightning-fast user experiences.',
  },
]

// --- 6. WORK PROCESS (Methodology) ---
export const WORKFLOW = [
  {
    id: 1,
    title: 'Discovery',
    description:
      'I dive deep into your business goals, target audience, and technical requirements to ensure we are building the right solution.',
  },
  {
    id: 2,
    title: 'Strategy & Design',
    description:
      'I architect the technical foundation and design intuitive, high-converting user interfaces that align with your brand.',
  },
  {
    id: 3,
    title: 'Development',
    description:
      'I write clean, scalable, and performance-optimized code using the latest MERN stack technologies and best practices.',
  },
  {
    id: 4,
    title: 'Launch & Scale',
    description:
      'I handle the deployment, SEO optimization, and final testing to ensure a flawless launch, ready for growth.',
  },
]

// --- 7. TESTIMONIALS (Social Proof) ---
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, TechNova',
    text: "Hussain didn't just build a website; he built a platform that doubled our lead generation in one month. His attention to detail is unmatched.",
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Founder, Orbit AI',
    text: "Exceptional technical skills combined with a great design eye. He understood our complex requirements perfectly and delivered ahead of schedule.",
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'CTO, DigitalEdge',
    text: "A true professional who delivers high-quality code. The performance optimizations he implemented significantly improved our user retention metrics.",
  },
]

// --- 8. TECH STACK (Skills) ---
export const SKILLS = [
  {
    category: 'Frontend Engineering',
    items: ['React 18+', 'Next.js 15', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
  },
  {
    category: 'Backend & Databases',
    items: ['Node.js', 'Express.js', 'FastAPI (Python)', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['OpenAI GPT-4', 'Claude API', 'Google Gemini', 'LangChain', 'RAG Systems', 'Vector DBs', 'Prompt Engineering'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (Lambda, S3, EC2)', 'Docker', 'Kubernetes', 'CI/CD', 'Railway', 'Vercel', 'Nginx'],
  },
]

// --- 9. ABOUT ME (Story) ---
export const ABOUT_TEXT = {
  title: 'Behind the Code',
  description:
    "I am a self-taught Full-Stack Developer driven by a passion for building scalable, logic-driven, and high-performance applications. What started as curiosity about the inner workings of the web evolved into a disciplined approach to solving complex problems through clean code and thoughtful architecture. I value minimalism, efficiency, and well-structured systems that translate business requirements into reliable, real-world solutions.",
 stats: [
  { label: 'Years of Experience', value: '4+' },
  { label: 'Production-Grade Web Applications', value: 'Built' },
  { label: 'Happy Clients', value: '10+' },
],

}

// --- 10. EXPLORING EXPERIENCE ---
export const EXPERIENCE = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Studio Cog',
    period: 'Jan 2025 - Present',
    description:
      'Architecting and building scalable, cloud-native web applications using TypeScript, React, and Node.js. Designing efficient PostgreSQL database schemas and implementing secure API architectures.',
  },
  {
    id: 2,
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: 'Jan 2024 - Dec 2024',
    description:
      'Delivered custom web applications for direct clients. Built AI-integrated solutions, SaaS dashboards, and real-time platforms using MERN stack, FastAPI, and modern cloud infrastructure.',
  },
  {
    id: 3,
    role: 'Senior Frontend Developer',
    company: 'PIFD',
    period: 'Mar 2023 - Jan 2024',
    description:
      'Led frontend development of modern, responsive web platforms. Built complex interfaces with React.js and TypeScript. Mentored junior developers and established coding standards.',
  },
  {
    id: 4,
    role: 'Frontend Developer',
    company: 'Intellisoft Solutions',
    period: 'Dec 2022 - Mar 2023',
    description:
      'Developed dynamic user interfaces using React.js and Redux. Modernized legacy codebases to ES6+ JavaScript, improving performance and maintainability.',
  },
  {
    id: 5,
    role: 'Junior Frontend Developer',
    company: 'Aresync IT Consultant',
    period: 'Sep 2021 - Dec 2022',
    description:
      'Built responsive web interfaces using HTML5, CSS3, and JavaScript. Collaborated with senior developers and optimized website performance.',
  },
]


// --- 11. FAQ (Common Queries) ---
export const FAQ_DATA = [
  { id: 1, question: 'How many projects have you completed?', answer: 'I have delivered over 10 production-ready web applications for clients across various industries.' },
  { id: 2, question: 'What technologies do you specialize in?', answer: 'I specialize in the MERN stack (MongoDB, Express.js, React, Node.js), TypeScript, and integrating AI/ML capabilities into web applications.' },
  { id: 3, question: 'Are you a self-taught developer?', answer: 'Yes, I am a self-taught Full-Stack Developer who has built expertise through hands-on experience and continuous learning.' },
  { id: 4, question: 'Can you work on scalable and complex applications?', answer: 'Absolutely. I have experience designing and building scalable, cloud-native web applications with modular architecture and performance optimization.' },
  { id: 5, question: 'Do you handle deployment and DevOps?', answer: 'Yes, I manage deployments, containerization with Docker, and cloud infrastructure setup, ensuring reliable and maintainable solutions.' },
  { id: 6, question: 'How do you approach problem-solving in projects?', answer: 'I follow a structured approach: understanding requirements, designing modular architecture, writing clean and maintainable code, and thoroughly testing before deployment.' },
]
