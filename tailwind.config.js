/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color1: "#112230",
        color2: "#0d4e69",
        color3: "#098ab1",
        color4: "#07d1ff",
        color5: "#0ffff8",

        colorText:'#e9e8e8'
      },
      fontFamily:{
        poppins:'Poppins'
      }
      
    },
  },
  plugins: [],
};
