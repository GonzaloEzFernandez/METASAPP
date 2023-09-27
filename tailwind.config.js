/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        MainPart: "64px"
      }
    },
  },
  plugins: [require('tailwind-neumorphism')],
}

