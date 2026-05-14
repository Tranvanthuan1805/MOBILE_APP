import type { Config } from 'tailwindcss'

// VibeWP exact orange palette
const orange = {
  50:  '#fff7ed',
  100: '#ffedd5',
  200: '#fed7aa',
  300: '#fdba74',
  400: '#fb923c',
  500: '#f97316',  // VibeWP primary #F97316
  600: '#ea580c',  // VibeWP dark    #EA580C
  700: '#c2410c',
  800: '#9a3412',
  900: '#7c2d12',
  950: '#431407',
}

// VibeWP amber accent
const amber = {
  50:  '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',  // VibeWP accent #F59E0B
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  950: '#451a03',
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: orange,   // remapped → VibeWP orange
        blue:   amber,    // remapped → VibeWP amber
        cyan: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        brand: orange,
        warm:  amber,
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'glow':        'glow 2s ease-in-out infinite alternate',
        'slide-up':    'slideUp 0.6s ease-out forwards',
        'fade-in':     'fadeIn 0.8s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow':  'pulse 4s infinite',
        'spin-slow':   'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(249,115,22,0.4)' },
          '100%': { boxShadow: '0 0 60px rgba(249,115,22,0.8), 0 0 100px rgba(245,158,11,0.4)' },
        },
        slideUp: {
          from: { transform: 'translateY(40px)', opacity: '0' },
          to:   { transform: 'translateY(0)',    opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-hero':  'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #111111 100%)',
        'gradient-brand': 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        'gradient-card':  'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(245,158,11,0.08) 100%)',
        'gradient-glow':  'radial-gradient(ellipse at center, rgba(249,115,22,0.18) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
export default config
