import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Loader2 } from 'lucide-react'
import axios from 'axios'

const API_URL = 'http://localhost:5000'

const ProjectDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState(null)
    const [allProjects, setAllProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])
    const opacity = useTransform(scrollY, [0, 500], [1, 0])

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true)
                setError(null)

                // Fetch single project
                const projectRes = await axios.get(`${API_URL}/projects/${id}`)
                setProject(projectRes.data)

                // Fetch all projects for navigation
                const allRes = await axios.get(`${API_URL}/projects`)
                setAllProjects(allRes.data)
            } catch (err) {
                console.error('Error fetching project:', err)
                setError('Project not found')
            } finally {
                setLoading(false)
            }
        }

        fetchProject()
    }, [id])

    // Get next project for navigation
    const getNextProject = () => {
        if (allProjects.length === 0) return null
        const currentIndex = allProjects.findIndex(p => p._id === id)
        const nextIndex = currentIndex >= allProjects.length - 1 ? 0 : currentIndex + 1
        return allProjects[nextIndex]
    }

    if (loading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            </div>
        )
    }

    if (error || !project) {
        return (
            <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
                <p className="text-xl text-gray-400 mb-4">{error || 'Project not found'}</p>
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                </button>
            </div>
        )
    }

    const nextProject = getNextProject()

    return (
        <div className="bg-black min-h-screen text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors uppercase tracking-widest font-bold text-sm"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                </button>
            </nav>

            {/* Hero Section */}
            <header className="relative w-full h-[70vh] flex items-end pb-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-20">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 text-sm font-mono text-gray-300 border-t border-white/20 pt-8 w-full max-w-3xl">
                            <div>
                                <span className="block text-gray-500 text-xs uppercase mb-1">Role</span>
                                {project.role}
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase mb-1">Year</span>
                                {project.year}
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs uppercase mb-1">Client</span>
                                {project.client}
                            </div>

                            {/* Action Buttons */}
                            <div className="ml-auto flex flex-col sm:flex-row gap-4 items-end sm:items-center">
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition-all text-xs uppercase tracking-wider font-bold shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        Live Demo
                                    </a>
                                )}

                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-black px-4 py-2 rounded-full transition-all text-xs uppercase tracking-wider font-bold"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        View Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-7xl py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Narrative */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Challenge */}
                        {project.challenge && (
                            <section>
                                <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-6">The Challenge</h3>
                                <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-light">
                                    {project.challenge}
                                </p>
                            </section>
                        )}

                        {/* Solution */}
                        {project.solution && (
                            <section>
                                <h3 className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-6">My Solution</h3>
                                <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-light mb-8">
                                    {project.solution}
                                </p>
                                {project.impact && (
                                    <ul className="space-y-4 border-l-2 border-purple-500/20 pl-6">
                                        {project.impact.split('.').map((point, i) => (
                                            point.trim() && (
                                                <li key={i} className="text-gray-400 text-sm md:text-base">
                                                    {point.trim()}.
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                )}
                            </section>
                        )}

                        {/* Gallery Grid */}
                        {project.gallery && project.gallery.length > 0 && (
                            <section className="space-y-6">
                                <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest">Project Gallery</h3>
                                <div className="grid grid-cols-1 gap-8">
                                    {project.gallery.map((img, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
                                        >
                                            <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="sticky top-24 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="text-white font-bold text-lg mb-6">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 text-xs font-mono bg-black/50 border border-white/10 text-gray-300 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.timeline && (
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h4 className="text-gray-500 text-xs uppercase mb-2">Timeline</h4>
                                    <p className="text-white font-mono text-sm">{project.timeline}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Next Project Nav */}
                {nextProject && (
                    <section
                        className="mt-32 pt-20 border-t border-white/10 flex justify-between items-center group cursor-pointer"
                        onClick={() => {
                            navigate(`/project/${nextProject._id}`);
                            window.scrollTo(0, 0);
                        }}
                    >
                        <div>
                            <span className="block text-gray-500 text-xs uppercase mb-2 group-hover:text-purple-400 transition-colors">Next Project</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                                {nextProject.title}
                            </h2>
                        </div>
                        <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10" />
                        </div>
                    </section>
                )}
            </main>

            <footer className="py-8 text-center text-gray-600 text-xs border-t border-white/5">
                &copy; {new Date().getFullYear()} {project.title} - Case Study
            </footer>
        </div>
    )
}

export default ProjectDetails
