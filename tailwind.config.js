/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // primary: "#5CC8FF",
      // bgColor: "#E0E0E0",
      // buttonColor: "#FFA500",
      // linkColor: "#003366",
      linkColor: "#1A537B",
      // accentColor: "#A8FF5C",
      // textColor2: "#FBBF24",
      // textColor: "#6B7280",
      // bgColorSec: "#F9FAFB",
      // secondary: "#003366",
      // secondary2: "#C7D3B1",
      // primary: "#5B82F9",

      bgColor: "#f3f4f4",
      lightGray: "#b3b4b4",
      verylightGray: "#d9dbe4",
      bgDarkColor1: "#01152A",
      bgDarkColor: "#1764a3",
      lightBlue: "#70CCFD",
      purple: "#5D659A",
      Darkgray: "#404D5B",
      primary: "#489FD4",
      primary2: "#1c7cc8",
      primaryHover: "#5CC8FF",
      lightPrimary: "#AACBDB",
      accentColor: "HSL(40, 74%, 60%)",
      lightShade: "rgba(112, 204, 253, 0.1)",
      // #fcb936
    },
    maxWidth: {
      custom: "1500px",
      custom2: "1200px",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      card: "0 10px 15px -3px rgba(112, 204, 253, 0.2), 0 4px 6px -2px rgba(112, 204, 253, 0.1)",
    },

    screens: {
      xxm: "360px",
      xm: "413px",
      m: "538px",
      sm: "640px",
      md: "768px",
      ml: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
