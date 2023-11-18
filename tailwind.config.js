/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
            './src/**/*.{vue,js,ts}' ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      
      {
        mytheme: {
           "color-scheme": "dark",
           'primary' : '#60a5fa',           
           'secondary' : '#e879f9',           
           'accent' : '#2dd4bf',           
           'neutral' : '#2a2e37',           
           'base-100' : '#3b424e',
           'base-200' : '#2a2e37',
           'base-300' : '#16181d',
           'base-content' : '#ebecf0',
           'info' : '#66c7ff',
           'success' : '#87cf3a',
           'warning' : '#e1d460',
           'error' : '#ff6b6b',

          '--rounded-box': '1rem',          
          '--rounded-btn': '100vh',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',        
        },
      },
      ],
  },
}

