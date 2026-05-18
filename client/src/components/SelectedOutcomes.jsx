import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const SelectedOutcomes = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${API_URL}/projects`)
                setProjects(res.data.filter((project) => project.impact).slice(0, 3))
            } catch (error) {
                console.error('Error fetching project outcomes:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    if (!loading && projects.length === 0) return null

    return (
        <section className="bg-black py-24 relative overflow-hidden">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                        Selected Outcomes
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Evidence from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">real work</span>.
                    </h2>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="w-7 h-7 text-purple-500 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.article
                                key={project._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                            >
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                                    {project.client || 'Selected project'}
                                </p>
                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{project.impact}</p>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default SelectedOutcomes
