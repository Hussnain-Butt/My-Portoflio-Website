import React from 'react'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../constants'

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-black py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                        Social Proof
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Clients</span>.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:bg-white/10 transition-colors"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-2 text-6xl text-purple-500/20 font-serif leading-none">
                                "
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                                {testimonial.text}
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
