/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlusJakartaSans: ['"Plus Jakarta Sans"', "sans-serif"],
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        theme: {
          brandblue: {
            dark: "#081F5C",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
