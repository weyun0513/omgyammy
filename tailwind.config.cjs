/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#ffd966',  // 你可以替換這個顏色為你想要的顏色
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
