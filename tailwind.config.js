/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B7ECC4",
        secondary: "#FEEA05",
        yellow: "#FFDD00",
      },
      fontFamily: {
        risque: ["Risque"],
      },
    },
  },
  plugins: [],
};

