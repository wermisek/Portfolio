/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
        accent: "#F59E0B",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#4F46E5",
          secondary: "#10B981",
          accent: "#F59E0B",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#4F46E5",
          secondary: "#10B981",
          accent: "#F59E0B",
        },
      },
    ],
  },
} 