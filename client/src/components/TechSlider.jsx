// src/components/TechSlider.js

import React from 'react'

const TECHNOLOGIES = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'Framer Motion',
  'Three.js',
  'Docker',
  'AWS',
  'GraphQL',
  'Redux',
  'Zustand',
  'OpenAI API',
  'Figma',
  'Git',
]

function TechSlider() {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-black border-y border-white/5">
      {/* Left Fade */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

      {/* Right Fade */}
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Track */}
      <div className="flex items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {/* Repeating the array 4 times to ensure no gaps on large screens */}
        {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
          <div key={index} className="inline-flex items-center mx-6 sm:mx-8 group cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_10px_#a855f7] transition-all duration-300"></span>
            <span className="text-gray-400 text-lg sm:text-xl font-medium tracking-wide group-hover:text-white transition-colors duration-300">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechSlider
