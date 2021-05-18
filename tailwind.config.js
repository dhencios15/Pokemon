const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      black: colors.black,
      white: colors.white,
    },
    extend: {
      colors: {
        navy: {
          base: '#0a192f',
          light: '#172a45',
          lighter: '#303C55',
        },
        slate: {
          base: '#8892b0',
          light: '#a8b2d1',
          lighter: '#ccd6f6',
        },
        brown: {
          400: '#85603f',
        },
        white: {
          400: '#e6f1ff',
        },
        black: {
          DEFAULT: '#000000',
          400: '#000000',
        },
        green: {
          custom: '#64ffda',
        },
        yellow: {
          custom: '#ffcb04',
        },
        'hot-pink': '#fd2d78',
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '-10': '-10deg',
        '-9': '-9deg',
        '-8': '-8deg',
        '-7': '-7deg',
        '-6': '-6deg',
        '-5': '-5deg',
        '-4': '-4deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        0: '0',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        4: '4deg',
        5: '5deg',
        6: '6deg',
        7: '7deg',
        8: '8deg',
        9: '9deg',
        10: '10deg',
        45: '45deg',
        90: '90deg',
        180: '180deg',
      },
      width: {
        'screen/1.05': 'calc(100vw / 1.05)',
        'screen/1.1': 'calc(100vw / 1.1)',
        'screen/1.3': 'calc(100vw / 1.3)',
        'screen/1.5': 'calc(100vw / 1.5)',
        'screen/2': '50vw',
        'screen/3': 'calc(100vw / 3)',
        'screen/4': 'calc(100vw / 4)',
        'screen/5': 'calc(100vw / 5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
