module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './ui-library/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#078080',
      secondary: '#F45D48',
      danger: '#EF4565',
      success: '#3FF100',
      dark: '#232323',
      light: '#F8F5F2',
      primaryHover: '#09A9A9',
      secondaryHover: '#F58B57',
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
