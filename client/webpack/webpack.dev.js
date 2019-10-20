const webpack = require('webpack');
const merge = require('webpack-merge');
const { config, tests } = require('./webpack.common');

module.exports = merge.smartStrategy({ 'module.rules.use': 'prepend' })(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: tests.styles,
        use: ['style-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
