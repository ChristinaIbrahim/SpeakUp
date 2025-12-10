/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

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
