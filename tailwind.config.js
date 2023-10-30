/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      
      {
        mytheme: {
          "color-scheme": "dark",
          "primary": "#60a5fa",
          "secondary": "#818CF8",
          "accent": "#F471B5",
          "neutral": "#1E293B",
          "neutral-focus": "#273449",
          "base-100": "#0F172A",
          "info": "#0CA5E9",
          "info-content": "#000000",
          "success": "#2DD4BF",
          "warning": "#F4BF50",
          "error": "#FB7085",

          "--rounded-btn": "1.9rem",
          "--tab-border": "2px",
          "--tab-radius": ".5rem",
        },
      },
      ],
  },
}
