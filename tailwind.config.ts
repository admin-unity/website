import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // UnityForLife Brand Colors
        'unity-navy': '#1E3A8A',
        'compassion-red': '#DC2626',
        'hope-green': '#059669',
        // Extended blue palette for brand consistency
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a', // Unity Navy
        },
        // Extended red palette for CTAs
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626', // Compassion Red
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Extended green palette for hope/success
        green: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669', // Hope Green
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },

    },
  },
  safelist: [
    // Custom design tokens
    'max-w-container',
    
    // UnityForLife Brand Colors (all utility combinations)
    'text-deep-navy', 'bg-deep-navy', 'border-deep-navy',
    'text-patriotic-red', 'bg-patriotic-red', 'border-patriotic-red',
    'text-healing-green', 'bg-healing-green', 'border-healing-green',
    'text-soft-white', 'bg-soft-white', 'border-soft-white',
    'text-steel-gray', 'bg-steel-gray', 'border-steel-gray',
    
    // Hover variants for brand colors
    'hover:text-deep-navy', 'hover:bg-deep-navy', 'hover:border-deep-navy',
    'hover:text-patriotic-red', 'hover:bg-patriotic-red', 'hover:border-patriotic-red',
    'hover:text-healing-green', 'hover:bg-healing-green', 'hover:border-healing-green',
    'hover:text-soft-white', 'hover:bg-soft-white', 'hover:border-soft-white',
    'hover:text-steel-gray', 'hover:bg-steel-gray', 'hover:border-steel-gray',
    
    // Grid column spans for Col component (ALL possible combinations)
    'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6',
    'col-span-7', 'col-span-8', 'col-span-9', 'col-span-10', 'col-span-11', 'col-span-12',
    
    // Responsive variants for Col component
    'sm:col-span-1', 'sm:col-span-2', 'sm:col-span-3', 'sm:col-span-4', 'sm:col-span-5', 'sm:col-span-6',
    'sm:col-span-7', 'sm:col-span-8', 'sm:col-span-9', 'sm:col-span-10', 'sm:col-span-11', 'sm:col-span-12',
    'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-4', 'md:col-span-5', 'md:col-span-6',
    'md:col-span-7', 'md:col-span-8', 'md:col-span-9', 'md:col-span-10', 'md:col-span-11', 'md:col-span-12',
    'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-5', 'lg:col-span-6',
    'lg:col-span-7', 'lg:col-span-8', 'lg:col-span-9', 'lg:col-span-10', 'lg:col-span-11', 'lg:col-span-12',
    'xl:col-span-1', 'xl:col-span-2', 'xl:col-span-3', 'xl:col-span-4', 'xl:col-span-5', 'xl:col-span-6',
    'xl:col-span-7', 'xl:col-span-8', 'xl:col-span-9', 'xl:col-span-10', 'xl:col-span-11', 'xl:col-span-12',
    
    // Row component gap classes
    'gap-0', 'gap-2', 'gap-4', 'gap-6', 'gap-8',
    
    // Section component variant classes
    'bg-surface-light', 'bg-surface-dark', 'bg-surface-muted',
    
    // Section component alignment classes
    'items-start', 'items-center', 'items-end',
    'text-left', 'text-center', 'text-right',
    
    // Layout primitive spacing classes
    'py-space-xs', 'py-space-sm', 'py-space-md', 'py-space-lg', 'py-space-xl', 'py-space-2xl', 'py-space-3xl',
    'px-space-xs', 'px-space-sm', 'px-space-md', 'px-space-lg', 'px-space-xl', 'px-space-2xl', 'px-space-3xl',
    
    // Common layout classes
    'flex', 'flex-col', 'grid', 'grid-cols-12',
  ],
  plugins: [],
};

export default config; 