/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  // content: [], <-- not working
  // content: ['./pages/**/*.{js,ts,jsx,tsx}'], <-- not working
  content: ['production/oright/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}