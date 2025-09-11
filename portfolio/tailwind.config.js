/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable toggling via class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Base Palette
        'dark-bg': '#0f172a',         // main background
        'dark-bg-secondary': '#1e293b', // panels/cards
        'dark-bg-accent': '#111827',  // subtle accent in dark mode

        // Glowing Accent Colors
        'glow-cyan': '#06b6d4',
        'glow-blue': '#3b82f6',
        'glow-purple': '#8b5cf6',
        'glow-magenta': '#ec4899',

        // Text Colors
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
      },
      boxShadow: {
        'glow-cyan': '0 0 8px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-blue': '0 0 8px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 8px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-magenta': '0 0 8px rgba(236, 72, 153, 0.5), 0 0 20px rgba(236, 72, 153, 0.3)',
      },
      backgroundImage: {
        'dark-radial': 'radial-gradient(circle at 20% 30%, #0f172a, #111827)',
        'dark-gradient': 'linear-gradient(135deg, #0f172a, #1e293b)',
      }
    },
  },
  plugins: [],
}
