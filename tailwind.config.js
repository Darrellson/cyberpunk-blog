/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyberpunk-background': '#0f0f0f',
        'cyberpunk-primary': '#ff00cc',
        'cyberpunk-secondary': '#00fff7',
      },
    },
  },
  plugins: [],
};
