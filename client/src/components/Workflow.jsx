import React from 'react'
import { motion } from 'framer-motion'
import { WORKFLOW } from '../constants'

const Workflow = () => {
    return (
        <section id="workflow" className="bg-black py-24 relative border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="mb-20 max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2"
                    >
                        <span className="w-8 h-[1px] bg-purple-400"></span>
                        Methodology
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight"
                    >
                        How I turn complex problems into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            elegant solutions.
                        </span>
                    </motion.h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2rem] left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent z-0" />

                    {WORKFLOW.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 group"
                        >
                            {/* Step Number Bubble */}
                            <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/50 transition-colors relative">
                                <div className="absolute inset-2 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-colors" />
                                <span className="text-xl font-mono text-purple-400">0{step.id}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-purple-500/30 transition-colors">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Workflow
