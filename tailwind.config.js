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
        theme1: {
          1: "#0d1b2a",
          2: "#1b263b",
          3: "#415a77",
          4: "#778da9",
          5: "#e0e1dd",
        },
        theme2: {
          1: "#2C3333",
          2: "#395B64",
          3: "#A5C9CA",
          4: "#E7F6F2",
          5: "#",
        },
        theme3: {
          1: "#051622",
          2: "#1ba098",
          3: "#deb992",
          4: "#",
          5: "#",
        },
        theme4: {
          1: "#",
          2: "#",
          3: "#",
          4: "#",
          5: "#",
        },
        theme5: {
          1: "#",
          2: "#",
          3: "#",
          4: "#",
          5: "#",
        },
        theme6: {
          1: "#",
          2: "#",
          3: "#",
          4: "#",
          5: "#",
        },
        theme7: {
          1: "#",
          2: "#",
          3: "#",
          4: "#",
          5: "#",
        },
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
