import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import axios from 'axios'

const API_URL = 'http://localhost:5000'

const ProjectItem = ({ project, index, setModal }) => {
  return (
    <Link
      to={`/project/${project._id}`}
      className="group block w-full border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer py-12 md:py-20"
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
    >
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col gap-2 transition-transform duration-500 group-hover:-translate-x-2">
          <h3 className="text-3xl md:text-6xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-4 text-gray-500 group-hover:text-gray-300">
            <span className="font-mono text-xs uppercase tracking-widest">{project.role}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-widest">{project.year}</span>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex gap-4 items-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-x-2">
          <div className="flex flex-wrap gap-2 justify-end max-w-[200px] mb-2 md:mb-0">
            {project.tags?.slice(0, 2).map((tag, i) => (
              <span key={i} className="text-[10px] uppercase font-mono border border-white/20 rounded-full px-2 py-1 text-gray-500">
                {tag}
              </span>
            ))}
          </div>
          <span className="hidden md:block text-sm font-bold uppercase tracking-widest text-white">View Case</span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white text-black">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  )
}

const Modal = ({ modal, items }) => {
  const { active, index } = modal

  // Smooth mouse follow logic
  const ref = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      setMouse({ x: clientX, y: clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <AnimatePresence>
      {active && items[index] && (
        <motion.div
          ref={ref}
          className="fixed top-0 left-0 h-[350px] w-[450px] rounded-2xl overflow-hidden pointer-events-none z-50 hidden md:block"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            x: mouse.x - 225, // Center horizontal
            y: mouse.y - 175  // Center vertical
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
          <div className="relative h-full w-full bg-neutral-900 border border-white/10 p-2">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              {items.map((project, i) => (
                <div
                  key={project._id || i}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === i ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover grayscale transition-transform duration-700"
                  />
                  {/* Overlay Gradient for professionalism */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-sm">
                      View Project
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ProfessionalWork = () => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${API_URL}/projects`)
        setProjects(res.data)
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError('Failed to load projects')
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="bg-black py-32 relative">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
        </div>
      </section>
    )
  }

  if (error || projects.length === 0) {
    return (
      <section id="projects" className="bg-black py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p className="text-gray-500">{error || 'No projects available'}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="bg-black py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl mb-20 flex flex-col md:flex-row justify-between items-end">
        <div>
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
            Selected Works
          </span>
          <h2 className="mt-4 text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Cases</span>.
          </h2>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-gray-500 text-sm font-mono max-w-xs">
            Interact with the list to explore the visual identity of each project.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        {projects.map((project, index) => (
          <ProjectItem
            key={project._id}
            index={index}
            project={project}
            setModal={setModal}
          />
        ))}
      </div>

      <Modal modal={modal} items={projects} />
    </section>
  )
}

export default ProfessionalWork
