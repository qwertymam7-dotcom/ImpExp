/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapping 'corporate' to our primary Deep Green for backward compatibility/ease
        corporate: {
          900: '#064E3B', // Deep Jungle Green
          800: '#065F46', // Dark Green
          700: '#047857', // Emerald
          600: '#059669', // Primary Green
          500: '#10B981',
          100: '#ECFDF5', // Light Green bg
        },
        spice: {
          turmeric: '#F59E0B', // Amber 500
          terracotta: '#C2410C', // Orange 700
          ochre: '#B45309', // Amber 700
          cream: '#FFFBEB', // Amber 50
          soil: '#78350F', // Amber 900
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'], // Added for headings to give a heritage feel
      }
    },
  },
  plugins: [],
}
