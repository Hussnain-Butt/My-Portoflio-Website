import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <section id="about" className="bg-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* Lottie/Image Side (Using a placeholder abstract shape for now or generic dev image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-purple-900/20 to-blue-900/20 border border-white/10 relative">
              {/* Abstract Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

              {/* Animated Terminal/Code Block */}
              <div className="absolute inset-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-gray-500 text-xs font-mono">developer.js</span>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-sm">
                  <p className="text-gray-500">// Building the future</p>
                  <p className="mt-2">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">name:</span>{' '}
                    <span className="text-green-400">"Muhammad Hussain"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">role:</span>{' '}
                    <span className="text-green-400">"Full Stack Dev"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">stack:</span>{' '}
                    <span className="text-orange-400">[</span>
                    <span className="text-green-400">"MERN", "AI"</span>
                    <span className="text-orange-400">]</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">passion:</span>{' '}
                    <span className="text-green-400">"Clean Code"</span>
                  </p>
                  <p><span className="text-yellow-400">{'}'}</span>;</p>

                  {/* Blinking Cursor */}
                  <span className="inline-block w-2 h-4 bg-purple-500 animate-pulse mt-2" />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-mono"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                React.js
              </motion.div>
              <motion.div
                className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-mono"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Node.js
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block">
              {ABOUT_TEXT.title}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              More than just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">lines of code.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {ABOUT_TEXT.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {ABOUT_TEXT.stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
