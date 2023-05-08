/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      image1: "url('./src/assets/images/jpg/imagem1.jpg')",
      image2: "url('./src/assets/images/jpg/imagem2.jpg')",
    },
  },
  plugins: [],
};
