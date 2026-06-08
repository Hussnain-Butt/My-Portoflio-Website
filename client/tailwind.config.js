/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        primary: '#c4b5fd', // Existing highlight color (kept for backwards-compat)
        // Brand accents for the AI/ML focus
        accent: {
          DEFAULT: '#a855f7', // purple-500
          glow: '#c084fc',
          cyan: '#22d3ee',
        },
        ink: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#111113',
        },
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(168, 85, 247, 0.45)',
        'glow-sm': '0 0 24px -6px rgba(168, 85, 247, 0.35)',
        'glow-cyan': '0 0 40px -8px rgba(34, 211, 238, 0.4)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(168,85,247,0.12), transparent 60%)',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        blink: 'blink 1s steps(1) infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
