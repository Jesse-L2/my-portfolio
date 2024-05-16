/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#003C43",
        "secondary-bg": "#135D66",
        "tertiary-bg": "#77B0AA",
        "light-bg": "#E3FEF7",
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
