/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["Noto Sans SC", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif': ["Noto Serif SC", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]
    },
    extend: {},
  },
  plugins: [],
}