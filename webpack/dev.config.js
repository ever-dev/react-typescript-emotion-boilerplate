const merge = require('webpack-merge')

module.exports = merge(require('./common.config'), {
  mode: 'development',
  devtool: 'eval-source-map',
})
