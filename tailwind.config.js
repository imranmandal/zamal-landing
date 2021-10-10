module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#233E8B",
        secondary: "#28FFBF",
        main: "#1EAE98",
      },
      backgroundColor: {
        primary: "#28FFBF",
        secondary: "#A9F1DF",
        main: "#233E8B",
      },
      zIndex: {
        "-10": "-10",
      },
      backgroundImage: {
        "hero-image": "url('/assets/HeroImage.jpg')",
      },
      borderColor: (theme) => ({
        primary: "#28FFBF",
      }),
      screens: {
        xl: { max: "1279px" },
        lg: { min: "766px", max: "1023px" },
        md: { min: "638px", max: "767px" },
        sm: { max: "639px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
