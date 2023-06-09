module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      // nunito: ["nunito", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          400: "#ff0000",
          700: "#641919",
          950: "#0A0000",
        },
        black: "#080808",
        gray: {
          700: "#0D0D0D",
          800: "#101010",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
