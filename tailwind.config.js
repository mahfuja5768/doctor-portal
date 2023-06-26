/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#03B8D7",
          secondary: "#05806D",
          accent: "#3A4256",

          neutral: "#3b8bc4",

          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
