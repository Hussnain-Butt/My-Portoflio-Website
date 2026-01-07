import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Plus,
  ArrowRight,
  CheckCircle2,
  Zap,
  LayoutTemplate,
  Globe,
  Clock,
  Calendar,
} from 'lucide-react'

// --- DATA ---
const STEPS = [
  {
    id: '01',
    title: 'Discovery',
    subtitle: 'Strategy & Research',
    desc: 'We start by digging deep. I analyze your requirements, target audience, and competitors. No code is written until the vision is crystal clear.',
    tags: ['Research', 'User Personas', 'Technical Scope'],
  },
  {
    id: '02',
    title: 'Wireframing',
    subtitle: 'Design & Prototyping',
    desc: 'I create high-fidelity wireframes and interactive prototypes in Figma. We agree on the aesthetic and user journey (UX) before development starts.',
    tags: ['Figma', 'UI/UX', 'System Design'],
  },
  {
    id: '03',
    title: 'Development',
    subtitle: 'Code & Architecture',
    desc: 'The magic happens here. I translate designs into clean, semantic code using React, Next.js, and Tailwind, ensuring the site is pixel-perfect and fast.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: '04',
    title: 'Launch',
    subtitle: 'Testing & Deployment',
    desc: 'Rigorous testing for bugs, performance issues, and mobile responsiveness. Once polished, we deploy your site to the world via Vercel or AWS.',
    tags: ['CI/CD', 'SEO Check', 'Performance'],
  },
]

// --- COMPONENT: TIME DISPLAY (Live Clock) ---
const TimeDisplay = () => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <span className="font-mono text-neutral-400">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
  )
}

// --- RIGHT SIDE: STEP ITEM ---
const StepItem = ({ step, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative border-t border-white/10 py-16 md:py-24 transition-all duration-500 hover:bg-white/[0.02]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start px-4 md:px-0">
        <div className="md:col-span-2 flex flex-row md:flex-col items-center md:items-start justify-between">
          <span className="text-4xl md:text-5xl font-light text-white/20 font-mono group-hover:text-primary transition-colors duration-300">
            {step.id}
          </span>
          <div className="hidden md:flex h-full w-px bg-white/10 mt-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/50 -translate-y-full group-hover:translate-y-[200%] transition-transform duration-1000 ease-in-out" />
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-primary text-xs font-mono uppercase tracking-widest">
              {step.subtitle}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform duration-300">
            {step.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {step.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs text-neutral-400 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col justify-between h-full">
          <p className="text-neutral-400 text-lg leading-relaxed mb-8 group-hover:text-neutral-300 transition-colors">
            {step.desc}
          </p>
          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-sm font-bold text-white">Learn more</span>
            <div className="p-2 rounded-full bg-primary text-black">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
      <Plus className="absolute top-4 right-4 text-white/10 w-6 h-6 group-hover:text-primary/50 group-hover:rotate-90 transition-all duration-500" />
    </motion.div>
  )
}

// --- REUSABLE CONNECTOR LINE ---
const ConnectorLine = () => (
  <div className="hidden lg:flex justify-center h-16 relative overflow-hidden">
    <div className="w-px h-full bg-white/5"></div>
    <motion.div
      animate={{ y: [0, 64] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className="absolute top-0 w-0.5 h-8 bg-primary/50 blur-[1px]"
    />
  </div>
)

const Process = () => {
  return (
    <section className="relative bg-neutral-950 py-32 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* --- LEFT SIDE: STICKY COLUMN --- */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-24 flex flex-col">
              {/* 1. HEADER */}
              <div className="mb-10">
                <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs text-primary font-mono uppercase tracking-widest">
                    The Workflow
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  From <span className="text-neutral-500">Chaos</span>
                  <br />
                  To <span className="text-primary">Clarity.</span>
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-sm">
                  My process is a refined loop of research, design, and code. No guesswork.
                </p>
              </div>

              {/* 2. CODE SNIPPET */}
              <div className="relative p-6 rounded-lg bg-neutral-900 border border-white/5 font-mono text-xs text-neutral-500 hidden lg:block z-20 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                  <LayoutTemplate className="w-4 h-4 text-neutral-600" />
                  <span className="text-neutral-600">process.tsx</span>
                </div>
                <p className="mb-2">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">deliverSuccess</span> ={' '}
                  <span className="text-yellow-400">async</span> () ={'>'} {'{'}
                </p>
                <p className="pl-4 mb-1">
                  await <span className="text-green-400">analyze()</span>;
                </p>
                <p className="pl-4 mb-1">
                  await <span className="text-green-400">design()</span>;
                </p>
                <p className="pl-4">
                  return <span className="text-primary">"Perfect Product"</span>;
                </p>
                <p>{'}'}</p>
              </div>

              {/* CONNECTOR 1 */}
              <ConnectorLine />

              {/* 3. PROJECT STATUS WIDGET */}
              <div className="hidden lg:block p-6 rounded-2xl bg-neutral-900/50 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-sm font-bold text-white">Project Status</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-400">Performance</span>
                      <span className="text-green-400 font-mono">100%</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full shadow-[0_0_10px_#22c55e]"></div>
                    </div>
                  </div>
                  <button className="w-full py-3 rounded-lg bg-white text-black font-bold text-sm hover:bg-primary transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(196,181,253,0.3)]">
                    <Zap className="w-4 h-4 fill-black" /> Start Your Project
                  </button>
                </div>
              </div>

              {/* CONNECTOR 2 */}
              <ConnectorLine />

              {/* 4. NEW: AVAILABILITY & INFO WIDGET (Fills the bottom space) */}
              <div className="hidden lg:flex flex-col gap-4 p-6 rounded-2xl bg-neutral-900 border border-white/5 relative z-10">
                {/* Status Row */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="text-sm font-medium text-white">Available for Work</span>
                  </div>
                  <span className="text-xs text-neutral-500 font-mono">OCT 2024</span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {/* Location */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                      <Globe className="w-3 h-3" /> Location
                    </div>
                    <span className="text-sm text-neutral-300 font-medium">Remote / Worldwide</span>
                  </div>

                  {/* Time */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                      <Clock className="w-3 h-3" /> Local Time
                    </div>
                    <TimeDisplay />
                  </div>
                </div>

                {/* Calendar Link (Subtle) */}
                <div className="mt-2 pt-4 border-t border-white/5 flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-2 text-neutral-400 group-hover:text-primary transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-medium">Schedule a call</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-primary transition-colors -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE --- */}
          <div className="lg:col-span-8">
            {STEPS.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
