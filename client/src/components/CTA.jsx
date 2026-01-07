import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
    return (
        <section className="bg-black py-0 relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row min-h-[400px]">
                    {/* LEFT COLUMN: CONTEXT */}
                    <div className="w-full md:w-1/2 py-24 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between pr-0 md:pr-12">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-mono uppercase tracking-wider mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                Available for new projects
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                Let's build something <br />
                                <span className="text-gray-500">meaningful.</span>
                            </h2>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed mt-12 max-w-md">
                            I help ambitious brands and startups create digital experiences that stand out. From concept to code, I handle the details.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: ACTION */}
                    <div className="w-full md:w-1/2 py-24 pl-0 md:pl-12 flex flex-col justify-center items-start">
                        <motion.a
                            href="#contact"
                            className="group relative w-full block"
                            whileHover="hover"
                        >
                            <div className="flex items-center justify-between py-8 border-b border-white/20 group-hover:border-white transition-colors">
                                <span className="text-3xl md:text-5xl font-light text-white group-hover:text-purple-400 transition-colors">
                                    Start a Project
                                </span>
                                <motion.div
                                    variants={{
                                        hover: { x: 10, rotate: -45 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-white group-hover:text-purple-400 transition-colors" />
                                </motion.div>
                            </div>
                        </motion.a>

                        <motion.div
                            className="mt-12 flex flex-col gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <a href="mailto:muhammadhussaininfo1@gmail.com" className="text-gray-500 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider">
                                muhammadhussaininfo1@gmail.com
                            </a>
                            <a href="tel:+1234567890" className="text-gray-500 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider">
                                +92 (328) 4842596
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
