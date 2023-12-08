/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dBlued: "hsl(209, 23%, 22%)",
        vDBlued: "hsl(207, 26%, 17%)",
        vDBlueL: "hsl(200, 15%, 8%)",
        dGrayL: "hsl(0, 0%, 52%)",
        vLGrayL: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "our-grid": "repeat(auto-fill, minmax(280px, 280px))",
      },
    },
  },
  plugins: [],
};
// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
