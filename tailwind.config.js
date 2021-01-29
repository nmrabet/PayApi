module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#eef3f9",
        secondary: "#d2dbe4",
        third: "#1c262f",
        fourth: "#ba4270",
        sixth: "#7a7f85",
        seventh: "#37526d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
