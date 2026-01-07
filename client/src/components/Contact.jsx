import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PERSONAL_INFO } from '../constants'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id="contact" className="bg-black min-h-screen relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Subtle purple glow */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 py-24 lg:py-32 relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 min-h-[70vh] items-center">

          {/* Left Column - Clean Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-purple-400 text-xs font-medium uppercase tracking-[0.2em]">
                Available for new projects
              </span>
            </div>

            {/* Main Heading - Professional Typography */}
            <div className="space-y-2">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-white block">Let's build</span>
                <span className="text-white block">something</span>
                <span className="text-purple-400 block">meaningful.</span>
              </h2>
            </div>

            {/* Description - Clean & Readable */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
              I help ambitious brands and startups create digital experiences that stand out. From concept to code,{' '}
              <span className="text-purple-400 font-normal">I handle the details.</span>
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:border-l lg:border-white/10 lg:pl-16 xl:pl-24"
          >
            {/* Start a Project Link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-center justify-between mb-12 cursor-pointer"
            >
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white group-hover:text-gray-300 transition-colors duration-300">
                Start a Project
              </h3>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-white transition-colors duration-300" />
              </div>
            </a>

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block font-mono text-gray-500 text-sm tracking-wider hover:text-purple-400 transition-colors duration-300 uppercase"
              >
                {PERSONAL_INFO.email}
              </a>

              <a
                href="tel:+923284842596"
                className="block font-mono text-gray-500 text-sm tracking-wider hover:text-purple-400 transition-colors duration-300"
              >
                +92 (328) 4842596
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-10" />

            {/* Contact Form */}
            <ContactForm />
          </motion.div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-8 px-6 lg:px-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p className="font-mono text-xs tracking-wider">© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          <p className="font-mono text-xs tracking-wider">
            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} PKT
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
