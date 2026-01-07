// src/components/Header.js

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, PERSONAL_INFO } from '../constants'

// --- ANIMATION VARIANTS ---
const menuVariants = {
  hidden: {
    x: '100%',
    transition: { type: 'tween', duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  visible: {
    x: 0,
    transition: { type: 'tween', duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
}

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.08 } },
}

const navLinkVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// --- FLIP MENU ITEM COMPONENT ---
const FlipMenuItem = ({ title, href, onClick }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="group relative overflow-hidden block text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight cursor-pointer py-3 sm:py-4"
      variants={navLinkVariants}
    >
      <div className="relative inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full will-change-transform">
        <span className="block text-white group-hover:text-purple-400 transition-colors leading-tight pb-1">
          {title}
        </span>
        <span className="absolute top-full left-0 block text-purple-400 font-medium leading-tight pb-1">
          {title}
        </span>
      </div>
    </motion.a>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* --- CUSTOM SCROLLBAR STYLES --- */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px; /* Thinner scrollbar */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a855f7;
        }
      `}</style>

      {/* --- HEADER BAR --- */}
      <header
        className={` fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? 'py-4 bg-black/50 backdrop-blur-md border-b border-white/10'
          : 'py-6 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="relative z-50 group cursor-pointer">
            <a
              href="#home"
              className="text-2xl font-bold text-white tracking-wider uppercase font-sans"
            >
              {PERSONAL_INFO.name.split(' ')[1]}
              <span className="text-purple-500 group-hover:text-white transition-colors">.</span>
            </a>
          </div>

          <motion.button
            onClick={toggleMenu}
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-shadow duration-300 z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open menu"
          >
            <div className="w-5 flex flex-col items-center gap-[5px]">
              <span className="w-full h-[2px] bg-black block" />
              <span className="w-full h-[2px] bg-black block" />
              <span className="w-full h-[2px] bg-black block" />
            </div>
          </motion.button>
        </div>
      </header>

      {/* --- SIDE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 h-[100dvh] w-full sm:w-[480px] bg-[#0f0f0f] border-l border-white/10 shadow-2xl z-[70] flex flex-col overflow-hidden"
            >
              {/* TOP: Fixed Header */}
              <div className="flex justify-between items-center p-6 sm:p-10 shrink-0">
                <span className="text-gray-500 text-xs tracking-[0.2em] uppercase font-semibold">
                  Navigation
                </span>
                <motion.button
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* MIDDLE: Scrollable Links */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-10 flex flex-col custom-scrollbar py-4">
                <motion.nav
                  variants={navContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col space-y-1 sm:space-y-2 my-auto"
                >
                  {NAV_LINKS.map((link) => (
                    <FlipMenuItem
                      key={link.title}
                      title={link.title}
                      href={link.href}
                      onClick={toggleMenu}
                    />
                  ))}
                </motion.nav>
              </div>

              {/* BOTTOM: Fixed Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 sm:p-10 border-t border-white/10 shrink-0 bg-[#0f0f0f]"
              >
                <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4">
                  Let's create something together.
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-lg sm:text-2xl text-white font-light hover:text-purple-400 transition-colors break-words"
                >
                  {PERSONAL_INFO.email}
                </a>
                <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-8">
                  {['LinkedIn', 'GitHub'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-500 hover:text-white text-[10px] sm:text-xs uppercase tracking-widest transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

