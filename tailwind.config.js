/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{html,ts}"],
  plugins: {
    daisyui: {},

  },
   theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  }
};
