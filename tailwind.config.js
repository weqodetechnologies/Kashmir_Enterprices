/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FCB716",
        secondary: "#1a1a1a",
        background: "#ffffff",
      },
    },
  },
  plugins: [],
};
