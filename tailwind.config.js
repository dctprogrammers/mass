/** @type {import('tailwindcss').Config} */
// /** @type {import('tw-elements/dist/plugin')} */

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rojo: '#DB2E2E',
        black: '#000000',
        turkey_red: '#A30000',
        maroon: '#800000'
        // primary: {
        //   50: '#F1F5FB',
        //   100: '#E3EBF7',
        //   200: '#C7D7F0',
        //   300: '#ABC2E8',
        //   400: '#8FAEE0',
        //   500: '#6590D5',
        //   600: '#3061AF',
        //   700: '#285192',
        //   800: '#204075',
        //   900: '#183058'
        // },
        // secondary: {
        //   50: '#F8F9F9',
        //   100: '#F1F2F4',
        //   200: '#E4E6E9',
        //   300: '#D6D9DE',
        //   400: '#C8CCD3',
        //   500: '#B3B9C2',
        //   600: '#848D9C',
        //   700: '#6B7585',
        //   800: '#565D6B',
        //   900: '#404650'
        // },
        // success: {
        //   50: '#EAFCF2',
        //   100: '#D6FAE4',
        //   200: '#ACF5C9',
        //   300: '#83F0AE',
        //   400: '#59EA93',
        //   500: '#1CE26B',
        //   600: '#118C42',
        //   700: '#0E7537',
        //   800: '#0C5D2C',
        //   900: '#094621'
        // },
        // danger: {
        //   50: '#FCF2F4',
        //   100: '#FAE5E9',
        //   200: '#F5CCD3',
        //   300: '#F0B2BD',
        //   400: '#EB99A6',
        //   500: '#E37285',
        //   600: '#D42A46',
        //   700: '#B0233A',
        //   800: '#8D1C2F',
        //   900: '#6A1523'
        // },
        // warning: {
        //   50: '#FDF8EF',
        //   100: '#FBF2DE',
        //   200: '#F7E4BE',
        //   300: '#F4D79D',
        //   400: '#F0C97D',
        //   500: '#EAB54C',
        //   600: '#C48A17',
        //   700: '#A37313',
        //   800: '#825C0F',
        //   900: '#62450B'
        // },
        // info: {
        //   50: '#F3FAFC',
        //   100: '#E7F4F9',
        //   200: '#CEE9F2',
        //   300: '#B6DFEC',
        //   400: '#9ED4E6',
        //   500: '#79C4DC',
        //   600: '#34A4CA',
        //   700: '#2B89A8',
        //   800: '#236D86',
        //   900: '#1A5265'
        // }
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  ]
}
