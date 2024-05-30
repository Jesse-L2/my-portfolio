/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-grandient(var(--tw-gradient-stops))",
      },
      colors: {
        "main-bg": "#ffffff",
        "secondary-bg": "",
        "tertiary-bg": "",
        "light-bg": "",
        "gradient-stop-1": "#0d1b2a",
        "gradient-stop-2": "#1b263b",
        "gradient-stop-3": "#415a77",
        "gradient-stop-4": "#778da9",
        "gradient-stop-5": "#e0e1dd",
      },
      fontFamily: {
        montserrat: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
