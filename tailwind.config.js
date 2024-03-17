/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      // primary: "#FF260F",
      primary: {
        DEFAULT: "#FF260F",
        dark: "#C71F0B", // Dark mode variant for primary
      },
      black: "#0A0A0A",
      gray: "#7B7B7B",
      "light-gray": "#F8F8F8",
      white: "#FFFFFF",
      gradient: "#FC321C",
      dark: "#161616",
      "inner-dark": "#2A2A2A",
      customRed: "#FC321C",
      customIndigo: "#B3308D",
    },
  },
  plugins: [],
  darkMode: "class",
};
