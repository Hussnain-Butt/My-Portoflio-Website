import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PERSONAL_INFO } from '../constants'

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // 0 to 100 counter animation
    const duration = 2000 // 2 seconds
    const intervalTime = duration / 100

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          // Wait a bit before unmounting to let user see "100%"
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 500)
          return 100
        }
        return prev + 1
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
    >
      {/* Percentage Counter */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-start"
        >
          <span className="text-8xl md:text-9xl font-bold text-white font-mono tracking-tighter">
            {count}
          </span>
          <span className="text-2xl md:text-3xl text-purple-500 font-mono mt-4 ml-2">
            %
          </span>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-white/10 mt-8 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Status Text for "Tech" feel */}
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          System Initializing...
        </div>
      </div>

      {/* Decorative Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* Corner Brackets for "Professional" look */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-white/20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-white/20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-white/20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-white/20" />

    </motion.div>
  )
}

export default Loader
