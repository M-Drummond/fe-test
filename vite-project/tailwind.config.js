/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"

export default {
  daisyui: {
    // themes: ['dark'],
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,stories,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
  }
  },
  plugins: [
    require('@tailwindcss/typography'),
    daisyui,
  ],
}