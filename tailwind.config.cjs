/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "hsl(223, 87%, 63%)",
      "pale-blue": "hsl(223, 100%, 88%)",
      "light-red": "hsl(354, 100%, 66%)",
      gray: "hsl(0, 0%, 59%)",
      "very-dark-blue": "hsl(209, 33%, 12%)",
    },
    fontFamily: {
      Libre: ["Libre Franklin"],
    },
    fontSize: {
      fs: "20px",
    },
    fontWeight: {
      light: "300",
      semibold: "600",
      bold: "700",
    },
    extend: {},
  },
  plugins: [],
};
