module.exports = {
  outputDir:'../server/admin',
  publicPath:process.env.Node_ENV === 'production'
  ? '/admin/'
  :'/'
}