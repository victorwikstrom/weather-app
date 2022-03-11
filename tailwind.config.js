module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    text: {
      xl: '3rem',
      lg: '2rem',
      md: '1.5rem',
      sm: '0.875rem'
    },
    colors: {
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
    }
  },
  plugins: [],
}