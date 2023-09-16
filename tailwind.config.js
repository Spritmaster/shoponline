/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require("daisyui")],
  daisyui: {
    themes: [
    {light: {
      ...require("daisyui/src/theming/themes")["[data-theme=light]"],
      "primary": "#057aff",
      "primary-focus": "mediumblue",
      "base-300":"#394e6a",
      "info":"#fff",
    } } ,
  {
    dark: {
      ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
      "primary": "#ff7ac6",
      "primary-focus": "#ff40ac",
      "base-300":"#fff",
      "info":"#000",
    }  
  }],
  },
}
