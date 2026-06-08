import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../constants'

// --- SPOTLIGHT CARD ---
const SpotlightCard = ({ title, items, index }) => {
    const divRef = useRef(null)
    const [isFocused, setIsFocused] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e) => {
        if (!divRef.current) return

        const div = divRef.current
        const rect = div.getBoundingClientRect()

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleFocus = () => {
        setIsFocused(true)
        setOpacity(1)
    }

    const handleBlur = () => {
        setIsFocused(false)
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 px-8 py-10"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.15), transparent 40%)`,
                }}
            />
            <div className="relative z-10">
                <h3 className="mb-8 text-2xl font-bold text-white tracking-tight">{title}</h3>
                <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/5 hover:border-purple-500/50 hover:text-white transition-colors duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

const TechStack = () => {
    return (
        <section className="bg-black py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-24 md:text-center max-w-3xl mx-auto">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                        The Toolbox
                    </span>
                    <h2 className="mt-4 text-5xl md:text-7xl font-bold text-white tracking-tighter">
                        My Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Ecosystem</span>.
                    </h2>
                    <p className="mt-6 text-xl text-gray-400 font-light leading-relaxed">
                        A curated selection of cutting-edge tools and frameworks I use to build scalable, high-performance digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILLS.map((skillGroup, index) => (
                        <SpotlightCard
                            key={index}
                            index={index}
                            title={skillGroup.category}
                            items={skillGroup.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack
