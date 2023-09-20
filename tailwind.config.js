/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'xxl': '1600px'
      }
    },
    colors: {
      primary: {
        100: '#0B033C',
        80: '#170779',
        70: '#220AB5',
        50: '#2D0EF1',
        10: '#EAE7FE'
      },
      secondary: {
        100: '#2E053E',
        80: '#5B0B7D',
        70: '#8910BB',
        50: '#B123EC'
      },
      tertiary: {
        100: '#043C24',
        80: '#008D4F',
        70: '#0DB56C',
        50: '#15EE8F'
      },
      base: {
        black: '#000000',
        white: '#FFFFFF',
        transparent: 'transparent',
        red: '#DA0034'
      },
      neutral: {
        80: '#404040',
        50: '#919193',
        30: '#D0D0D0',
        10: '#EBEBEB'
      }
    },
    fontFamily: {
      'graphie-bold': ['graphie-bold'],
      'graphie-semibold': ['graphie-semibold'],
      'graphie-regular': ['graphie-regular'],
      'noto-sans': ['Noto Sans', 'sans-serif']
    },
    fontSize: {
      'hero-lg': ['56px', '72px'],
      'hero-md': ['40px', '48px'],
      'hero-sm': ['30px', '40px'],
      'heading-1-lg': ['40px', '48px'],
      'heading-1-md': ['30px', '40px'],
      'heading-2-lg': ['32px', '40px'],
      'heading-2-md': ['26px', '32px'],
      'heading-3-lg': ['28px', '32px'],
      'heading-3-md': ['24px', '32px'],
      'heading-4-lg': ['26px', '32px'],
      'heading-4-md': ['24px', '24px'],
      'heading-5-lg': ['20px', '24px'],
      'heading-5-md': ['18px', '24px'],
      'body-1': ['16px', '24px'],
      'body-2': ['14px', '16px'],
      'caption': ['12px']
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 15px",
          "@screen sm": {
            maxWidth: "540px"
          },
          "@screen md": {
            maxWidth: "720px"
          },
          "@screen lg": {
            maxWidth: "960px"
          },
          "@screen xl": {
            maxWidth: "1140px"
          },
        },
        ".container-fluid": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 15px",
          width: "100%"
        }
      })
    }
  ],
}
