import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQ_DATA } from '../constants'

const FAQ = () => {
    const [activeId, setActiveId] = useState(null)

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <section id="faq" className="bg-black py-24 relative border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="mb-16 text-center">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                        Common Queries
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Frequently Asked <span className="text-neutral-500">Questions</span>
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${activeId === item.id ? 'bg-white/5 border-purple-500/30' : 'bg-transparent hover:border-white/20'}`}
                        >
                            <button
                                onClick={() => toggleFAQ(item.id)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-medium transition-colors ${activeId === item.id ? 'text-white' : 'text-gray-400'}`}>
                                    {item.question}
                                </span>
                                <span className={`p-2 rounded-full transition-colors ${activeId === item.id ? 'bg-purple-500 text-white' : 'bg-white/5 text-gray-500'}`}>
                                    {activeId === item.id ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
