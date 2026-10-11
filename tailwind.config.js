/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#08090D',
          sidebar: '#0B0D12',
          card: '#0F1218',
          cardInner: '#131720',
          border: 'rgba(255, 255, 255, 0.07)',
          borderHover: 'rgba(255, 255, 255, 0.15)',
          muted: '#717886',
        },
        cyber: {
          orange: '#FF6422',
          orangeGlow: 'rgba(255, 100, 34, 0.25)',
          amber: '#F59E0B',
          cyan: '#00D8F6',
          cyanGlow: 'rgba(0, 216, 246, 0.25)',
          emerald: '#10B981',
          rose: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'orange-glow': '0 0 25px -4px rgba(255, 100, 34, 0.45)',
        'orange-glow-sm': '0 0 12px -2px rgba(255, 100, 34, 0.35)',
        'cyan-glow': '0 0 25px -4px rgba(0, 216, 246, 0.4)',
        'cyan-glow-sm': '0 0 12px -2px rgba(0, 216, 246, 0.3)',
        'card-ambient': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'radar-sweep': 'radarSweep 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
