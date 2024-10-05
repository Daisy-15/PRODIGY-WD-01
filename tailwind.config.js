/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './*.html',   // Scans all HTML files inside the views folder
    './public/js/*.js',    // If you have any JavaScript files to scan
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

