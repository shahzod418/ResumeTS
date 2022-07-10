const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './source/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].js',
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new HtmlMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ttf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.md$/,
        use: ['html-loader', 'markdown-loader'],
      },
    ],
  },
};
