/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_bg: '#f8f9fa',
        accent_btn: '#e67e22',
        primary_heading: '#2d3748',
        secondary_text: '#2c3e50',
      },
      fontFamily: {
        roboto_mono: ['Roboto Mono', 'monospace'],
        saira: ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
