module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary' : '#E5F1F2',
        'secondary' : '#3C6AE1',
        'dark' : '#333333',
        'white' : '#fefefe',
      },
      neumorphismColor: {
        neo: {
          'primary': '#E5F1F2',
          'secondary': '#3C6AE1',
          // ...
        },
      },
      fontFamily: {
        roboto: ['Roboto'],
        posion: ['Poison'],
        typoGrotesk : ['TypoGrotesk'],
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-neumorphism')],
}
