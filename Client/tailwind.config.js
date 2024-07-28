/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: " 'Pacifico', cursive",
        header: "'Sigmar', cursive",
        text: "'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
};
