module.exports = {
  plugins: [
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        autoprefixer: { grid: false },
        features: {
          'nesting-rules': true
        },
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
      }
    ]
  ]
}
