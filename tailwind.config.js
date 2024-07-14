/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        customBgColor: "#fef6e4",
      },
    },
    daisyui: {
      themes: [],
    },
  },
  plugins: [require("daisyui")],
};
