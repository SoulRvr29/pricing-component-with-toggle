/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        Gradient1: "hsl(236, 72%, 79%)",
        Gradient2: "hsl(237, 63%, 64%)",
        VeryLightGrayishBlue: "hsl(240, 78%, 98%)",
        LightGrayishBlue: "hsl(234, 14%, 74%)",
        GrayishBlue: "hsl(233, 13%, 49%)",
        DarkGrayishBlue: "hsl(232, 13%, 33%)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        normal: "15px",
      },
      backgroundImage: {
        "bg-top": "url(./images/bg-top.svg)",
        "bg-bottom": "url(./images/bg-bottom.svg)",
      },
    },
  },
  plugins: [],
};
