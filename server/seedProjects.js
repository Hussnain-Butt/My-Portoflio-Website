import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import connectDB from './config/db.js';

dotenv.config();

// Existing projects data - migrated from client/src/constants/index.js
// Using placeholder images that will be replaced via admin panel
const projectsData = [
    {
        title: 'Vybzz Nation',
        role: 'Full Stack Engineer',
        year: '2025',
        client: 'US-based Client',
        timeline: 'Ongoing (2+ Months)',
        repo: 'https://github.com/Hussnain-Butt/Vybzz',
        liveDemo: '',
        img: 'https://placehold.co/800x600/1a1a2e/a855f7?text=Vybzz+Nation',
        description: "Vybzz Nation is a scalable social media platform designed for creators and communities. The platform allows users to engage through posts, likes, and real-time live streaming while providing creators with dedicated tools to grow their audience and manage content.",
        challenge: "The primary challenge was building a scalable and reliable live streaming module alongside core social media features such as posts, likes, and real-time interactions. The system needed to handle concurrent viewers, creator streams, and role-based access (member, creator, admin) while maintaining low latency, performance, and platform stability.",
        solution: "I developed the platform using a microservices-based architecture with Docker for service isolation and scalability. Built secure REST APIs, implemented role-based authentication for members, creators, and admins, and deployed the system on DigitalOcean. The application supports real-time features and is optimized for performance and maintainability.",
        impact: "The system architecture allows seamless scaling, improved performance, and smooth real-time user interactions. The platform is production-ready and supports future feature expansion such as monetization, analytics, and advanced creator tools.",
        tags: ['React', 'Node.js', 'Microservices', 'Docker', 'DigitalOcean', 'REST APIs', 'Role-Based Access Control', 'MUX', 'Cloudinary'],
        gallery: [
            'https://placehold.co/800x600/1a1a2e/a855f7?text=Vybzz+1',
            'https://placehold.co/800x600/1a1a2e/a855f7?text=Vybzz+2',
            'https://placehold.co/800x600/1a1a2e/a855f7?text=Vybzz+3',
            'https://placehold.co/800x600/1a1a2e/a855f7?text=Vybzz+4',
            'https://placehold.co/800x600/1a1a2e/a855f7?text=Vybzz+5'
        ],
        isFeatured: true
    },
    {
        title: 'Estimaro AI',
        role: 'Full Stack Engineer',
        year: '2025',
        client: 'US-based Auto Repair Platform',
        timeline: 'Ongoing (2+ Months)',
        repo: 'https://github.com/Hussnain-Butt/Estimaro-AdminDashboard',
        liveDemo: '',
        img: 'https://placehold.co/800x600/1a1a2e/22c55e?text=Estimaro+AI',
        description: "Estimaro AI is an end-to-end automation platform for auto repair shops that streamlines the entire estimation process—from initial customer call or message to final estimate approval and direct integration with shop management systems.",
        challenge: "The biggest challenge was automating a traditionally manual and error-prone estimation workflow involving VIN decoding, labor time lookup, OEM parts matching, multi-vendor pricing, and compliance requirements, while still allowing human advisors to review and override AI decisions when necessary.",
        solution: "I built the backend using Python FastAPI to orchestrate complex automation workflows and integrate with third-party APIs such as ALLDATA, PartsLink24, Worldpac, SSF, NHTSA, and Tekmetric. The frontend was developed in React.js, providing an advisor dashboard and a customer approval portal. AI-based job classification, vendor scoring algorithms, caching, and confidence-based human override points were implemented to ensure speed, accuracy, and reliability.",
        impact: "Reduced estimate creation time from 10–15 minutes to under 5 minutes, improved estimate accuracy, and increased customer approval speed. The system enables shops to process more repair orders daily with consistent pricing, better compliance, and minimal manual effort.",
        tags: ['Python', 'FastAPI', 'React.js', 'AI Automation', 'Third-Party API Integration', 'Vendor Scoring Algorithms', 'Tekmetric Integration', 'Redis'],
        gallery: [
            'https://placehold.co/800x600/1a1a2e/22c55e?text=Estimaro+1',
            'https://placehold.co/800x600/1a1a2e/22c55e?text=Estimaro+2',
            'https://placehold.co/800x600/1a1a2e/22c55e?text=Estimaro+3',
            'https://placehold.co/800x600/1a1a2e/22c55e?text=Estimaro+4'
        ],
        isFeatured: true
    },
    {
        title: 'RedLine CRM',
        role: 'Full Stack Engineer',
        year: '2025',
        client: 'AI-Powered Call Center Solution',
        timeline: 'Ongoing',
        repo: 'https://github.com/Hussnain-Butt/RedLine-CRM',
        liveDemo: '',
        img: 'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+CRM',
        description: "RedLine CRM is an AI-powered Call Center Customer Relationship Management system designed to automate and optimize calling, emailing, and client management workflows. It leverages AI to record calls, generate intelligent summaries, automate follow-ups, and provide actionable insights for sales and support teams.",
        challenge: "The main challenge was building an intelligent CRM that could accurately process real-time call recordings, extract meaningful insights such as customer intent and sentiment, and automatically trigger actions like follow-up emails and reminders—while ensuring performance, scalability, and usability for call center agents.",
        solution: "I developed a full-stack web application using React.js with TypeScript and Tailwind CSS for the frontend, and Node.js with TypeScript for the backend. Google Gemini AI was integrated for call transcription, summarization, email generation, and natural language querying. Smart reminder detection, AI-assisted email drafting, and an AI database assistant were implemented to reduce manual effort and improve operational efficiency.",
        impact: "RedLine CRM significantly reduces post-call manual work, improves follow-up speed, and enhances customer engagement. Call center agents can handle more calls with better context, while managers gain data-driven insights through AI-powered analytics and reporting.",
        tags: ['React.js', 'TypeScript', 'Node.js', 'AI Integration', 'Google Gemini API', 'Call Recording', 'AI Summarization', 'CRM Automation'],
        gallery: [
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+1',
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+2',
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+3',
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+4',
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+5',
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+6',
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+7',
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+8',
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+9',
            'https://placehold.co/800x600/1a1a2e/ef4444?text=RedLine+10'
        ],
        isFeatured: true
    },
    {
        title: 'AI Study Companion',
        role: 'Full Stack AI Engineer',
        year: '2025',
        client: 'EdTech Personal Project',
        timeline: 'Ongoing',
        repo: 'https://github.com/yourusername/ai-study-companion',
        liveDemo: '',
        img: 'https://placehold.co/800x600/1a1a2e/3b82f6?text=AI+Study+Companion',
        description: "AI Study Companion is a next-generation learning platform that transforms static educational materials into interactive study experiences. It allows students to upload PDF textbooks and documents, engaging with them through AI-powered chat, automated summarization, and self-assessment quizzes. The platform gamifies the learning process with analytics, streaks, and achievements to boost student motivation and retention.",
        challenge: "Students today struggle with information overload and passive learning methods when dealing with dense PDF textbooks. The primary challenge was to engineer a high-performance system capable of ingesting large technical documents and retrieving precise, context-aware answers in real-time. Additionally, creating a professional, distraction-free 'Glassmorphism' UI that feels premium while handling complex data flows between a Next.js frontend and Python backend was a key technical hurdle.",
        solution: "I engineered a robust full-stack solution using Next.js 15 for a responsive, animated frontend and FastAPI for a high-concurrency backend. I integrated Groq's high-speed inference engine (Llama-3 model) to power the RAG (Retrieval-Augmented Generation) pipeline, enabling instant document Q&A and quiz generation. The UI was crafted with Tailwind CSS and Framer Motion to deliver a sleek, dark-mode aesthetic. Core features include a custom PDF processing service, dynamic progress tracking databases, and a scalable architecture ready for deployment.",
        impact: "The application dramatically reduces study planning time by automatically organizing knowledge and generating active recall materials. It shifts students from passive reading to active engagement, providing instant feedback through AI quizzes. The dashboard's productivity metrics help users maintain consistency, effectively bridging the gap between raw study material and deep understanding.",
        tags: ['Next.js 15', 'TypeScript', 'FastAPI (Python)', 'Groq & Llama 3', 'RAG Pipeline', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'SQLAlchemy', 'EdTech'],
        gallery: [
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+1',
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+2',
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+3',
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+4',
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+5',
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+6',
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+7',
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+8',
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+9',
            'https://placehold.co/800x600/1a1a2e/3b82f6?text=Study+10'
        ],
        isFeatured: true
    }
];

const seedProjects = async () => {
    try {
        await connectDB();

        // Check if projects already exist
        const existingCount = await Project.countDocuments();
        if (existingCount > 0) {
            console.log(`Database already has ${existingCount} projects. Skipping seed.`);
            console.log('To re-seed, first delete existing projects from database.');
            process.exit();
        }

        // Insert all projects
        const result = await Project.insertMany(projectsData);
        console.log(`✅ Successfully seeded ${result.length} projects to database!`);
        
        result.forEach((project, index) => {
            console.log(`  ${index + 1}. ${project.title} (ID: ${project._id})`);
        });

        process.exit();
    } catch (error) {
        console.error('❌ Error seeding projects:', error);
        process.exit(1);
    }
};

seedProjects();
