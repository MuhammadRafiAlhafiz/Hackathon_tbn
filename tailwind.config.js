/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hijau: "#C9D32C",
        foundation: "#FEFFD9",
        blue_invest: "#E6F6E7",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};
