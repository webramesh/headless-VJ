/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('tailwind-hamburgers')],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        pic1: "url('/pic1.png')",
        pic2: "url('/pic2.png')",
        pic3: "url('/pic3.png')",
        pic4: "url('/pic4.png')",
        pic11: "url('/pic11.png')",
        pic22: "url('/pic22.png')",
        pic33: "url('/pic33.png')",
        pic44: "url('/pic44.png')",
      },
    },
  },
  plugins: [],
};
