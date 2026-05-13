import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neonpurple: '#a855f7',
        violet: '#7c3aed',
        ink: '#0a0a0a',
        terminal: '#111111'
      },
      boxShadow: {
        neon: '0 0 40px rgba(168,85,247,0.12)',
        glow: '0 0 20px rgba(168,85,247,0.22)',
        strong: '0 0 60px rgba(124,58,237,0.18)'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace']
      },
      animation: {
        pulseglow: 'pulseglow 2.5s ease-in-out infinite',
        blink: 'blink 1.2s steps(2, start) infinite',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        pulseglow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(34,197,94,0.65)' },
          '50%': { boxShadow: '0 0 24px rgba(34,197,94,0.18)' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
