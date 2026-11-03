/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        wii: {
          blue: "#35b6e6",
          ink: "#8a8d91",
          edge: "#c9ccd0",
          bar: "#dcdde0",
        },
      },
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"],
        display: ["Orbitron", "monospace"],
      },
    },
  },
  plugins: [],
};
