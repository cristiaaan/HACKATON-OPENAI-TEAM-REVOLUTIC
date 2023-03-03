/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
      },
    },
    colors: {
      "light": "white",
      "dark": "#111",
      "soft": "#AAA",
      "back-dark": "#222",
      "back-light": "#f8f8f8",
      "accent": "#ffc438",
      "primary": "#0f70e6",
      "primary-light": "#5097ee"
    }
  },
  plugins: [],
}
