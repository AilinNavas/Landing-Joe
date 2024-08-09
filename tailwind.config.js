/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        "azulTitulo": '#1D2E3B',
        "celestePrincipal": '#1CBCFF',
        "celesteSecundario": '#2A9DDD',
        "fondoPrincipal": '#F4F9FC',
        "fondoSecundario": '#042C54',
        "grisTexto": '#4D5256'

      }
    },
  },
  plugins: [],
};
