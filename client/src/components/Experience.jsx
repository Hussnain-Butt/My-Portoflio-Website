import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCE } from '../constants'

const Experience = () => {
    return (
        <section id="experience" className="bg-black py-24 relative overflow-hidden">
            {/* Background Subtle Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="mb-20 text-center">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                        Career Path
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Professional <span className="text-neutral-500">Timeline</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line for Mobile */}
                    <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/10 md:hidden" />

                    <div className="space-y-12">
                        {EXPERIENCE.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot on Line */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-purple-500 rounded-full -translate-x-1/2 z-10 box-content shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                    <div className="absolute inset-0 m-1 bg-purple-500 rounded-full" />
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:text-right">
                                    <div className={`${index % 2 === 0 ? 'md:text-left md:ml-auto' : 'md:text-right md:mr-auto'} p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors`}>
                                        <span className="text-purple-400 font-mono text-xs tracking-wider uppercase mb-2 block">
                                            {job.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {job.role}
                                        </h3>
                                        <h4 className="text-gray-400 font-medium text-sm mb-4">
                                            {job.company}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {job.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Side for layout balance (Desktop only) */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
