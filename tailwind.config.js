/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}", "./index.html"],
  theme: {
    colors: {
      orangebq: "#f05b1b",
      whitebq: "#ffffff",
      creambq: "#f8e182",
      dullorangebq: "#f59b3e",
      darkorangebq: "#d26624",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1900px",
      // => @media (min-width: 2050px) { ... }
    },
    extend: {
      fontSize: {
        "10xl": "11rem",
      },
    },
  },
  plugins: [],
};
