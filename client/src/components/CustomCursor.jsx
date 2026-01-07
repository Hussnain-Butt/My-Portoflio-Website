import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const mouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button')
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseover', mouseOver)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
            window.removeEventListener('mouseover', mouseOver)
        }
    }, [])

    // Hide default cursor on body via CSS in index.css is recommended, but for now we overlays
    // Actually, setting 'cursor-none' in body is better.

    return (
        <>
            <style>{`
        body { cursor: none; }
        a, button { cursor: none; }
      `}</style>

            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
            />

            {/* Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 1 : 0.5,
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            />
        </>
    )
}

export default CustomCursor
