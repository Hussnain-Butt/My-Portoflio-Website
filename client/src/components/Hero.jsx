// src/components/Hero.js

import React from 'react'
import { motion } from 'framer-motion'
import TechSlider from './TechSlider'
import Header from './Header'
import Background3D from './Background3D'
import { PERSONAL_INFO } from '../constants'

// --- ANIMATION VARIANTS (Kinetic/Stagger) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const textRevealVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
    },
  },
}

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
      {/* 1. BACKGROUND LAYERS */}
      <Background3D />

      {/* Subtle Gradient Glows (Dimmed for legibility) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 2. HEADER */}
      {/* Explicit Z-index ensure it stays on top. Fixed positioning handled inside Header component, but we wrap it here cleanly. */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* 3. MAIN CONTENT */}
      {/* Added pt-32 sm:pt-48 to push content DOWN away from header. No more merging. */}
      <main className="flex-grow flex flex-col justify-center items-center relative z-10 px-6 pt-32 sm:pt-48 pb-12">
        <motion.div
          className="max-w-7xl w-full flex flex-col items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* SMALL OPENER (Masked Reveal) */}
          <div className="overflow-hidden mb-4">
            <motion.p
              variants={textRevealVariants}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono text-sm sm:text-base tracking-widest uppercase font-semibold"
            >
              — {PERSONAL_INFO.intro}
            </motion.p>
          </div>

          {/* GIANT NAME (Masked Kinetic Reveal) */}
          <div className="overflow-hidden">
            <motion.h1
              variants={textRevealVariants}
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] sm:leading-[0.9] mb-4 sm:mb-6"
            >
              {PERSONAL_INFO.name.split(' ')[0]} <br className="sm:hidden" />
              <span className="text-gray-500">{PERSONAL_INFO.name.split(' ')[1]}</span>
            </motion.h1>
          </div>

          {/* DESCRIPTION (Fade Up) */}
          <motion.p
            variants={textRevealVariants}
            className="max-w-xl mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
          >
            {PERSONAL_INFO.role} based in the digital realm.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={textRevealVariants}
            className="mt-12 flex flex-col sm:flex-row gap-5 items-start sm:items-center w-full"
          >
            {/* Primary Button - Solid with Hover Lift */}
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-sm overflow-hidden transition-transform hover:-translate-y-1"
            >
              <span className="relative z-10">See Selected Work</span>
              <div className="absolute inset-0 bg-purple-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>

            {/* Secondary Button - Enhanced Visibility */}
            <a
              href="#contact"
              className="group relative px-6 py-3 border border-white/20 hover:border-purple-500/50 rounded-sm text-white font-medium text-sm tracking-widest uppercase hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-3"
            >
              Let's Talk
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

        </motion.div>
      </main>

      {/* 4. FOOTER / SLIDER */}
      <div className="relative z-20 mt-auto w-full border-t border-white/5 pt-6 bg-black/50 backdrop-blur-sm">
        <TechSlider />
      </div>
    </div>
  )
}

export default Hero
