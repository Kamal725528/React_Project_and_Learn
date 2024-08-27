/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add any custom dark mode colors if needed
        'dark-background': '#1a202c',
        'dark-text': '#e2e8f0',
      },
    },
  },
  plugins: [],
}

