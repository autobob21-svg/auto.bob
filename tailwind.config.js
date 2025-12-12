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
          DEFAULT: '#1E40AF', // Deep Blue
          dark: '#172554',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#000000', // Black
          light: '#1F2937', // Gray-800
        },
        accent: {
          DEFAULT: '#DC2626', // Bright Red
          hover: '#B91C1C', // Darker Red
          light: '#EF4444',
        },
        text: {
          dark: '#1F2937',
          light: '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #1E40AF 100%)',
        'blue-black': 'linear-gradient(180deg, #1E40AF 0%, #000000 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}