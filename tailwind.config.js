/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '3/5': '60%',
        '2/5': '40%',
      },
    },
  },
  plugins: [],
}

