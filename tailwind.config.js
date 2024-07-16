/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ee2a6d",
        secondary: "#27bcec",
      },
      backgroundColor: {
        primary: "#ee2a6d",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
