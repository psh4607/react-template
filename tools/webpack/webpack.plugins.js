/**
 * Copyright {TODO}.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { inDev } = require('./webpack.helpers');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new BundleAnalyzerPlugin(),
  inDev() && new webpack.HotModuleReplacementPlugin(),
  inDev() && new ReactRefreshWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    favicon: 'public/images/logo/logo.svg',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
  }),
  new ESLintPlugin({
    // Plugin options
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    emitError: true,
    emitWarning: true,
    failOnError: false,
    failOnWarning: false,
    useEslintrc: true,
    cache: true,
  }),
  new webpack.ProvidePlugin({
    process: 'process/browser.js',
  }),
  // 아래 두 플러그인을 추가하면, client 내부의 process.env에도 추가된다.
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),
].filter(Boolean);
