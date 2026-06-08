import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Layout, Server, Database, Sparkles, Rocket, Cpu } from 'lucide-react'
import { SKILLS } from '../constants'

// Map the `icon` string from constants -> Lucide component
const ICONS = { Layout, Server, Database, Sparkles, Rocket }

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: 'spring', damping: 22, stiffness: 110 },
  }),
}

const SpotlightCard = ({ group, index }) => {
  const divRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const Icon = ICONS[group.icon] || Cpu
  const highlight = group.highlight

  const handleMouseMove = (e) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  // AI/ML card uses a cyan-tinted spotlight + a permanent glow ring
  const spotlightColor = highlight ? 'rgba(34,211,238,0.18)' : 'rgba(168,85,247,0.15)'

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative overflow-hidden rounded-2xl border bg-neutral-900/40 px-7 py-8 transition-colors duration-300 ${
        highlight
          ? 'border-cyan-400/30 shadow-glow-cyan'
          : 'border-white/10 hover:border-white/20'
      }`}
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(550px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Ambient glow for the AI/ML highlight card */}
      {highlight && (
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-glow" />
      )}

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
              highlight
                ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-300'
                : 'border-white/10 bg-white/5 text-purple-300'
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">{group.category}</h3>
          {highlight && (
            <span className="ml-auto rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cyan-300">
              Focus
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {group.items.map((skill, i) => (
            <span
              key={i}
              className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 ${
                highlight
                  ? 'border-cyan-400/20 bg-cyan-500/[0.06] text-cyan-100/90 hover:border-cyan-400/60'
                  : 'border-white/5 bg-white/5 text-gray-300 hover:border-purple-500/50 hover:text-white'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const TechStack = () => {
  return (
    <section id="tech" className="relative overflow-hidden bg-black py-28 sm:py-32">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-mono text-sm uppercase tracking-widest text-purple-400">
            The Toolbox
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tighter text-white sm:text-6xl">
            My Tech <span className="text-gradient animate-gradient-x">Ecosystem</span>
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-gray-400">
            A curated stack for building scalable, high-performance products — from pixel-perfect
            frontends to autonomous AI agents in production.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SKILLS.map((group, index) => (
            <div key={group.category} className={group.highlight ? 'md:col-span-2 lg:col-span-1' : ''}>
              <SpotlightCard group={group} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
