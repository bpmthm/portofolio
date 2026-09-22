/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0c0c0e',
        darker: '#070708',
        card: '#141417',
        light: '#F5F5F5',
        muted: '#8E8E93',
        accent: {
          DEFAULT: '#D9381E',
          hover: '#FF462B',
          glow: 'rgba(217, 56, 30, 0.35)',
        },
      },
      fontFamily: {
        heading: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(217, 56, 30, 0.15) 0%, transparent 65%)',
      },
      boxShadow: {
        'accent-glow': '0 0 25px -5px rgba(217, 56, 30, 0.4)',
        'card-glow': '0 0 40px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
