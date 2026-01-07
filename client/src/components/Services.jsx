// src/components/Services.js

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SERVICES } from '../constants'

// --- REUSABLE VISUAL CONTAINER (The Glass Card) ---
const VisualCard = ({ children }) => (
  <div className="w-full aspect-square md:aspect-video rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.15)] flex items-center justify-center p-8 overflow-hidden relative group">
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px]" />
    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]" />
    <div className="relative z-10 w-full h-full flex items-center justify-center">{children}</div>
  </div>
)

// --- VISUAL COMPONENTS ---

// 1. Website Dev
const VisualWebsite = () => (
  <VisualCard>
    <div className="relative w-3/4 h-3/4 bg-[#0a0a0a] rounded-lg border border-white/10 shadow-2xl flex flex-col overflow-hidden">
      <div className="h-6 border-b border-white/10 bg-white/5 flex items-center px-3 space-x-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      <div className="p-4 space-y-3 relative overflow-hidden">
        <motion.div
          initial={{ width: '40%' }}
          animate={{ width: '70%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="h-2 bg-purple-500/40 rounded-sm"
        />
        <div className="h-2 w-1/2 bg-white/10 rounded-sm" />
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="h-16 bg-white/5 rounded border border-white/5"
            />
          ))}
        </div>
      </div>
    </div>
  </VisualCard>
)

// 2. Full Stack
const VisualFullStack = () => (
  <VisualCard>
    <div className="flex gap-4 items-center">
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="w-20 h-24 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center"
      >
        <span className="text-blue-400 font-mono text-xs">CLIENT</span>
      </motion.div>

      <div className="flex flex-col gap-1">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-16 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400"
        />
        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-16 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400"
        />
      </div>

      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="w-20 h-24 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-col gap-2"
      >
        <span className="text-purple-400 font-mono text-xs">SERVER</span>
        <div className="flex gap-1">
          <div className="w-1 h-3 bg-purple-500/50 rounded-full animate-pulse"></div>
          <div className="w-1 h-3 bg-purple-500/50 rounded-full animate-pulse delay-75"></div>
          <div className="w-1 h-3 bg-purple-500/50 rounded-full animate-pulse delay-150"></div>
        </div>
      </motion.div>
    </div>
  </VisualCard>
)

// 3. AI
const VisualAI = () => (
  <VisualCard>
    <div className="relative w-32 h-32 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-dashed border-purple-500/30"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-md opacity-50 absolute"
      />
      <div className="w-16 h-16 bg-[#0a0a0a] rounded-full border border-purple-500/50 flex items-center justify-center z-10 relative">
        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
      </div>
      {/* Orbiting particles */}
      {[0, 120, 240].map((deg) => (
        <motion.div
          key={deg}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{
            offsetPath: "path('M 0 -50 A 50 50 0 1 1 0 50 A 50 50 0 1 1 0 -50')",
            offsetRotate: '0deg',
            transformOrigin: 'center',
          }}
        />
      ))}
    </div>
  </VisualCard>
)

// 4. UI/UX
const VisualUIUX = () => (
  <VisualCard>
    <div className="relative w-48 h-32">
      <motion.div
        initial={{ rotate: -5, x: -20 }}
        whileInView={{ rotate: -10, x: -30 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm z-0"
      />
      <motion.div
        initial={{ rotate: 5, x: 20 }}
        whileInView={{ rotate: 5, x: 20 }}
        className="absolute inset-0 bg-[#0a0a0a] border border-purple-500/30 rounded-xl z-10 p-4 flex flex-col gap-2 shadow-xl"
      >
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-500/20" />
          <div className="flex-1 space-y-1 py-1">
            <div className="h-2 bg-white/10 rounded w-full" />
            <div className="h-2 bg-white/10 rounded w-2/3" />
          </div>
        </div>
        <motion.div
          className="mt-auto h-8 w-full bg-purple-600 rounded-md flex items-center justify-center text-[10px] font-bold tracking-widest text-white/80"
          whileHover={{ scale: 1.05 }}
        >
          HIRE ME
        </motion.div>
      </motion.div>
    </div>
  </VisualCard>
)

// 5. API
const VisualAPI = () => (
  <VisualCard>
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          className="w-12 h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
        </motion.div>
      ))}
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <span className="text-xs font-bold tracking-widest text-white/50">API</span>
      </div>
    </div>
  </VisualCard>
)

// 6. Performance
const VisualPerformance = () => (
  <VisualCard>
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-end gap-2 h-24">
        {[40, 60, 80, 95].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
            className={`w-6 rounded-t-md ${i === 3 ? 'bg-gradient-to-t from-green-500 to-emerald-400' : 'bg-white/10'}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]"
        />
        <span className="text-green-400 font-mono text-sm">98/100</span>
      </div>
      <span className="text-gray-500 font-mono text-xs tracking-widest">PERFORMANCE SCORE</span>
    </div>
  </VisualCard>
)

const VISUALS = [VisualWebsite, VisualAI, VisualFullStack, VisualAPI, VisualAPI, VisualPerformance]

// --- MAIN COMPONENT ---
function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="relative bg-black text-white py-24 sm:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-medium tracking-widest uppercase text-sm"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            What I{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
              Provide
            </span>
            .
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* LEFT COLUMN - LIST */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group cursor-pointer border-b border-white/10 pb-8 transition-colors duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
              >
                <span className="text-sm font-mono text-purple-400 mb-2 block">/{service.id}</span>
                <h3
                  className={`text-3xl md:text-4xl font-light mb-4 transition-transform duration-500 ${activeIndex === index ? 'translate-x-4' : ''
                    }`}
                >
                  {service.title}
                </h3>

                {/* Accordion Text - Visible on Mobile too */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 text-lg leading-relaxed max-w-lg pl-4 border-l border-purple-500/30">
                    {service.desc}
                  </p>

                  {/* Mobile-only Visual Inject */}
                  <div className="lg:hidden mt-8">{React.createElement(VISUALS[index])}</div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN - STICKY VISUAL (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-1/2 h-[600px] sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
              >
                {/* Rendering the component dynamically based on index */}
                {React.createElement(VISUALS[activeIndex])}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
