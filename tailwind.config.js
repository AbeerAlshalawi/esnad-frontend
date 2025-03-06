/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      baloo: "Baloo Bhaijaan 2",
      noto: "Noto Sans Arabic",
    },
    extend: {
      colors: {
        primary: "#125F4F",
        secondary: "#FDD14A",
        bg: "#FBFFFE",
        placeholderText: "#475569",
        border: "#EBEBEB",
      },
      animation: {
        bounce: "bounce 0.5s infinite",
      },
    },
  },
  plugins: [],
};
