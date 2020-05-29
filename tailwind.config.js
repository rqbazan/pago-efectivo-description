module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        anchor: '#ED7700'
      },
      gridTemplateColumns: {
        'auto-4': 'repeat(auto-fill, 4rem)'
      },
      screens: {
        break: '440px'
      }
    }
  },
  plugins: []
}
