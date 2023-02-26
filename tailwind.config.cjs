/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: "375px",
      },
      colors: {
        cCyan: "hsl(179, 62%, 43%)",
        cBrightYellow: "hsl(71, 73%, 54%)",
        cLightGray: "hsl(204, 43%, 93%)",
        cGrayishBlue: "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
