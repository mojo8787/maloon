/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SpaceGate official brand palette
        brand: {
          green: '#3B7447',       // Primary brand color - Dark Moderate Green
          'green-t': '#6C9775',   // Green tint (25%)
          'green-s': '#2C5735',   // Green shade (25%)
          gray: '#2B3333',        // Base dark - Very Dark Cyan-Gray
          'gray-t': '#606666',    // Charcoal tint (25%)
          'gray-s': '#202626',    // Charcoal shade (25%)
        },
        // Semantic roles based on brand palette
        primary: '#3B7447',        // brand-green
        'primary-dark': '#2C5735', // green-shade-25
        'primary-light': '#6C9775', // green-tint-25
        dark: '#2B3333',           // brand-gray
        'dark-light': '#606666',   // gray-tint-25
        'dark-dark': '#202626',    // gray-shade-25
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        arabic: ['var(--font-cairo)'],
      },
      direction: {
        rtl: 'rtl',
        ltr: 'ltr',
      },
    },
  },
  plugins: [],
}; 