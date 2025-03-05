/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,vue,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#262626',
        'base-15': '#26262626',
        'base-50': '#26262680',
      },
      borderRadius: {
        'r-30': '30px',
      },

      screens: {
        mob: { min: '320px', max: '374px' },
        tab: '768px',
        desk: '1280px',
      },
    },
  },
  plugins: [],
}
