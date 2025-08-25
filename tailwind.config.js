/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // <-- YEH LINE ADD KARNI HAI
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "honda-red": "#e60012",
        "honda-dark": "#1a1a1a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
