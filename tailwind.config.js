/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        nm: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
        nmin: '0px 0px 0px transparent, 0px 0px 0px transparent, inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff',
        bts: '6px 6px 20px #bebebe, -6px -6px 20px #ffffff',
        btsin:
          '0px 0px 0px transparent, 0px 0px 0px transparent, inset 4px 4px 12px #bebebe, inset -4px -4px 12px #ffffff'
      },

      fontFamily: {
        opsilon: 'Opsilon'
      }
    }
  },
  plugins: []
}
