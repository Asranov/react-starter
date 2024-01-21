/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "blue",
        secondary: "green",
        disabled: "gray",
        danger: "red",
      },
    },
  },
  plugins: [],
};
