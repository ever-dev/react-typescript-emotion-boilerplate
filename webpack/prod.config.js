const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(require('./common.config'), {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CompressionPlugin(), new CleanWebpackPlugin()],
})
