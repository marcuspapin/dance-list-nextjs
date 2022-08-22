module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './ui-library/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#7F5AF0',
      secondary: '#2CB67D',
      danger: '#EF4565',
      success: '#2CB67D',
      gray: '#94A1B2',
      dark: '#16161A',
      light: '#FFFFFE',
      primaryHover: 'rgba(127, 90, 240, 0.7)',
      secondaryHover: 'rgba(42, 182, 175, 0.7)',
    },
    fontSize: {
      small: '0.75rem',
      regular: '1rem',
      base: '1.125rem',
      h6: '1.125rem',
      h5: '1.33rem',
      h4: '1.78rem',
      h3: '2.37rem',
      h2: '3.15rem',
      h1: '4.2rem',
    },
    extend: {
      fontFamily: {
        sans: ['Karla'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
