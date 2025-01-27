/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      tajwal: "Tajawal",
    },
    extend: {
      colors: {
        primary: "#125F4F",
        secondary: "#FDD14A",
        bg: "#FBFFFE",
        placeholderText: "#475569",
        border: "#EBEBEB",
      },
    },
  },
  plugins: [],
};
