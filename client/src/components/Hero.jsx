// src/components/Hero.jsx
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Circle } from 'lucide-react'
import TechSlider from './TechSlider'
import { PERSONAL_INFO } from '../constants'

const Background3D = lazy(() => import('./Background3D'))

/* ------------------------------------------------------------------ */
/* ANIMATION VARIANTS                                                  */
/* ------------------------------------------------------------------ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const textRevealVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 20, stiffness: 90 },
  },
}

/* ------------------------------------------------------------------ */
/* AI TERMINAL — looping "agent chat" typewriter                       */
/* ------------------------------------------------------------------ */
const SCRIPT = [
  { prefix: '$', prefixClass: 'text-emerald-400', text: 'hermes-agent --init', textClass: 'text-gray-300' },
  { prefix: '✓', prefixClass: 'text-emerald-400', text: 'agent online · model: claude-opus', textClass: 'text-gray-500' },
  { prefix: 'you ▸', prefixClass: 'text-cyan-400', text: 'what do you actually do?', textClass: 'text-gray-300' },
  { prefix: 'mh ▸', prefixClass: 'text-purple-400', text: 'I architect full-stack MERN products', textClass: 'text-gray-200' },
  { prefix: '', prefixClass: '', text: 'and wire in AI/ML pipelines that solve real problems.', textClass: 'text-gray-400' },
  { prefix: '➜', prefixClass: 'text-purple-400', text: 'no fluff. just shipping.', textClass: 'text-purple-300' },
]

const useTypewriter = (lines, { charDelay = 28, lineDelay = 420, loopDelay = 2600 } = {}) => {
  const [done, setDone] = useState([]) // fully-typed line indexes
  const [active, setActive] = useState({ index: 0, text: '' })
  const timer = useRef(null)

  useEffect(() => {
    let i = 0 // line index
    let c = 0 // char index
    const typed = []

    const step = () => {
      if (i >= lines.length) {
        // restart the loop
        timer.current = setTimeout(() => {
          typed.length = 0
          i = 0
          c = 0
          setDone([])
          setActive({ index: 0, text: '' })
          step()
        }, loopDelay)
        return
      }

      const full = lines[i].text
      if (c <= full.length) {
        setActive({ index: i, text: full.slice(0, c) })
        c += 1
        timer.current = setTimeout(step, charDelay)
      } else {
        typed.push(i)
        setDone([...typed])
        i += 1
        c = 0
        timer.current = setTimeout(step, lineDelay)
      }
    }

    step()
    return () => clearTimeout(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { done, active }
}

const Caret = () => (
  <span className="ml-0.5 inline-block h-4 w-[8px] translate-y-[2px] bg-purple-400 animate-blink" />
)

const Line = ({ line, text, caret }) => (
  <div className="flex gap-2 leading-relaxed">
    {line.prefix && <span className={`shrink-0 ${line.prefixClass}`}>{line.prefix}</span>}
    <span className={line.textClass}>
      {text}
      {caret && <Caret />}
    </span>
  </div>
)

const AITerminal = () => {
  const { done, active } = useTypewriter(SCRIPT)

  return (
    <motion.div
      variants={textRevealVariants}
      className="relative w-full max-w-md"
    >
      {/* Glow halo behind the window — the AI/ML accent */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 via-fuchsia-500/10 to-cyan-500/20 blur-2xl rounded-3xl animate-pulse-glow" />

      <div className="glass-strong relative rounded-xl shadow-glow overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 font-mono text-xs text-gray-500">hussain@portfolio: ~/build</span>
        </div>

        {/* Body */}
        <div className="px-5 py-5 font-mono text-[13px] sm:text-sm min-h-[200px] space-y-1.5">
          {SCRIPT.map((line, idx) => {
            if (done.includes(idx)) {
              return <Line key={idx} line={line} text={line.text} caret={false} />
            }
            if (idx === active.index) {
              return <Line key={idx} line={line} text={active.text} caret />
            }
            return null
          })}
        </div>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
const Hero = () => {
  const [first, ...rest] = PERSONAL_INFO.name.split(' ')
  const last = rest.join(' ')

  return (
    <div
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* 1. BACKGROUND LAYERS */}
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>

      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 2. MAIN CONTENT */}
      <main className="flex-grow flex items-center relative z-10 px-6 pt-32 sm:pt-40 pb-12">
        <motion.div
          className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT — copy + CTA */}
          <div className="flex flex-col items-start">
            {/* Availability badge */}
            <motion.div
              variants={textRevealVariants}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs tracking-widest uppercase text-gray-300">
                Available for work
              </span>
            </motion.div>

            {/* Opener */}
            <div className="overflow-hidden mb-3">
              <motion.p
                variants={textRevealVariants}
                className="text-gradient animate-gradient-x font-mono text-sm sm:text-base tracking-widest uppercase font-semibold"
              >
                {PERSONAL_INFO.intro}
              </motion.p>
            </div>

            {/* Giant name */}
            <div className="overflow-hidden">
              <motion.h1
                variants={textRevealVariants}
                className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-5"
              >
                {first} <br className="sm:hidden" />
                <span className="text-gray-600">{last}</span>
              </motion.h1>
            </div>

            {/* Role line */}
            <motion.p
              variants={textRevealVariants}
              className="font-mono text-sm sm:text-base text-purple-300/80 mb-4"
            >
              Full Stack MERN Developer · ML Integration Specialist
            </motion.p>

            {/* Description */}
            <motion.p
              variants={textRevealVariants}
              className="max-w-xl text-lg sm:text-xl text-gray-400 font-light leading-relaxed"
            >
              {PERSONAL_INFO.heroStatement}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={textRevealVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white text-black font-bold text-sm tracking-wide uppercase overflow-hidden transition-transform hover:-translate-y-0.5 shadow-glow-sm"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-purple-300 to-fuchsia-300 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>

              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg border border-white/15 hover:border-purple-500/50 text-white font-medium text-sm tracking-wide uppercase hover:bg-purple-500/10 transition-all duration-300"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — AI terminal */}
          <div className="flex justify-center lg:justify-end">
            <AITerminal />
          </div>
        </motion.div>
      </main>

      {/* 3. FOOTER / SLIDER */}
      <div className="relative z-20 mt-auto w-full border-t border-white/5 pt-6 bg-black/50 backdrop-blur-sm">
        <TechSlider />
      </div>
    </div>
  )
}

export default Hero
