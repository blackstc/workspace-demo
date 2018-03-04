const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: { path: path.resolve(__dirname, 'output'), filename: 'bundle.js' },
  module: { rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }] },
  resolve: { extensions: ['.js'] }
}
