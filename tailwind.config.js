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
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        // Hero Section Animations
        'magnetic-pull': 'magneticPull 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'typewriter': 'typewriter 2s steps(40, end) 0.5s both',
        'glitch': 'glitchEffect 0.3s ease-in-out',
        'morphing-float': 'morphingFloat 8s ease-in-out infinite',
        
        // Services Section Animations
        'wave-ripple': 'waveRipple 2s ease-out infinite',
        'card-flip': 'cardFlip 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'number-count': 'numberCount 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        
        // Projects Section Animations
        'tilt-3d': 'tiltIn3D 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'project-hover': 'projectHover 0.6s ease-out forwards',
        'image-zoom': 'imageZoom 0.8s ease-in-out',
        
        // About Section Animations
        'spiral-in': 'spiralIn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'stat-counter': 'statCounter 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        
        // Contact Section Animations
        'elastic-bounce': 'elasticBounce 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'form-slide': 'formSlide 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        
        // FAQ Section Animations
        'accordion-wave': 'accordionWave 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        
        // Footer Section Animations
        'cascade-up': 'cascadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        
        // Legacy animations
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        // Hero Section Keyframes
        magneticPull: {
          '0%': { opacity: '0', transform: 'scale(0.3) rotate(-180deg) translateY(-100px)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1) rotate(-90deg) translateY(-20px)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg) translateY(0)' },
        },
        typewriter: {
          'from': { width: '0', opacity: '0' },
          'to': { width: '100%', opacity: '1' },
        },
        glitchEffect: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        morphingFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)', borderRadius: '50%' },
          '25%': { transform: 'translateY(-20px) rotate(90deg) scale(1.1)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '50%': { transform: 'translateY(-40px) rotate(180deg) scale(0.9)', borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%' },
          '75%': { transform: 'translateY(-20px) rotate(270deg) scale(1.05)', borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%' },
        },
        
        // Services Section Keyframes
        waveRipple: {
          '0%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' },
          '100%': { opacity: '0', transform: 'scale(2) rotate(360deg)' },
        },
        cardFlip: {
          '0%': { opacity: '0', transform: 'rotateY(-90deg) translateZ(-100px)' },
          '50%': { opacity: '0.5', transform: 'rotateY(-45deg) translateZ(-50px)' },
          '100%': { opacity: '1', transform: 'rotateY(0deg) translateZ(0)' },
        },
        numberCount: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1.3) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' },
        },
        
        // Projects Section Keyframes
        tiltIn3D: {
          '0%': { opacity: '0', transform: 'perspective(1000px) rotateX(-90deg) rotateY(45deg) translateZ(-200px)' },
          '50%': { opacity: '0.7', transform: 'perspective(1000px) rotateX(-45deg) rotateY(22deg) translateZ(-100px)' },
          '100%': { opacity: '1', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)' },
        },
        projectHover: {
          '0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)' },
          '100%': { transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(20px)' },
        },
        imageZoom: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(2deg)' },
          '100%': { transform: 'scale(1.05) rotate(-1deg)' },
        },
        
        // About Section Keyframes
        spiralIn: {
          '0%': { opacity: '0', transform: 'rotate(-360deg) scale(0) translateY(-100px)' },
          '50%': { opacity: '0.6', transform: 'rotate(-180deg) scale(0.7) translateY(-50px)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1) translateY(0)' },
        },
        statCounter: {
          '0%': { transform: 'scale(0.5) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' },
        },
        
        // Contact Section Keyframes
        elasticBounce: {
          '0%': { opacity: '0', transform: 'scale(0.3) translateY(-50px)' },
          '20%': { transform: 'scale(1.1) translateY(10px)' },
          '40%': { transform: 'scale(0.9) translateY(-5px)' },
          '60%': { transform: 'scale(1.05) translateY(3px)' },
          '80%': { transform: 'scale(0.98) translateY(-1px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        formSlide: {
          '0%': { opacity: '0', transform: 'translateX(-100px) skewX(-10deg)' },
          '50%': { opacity: '0.7', transform: 'translateX(-20px) skewX(-5deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) skewX(0deg)' },
        },
        
        // FAQ Section Keyframes
        accordionWave: {
          '0%': { opacity: '0', transform: 'scaleY(0) translateY(-20px)', transformOrigin: 'top' },
          '50%': { opacity: '0.7', transform: 'scaleY(0.5) translateY(-10px)' },
          '100%': { opacity: '1', transform: 'scaleY(1) translateY(0)' },
        },
        
        // Footer Section Keyframes
        cascadeUp: {
          '0%': { opacity: '0', transform: 'translateY(100px) rotateX(90deg)' },
          '50%': { opacity: '0.6', transform: 'translateY(20px) rotateX(45deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotateX(0deg)' },
        },
        
        // Legacy keyframes
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
