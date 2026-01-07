import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { SOCIAL_LINKS } from '../constants'

const Socials = () => {
    // Extract specific links or fallbacks
    const linkedin = SOCIAL_LINKS.find(l => l.name === 'LinkedIn') || SOCIAL_LINKS[0]
    const github = SOCIAL_LINKS.find(l => l.name === 'GitHub') || SOCIAL_LINKS[1]

    return (
        <section className="bg-black py-24 relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="mb-16 text-center md:text-left">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                        Connect
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Digital <span className="text-neutral-500">Presence</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* LinkedIn Card */}
                    <motion.a
                        href={linkedin.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative h-80 rounded-3xl bg-[#0077B5] overflow-hidden flex flex-col justify-between p-8 hover:scale-[1.02] transition-transform duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="text-white w-8 h-8" />
                        </div>

                        <div className="relative z-10">
                            <Linkedin className="w-16 h-16 text-white mb-4" />
                            <h3 className="text-3xl font-bold text-white">LinkedIn</h3>
                            <p className="text-white/80 mt-2 font-mono">{linkedin.handle}</p>
                        </div>

                        <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-6">
                            <span className="text-white font-medium">Let's Connect</span>
                            <span className="text-white/60 text-sm">Professional Network</span>
                        </div>

                        {/* Background Icon */}
                        <Linkedin className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </motion.a>

                    {/* GitHub Card */}
                    <motion.a
                        href={github.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative h-80 rounded-3xl bg-[#181717] border border-white/10 overflow-hidden flex flex-col justify-between p-8 hover:scale-[1.02] transition-transform duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="text-white w-8 h-8" />
                        </div>

                        <div className="relative z-10">
                            <Github className="w-16 h-16 text-white mb-4" />
                            <h3 className="text-3xl font-bold text-white">GitHub</h3>
                            <p className="text-gray-400 mt-2 font-mono">{github.handle}</p>
                        </div>

                        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6">
                            <span className="text-white font-medium">View Code</span>
                            <span className="text-gray-500 text-sm">Open Source</span>
                        </div>

                        {/* Background Icon */}
                        <Github className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default Socials
