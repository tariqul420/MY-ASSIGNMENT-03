/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        green: "#ABEF5F",
        heading: "#212121",
        "heading-2": "#494949",
        "heading-d": "#fff",
        "paragraph-1": "#494949",
        "paragraph-2": "#737373",
        "paragraph-d": "#ffffffa6",
        "aqua-marine": "#44deb7",
      },
      backgroundImage: {
        'contact-texture': "url('/assets/bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
