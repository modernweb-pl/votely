const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const context = path.resolve(__dirname, '../');

module.exports = {
  context,
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(context, 'dist'),
    filename: '[name].[hash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: './src/assets', to: 'assets' }]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
