module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('img/sky-wallpaper1.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
