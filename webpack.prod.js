const merge = require('webpack-merge')
const common = require('./webpack.common.js')

// Merge with common config
module.exports = merge(common, {
  mode: 'production'
})
