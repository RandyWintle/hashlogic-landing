/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(173 58% 39%)',
          dark: 'hsl(173 58% 32%)',
          light: 'hsl(173 58% 50%)',
        },
        gold: {
          DEFAULT: 'hsl(43 74% 49%)',
          light: 'hsl(43 74% 60%)',
        },
        background: 'hsl(30 20% 99%)',
        surface: 'hsl(0 0% 100%)',
        'surface-dark': 'hsl(220 20% 10%)',
        text: {
          DEFAULT: 'hsl(220 20% 15%)',
          muted: 'hsl(220 10% 45%)',
          light: 'hsl(220 10% 70%)',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 12px rgba(0,0,0,0.08)',
        'lg': '0 8px 24px rgba(0,0,0,0.12)',
        'xl': '0 12px 40px rgba(0,0,0,0.16)',
        'primary': '0 4px 14px hsl(173 58% 39% / 0.25)',
        'gold': '0 4px 14px hsl(43 74% 49% / 0.3)',
        'glow': '0 0 40px hsl(173 58% 39% / 0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
