const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { config, tests } = require('./webpack.common');

module.exports = merge.smartStrategy({ 'module.rules.use': 'prepend' })(config, {
  mode: 'production',
  module: {
    rules: [
      {
        test: tests.styles,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
});
