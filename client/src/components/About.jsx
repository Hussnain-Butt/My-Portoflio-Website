import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../constants'
import vybzzImg from '../assets/projects/Vybzz.png'
import estimaroImg from '../assets/projects/Estimaro1.png'
import redlineImg from '../assets/projects/Redline1.png'

const About = () => {
  return (
    <section id="about" className="bg-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[420px]"
          >
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.03]" />
            <img
              src={estimaroImg}
              alt="Estimaro dashboard"
              className="absolute left-0 top-8 w-[78%] rounded-xl border border-white/10 shadow-2xl"
            />
            <img
              src={redlineImg}
              alt="RedLine CRM dashboard"
              className="absolute right-0 top-0 w-[58%] rounded-xl border border-white/10 shadow-2xl"
            />
            <img
              src={vybzzImg}
              alt="Vybzz Nation interface"
              className="absolute bottom-0 right-6 w-[62%] rounded-xl border border-white/10 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block">
              {ABOUT_TEXT.title}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              I build products where <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                UX and systems both matter.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {ABOUT_TEXT.description}
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {ABOUT_TEXT.focus}
            </p>

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
