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
      boxShadow: {
        customTop: '0 -5px 5px -5px #333333',
        customBottom: '0 5px 5px -5px #333333',
        customRight: '5px 0 5px -5px #333333',
        customLeft: '-5px 0 5px -5px #333333',
        customAll: '5px 5px 5px #333333',
        smCustomAll: '2px 2px 2px #333333',
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-neumorphism')],
}
