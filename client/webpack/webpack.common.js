const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const context = path.resolve(__dirname, '../');
const tests = {
  styles: /\.(c|sc|sa)ss$/i,
};

module.exports = {
  tests,
  config: {
    context,
    entry: {
      app: './src/index.js',
    },
    output: {
      path: path.resolve(context, 'dist'),
      filename: '[name].[hash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: tests.styles,
          use: [
            { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('postcss-preset-env')()],
              },
            },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin([{ from: './src/assets', to: 'assets' }]),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  },
};
