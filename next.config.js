const withOffline = require('next-offline')

;(module.exports = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  env: {
    PROJECT_ROOT: __dirname
  },
}),
  {
    target: 'serverless',
  },
  withOffline()
