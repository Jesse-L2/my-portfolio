/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    light: "#ddddf9",
    dark: "#161416",
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-grandient(var(--tw-gradient-stops))",
      },
      colors: {
        blueButterfly: {
          50: "#ced4ff",
          100: "#bac2ff",
          200: "#95a0ff",
          300: "#7783ff",
          400: "#626dff",
          500: "#5b61ff",
          600: "#5858e2",
          700: "#5c58b9",
          800: "#565187",
          900: "#3f3c50",
        },

        brightOrange: {
          50: "#ffc8cd",
          100: "#ffaeb0",
          200: "#ff897e",
          300: "#ff7357",
          400: "#ff6a3c",
          500: "#ff6c33",
          600: "#e26a36",
          700: "#b96541",
          800: "#875745",
          900: "#503e38",
        },
        indigoIron: {
          50: "#d9d2df",
          100: "#c4bdcc",
          200: "#9a97a8",
          300: "#737386",
          400: "#535767",
          500: "#393f4d",
          600: "#252c39",
          700: "#161e29",
          800: "#0c131d",
          900: "#050a13",
        },

        lightWater: {
          50: "#d8eee9",
          100: "#cdefea",
          200: "#b7f0eb",
          300: "#a2ece9",
          400: "#8fe3e0",
          500: "#80d0cc",
          600: "#30a691",
          650: "#1abda0",
          700: "#638e86",
          800: "#4d625c",
          900: "#2d3230",
        },
        main: "#519E8A",
        second: "#F8FFE5",
        third: "#456990",
        fourth: "#363457",
        fifth: "#D4C5E2",
        darkMain: "",
        darkSecond: "",
        darkThird: "",
        darkFour: "",
        darkFive: "",
        "light-bg": "#f2f2e6",
        "dark-bg": "#07020a",
        "gradient-stop-1": "#0d1b2a",
        "gradient-stop-2": "#1b263b",
        "gradient-stop-3": "#415a77",
        "gradient-stop-4": "#778da9",
        "gradient-stop-5": "#e0e1dd",
        "light-text": "#feda6a",
        "dark-text": "#1d1e22",
        light: "#ddddf9",
        dark: "#161416",
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
