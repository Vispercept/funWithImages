const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src/'),
  entry: {
    js: './js/main.js',
    css: './css/main.scss'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.[name]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }]
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=[name].[ext]'
      }, {
        test: /\.(jpg|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    }),
  ]
};
