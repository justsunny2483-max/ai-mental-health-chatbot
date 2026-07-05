/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6', 
        primaryHover: '#2563eb',
        dark: '#0f172a',
        darker: '#020617',
        card: '#1e293b',
        borderC: '#334155'
      }
    },
  },
  plugins: [],
}
