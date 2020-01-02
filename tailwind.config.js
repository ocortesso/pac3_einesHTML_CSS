module.exports = {
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
      'display': ['Bangers', 'cursive']
    },
    extend: {
      colors: {
        green: {
          lighter:'#43bf0d80',
          dark: '#184008'
        },
        gray:{
          lighter:'#6c757d',
          dark:'#495057'
        }
      }
    },
  gradients: theme => ({
    'greentoblack': ['30deg','#43bf0d80', 'black'],
    'blacktogreen': ['30deg', 'black', '#43bf0d80'],
    } 
  )
},
variants: {
  gradients: ['responsive', 'hover'],
},
plugins: [
  require('tailwindcss-plugins/gradients')
]
}
